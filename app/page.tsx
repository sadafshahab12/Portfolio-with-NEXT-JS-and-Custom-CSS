import HeroSec from "./components/HeroSec";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Sadaf Shahab",
}
export default function Home() {
  return (
    <>
      <HeroSec />
    </>
  );
}
