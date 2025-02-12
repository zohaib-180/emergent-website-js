import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WrapperAos = ({children}) => {
     useEffect(() => {
          Aos.init({
            duration: 1000, // Animation duration (optional)
            once: true,     // Animation only happens once (optional)
          });
        }, []);
  return (
    <div>{children}</div>
  )
}

export default WrapperAos