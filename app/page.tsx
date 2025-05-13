"use client";
import { Hero } from "./hero/Hero";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
      <Theme>
        <div className="bg-gradient-to-br from-white via-[#e4ebfd] to-[#d1ddfd]">
          <Hero />
          <main></main>
          <footer className=""></footer>
        </div>
      </Theme>
  );
}
