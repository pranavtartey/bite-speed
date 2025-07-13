import { Handle, Position } from '@xyflow/react';
import { MessageCircle, CheckCircle } from 'lucide-react';

interface MessageNodeProps {
  data: {
    label: string;
  };
}

const MessageNode = ({ data }: MessageNodeProps) => (
  <div className="rounded-lg shadow-md bg-white border border-gray-200 min-w-[220px]">
    {/* Header */}
    <div className="flex items-center justify-between px-3 py-2 rounded-t-lg" style={{ background: '#b2f5ea' }}>
      <div className="flex items-center gap-2">
        <MessageCircle className="w-4 h-4 text-gray-700" />
        <span className="font-bold text-gray-700 text-sm">Send Message</span>
      </div>
      <CheckCircle className="w-5 h-5 text-green-500" />
    </div>
    {/* Body */}
    <div className="px-3 py-2 text-gray-800 text-sm bg-white rounded-b-lg">
      {data.label}
    </div>
    {/* Handles */}
    <Handle type="target" position={Position.Left} style={{ background: '#888' }} />
    <Handle type="source" position={Position.Right} style={{ background: '#888' }} />
  </div>
);

export default MessageNode; 