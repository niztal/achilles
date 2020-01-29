import * as React from 'react';
import {DiagramEngine, DiagramModel, DiagramWidget, DefaultNodeModel} from "@projectstorm/react-diagrams";

require("@projectstorm/react-diagrams/dist/style.min.css");

var engine = new DiagramEngine();
engine.installDefaultFactories();

var model = new DiagramModel();

var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
let port1 = node1.addOutPort("Out");
node1.setPosition(100, 100);

var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
let port2 = node2.addInPort("In");
node2.setPosition(400, 100);

let link1 = port1.link(port2);

model.addAll(node1, node2, link1);

engine.setDiagramModel(model);

export default () => {
    const engine = new DiagramEngine();
	engine.installDefaultFactories();
	const model = new DiagramModel();

	var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
	let port1 = node1.addOutPort("Out");
	node1.setPosition(100, 100);
	var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
	let port2 = node2.addInPort("In");
	node2.setPosition(400, 100);
	let link1 = port1.link(port2);
	link1.setColor('black');
	model.addAll(node1, node2, link1);
	var node3 = new DefaultNodeModel("Node 3", "rgb(192,255,0)");
	node3.addInPort("In");
	node3.addOutPort("out");
	model.addAll(node3);
    engine.setDiagramModel(model);
    
    return <DiagramWidget id="diagram" className="canvas" diagramEngine={engine} />;
}