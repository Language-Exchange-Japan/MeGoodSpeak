import React from "react";

interface LoginMessagesProps {
  message: string | null;
  messageType: "success" | "error" | null;
}

/**
 * Login form messages component for displaying success/error states.
 *
 * @param message - The message to display
 * @param type - The type of message (success or error)
 */
export function LoginMessages({ message, messageType }: LoginMessagesProps) {
  if (!message || !messageType) return null;

  const messageStyles = {
    success: "bg-green-50 border-green-200 text-green-700",
    error: "bg-red-50 border-red-200 text-red-700",
  };

  return (
    <div className={`mb-4 rounded border px-4 py-3 ${messageStyles[messageType]}`}>
      <p className="text-sm">{message}</p>
    </div>
  );
}
