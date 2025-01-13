import { motion } from "framer-motion";
import Image from "next/image";

const OurStory = () => {
  const img = "/image/cathug.jpeg";

  return (
    <section id="nuestra-historia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nuestra Historia
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-text leading-relaxed">
              Todo comenzó con un encuentro casual, una chispa que se encendió
              en llama. Desde nuestra primera cita tomando café hasta nuestras
              aventuras alrededor del mundo, cada momento contigo ha sido
              mágico. Nuestra historia de amor es una de risas, crecimiento y
              apoyo inquebrantable el uno al otro.
            </p>
            <p className="text-lg text-text leading-relaxed mt-4">
              A través de los altibajos, hemos crecido juntos, aprendiendo el
              uno del otro y fortaleciendo nuestro vínculo cada día. Cada
              capítulo de nuestra historia es un testimonio del amor verdadero y
              duradero que compartimos.
              <br />
            </p>
            <div className="flex justify-end mt-4">
              <span className="pt-4 font-bold text-left text-2xl">
                14/04/2024 💗{" "}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={img}
              alt="Nuestra primera foto juntos"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
