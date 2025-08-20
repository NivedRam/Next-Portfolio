"use client";

import { Coffee } from "lucide-react";
import Link from "next/link";

export default function BuyMeCoffee() {
  return (
    <Link
      href="https://www.buymeacoffee.com/nivedchempv"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#FFDD00] px-4 py-2 font-semibold text-black shadow-lg transition hover:scale-105 hover:shadow-xl"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style={{ height: "50px" }}
      />
    </Link>
  );
}
