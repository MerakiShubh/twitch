"use client";
import qs from "query-string";
import { useRef, useState } from "react";
import { X, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const Search = () => {
  const router = useRouter();
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        className="bg-black/18 rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-0"
      />
      {value && (
        <X
          className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground hover:opacity-75 transition cursor-pointer"
          onClick={onClear}
        />
      )}

      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none cursor-pointer hover:opacity-75"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground hover:opacity-75" />
      </Button>
    </form>
  );
};
