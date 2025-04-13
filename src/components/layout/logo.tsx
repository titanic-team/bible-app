import Image from "next/image";

export function Logo() {
  return (
    <div className="flex select-none items-center">
      <Image
        alt="Logo"
        className="dark:invert" // To Do - add dark mode logo
        height={54}
        src="/logo.webp"
        width={54}
      />
      <div className="font-headings flex flex-col leading-none">
        <span className="text-[36px] font-bold tracking-[-0.04em]">Bíblia</span>
        <span className="pl-[2px] text-[10px] uppercase tracking-[0.37em]">
          Completa
        </span>
      </div>
    </div>
  );
}
