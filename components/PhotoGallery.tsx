import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const photos = [
  { src: '/image/bg.jpg', width: 600, height: 400 },
  { src: '', width: 300, height: 400 },
  { src: '', width: 600, height: 300 },
  { src: '', width: 600, height: 400 },
  { src: '', width: 300, height: 400 },
  { src: '', width: 600, height: 400 },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galería" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nuestros Momentos
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={photo.src}
                alt={`Nuestro momento ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
            >
              <Image
                src={photos[selectedImage].src}
                alt={`Nuestro momento ${selectedImage + 1}`}
                width={photos[selectedImage].width}
                height={photos[selectedImage].height}
                className="rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;

