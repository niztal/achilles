import * as React from 'react';
import { EntityNodeModel } from './EntityNodeModel';
import { EntityNodeWidget } from './EntityNodeWidget';
import { AbstractNodeFactory } from '@projectstorm/react-diagrams';

export class EntityNodeFactory extends AbstractNodeFactory {
	constructor() {
		super('entity-node');
	}

	getNewInstance() {
		return new EntityNodeModel();
	}

	generateReactWidget(diagramEngine, node) {
		return <EntityNodeWidget node={node}/>;
	}
}