class GraphNode {
    constructor(value) {
        this.value = value;
        this.neighbors = new Set();
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        if (!this.nodes.has(value)) {
            this.nodes.set(value, new GraphNode(value));
        }
        return this.nodes.get(value);
    }

    addEdge(nodeVal1, nodeVal2) {
        const node1 = this.addNode(nodeVal1);
        const node2 = this.addNode(nodeVal2);

        node1.neighbors.add(node2);
        node2.neighbors.add(node1);
    }

    buildGraphFromEdges(edgesArray) {
        for (const [u, v] of edgesArray) {
            this.addEdge(u, v);
        }
        return this.nodes;
    }

    printGraph() {
        for (const [nodeValue, nodeInstance] of this.nodes.entries()) {
            const neighborsList = Array.from(nodeInstance.neighbors).map(neighborNode => neighborNode.value).join(' - ');
            console.log(`${nodeValue} - ${neighborsList}`);
        }
    }
}


const edgeListInput = [[0, 1], [1, 2], [3, 4]];
const myGraph = new Graph();
const newGraphNode = myGraph.buildGraphFromEdges(edgeListInput)

export default newGraphNode