"use client";

import { usePathname } from "next/navigation";

export default function PageAnimation({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-animation">
      {children}
    </div>
  );
}
