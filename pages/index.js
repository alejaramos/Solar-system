import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useState, Suspense, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import {
  OrbitControls,
  useTexture,
  Html,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import { useMediaQuery, Heading } from "@chakra-ui/react";
import Sun from "../Components/Sun"
import { useRouter } from "next/router";
import css from "../styles/Home.module.css";

//

export default function Index() {
  const [hidden, setVisible] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 775px)");
  const router = useRouter();

  const handleClick = (e) => {

    const emotionSelected = e.object.model;

    if( emotionSelected === "tmbd"){
      router.push("https://github.com/alejaramos/Tmdb") 
      

    }else if(emotionSelected === "ecommerce" ){
      router.push("https://github.com/alejaramos/Ecommerce") 

    }else if(emotionSelected === "crud" ){
      router.push("https://abm-kappa.vercel.app/")
    }else if(emotionSelected === "wow" ){
      router.push("https://github.com/joaquinreiners/p5-dev") 

    }
    
  };

  return (
    <Box id="containerSunContent" position="relative">
      <h1 className={isMobile ? css.responsiveTitle : css.tittle}>

        Ingrid Ramos <br />
        <span style={{ fontSize: "0.5em" }}>My</span>
        <br />
        <span>My portfolio</span>
      </h1>

      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          {/* opcion autoRotate */}
          <OrbitControls autoRotate />

          <mesh position={[-3.5, 0, -3]} onClick={handleClick} model="tmbd">
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#936c5d" />
            <Html distanceFactor={25} position={[0, 0, -1]}>
              <h1 className={css.emotion}>movie search</h1>
            </Html>
          </mesh>

          <mesh position={[-4.5, 0, 0]} onClick={handleClick} model="ecommerce">
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#2c91bf" />
            <Html
              style={{
                width: "100px",
              }}
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>E-commerce </h1>
            </Html>
          </mesh>

          <mesh position={[-3.5, 0, 3]} onClick={handleClick} model="crud">
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ffe32f" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>CRUD system </h1>
            </Html>
          </mesh>
          <mesh position={[-1.2, 0, 4.5]} onClick={handleClick} model="wow">
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#c8292d" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Magazine wow </h1>
            </Html>
          </mesh>
    
          <Sun />
          <ambientLight intensity={0.1} />
          <directionalLight />
        </Canvas>
      </div>
    </Box>
  );
}
