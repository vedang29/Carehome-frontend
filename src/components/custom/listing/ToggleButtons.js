"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ToggleButtons() {
  const [selected, setSelected] = useState("recommended");

  return (
    <div className="sm:hidden flex space-x-2">
      <Button
        onClick={() => setSelected("recommended")}
        className={`px-4 py-2 rounded-full transition-all ${
          selected === "recommended"
            ? "bg-black text-white"
            : "bg-white text-black border border-black"
        }`}
      >
        Recommended
      </Button>

      <Button
        onClick={() => setSelected("popular")}
        className={`px-4 py-2 rounded-full transition-all ${
          selected === "popular"
            ? "bg-black text-white"
            : "bg-white text-black border border-black"
        }`}
      >
        Popular
      </Button>
    </div>
  );
}
