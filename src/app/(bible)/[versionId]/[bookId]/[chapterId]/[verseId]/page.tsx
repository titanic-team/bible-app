import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { EncodedVerseParams } from "@/types/versions";
import { decodeStaticParams } from "@/utils/static-params";

interface VersePageProps {
  params: Promise<EncodedVerseParams>;
}

export default async function VersePage({ params }: VersePageProps) {
  const { bookId, chapterId, verseId, versionId } = await decodeStaticParams(
    "verse",
    params,
  );

  const verse = versionsService.getVerse(versionId, bookId, chapterId, verseId);

  if (!verse) return notFound();

  return (
    <JsonViewer
      data={verse}
      title={`Version: ${versionId.toUpperCase()} / Book: ${bookId.toUpperCase()} / Chapter: ${chapterId} / Verse: ${verseId}`}
    />
  );
}
