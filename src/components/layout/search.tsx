import { SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="relative w-64">
      <Input
        className="peer border-none bg-stone-100 px-3 py-2 pr-8 text-stone-700 placeholder:text-stone-500 focus-visible:ring-stone-500"
        placeholder="Pesquise na Bíblia"
      />
      <span className="absolute inset-y-0 right-3 hidden items-center peer-placeholder-shown:flex">
        <SearchIcon className="size-4 stroke-stone-500" />
      </span>
      <span className="absolute inset-y-0 right-3 flex items-center peer-placeholder-shown:hidden">
        <X className="size-4 cursor-pointer stroke-stone-500" />
      </span>
    </div>
  );
}
