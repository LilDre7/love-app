import { motion } from 'framer-motion';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          className="mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentDate}
        </motion.p>
        <motion.p 
          className="font-display text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          &quot;Por siempre y para siempre, eres mi todo&quot;
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

