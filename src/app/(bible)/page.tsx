import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";

export default function LandingPage() {
  const plainBooks = versionsService.getPlainBooks();

  return <JsonViewer data={plainBooks} title="Landing Page" />;
}
