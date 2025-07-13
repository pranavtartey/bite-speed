# Card-Based Navigation System

This system provides a scalable, maintainable way to handle card-based navigation with forms. It's designed to be easily extensible for future card types.

## Architecture Overview

### Core Components

1. **Card Registry** (`card-registry.ts`) - Central configuration for all cards and forms
2. **Generic Card Component** (`card.tsx`) - Reusable card component with consistent styling
3. **Form Container** (`form-container.tsx`) - Generic form wrapper with back button
4. **Side Panel** (`side-panel.tsx`) - Main navigation controller

### State Management

- Uses React's `useState` for simple state management
- State transitions: `SHOW_CARDS` ↔ `MESSAGE` (and future states)
- Clean separation between card view and form view

## How It Works

1. **Card View**: Displays all available cards in a grid
2. **Card Click**: Transitions to the corresponding form state
3. **Form View**: Shows the form with a back button
4. **Back Button**: Returns to the card view

## Adding New Cards

### Step 1: Add State
```typescript
// In side-panel-states.ts
export const SIDE_PANEL_STATES = {
    SHOW_CARDS: "cards",
    MESSAGE: 'message_form',
    NOTIFICATION: 'notification_form' // Add new state
} as const;
```

### Step 2: Create Form Component
```typescript
// Create src/canvas/components/notification-form.tsx
const NotificationForm = () => {
  // Your form logic here
  return (
    <form>
      {/* Form fields */}
    </form>
  );
};

export default NotificationForm;
```

### Step 3: Register Card and Form
```typescript
// In card-registry.ts
import { Bell } from "lucide-react";
import NotificationForm from "../components/notification-form";

export const CARD_REGISTRY: Record<string, CardConfig> = {
  message: { /* existing */ },
  notification: {
    id: 'notification',
    title: 'Notification',
    icon: Bell,
    state: SIDE_PANEL_STATES.NOTIFICATION,
    description: 'Configure notifications'
  }
};

export const FORM_REGISTRY: Record<string, FormConfig> = {
  [SIDE_PANEL_STATES.MESSAGE]: { /* existing */ },
  [SIDE_PANEL_STATES.NOTIFICATION]: {
    id: 'notification-form',
    title: 'Notification Settings',
    backIcon: ArrowLeft,
    component: NotificationForm
  }
};
```

That's it! The new card will automatically appear in the grid and work with the navigation system.

## Benefits

### 1. **Scalability**
- Easy to add new cards without touching existing code
- Consistent UI/UX across all cards
- Centralized configuration

### 2. **Maintainability**
- Single source of truth for card configurations
- Reusable components reduce code duplication
- Clear separation of concerns

### 3. **Type Safety**
- Full TypeScript support
- Compile-time checking for missing configurations
- IntelliSense support for all card properties

### 4. **Performance**
- Lazy loading of form components
- Minimal re-renders with proper state management
- Efficient grid layout

### 5. **User Experience**
- Consistent navigation patterns
- Smooth transitions between views
- Responsive design with Tailwind CSS

## File Structure

```
src/canvas/
├── components/
│   ├── card.tsx              # Generic card component
│   ├── form-container.tsx    # Generic form wrapper
│   ├── message-form.tsx      # Example form implementation
│   ├── side-panel.tsx        # Main navigation controller
│   └── example-notification-form.tsx  # Example of adding new form
├── constants/
│   ├── card-registry.ts      # Card and form configurations
│   └── side-panel-states.ts  # State definitions
└── README.md                 # This documentation
```

## Best Practices

1. **Consistent Styling**: Use the provided Card and FormContainer components
2. **Icon Selection**: Use Lucide React icons for consistency
3. **Form Validation**: Implement proper form validation in your form components
4. **Error Handling**: Add error boundaries for form components
5. **Accessibility**: Ensure all interactive elements have proper ARIA labels

## Future Enhancements

- **Animation**: Add smooth transitions between card and form views
- **Search**: Add search functionality for many cards
- **Categories**: Group cards by categories
- **Favorites**: Allow users to favorite frequently used cards
- **Keyboard Navigation**: Add keyboard shortcuts for navigation 