// import { useState, useCallback } from 'react';
import {
  ReactFlow,
  // applyNodeChanges,
  // applyEdgeChanges,
  // addEdge
} from "@xyflow/react";
// import type { NodeChange, EdgeChange, Connection, Node, Edge } from '@xyflow/react';
import "@xyflow/react/dist/style.css";
import { Toaster } from "sonner";
import Flow from "./canvas/components/flow";

// const initialNodes: Node[] = [
//   { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
//   { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
// ];
// const initialEdges: Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function App() {
  //   const [nodes, setNodes] = useState<Node[]>(initialNodes);
  //   const [edges, setEdges] = useState<Edge[]>(initialEdges);

  //   const onNodesChange = useCallback(
  //     (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
  //     [],
  //   );
  //   const onEdgesChange = useCallback(
  //     (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
  //     [],
  //   );
  //   const onConnect = useCallback(
  //     (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
  //     [],
  //   );

  return (
    <div className="h-[100vh] w-[100vw] overflow-y-hidden">
      <Flow />
      <Toaster />
    </div>
  );
}
