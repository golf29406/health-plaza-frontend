import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link className="link" href="/game">Go to Question game</Link>
      <Link className="link" href="/technical">Go to Technical test</Link>
    </main>
  );
}
