import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl font-display font-bold text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          OurLOVE
        </motion.h1>
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
                initial={false}
                animate={{
                  d: isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16",
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>
        <AnimatePresence>
          {(isMenuOpen ||
            (typeof window !== "undefined" && window.innerWidth >= 768)) && (
            <motion.ul
              className={`md:flex md:space-x-6 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none mt-2 md:mt-0 p-4 md:p-0`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              {["Nuestra Historia", "Playlist", "Nota de Amor"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      passHref
                    >
                      <motion.a
                        className="block py-2 md:py-0 text-text hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                      </motion.a>
                    </Link>
                  </motion.li>
                )
              )}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
