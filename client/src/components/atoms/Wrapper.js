import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
const WrapperIn = styled(motion.div)`
color:white;
width:100%;
padding: 20% 40px 40px 40px;
text-align:center;
padding:${({up}) => up?'5% 40px':'20% 40px '};
max-height:${({max}) => max?'100vh':'auto'};
`
const pageVariants = {
    initial: {
      y: '-100%',
    },
    in: {
        y: 0,
    },
    out: {
        y: '100%',
    },
  }
const Wrapper = ({children,max,up})=><WrapperIn up={up} max={max} initial="initial"
animate="in"
exit="out"
variants={pageVariants}
transition={{
    delay: .5,
    duration:.5
  }}
>{children}</WrapperIn>
export default Wrapper;
