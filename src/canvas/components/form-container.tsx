import type { FormConfig } from "../constants/card-registry";
import type { Node } from "@xyflow/react";

interface FormContainerProps {
  config: FormConfig;
  onBack: () => void;
  addNode: (nodeData: { label: string; type?: string }) => Node;
}

const FormContainer = ({ config, onBack, addNode }: FormContainerProps) => {
  const BackIcon = config.backIcon;
  const FormComponent = config.component;
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
        {BackIcon && (
          <button
            onClick={onBack}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Go back"
          >
            <BackIcon className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <h3 className="text-lg font-semibold text-gray-800">{config.title}</h3>
      </div>
      
      {/* Form Content */}
      <div className="flex-1 overflow-y-auto">
        <FormComponent addNode={addNode} />
      </div>
    </div>
  );
};

export default FormContainer; 