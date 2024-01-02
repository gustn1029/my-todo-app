'use client';
import Contents from "@/components/layout/Contents";
import { ChildrenProps } from "@/type";
import { useRouter } from "next/navigation";

export default function Home({children}:ChildrenProps) {
  const router = useRouter();
  return (
      <Contents>
        {children}
      </Contents>
  );
}
