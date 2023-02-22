import React from "react";
import { useSession } from "next-auth/react";

import Stories from "./Stories/Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts/Posts";

export default function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid ${
        session
          ? "grid-cols-1 mx-auto md:grid-cols-3 md:max-w-6xl"
          : "grid-cols-1 mx-auto md:grid-cols-2 md:max-w-3xl"
      }`}
    >
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-96">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
