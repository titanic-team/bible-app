import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { VersionId } from "@/types/database";

interface ChapterPageProps {
  params: Promise<{ bookId: string; chapterId: string; versionId: string }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { bookId, chapterId, versionId } = await params;

  const chapter = versionsService.getChapter(
    versionId as VersionId,
    bookId,
    Number(chapterId),
  );

  if (!chapter) return notFound();

  return (
    <JsonViewer
      data={chapter}
      title={`Version: ${versionId.toUpperCase()} / Book: ${bookId.toUpperCase()} / Chapter: ${chapterId}`}
    />
  );
}
