"use client";
import React from "react";
import Landingsec from "@/app/components/landingsec";
import Whyus from "@/app/components/whyus";

export default function Home() {
  return (
    <main className=""> 
      <section>
      <Landingsec/>
      </section>
      <section>
      <Whyus/>
      </section>
    </main>
  );
}
