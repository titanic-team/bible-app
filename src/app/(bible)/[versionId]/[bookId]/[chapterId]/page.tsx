import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { EncodedChapterParams } from "@/types/versions";
import { decodeStaticParams, encodeStaticParams } from "@/utils/static-params";

interface ChapterPageProps {
  params: Promise<EncodedChapterParams>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { bookId, chapterId, versionId } = await decodeStaticParams(
    "chapter",
    params,
  );

  const chapter = versionsService.getChapter(versionId, bookId, chapterId);

  if (!chapter) return notFound();

  return (
    <JsonViewer
      data={chapter}
      title={`Version: ${versionId.toUpperCase()} / Book: ${bookId.toUpperCase()} / Chapter: ${chapterId}`}
    />
  );
}

export function generateStaticParams() {
  return encodeStaticParams("chapter");
}
