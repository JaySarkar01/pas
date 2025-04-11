"use client";
import React from "react";
import Landingsec from "@/app/components/landingsec";
import Whyus from "@/app/components/whyus";
import FlipCardBanner from "@/app/components/ScrollingFlipCards"
import ScrollingTape from "@/app/components/lngbanner";

export default function Home() {
  return (
    <main className=""> 
      <section>
      <Landingsec/>
      </section>
      <section>
      <Whyus/>
      </section>
      <section>
        <FlipCardBanner/>
      </section>
      <section className="fixed bottom-0 left-0 right-0 z-50 shadow-lg shadow-black">
  <ScrollingTape />
</section>

    </main>
  );
}
