import * as React from 'react';
import {DiagramEngine, DiagramModel, DiagramWidget, DefaultNodeModel} from "@projectstorm/react-diagrams";
import {EntityNodeFactory} from '../src/custom_nodes/EntityNodeFactory';
import {EntityNodeModel} from '../src/custom_nodes/EntityNodeModel';
require("@projectstorm/react-diagrams/dist/style.min.css");

export default () => {
    const engine = new DiagramEngine();
    engine.installDefaultFactories();
    engine.registerNodeFactory(new EntityNodeFactory());

	const model = new DiagramModel();

    var node1 = new EntityNodeModel("node1");
    node1.addInPort("in");
    node1.addOutPort("out");
	node1.setPosition(300, 100);
    var node2 = new EntityNodeModel("node2");
    node2.setPosition(200, 100);
    model.addAll(node1, node2);
	var node3 = new DefaultNodeModel("Node 3", "rgb(192,255,0)");
	node3.addInPort("In");
	node3.addOutPort("out");
    model.addAll(node3);
    
    engine.setDiagramModel(model);
    
    return <DiagramWidget id="diagram" className="canvas" diagramEngine={engine} />;
}