"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import WhyILoveYou from "../components/WhyILoveYou";
// import PhotoGallery from "../components/PhotoGallery";
import PlaylistButton from "../components/PlaylistButton";
import LoveNote from "../components/LoveNote";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const playlistUrl = "https://open.spotify.com/playlist/youractualplaylistid";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <WhyILoveYou />
        {/* <PhotoGallery /> */}
        <PlaylistButton playlistUrl={playlistUrl} />
        <LoveNote />
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}
