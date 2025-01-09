import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoveNote = () => {
  const img = "/image/cart.png";

  return (
    <section
      id="nota-de-amor"
      className="bg-love-note bg-contain bg-center bg-no-repeat sm:bg-repeat m-6 sm:m-0 py-6 my-10 rounded-3xl"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold text-center text-primary pb-8 sm:pb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Una Nota Solo Para Ti
      </motion.h2>
      <div className="flex relative justify-center -translate-y-16">
        <a href="">
          <Image
            src={img}
            alt="Carta de amor"
            width={400}
            height={400}
            className="rounded-lg cursor-pointer"
          />
          <div className="flex justify-center">
            <span className="absolute top-80 uppercase font-bold">
              Haz click en la carta
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LoveNote;
