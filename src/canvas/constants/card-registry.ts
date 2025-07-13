import { MessageCircle, ArrowLeft } from "lucide-react";
import { SIDE_PANEL_STATES } from "./side-panel-states";
import MessageForm from "../components/message-form";

export interface CardConfig {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  state: SIDE_PANEL_STATES;
  description?: string;
}

export interface FormConfig {
  id: string;
  title: string;
  backIcon?: React.ComponentType<{ className?: string }>;
  component: React.ComponentType<{ addNode: (nodeData: { label: string; type?: string }) => any }>;
}

export const CARD_REGISTRY: Record<string, CardConfig> = {
  message: {
    id: 'message',
    title: 'Message',
    icon: MessageCircle,
    state: SIDE_PANEL_STATES.MESSAGE,
    description: ''
  }
  // Future cards can be added here:
  // notification: {
  //   id: 'notification',
  //   title: 'Notification',
  //   icon: Bell,
  //   state: SIDE_PANEL_STATES.NOTIFICATION,
  //   description: 'Configure notifications'
  // }
};

export const FORM_REGISTRY: Record<string, FormConfig> = {
  [SIDE_PANEL_STATES.MESSAGE]: {
    id: 'message-form',
    title: 'Message',
    backIcon: ArrowLeft,
    component: MessageForm
  }
  // Future forms can be added here:
  // [SIDE_PANEL_STATES.NOTIFICATION]: {
  //   id: 'notification-form',
  //   title: 'Notification Settings',
  //   backIcon: ArrowLeft,
  //   component: NotificationForm
  // }
};

export const getCards = () => Object.values(CARD_REGISTRY);
export const getForm = (state: SIDE_PANEL_STATES) => FORM_REGISTRY[state]; 