import React from "react";

interface LoginMessagesProps {
	message: string | null;
	type: "success" | "error" | null;
}

/**
 * Login form messages component for displaying success/error states.
 * Pure UI component for user feedback.
 *
 * @param message - The message to display
 * @param type - The type of message (success or error)
 */
export function LoginMessages({ message, type }: LoginMessagesProps) {
	if (!message || !type) return null;

	const messageStyles = {
		success: "bg-green-50 border-green-200 text-green-700",
		error: "bg-red-50 border-red-200 text-red-700",
	};

	return (
		<div className={`mb-4 border px-4 py-3 rounded ${messageStyles[type]}`}>
			<p className="text-sm">{message}</p>
		</div>
	);
}
