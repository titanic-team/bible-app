import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { EncodedVersionParams } from "@/types/versions";
import { decodeStaticParams, encodeStaticParams } from "@/utils/static-params";

interface VersionPageProps {
  params: Promise<EncodedVersionParams>;
}

export default async function VersionPage({ params }: VersionPageProps) {
  const { versionId } = await decodeStaticParams("version", params);
  const books = versionsService.getPlainBooks(versionId);

  if (books.length === 0) return notFound();

  return (
    <JsonViewer data={books} title={`Version: ${versionId.toUpperCase()}`} />
  );
}

export function generateStaticParams() {
  return encodeStaticParams("version");
}
