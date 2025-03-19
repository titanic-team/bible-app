import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { VersionId } from "@/types/database";

interface BookPageProps {
  params: Promise<{ bookId: string; versionId: string }>;
}

export default async function BookPage({ params }: BookPageProps) {
  const { bookId, versionId } = await params;

  const plainChapters = versionsService.getPlainChapters(
    versionId as VersionId,
    bookId,
  );

  if (plainChapters.length === 0) return notFound();

  return (
    <JsonViewer
      data={plainChapters}
      title={`Version: ${versionId.toUpperCase()} / Book: ${bookId.toUpperCase()}`}
    />
  );
}
