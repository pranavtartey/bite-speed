export const SIDE_PANEL_STATES = {
    SHOW_CARDS: "cards",
    MESSAGE: 'message_form'
} as const;

export type SIDE_PANEL_STATES = (typeof SIDE_PANEL_STATES)[keyof typeof SIDE_PANEL_STATES];