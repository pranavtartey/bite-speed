import "@xyflow/react/dist/style.css";
import { Toaster } from "sonner";
import Flow from "./canvas/components/flow";

export default function App() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-y-hidden">
      <Flow />
      <Toaster />
    </div>
  );
}
