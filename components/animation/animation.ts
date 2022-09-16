export const introContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.4,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const introItems = {
  hidden: { opacity: 0, y: 90 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};


export const projectContainer = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
}

