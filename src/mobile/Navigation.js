import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen }) => {
  const { t } = useTranslation();

  return (
    <motion.ul variants={variants}>
      <MenuItem toggleOpen={toggleOpen} link={[t("nav.projects"), "/"]} i={0} />
      <MenuItem
        toggleOpen={toggleOpen}
        link={[t("nav.aboutMe"), "/about"]}
        i={1}
      />
      <MenuItem
        toggleOpen={toggleOpen}
        link={[t("nav.contact"), "/contact"]}
        i={2}
      />
    </motion.ul>
  );
};
