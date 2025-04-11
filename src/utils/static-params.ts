import { versionsService } from "@/database/services";
import { VersionId } from "@/types/database";
import {
  DecodedBookParams,
  DecodedChapterParams,
  DecodedVerseParams,
  DecodedVersionParams,
  EncodedBookParams,
  EncodedChapterParams,
  EncodedVerseParams,
  EncodedVersionParams,
} from "@/types/versions";

/**
 * Encodes static parameters for the app using function overloading to provide type safety.
 *
 * @param depth The depth level of the parameters
 * @returns Properly typed encoded parameters object based on the target depth
 */
export function encodeStaticParams(depth: "version"): EncodedVersionParams[];

export function encodeStaticParams(depth: "book"): EncodedBookParams[];

export function encodeStaticParams(depth: "chapter"): EncodedChapterParams[];

export function encodeStaticParams(
  depth: "book" | "chapter" | "version",
): unknown {
  const versions = versionsService.getPlainVersions();

  // Level 1: Version
  const versionParams: EncodedVersionParams[] = versions.map(({ id }) => ({
    versionId: id,
  }));

  if (depth === "version") return versionParams;

  // Level 2: Book
  const bookParams: EncodedBookParams[] = versionParams.flatMap(
    ({ versionId }) => {
      const books = versionsService.getPlainBooks(versionId as VersionId);

      return books.map((book) => ({
        bookId: encodeURIComponent(book.id),
        versionId,
      }));
    },
  );

  if (depth === "book") return bookParams;

  // Level 3: Chapter
  const chapterParams: EncodedChapterParams[] = bookParams.flatMap(
    ({ bookId, versionId }) => {
      const chapters = versionsService.getPlainChapters(
        versionId as VersionId,
        decodeURIComponent(bookId),
      );

      return chapters.map((chapter) => ({
        bookId,
        chapterId: String(chapter),
        versionId,
      }));
    },
  );

  if (depth === "chapter") return chapterParams;

  // Level 4: Verse
  throw new Error("Verse depth not supported in static params generation");
}

/**
 * Decodes static parameters from URL format back to their original form using
 * function overloading to provide type safety.
 *
 * @param depth The depth level of the parameters
 * @param params The encoded parameters to decode
 * @returns Properly typed parameters object based on the target depth
 */
export function decodeStaticParams(
  depth: "version",
  params: Promise<EncodedVersionParams>,
): Promise<DecodedVersionParams>;

export function decodeStaticParams(
  depth: "book",
  params: Promise<EncodedBookParams>,
): Promise<DecodedBookParams>;

export function decodeStaticParams(
  depth: "chapter",
  params: Promise<EncodedChapterParams>,
): Promise<DecodedChapterParams>;

export function decodeStaticParams(
  depth: "verse",
  params: Promise<EncodedVerseParams>,
): Promise<DecodedVerseParams>;

export async function decodeStaticParams(
  depth: "book" | "chapter" | "verse" | "version",
  params: Promise<Partial<EncodedVerseParams>>,
): Promise<unknown> {
  const encodedParams = await params;

  if (!encodedParams.versionId) {
    throw new Error("versionId is required for all depth levels");
  }

  const versionResult = {
    versionId: encodedParams.versionId.toLowerCase() as VersionId,
  };

  if (depth === "version") return versionResult;

  if (!encodedParams.bookId) {
    throw new Error(`bookId is required for ${depth} depth level`);
  }

  const bookResult = {
    ...versionResult,
    bookId: forceDecodeURIComponent(encodedParams.bookId).toLowerCase(),
  };

  if (depth === "book") return bookResult;

  if (!encodedParams.chapterId) {
    throw new Error(`chapterId is required for ${depth} depth level`);
  }

  const chapterResult = {
    ...bookResult,
    chapterId: Number(encodedParams.chapterId),
  };

  if (depth === "chapter") return chapterResult;

  if (!encodedParams.verseId) {
    throw new Error("verseId is required for verse depth level");
  }

  return {
    ...chapterResult,
    verseId: Number(encodedParams.verseId),
  };
}

/**
 * Forcefully decodes a URI component, handling common encoding issues.
 * This function is useful when the standard decodeURIComponent doesn't
 * fully decode the string (usually at build time).
 * @param str The string to decode
 * @returns The decoded string
 */
export function forceDecodeURIComponent(str: string): string {
  const encodedRegex = /%[0-9A-Fa-f]{2}/g;

  const maxSteps = 5; // Prevent infinite loops
  let steps = 0;
  let result = str;

  // Decode the string until no more encoded characters are found
  while (encodedRegex.test(result) && steps < maxSteps) {
    result = decodeURIComponent(result);
    steps++;
  }

  return result;
}
