import { useState } from "react";
import type { Node } from "@xyflow/react";

interface MessageFormProps {
  addNode: (nodeData: { label: string; type?: string }) => Node;
}

const MessageForm = ({ addNode }: MessageFormProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending message:", { message });
    
    // Add new node to canvas
    const newNode = addNode({
      label: message,
      type: 'message'
    });
    
    console.log("Added new node:", newNode);
    
    // Clear the form
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
          Text
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
          placeholder="Enter your message"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default MessageForm; 