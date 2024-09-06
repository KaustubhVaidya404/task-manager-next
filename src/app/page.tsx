"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

export default function Home() {
  return (
    <Vortex>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <p className="text-4xl font-bold bg-gradient-to-t from-white to-black bg-clip-text text-transparent">
            NEW WAY TO MANAGE TASK
          </p> 
        </div>
        <BackgroundGradient containerClassName="mx-10 mt-2">
          <Button size={"lg"} className="rounded-full">
            <Link href="/home">Create Task</Link>
          </Button>
        </BackgroundGradient>
      </div>
    </Vortex>
  );
}
