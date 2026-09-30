"use client";

import { StatusMessage } from "@/components/status-message";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <StatusMessage
      title="Something went wrong"
      description="We had trouble loading this page. Please try again in a moment."
    >
      <button type="button" className="button button-primary" onClick={reset}>
        Try Again
      </button>
    </StatusMessage>
  );
}
