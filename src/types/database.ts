export type Versions = Map<VersionId, Version>;

export type VersionId = "acf" | "ara" | "arc" | "naa" | "ntlh" | "nvi" | "nvt";

export interface Version {
  books: Book[];
  id: VersionId;
  name: string;
}

export interface Book {
  chapters: Chapter[];
  id: string;
  name: string;
  numberOfChapters: number;
}

export interface Chapter {
  id: number;
  verses: Verse[];
}

export interface Verse {
  id: number;
  verse: string;
}
