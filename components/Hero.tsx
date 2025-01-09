import { motion } from 'framer-motion';


const Hero = () => {


  return (
    <section id="inicio" className="bg-hero-pattern bg-cover bg-center sm:bg-contain relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow">
            Nuestro Amor Eterno Sil & Varo
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Cada momento contigo es un tesoro, cada sonrisa un regalo. 
            Eres la luz que me guía, el calor que me abraza, 
            y el amor que me completa.
          </p>
          <motion.a
            href="#nuestra-historia"
            className="inline-block bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubre Nuestra Historia
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

