import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 bg-background">
      Open
      <Link href="/bitcoin">
        <button className="bg-black text-white w-24 h-6 rounded-md">
          Bitcoin
        </button>
      </Link>
      <Link href="/ethereum">
        <button className="bg-black text-white w-24 h-6 rounded-md ">
        Ethereum
        </button>
      </Link>
    </main>
  );
}
