"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
interface Container {
  children: React.ReactNode;
}
export const Container = ({ children }: Container) => {
  const matches = useMediaQuery("(max-width: 1024px)");
  const { collapsed, onCollapse, onExpand } = useSidebar();
  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches]);
  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};
