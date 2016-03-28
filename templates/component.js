'use strict';

import React, {
	View,
	Component,
	Text
} from 'react-native';

const styles = require('../assets/stylesheets/{{component_name}}Stylesheet');

class {{component_name}} extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return(
			<View />
		);
	}
}

module.exports = {{component_name}};
