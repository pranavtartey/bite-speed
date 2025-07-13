import { Background, Controls, Panel, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { toast } from "sonner";
import useFlow from "../hooks/useFlow";
import SidePanel from "./side-panel";

const Flow = () => {
  const { edges, nodes, onEdgesChange, onNodesChange, onConnect, addNode, saveFlow, areAllNodesConnected } = useFlow();

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
      toast.error(result.message, {
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "white",
          border: "none"
        }
      });
    }
  };

  const isSaveDisabled = !areAllNodesConnected();

  return (
    <div className="h-[100vh] w-full ">
      {/* <div style={{ height: "100%", width: "100%" }}> */}
      <div className="py-2 px-20 bg-gray-100 z-10 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isSaveDisabled && nodes.length > 1 && (
            <div className="text-red-600 text-sm font-medium">
              ⚠️ Connect all nodes to save
            </div>
          )}
        </div>
        <button 
          className={`px-3 py-1 rounded-lg font-semibold transition-all ${
            isSaveDisabled 
              ? "border-2 border-gray-400 text-gray-400 bg-gray-100 cursor-not-allowed" 
              : "border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
          }`}
          onClick={handleSaveChanges}
          disabled={isSaveDisabled}
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
        >
          <Panel
            className="h-[97%] bg-white border-l border-t border-black px-4"
            position="bottom-right"
          >
            <SidePanel addNode={addNode} />
          </Panel>
          <Background />
          {/* <Controls /> */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
