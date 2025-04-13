import { notFound } from "next/navigation";
import { JsonViewer } from "@/components/shared/json-viewer";
import { versionsService } from "@/database/services";
import { EncodedBookParams } from "@/types/versions";
import { decodeStaticParams, encodeStaticParams } from "@/utils/static-params";

interface BookPageProps {
  params: Promise<EncodedBookParams>;
}

export default async function BookPage({ params }: BookPageProps) {
  const { bookId, versionId } = await decodeStaticParams("book", params);
  const chapters = versionsService.getPlainChapters(versionId, bookId);

  if (chapters.length === 0) return notFound();

  return (
    <JsonViewer
      data={chapters}
      title={`Version: ${versionId.toUpperCase()} / Book: ${bookId.toUpperCase()}`}
    />
  );
}

export function generateStaticParams() {
  return encodeStaticParams("book");
}
