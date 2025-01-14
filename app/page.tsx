"use client";

import PlaylistButton from "../components/PlaylistButton";
import Footer from "../components/Footer";
import Poster from "@/components/Poster";
import TypographicArt from "@/components/ourhistory1";
import StudioWarming from "@/components/StudioWarming";
import TheodorBlack from "@/components/TheodorBlack";
import CreateMore from "@/components/CreateMore";
import ServicesPage from "@/components/ServicesPage";
import HausGuidelines from "@/components/HausGuidelines";
import Chair from "@/components/Chair";
import NaturalRascal from "@/components/Natural";
import BriefLanding from "@/components/BriefLanding";
import MinimalistLayout from "@/components/Brand";
import MusicButton from "@/components/Music";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Poster />
        <NaturalRascal />
        <TypographicArt />
        <StudioWarming />
        <BriefLanding />
        <TheodorBlack />
        <MinimalistLayout />
        <CreateMore />
        <ServicesPage />
        <Chair />
        <PlaylistButton />
        <HausGuidelines />
      </main>
      <Footer />
      <MusicButton />
    </div>
  );
}
