import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { VersionId } from "@/types/database";

interface BookPageProps {
  params: Promise<{ bookId: string; versionId: string }>;
}

export default async function BookPage({ params }: BookPageProps) {
  const { bookId, versionId } = await params;

  const book = versionsService.getBook(versionId as VersionId, bookId);

  if (!book) return notFound();

  return <JsonViewer data={book} title={`${versionId} / ${bookId}`} />;
}
