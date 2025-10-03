"use client";
import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import { UserItem, UserItemSkeletion } from "./user-item";

interface RecommendedProps {
  data: User[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  console.log("here------->", data.length);
  const collapsed = useSidebar((state) => state.collapsed);
  const showLable = !collapsed && data.length > 0;
  return (
    <div>
      {showLable && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Rcommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeletion = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeletion key={i} />
      ))}
    </ul>
  );
};
