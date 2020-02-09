import * as React from 'react';
import { BaseWidget, DefaultPortLabel } from '@projectstorm/react-diagrams';

export class EntityNodeWidget extends BaseWidget {
	constructor(props) {
		super("srd-default-node", props);
		this.state = {};
		this.renderFields = this.renderFields.bind(this);
	}

	renderFields() {
		const fields = this.props.node.fields;
		if (fields) {
			return fields.map((field) => {
				return (
					<div className="entity-field">{field.name}: {field.value}</div>
				);
			});
		}
	}

	renderPorts(ports) {
		if (ports) {
			return ports.map((port) => {
				return (
					<DefaultPortLabel model={port} key={port.id} />
				);
			});
		}
	}

	render() {
		return (
			<div {...this.getProps()} style={{ background: this.props.node.color }}>
				<div className="entity-title">
					<div className="entity-title-name">{this.props.node.name}</div>
				</div>
				{this.renderFields()}
				<div className={this.bem("__ports")}>
					<div className={this.bem("__in")}>
						{this.renderPorts(this.props.node.getInPorts())}
					</div>
					<div className={this.bem("__out")}>
						{this.renderPorts(this.props.node.getOutPorts())}
					</div>
				</div>
			</div>
		);
	}
}