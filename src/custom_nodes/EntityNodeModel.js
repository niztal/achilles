import { DefaultNodeModel } from '@projectstorm/react-diagrams';

export class EntityNodeModel extends DefaultNodeModel {
	constructor(entityName, fields = []) {
        super(entityName);
        this.type = 'entity-node';
        this.fields = fields;
        this.addInPort("-");
        this.addOutPort("-");
	}

	addField(name, value) {
		this.fields.push({name, value});
	}

	getOutPort() {
		return this.getOutPorts()[0];
	}

	getInPort() {
		return this.getInPorts()[0];
	}

	getOutLink() {
		let outLink;
		const outLinks = this.getOutPort().getLinks();
		if (outLinks && typeof outLinks === "object") {
			outLink = Object.values(outLinks)[0];
		}
		return outLink;
	}

	serialize() {
		return {
			...super.serialize(),
			fields: this.fields
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
		this.fields = ob.fields;
	}
}