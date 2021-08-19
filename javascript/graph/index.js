'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex,
      this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight = 0) {
    if (!this.adjacencyList.has(start)) {
      throw new Error('No start vertex');
    }
    const adjacencies = this.adjacencyList.get(start);
    adjacencies.push(new Edge(end, weight));
  }

  getNodes() {
    let result = [];
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      result.push(vertex);
    }
    return result;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('No neighbors found for that vertex');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  size(vertex) {
    const q = [];
    const visited = new Set();
    q.unshift(vertex);
    visited.add(vertex);

    while (q.length) {
      const currentVertex = q.pop();
      const neighbors = this.getNeighbors(currentVertex);
      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;
        if (visited.has(neighborVertex)) {
          continue;
        } else {
          visited.add(neighborVertex);
          q.unshift(neighborVertex);
        }
      }
    }
    return visited.size;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph
}