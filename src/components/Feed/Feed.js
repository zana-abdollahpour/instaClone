import React from "react";

import Stories from "./Stories/Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts/Posts";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        {/* Mini Profile + Suggestions */}
      </section>
    </main>
  );
}
