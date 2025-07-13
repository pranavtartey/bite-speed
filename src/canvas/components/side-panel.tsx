import { useState } from "react";
import { SIDE_PANEL_STATES } from "../constants/side-panel-states";
import { getCards, getForm } from "../constants/card-registry";
import Card from "./card";
import FormContainer from "./form-container";
import type { Node } from "@xyflow/react";

interface SidePanelProps {
  addNode: (nodeData: { label: string; type?: string }) => Node;
}

const SidePanel = ({ addNode }: SidePanelProps) => {
  const [sidePanelState, setSidePanelState] = useState<SIDE_PANEL_STATES>(
    SIDE_PANEL_STATES.SHOW_CARDS
  );

  const handleCardClick = (state: string) => {
    setSidePanelState(state as SIDE_PANEL_STATES);
  };

  const handleBackClick = () => {
    setSidePanelState(SIDE_PANEL_STATES.SHOW_CARDS);
  };

  // Show cards view
  if (sidePanelState === SIDE_PANEL_STATES.SHOW_CARDS) {
    const cards = getCards();
    return (
      <div className="w-64 py-2">
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
    <div className="w-64 p-4">
      <FormContainer config={formConfig} onBack={handleBackClick} addNode={addNode} />
    </div>
  );
};

export default SidePanel;
