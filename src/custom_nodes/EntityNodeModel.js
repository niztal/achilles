import { DefaultNodeModel } from '@projectstorm/react-diagrams';

export class EntityNodeModel extends DefaultNodeModel {
	constructor(entityName, fields) {
        super(entityName);
        this.type = 'entity-node';
        this.fields = fields;
        this.addInPort("-");
        this.addOutPort("-");
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