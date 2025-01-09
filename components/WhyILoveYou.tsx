import { motion } from 'framer-motion';
import { Heart, Star, Sun, Music, Coffee, Book } from 'lucide-react';

const reasons = [
  { icon: Heart, text: "Tu bondad no conoce límites" },
  { icon: Star, text: "Me inspiras a ser mi mejor versión" },
  { icon: Sun, text: "Tu sonrisa ilumina mis días más oscuros" },
  { icon: Music, text: "Bailamos al mismo ritmo de la vida" },
  { icon: Coffee, text: "Nuestras charlas matutinas son mi momento favorito" },
  { icon: Book, text: "Tu sabiduría e inteligencia me cautivan" },
];

const WhyILoveYou = () => {
  return (
    <section className="py-20 bg-why-love bg-cover bg-center sm:bg-contain sm:bg-center bg-opacity-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Por Qué Te Amo
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <reason.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <p className="text-text text-lg">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyILoveYou;

