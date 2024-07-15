import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { AboutMe } from "@/components/About_Me/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe/>
    </>
  );
}
