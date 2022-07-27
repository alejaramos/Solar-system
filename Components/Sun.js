import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

export default function Sun() {

  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

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
      scale={scale}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <sphereBufferGeometry />
      <meshStandardMaterial color="#eda22f" />
    </animated.mesh>
  );
}
