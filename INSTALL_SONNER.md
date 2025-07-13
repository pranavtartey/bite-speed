# Installing Sonner for Toast Notifications

If you haven't installed Sonner yet, run this command in your terminal:

```bash
npm install sonner
```

## What Sonner Provides

- **Toast notifications** - Beautiful, customizable toast messages
- **Multiple positions** - Top-center, bottom-right, etc.
- **Different types** - Success, error, warning, info
- **Custom styling** - Full control over appearance
- **Accessibility** - Built-in ARIA support

## Features Implemented

✅ **Save Changes Button Logic**
- Disabled when nodes are unconnected
- Visual feedback with grayed-out appearance
- Warning message when nodes need connection

✅ **Toast Notifications**
- **Success**: Green toast when flow is saved successfully
- **Error**: Red toast when nodes are unconnected
- **Position**: Top-center as requested

✅ **Connection Validation**
- Checks if all nodes are connected via edges
- Single nodes are considered valid
- Provides detailed error messages

## How It Works

1. **Add nodes** via the message form
2. **Connect nodes** by dragging from one node's handle to another
3. **Save button** becomes enabled when all nodes are connected
4. **Click save** to see success/error toast notification

The system automatically validates the flow structure and provides clear feedback to users. 