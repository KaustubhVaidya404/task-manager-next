"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BackgroundGradient containerClassName="mx-10">
        <Button size={"lg"} className="rounded-full">
          <Link href="/home">Home</Link>
        </Button>
      </BackgroundGradient>
    </div>
  );
}
