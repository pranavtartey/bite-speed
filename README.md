# Flow Editor with Custom Nodes

A modern, extensible flow editor built with React, TypeScript, React Flow, and Tailwind CSS. Features custom node UIs, dynamic card-based side panel, and robust validation with toast notifications.

---

## ✨ Features

- **Custom Node UI**: Message nodes styled with icons, colored headers, and connection handles
- **Dynamic Side Panel**: Add new nodes via a card-based action panel
- **Registry Pattern**: Easily add new card types and forms
- **Connection Validation**: Save only when all nodes are connected
- **Toast Notifications**: Success/error feedback using [Sonner](https://sonner.emilkowal.ski/)
- **TypeScript & Tailwind**: Type-safe, modern, and beautifully styled

---

## Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. (If needed) Install Sonner for toasts
```bash
npm install sonner
```

---

## Project Structure

```
src/
  App.tsx                  # App root, includes Sonner Toaster
  canvas/
    components/
      flow.tsx             # Main flow editor, React Flow setup
      side-panel.tsx       # Dynamic action panel
      card.tsx             # Generic card component
      form-container.tsx   # Generic form wrapper
      message-form.tsx     # Message form for adding nodes
      message-node.tsx     # Custom node UI for messages
    constants/
      card-registry.ts     # Card & form registry (add new types here)
      side-panel-states.ts # Side panel state definitions
      initial-nodes.const.ts # Initial nodes (set type: 'message')
      initial-edges.const.ts # Initial edges
    hooks/
      useFlow.ts           # Flow state, node/edge management, validation
```

---

## 🧑‍💻 Usage

1. **Add a message node**: Click the "Message" card in the side panel, enter your message, and submit.
2. **Connect nodes**: Drag from the handle of one node to another to create edges.
3. **Save changes**: Click the "Save Changes" button.
   - If all nodes are connected: green toast "Flow saved" appears.
   - If not: red toast "Cannot save Flow" appears.
4. **Initial nodes**: All initial nodes use the custom message node UI.

---

## Extending the Editor

### Add a New Card & Form
1. **Add a new state** in `side-panel-states.ts`:
   ```ts
   export const SIDE_PANEL_STATES = {
     ...,
     NOTIFICATION: 'notification_form',
   } as const;
   ```
2. **Create your form component** in `components/` (e.g., `notification-form.tsx`).
3. **Register your card and form** in `card-registry.ts`:
   ```ts
   CARD_REGISTRY.notification = {
     id: 'notification',
     title: 'Notification',
     icon: Bell,
     state: SIDE_PANEL_STATES.NOTIFICATION,
     description: 'Configure notifications',
   };
   FORM_REGISTRY[SIDE_PANEL_STATES.NOTIFICATION] = {
     id: 'notification-form',
     title: 'Notification Settings',
     backIcon: ArrowLeft,
     component: NotificationForm,
   };
   ```
4. **(Optional) Create a custom node UI** and register it in `flow.tsx` via `nodeTypes`.

---

## Architecture & Best Practices

- **Registry Pattern**: Centralizes card/form config for easy extensibility
- **Custom Node Types**: Use `nodeTypes` in React Flow for unique node UIs
- **Type Safety**: All logic is strongly typed with TypeScript
- **Reusable Components**: Card, FormContainer, and Node components are generic
- **Validation**: Connection logic ensures robust flow structure
- **User Feedback**: Sonner toasts provide clear, accessible feedback

---

## Dependencies
- [React](https://react.dev/)
- [React Flow](https://reactflow.dev/)
- [Sonner](https://sonner.emilkowal.ski/) (for toasts)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (for icons)
- [TypeScript](https://www.typescriptlang.org/)

---

## Further Customization
- **Add more node types**: Create new node components and register them in `nodeTypes`.
- **Add more actions**: Expand the card/form registry for new flow actions.
- **Style tweaks**: Adjust Tailwind classes or use inline styles for custom colors.
- **Validation logic**: Enhance or change the connection rules in `useFlow.ts`.


---

## 🙏 Credits
- [React Flow](https://reactflow.dev/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Happy Flow Building!**
