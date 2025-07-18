import { Background, Panel, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react";
import { toast } from "sonner";
import useFlow from "../hooks/useFlow";
import SidePanel from "./side-panel";
import MessageNode from "./message-node";

const nodeTypes = { message: MessageNode };

const Flow = () => {
  const { edges, nodes, onEdgesChange, onNodesChange, onConnect, addNode, updateNodeLabel, saveFlow } = useFlow();
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const handleSaveChanges = () => {
    const result = saveFlow();
    if (result.success) {
      toast.success(result.message, {
        position: "top-center",
        style: {
          background: "#10b981",
          color: "white",
          border: "none"
        }
      });
    } else {
      toast.error("Cannot save Flow", {
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "white",
          border: "none"
        }
      });
    }
  };

  // Handle node selection
  const onNodeClick = useCallback((_: React.MouseEvent, node: { id: string }) => {
    setSelectedNodeId(node.id);
  }, []);

  // Deselect node when clicking on background
  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || null;

  return (
    <div className="h-[100vh] w-full ">
      <div className="py-2 px-20 bg-gray-100 z-10 h-14 flex items-center justify-end">
        <button 
          className={"px-3 py-1 rounded-lg font-semibold transition-all border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50"}
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
      <div className="h-[calc(100dvh-3.5rem)]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
        >
          <Panel
            className="h-[97%] bg-white border-l border-t border-black rounded-md px-4"
            position="bottom-right"
          >
            <SidePanel 
              addNode={addNode} 
              selectedNode={selectedNode}
              updateNodeLabel={updateNodeLabel}
            />
          </Panel>
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
