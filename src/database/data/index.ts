import { Version, Versions } from "@/types/database";
import acf from "./versions/acf.json";
import ara from "./versions/ara.json";
import arc from "./versions/arc.json";
import naa from "./versions/naa.json";
import ntlh from "./versions/ntlh.json";
import nvi from "./versions/nvi.json";
import nvt from "./versions/nvt.json";

export const versions: Versions = new Map([
  ["acf", acf as Version],
  ["ara", ara as Version],
  ["arc", arc as Version],
  ["naa", naa as Version],
  ["ntlh", ntlh as Version],
  ["nvi", nvi as Version],
  ["nvt", nvt as Version],
]);
