import React from 'react'
import {motion} from 'framer-motion';

const pageVariants = {
    initial: {
      x: '100%',
    },
    in: {
        x: 0,
    },
    out: {
        x: '100%',
    },
  }
const OpacityMotion = ({children})=><motion.div initial="initial"
animate="in"
exit="out"
variants={pageVariants}
transition={{
    delay: .5,
    duration:.6
  }}
>{children}</motion.div>
export default OpacityMotion;
