import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useState, Suspense, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import { useMediaQuery, Heading } from "@chakra-ui/react";
import Sun from "../Components/Sun";
import { useRouter } from "next/router";
import css from "../styles/Home.module.css";
import Contact from "../Components/Contact";
import * as THREE from "three";
import { forwardRef, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Navbar from "../Components/Navbar";
import AboutMe from "../Components/AboutMe";
//

const ShipModel = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/model.gltf");
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Mat1}
        material-color="blue"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
        material-envMapIntensity={0.2}
        material-color="white"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_4.geometry}
        material={materials.Mat4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_6.geometry}
        material={materials.Window}
      />
    </group>
  );
});

const Index = () => {
  const [hidden, setVisible] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 775px)");
  const router = useRouter();

  const handleClick = (e) => {
    const emotionSelected = e.object.model;

    if (emotionSelected === "tmbd") {
      window.open("https://github.com/alejaramos/movie-search-like-TMBD");
    } else if (emotionSelected === "ecommerce") {
      window.open("https://github.com/alejaramos/Ecommerce");
    } else if (emotionSelected === "crud") {
      window.open("https://abm-kappa.vercel.app/");
    } else if (emotionSelected === "wow") {
      window.open("https://github.com/alejaramos/magazine-wow");
    }
  };

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const ship = useRef();

  return (
    <>
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <Box id="containerSunContent" position="relative" bg="black">
        <h1
          id="Projects"
          className={isMobile ? css.responsiveTitle : css.tittle}
        >
          <span style={{ fontSize: "0.5em" }}></span>
          <br />
          <span>My portfolio</span>
        </h1>
        <p className={css.warningText} >
          You can move around in this component and take a closer look at the 3D
          elements. Each of my crew ships stores my projects.
        </p>

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

            <ShipModel position={[-4.5, 0, 0]} ref={ship} />
            <mesh
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              position={[-4.5, 0, 0]}
              onClick={handleClick}
              model="tmbd"
            >
              <sphereBufferGeometry args={[2, 16, 16]} />
              <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />

              <Html distanceFactor={25} position={[0, 0, -1]}>
                <h1 className={css.emotion}>movie search</h1>
              </Html>
            </mesh>

            <ShipModel position={[4.5, 0, 0]} ref={ship} />
            <mesh
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              position={[4.5, 0, 0]}
              onClick={handleClick}
              model="ecommerce"
            >
              <sphereBufferGeometry args={[2, 16, 16]} />
              <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />
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

            <ShipModel position={[2, 0, 5]} ref={ship} />
            <mesh
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              position={[2, 0, 5]}
              onClick={handleClick}
              model="crud"
            >
              <sphereBufferGeometry args={[2, 16, 16]} />
              <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />
              <Html
                distanceFactor={25}
                position={[0, 0, -1]}
                occlude
                onOcclude={setVisible}
              >
                <h1 className={css.emotion}>CRUD system </h1>
              </Html>
            </mesh>

            <ShipModel position={[-2, 0, -5]} ref={ship} />
            <mesh
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              position={[-2, 0, -5]}
              onClick={handleClick}
              model="wow"
            >
              <sphereBufferGeometry args={[2, 16, 16]} />
              <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />
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

      <Contact></Contact>
    </>
  );
};

Index.displayName = "MyApp";

export default Index;
