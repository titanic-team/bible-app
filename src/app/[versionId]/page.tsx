import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { VersionId } from "@/types/database";

interface VersionPageProps {
  params: Promise<{ versionId: string }>;
}

export default async function VersionPage({ params }: VersionPageProps) {
  const { versionId } = await params;

  const version = versionsService.getVersion(versionId as VersionId);

  if (!version) return notFound();

  return <JsonViewer data={version} title={`${versionId}`} />;
}
