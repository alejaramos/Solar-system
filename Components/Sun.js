import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

export default function Sun() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);


  const { scale } = useSpring({
    scale: active ? 1.5 : 2.5,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <animated.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <sphereBufferGeometry />
      <meshStandardMaterial color="#eda22f" />
    </animated.mesh>
  );
}
