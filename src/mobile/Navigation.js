import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen }) => (
  <motion.ul variants={variants}>
    {Object.entries(items).map(([i, link]) => (
      <MenuItem toggleOpen={toggleOpen} i={i} key={i} link={link} />
    ))}
  </motion.ul>
);

const items = {
  // 0: ['Travail'],
  0: ["Projets"],
  1: ["A propos de moi", "about"],
  2: ["Contact", "contact"],
};
