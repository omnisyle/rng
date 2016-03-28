'use strict';
import React, {
  StyleSheet
}
from 'react-native';

class {{component_name}}Stylesheet {
  constructor() {
    //TODO: adds styles
    this.styles = {};
    return StyleSheet.create(this.styles);
  }

  raw() {
    return this.styles;
  }
}

module.exports = new {{component_name}}Stylesheet();
