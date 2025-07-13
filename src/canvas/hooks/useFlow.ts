import { useCallback, useState } from "react";
import initialNodes from "../constants/initial-nodes.const";
import initialEdges from "../constants/initial-edges.const";
import { applyEdgeChanges, applyNodeChanges, addEdge, type Edge, type EdgeChange, type Node, type NodeChange, type Connection } from "@xyflow/react";

const useFlow = () => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) =>
            setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        []
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) =>
            setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        []
    );

    const onConnect = useCallback(
        (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    const addNode = useCallback((nodeData: { label: string; type?: string }) => {
        const newNode: Node = {
            id: `node-${Date.now()}`,
            position: { x: Math.random() * 400, y: Math.random() * 300 },
            data: { label: nodeData.label },
            type: nodeData.type || 'default'
        };
        setNodes((prevNodes) => [...prevNodes, newNode]);
        return newNode;
    }, []);

    // Check if all nodes are connected
    const areAllNodesConnected = useCallback(() => {
        if (nodes.length <= 1) return true; // Single node or no nodes is considered connected
        
        // Create a map of connected nodes
        const connectedNodes = new Set<string>();
        
        // Add all nodes that are connected via edges
        edges.forEach(edge => {
            connectedNodes.add(edge.source);
            connectedNodes.add(edge.target);
        });
        
        // Check if all nodes are in the connected set
        return nodes.every(node => connectedNodes.has(node.id));
    }, [nodes, edges]);

    // Save flow function
    const saveFlow = useCallback(() => {
        if (areAllNodesConnected()) {
            // All nodes are connected - save successfully
            console.log("Flow saved successfully");
            return { success: true, message: "Flow saved" };
        } else {
            // Some nodes are not connected
            const unconnectedNodes = nodes.filter(node => {
                const isConnected = edges.some(edge => 
                    edge.source === node.id || edge.target === node.id
                );
                return !isConnected;
            });
            
            console.log("Cannot save: Unconnected nodes found", unconnectedNodes);
            return { 
                success: false, 
                message: `Cannot save: ${unconnectedNodes.length} node(s) are not connected` 
            };
        }
    }, [nodes, edges, areAllNodesConnected]);

    return {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        addNode,
        saveFlow,
        areAllNodesConnected
    }
}

export default useFlow;