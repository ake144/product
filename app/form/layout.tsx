import { ReactNode } from "react";

export default function FormLayout({ children }: { children: ReactNode }) {
  return <div className="bg-black min-h-screen">{children}</div>;
}
