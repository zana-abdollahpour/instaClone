import React from "react";

import Stories from "./Stories/Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts/Posts";

export default function Feed() {
  return (
    <main>
      <section>
        <Stories />
        <Posts />
      </section>
      <section>{/* Mini Profile + Suggestions */}</section>
    </main>
  );
}
