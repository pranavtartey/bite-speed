import type { CardConfig } from "../constants/card-registry";

interface CardProps {
  config: CardConfig;
  onClick: (state: string) => void;
}

const Card = ({ config, onClick }: CardProps) => {
  const Icon = config.icon;
  
  return (
    <div 
      className="flex flex-col items-center justify-center gap-1 border-2 border-blue-600 rounded-md py-2 cursor-pointer hover:bg-blue-50 transition-colors"
      onClick={() => onClick(config.state)}
    >
      <Icon className="text-blue-600"/>
      <p className="text-sm text-blue-600 font-medium">{config.title}</p>
      {config.description && (
        <p className="text-xs text-gray-500 text-center px-1">{config.description}</p>
      )}
    </div>
  );
};

export default Card; 