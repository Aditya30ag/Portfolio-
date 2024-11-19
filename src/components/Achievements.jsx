import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Achievement = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH ;
  return (
      <Image
        src={publicPath+"/images/background1.jpg"}
        alt="img"
        width={500}
        height={115} style={{borderRadius:"20px",backgroundSize:"cover",position:"absolute",zIndex:1}}
      />
  );
};

export default Achievement;