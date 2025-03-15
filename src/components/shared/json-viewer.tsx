"use client";

import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/naming-convention
const ReactJsonView = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

interface TemporaryProps {
  data: object;
  title?: string;
}

export const JsonViewer = ({ data, title }: TemporaryProps) => (
  <div className="container mx-auto space-y-4 py-8">
    <h1 className="text-xl font-bold">{title}</h1>
    <ReactJsonView collapsed src={data} />
  </div>
);
