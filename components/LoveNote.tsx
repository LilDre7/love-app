import { motion } from 'framer-motion';

const LoveNote = () => {
  return (
    <section id="nota-de-amor" className="py-20 bg-secondary bg-opacity-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Una Nota Solo Para Ti
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-lg text-text leading-relaxed">
            Mi amor,<br /><br />
            Mientras escribo esta nota, mi corazón rebosa de amor por ti. 
            Eres la pieza que faltaba para completar mi rompecabezas, la melodía 
            que convierte mi vida en una hermosa canción. Tu amor me ha transformado, 
            me ha inspirado y ha llenado mis días de una alegría inconmensurable.<br /><br />
            Atesoro cada momento que pasamos juntos, cada risa que compartimos 
            y cada desafío que superamos. Eres mi mejor amigo, mi confidente 
            y mi más grande amor. Estoy agradecido por tu presencia en mi vida y espero con ansias crear innumerables recuerdos más contigo.<br /><br />
            Con todo mi amor,<br />
            [Tu Nombre]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveNote;

