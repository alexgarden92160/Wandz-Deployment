import React, { Component } from 'react';
import data from '../data/code.json'

class Console extends Component {
	static instance;

	constructor(props) {
		super(props);
		Console.instance = this;
		this.state = { module: { type: "" } };
	}

	setSelectedModule(module) {
		this.setState({ module: module });
	}

	render() {
		var cpt = 0;
		return (
			<div className="console">
				{data[this.state.module.type].map((value) => <div >{value}</div>)}
			</div>
		);
	}
}

export default Console;