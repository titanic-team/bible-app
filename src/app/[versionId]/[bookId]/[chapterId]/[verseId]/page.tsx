import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { VersionId } from "@/types/database";

interface VersePageProps {
  params: Promise<{
    bookId: string;
    chapterId: string;
    verseId: string;
    versionId: string;
  }>;
}

export default async function VersePage({ params }: VersePageProps) {
  const { bookId, chapterId, verseId, versionId } = await params;

  const verse = versionsService.getVerse(
    versionId as VersionId,
    bookId,
    Number(chapterId),
    Number(verseId),
  );

  if (!verse) return notFound();

  return (
    <JsonViewer
      data={verse}
      title={`Version: ${versionId.toUpperCase()} / Book: ${bookId.toUpperCase()} / Chapter: ${chapterId} / Verse: ${verseId}`}
    />
  );
}
