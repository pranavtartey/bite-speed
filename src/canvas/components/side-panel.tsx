import { useState } from "react";
import { SIDE_PANEL_STATES } from "../constants/side-panel-states";
import { getCards, getForm } from "../constants/card-registry";
import Card from "./card";
import FormContainer from "./form-container";
import type { Node } from "@xyflow/react";
import React from "react";

interface SidePanelProps {
  addNode: (nodeData: { label: string; type?: string }) => Node;
  selectedNode: Node | null;
  updateNodeLabel: (id: string, newLabel: string) => void;
}

const SidePanel = ({ addNode, selectedNode, updateNodeLabel }: SidePanelProps) => {
  const [sidePanelState, setSidePanelState] = useState<SIDE_PANEL_STATES>(
    SIDE_PANEL_STATES.SHOW_CARDS
  );
  const [editValue, setEditValue] = useState<string>("");

  // Sync editValue with selectedNode
  React.useEffect(() => {
    if (selectedNode && typeof selectedNode.data?.label === 'string') {
      setEditValue(selectedNode.data.label);
    } else {
      setEditValue("");
    }
  }, [selectedNode]);

  const handleCardClick = (state: string) => {
    setSidePanelState(state as SIDE_PANEL_STATES);
  };

  const handleBackClick = () => {
    setSidePanelState(SIDE_PANEL_STATES.SHOW_CARDS);
  };

  // Edit node UI
  const renderEditNode = () => (
    selectedNode ? (
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-600 mb-1">Edit Node Text</label>
        <input
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={editValue}
          onChange={e => {
            setEditValue(e.target.value);
            updateNodeLabel(selectedNode.id, e.target.value);
          }}
        />
      </div>
    ) : null
  );

  // Show cards view
  if (sidePanelState === SIDE_PANEL_STATES.SHOW_CARDS) {
    const cards = getCards();
    return (
      <div className="w-64 py-2">
        {renderEditNode()}
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          {cards.map((card) => (
            <Card key={card.id} config={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    );
  }

  // Show form view
  const formConfig = getForm(sidePanelState);
  if (!formConfig) {
    return <div>Form not found for state: {sidePanelState}</div>;
  }

  return (
    <div className="w-64 py-4">
      {renderEditNode()}
      <FormContainer config={formConfig} onBack={handleBackClick} addNode={addNode} />
    </div>
  );
};

export default SidePanel;
