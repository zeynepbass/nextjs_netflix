import Link from "next/link";

import { StatusMessage } from "@/components/status-message";

export default function NotFound() {
  return (
    <StatusMessage
      title="Lost your way?"
      description="We couldn't find the page you were looking for. You'll find plenty to explore on the home page."
    >
      <Link href="/" className="button button-primary">
        Back to Home
      </Link>
    </StatusMessage>
  );
}
