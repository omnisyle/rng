'use strict';

const dirs = require('../constants').DIRS;
const node_root_dir = require('../constants').NODE_PACKAGE_ROOT_DIR;
var path_module = require('path');
var chalk = require('chalk');
var _ = require('lodash');
var shell = require('shelljs');
var handlebars = require('handlebars');
var fs = require('fs');

class FileGenerator {
  check_dir(path) {
    return shell.test('-e', path);
  }

  generate_component_file(name) {
    this.generate_from_template(dirs.components, './templates/component.js', { component_name: name }, name + '.js');
  }

  generate_style_file(name) {
    this.generate_from_template(dirs.styles, './templates/stylesheet.js', { component_name: name }, name + 'StyleSheet.js');
  }

  generate_from_template(dir_path, template_path, context, file_name) {

    var template_file_path = path_module.resolve(node_root_dir, template_path),
        template_file_string = shell.cat(template_file_path),
        template = handlebars.compile(template_file_string),
        write_path = path_module.resolve(dir_path, file_name);

    if (!this.check_dir(dir_path)) {
      shell.mkdir(dir_path)
    }

    fs.writeFile(write_path, template(context), function(err) {
      if (err) {
        return console.log(err);
      }
      shell.echo(chalk.bold("Created ") + write_path);
    });
  }
}

module.exports = new FileGenerator();
