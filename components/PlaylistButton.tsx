import { Music } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const PlaylistButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const playlistUrl =
    "https://open.spotify.com/playlist/3jKwFKBtJPFSuYLWLtofVE?si=be33411647244a2e";

  return (
    <section className="py-16 bg-white mx-auto">
      <div className="container mx-auto px-6 text-center overflow-hidden">
        <motion.a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 overflow-hidden text-white rounded-full text-lg font-mono hover:bg-opacity-90 transition-colors bg-green-500 text-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Music className="w-5 h-5 mr-2" />
          Escuchar Nuestra Playlist
        </motion.a>
        {showTooltip && (
          <div className="absolute mt-2 p-2 bg-gray-700 text-white text-sm rounded">
            Click to listen to our playlist!
          </div>
        )}
      </div>
    </section>
  );
};

export default PlaylistButton;
