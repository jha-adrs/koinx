import { Navbar } from "@/components/navbar";
import { ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 bg-background">
      
      <Link href="/bitcoin">
        <button className="bg-black text-white w-24 h-6 rounded-md">
          Bitcoin
        </button>
      </Link>
      <ChevronsUpDownIcon className="w-4 h-4"/>
      <Link href="/ethereum">
        <button className="bg-black text-white w-24 h-6 rounded-md ">
        Ethereum
        </button>
      </Link>
    </main>
  );
}
