import { VersionId } from "./database";

export interface EncodedVersionParams {
  versionId: string;
}

export interface EncodedBookParams extends EncodedVersionParams {
  bookId: string;
}

export interface EncodedChapterParams extends EncodedBookParams {
  chapterId: string;
}

export interface EncodedVerseParams extends EncodedChapterParams {
  verseId: string;
}

export interface DecodedVersionParams {
  versionId: VersionId;
}

export interface DecodedBookParams extends DecodedVersionParams {
  bookId: string;
}

export interface DecodedChapterParams extends DecodedBookParams {
  chapterId: number;
}

export interface DecodedVerseParams extends DecodedChapterParams {
  verseId: number;
}
