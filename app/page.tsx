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

export default function Home() {
  const playlistUrl = "https://open.spotify.com/playlist/youractualplaylistid";

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Poster />
        <TypographicArt />
        <StudioWarming />
        <TheodorBlack />
        <CreateMore />
        <ServicesPage />
        <PlaylistButton playlistUrl={playlistUrl} />
        <HausGuidelines />
      </main>
      <Footer />
    </div>
  );
}
