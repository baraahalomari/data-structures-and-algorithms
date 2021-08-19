'use strict';

const graph = require('./index');

describe('Graphs', () => {

  it('add vertex', () => {
    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    testNode.addVertex(first);

    expect(testNode.adjacencyList).toBeTruthy();
    expect(testNode.adjacencyList.get(first)).toEqual([]);
  });

  it('add edge', () => {
    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    const sec = new graph.Vertex('sec');
    testNode.addVertex(first);
    testNode.addVertex(sec);
    testNode.addEdge(first, sec);
    const testNodeValue = testNode.adjacencyList.get(first);
    const expectedValue = [{ 'vertex': { 'value': 'sec' }, 'weight': 0 }];

    expect(testNodeValue).toEqual(expectedValue);
  });

  it('retreive all vertices from graph', () => {
    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    const sec = new graph.Vertex('sec');
    testNode.addVertex(first);
    testNode.addVertex(sec);
    testNode.addEdge(first, sec);
    testNode.addEdge(sec, first);
    const testNodeValue = testNode.adjacencyList.get(first);
    const testNodeValueTwo = testNode.adjacencyList.get(sec);
    const expectedValue = [{ 'vertex': { 'value': 'sec' }, 'weight': 0 }];
    const expectedValueTwo = [{ 'vertex': { 'value': 'first' }, 'weight': 0 }];

    expect(testNodeValue).toEqual(expectedValue);
    expect(testNodeValueTwo).toEqual(expectedValueTwo);
  });

  it('retrteive neighbors', () => {
    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    const sec = new graph.Vertex('sec');
    const third = new graph.Vertex('third');
    
    testNode.addVertex(first);
    testNode.addVertex(sec);
    testNode.addVertex(third);
    testNode.addEdge(first, sec);
    testNode.addEdge(first, third);

    const testNodeValue = testNode.getNeighbors(first);
    const expectedValue = [{ 'vertex': { 'value': 'sec' }, 'weight': 0 }, { 'vertex': { 'value': 'third' }, 'weight': 0 }];

    expect(testNodeValue).toEqual(expectedValue);

  });

  it('return neighbors with weight', () => {

    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    const sec = new graph.Vertex('sec');
    const third = new graph.Vertex('third');

    testNode.addVertex(first);
    testNode.addVertex(sec);
    testNode.addVertex(third);
    testNode.addEdge(first, sec);
    testNode.addEdge(first, third);

    const testNodeValue = testNode.getNeighbors(first);
    const testNodeWeight = testNodeValue[0]['weight'];
    const testNodeWeightTwo = testNodeValue[1]['weight'];

    expect(testNodeWeight).toEqual(0);
    expect(testNodeWeightTwo).toEqual(0);

  });

  it('Return size', () => {
    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    const sec = new graph.Vertex('sec');
    testNode.addVertex(first);
    testNode.addVertex(sec);
    testNode.addEdge(first, sec);
    expect(testNode.size(first)).toEqual(2);
  });

  it('Only first node and edge can be properly returned', () => {
    let testNode = new graph.Graph();
    const first = new graph.Vertex('first');
    testNode.addVertex(first);
    testNode.addEdge(first);
    const testNodeValue = testNode.adjacencyList.get(first);
    const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];


    expect(testNodeValue).toEqual(expectedValue);
  });

  it('Returns null', () => {
    let testNode = new graph.Graph();
    let testNodeValue = testNode.adjacencyList.values();

    expect(testNodeValue).not.toBeUndefined();
  });
});