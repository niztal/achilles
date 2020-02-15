import { EntityNodeModel } from '../src/custom_nodes/EntityNodeModel';

export class EntityDrawer {
    constructor(entity) {
        this.entity = entity;
    }

    draw() {
        const entities = [];
        this.drawEntity("ProductOrder", this.entity, entities);
        return entities;
    }

    drawEntity(name, entity, entities) {
        let entityNode;
        if (!Array.isArray(entity)) {
            entityNode = new EntityNodeModel(name);
            entityNode.setPosition(100, Math.random() * 500);
            entities.push(entityNode);
        }
        for (const prop in entity) {
            if (typeof entity[prop] === "object") {
                const subEntity = this.drawEntity(Array.isArray(entity) ? name : prop, entity[prop], entities);
                if (entityNode && subEntity) {
                    entityNode.getOutPort().link(subEntity.getInPort());
                }
            } else {
                entityNode.addField(prop, entity[prop]);
            }
        }
        return entityNode;
    }
}