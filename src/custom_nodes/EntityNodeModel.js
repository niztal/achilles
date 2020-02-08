import { DefaultNodeModel } from '@projectstorm/react-diagrams';

export class EntityNodeModel extends DefaultNodeModel {
	constructor(options = {}) {
        super(options);
        this.type = 'entity-node';
		this.entityId = options.entityId || this.id;
	}

	serialize() {
		return {
			...super.serialize(),
			entityId: this.options.entityId
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
		this.entityId = ob.entityId;
	}
}