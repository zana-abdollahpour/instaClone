import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function HeaderSearch() {
  return (
    <div className="relative mt-1">
      <div className="absolute top-2 left-2">
        <MagnifyingGlassIcon className="h-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 text-sm border-gray-400 rounded-xl bg-gray-50 focus:ring-black focus:border-black"
      />
    </div>
  );
}
