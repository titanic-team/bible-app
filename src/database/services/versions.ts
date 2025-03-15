import { versions as versionsData } from "@/database/data";
import {
  Book,
  Chapter,
  Verse,
  Version,
  VersionId,
  Versions,
} from "@/types/database";

export class VersionsService {
  private static instance: VersionsService | null = null;
  private versions: Versions;

  constructor() {
    this.versions = versionsData;
  }

  public static getInstance(): VersionsService {
    if (!VersionsService.instance) {
      VersionsService.instance = new VersionsService();
    }

    return VersionsService.instance;
  }

  getBook(versionId: VersionId, bookId: string): Book | null {
    const version = this.versions.get(versionId);
    if (!version) return null;

    return version.books.find((book) => book.id === bookId) || null;
  }

  getChapter(
    versionId: VersionId,
    bookId: string,
    chapterId: number,
  ): Chapter | null {
    const book = this.getBook(versionId, bookId);
    if (!book) return null;

    return book.chapters.find((chapter) => chapter.id === chapterId) || null;
  }

  getVerse(
    versionId: VersionId,
    bookId: string,
    chapterId: number,
    verseId: number,
  ): Verse | null {
    const chapter = this.getChapter(versionId, bookId, chapterId);
    if (!chapter) return null;

    return chapter.verses.find((verse) => verse.id === verseId) || null;
  }

  getVersion(versionId: VersionId): Version | null {
    return this.versions.get(versionId) || null;
  }

  getVersions(): Versions {
    return this.versions;
  }
}

export const versionsService = VersionsService.getInstance();
