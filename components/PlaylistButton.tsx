import { motion } from "framer-motion";
import { Music } from "lucide-react";

interface PlaylistButtonProps {
  playlistUrl: string;
}

const PlaylistButton: React.FC<PlaylistButtonProps> = ({ playlistUrl }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white rounded-full text-lg font-mono hover:bg-opacity-90 transition-colors bg-green-500 text-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Music className="w-5 h-5 mr-2" />
          Escuchar Nuestra Playlist
        </motion.a>
      </div>
    </section>
  );
};

export default PlaylistButton;
