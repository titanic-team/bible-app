import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";

export default function LandingPage() {
  const versions = versionsService.getVersions();

  return (
    <JsonViewer
      data={Object.fromEntries(versions.entries())}
      title="All Versions"
    />
  );
}
