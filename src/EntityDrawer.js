import { EntityNodeModel } from '../src/custom_nodes/EntityNodeModel';

export class EntityDrawer {
    constructor(entity) {
        this.entity = entity;
    }

    draw() {
        const entities = [];
        this.drawEntity("ProductOrder", this.entity, null, entities);
        return entities;
    }

    drawEntity(name, entity, parentEntityNode, entities) {
        let entityNode;
        if (!Array.isArray(entity)) {
            entityNode = new EntityNodeModel(name);
            if (name === "ProductOrder" || name === "orderItem") {
                entityNode.setPosition(1000, 500);
            } else {
                entityNode.setPosition(100, Math.random() * 500);
            }
            entities.push(entityNode);
        }
        for (const prop in entity) {
            if (typeof entity[prop] === "object") {
                const subEntityName = Array.isArray(entity) ? name : prop;
                this.drawEntity(subEntityName, entity[prop], entityNode || parentEntityNode, entities);
            } else {
                entityNode.addField(prop, entity[prop]);
            }
        }
        if (parentEntityNode && entityNode) {
            if (parentEntityNode.name === "ProductOrder" && entityNode.name === "orderItem") {
                parentEntityNode.getOutPort().link(entityNode.getInPort());
            }
        }
    }
}