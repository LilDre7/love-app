import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

const OurSong = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-cursive mb-8 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Song
        </motion.h2>
        <motion.a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your actual song link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Music className="w-5 h-5 mr-2" />
          Listen to Our Song
        </motion.a>
      </div>
    </section>
  );
};

export default OurSong;

