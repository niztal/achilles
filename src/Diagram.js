import * as React from 'react';
import { DiagramEngine, DiagramModel, DiagramWidget, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { EntityNodeFactory } from '../src/custom_nodes/EntityNodeFactory';
import { EntityNodeModel } from '../src/custom_nodes/EntityNodeModel';
import { EntityDrawer } from '../src/EntityDrawer';
import order from './order.json';

require("@projectstorm/react-diagrams/dist/style.min.css");

export default () => {
    const engine = new DiagramEngine();
    engine.installDefaultFactories();
    engine.registerNodeFactory(new EntityNodeFactory());

    const model = new DiagramModel();

    // console.log(order);
    // var node1 = new EntityNodeModel("ProductOrder",
    //     [
    //         { name: "id", value: "order_123" },
    //         { name: "description", value: "my order" }
    //     ]
    // );
    // node1.setPosition(300, 100);
    // var node2 = new EntityNodeModel("node2");
    // node2.setPosition(200, 100);

    // model.addAll(node1.getOutPort().link(node2.getInPort()));

    // model.addAll(node1, node2);

    // var node3 = new DefaultNodeModel("Node 3", "rgb(192,255,0)");
    // node3.addInPort("In");
    // node3.addOutPort("out");
    // model.addAll(node3);

    // const node1 = new DefaultNodeModel('Node A', 'rgb(0,192,255)');
    // const port1 = node1.addOutPort('Out');
    // node1.setPosition(100, 100);

    // const node2 = new DefaultNodeModel('Node B', 'rgb(255,255,0)');
    // const port2 = node2.addInPort('In');
    // node2.setPosition(400, 50);

    // const link1 = port1.link(port2);

    // model.addAll(node1, node2, link1)

    const entityDrawer = new EntityDrawer(order);
    const entities = entityDrawer.draw(order);

    entities.forEach(entity => {
        if (entity.name === "ProductOrder" || entity.name === "orderItem") {
            const outLink = entity.getOutLink();
            if (outLink) {
                model.addLink(outLink);
                model.addNode(entity);
            }
        }
    });

    engine.setDiagramModel(model);

    return <DiagramWidget id="diagram" className="canvas" diagramEngine={engine} />;
}