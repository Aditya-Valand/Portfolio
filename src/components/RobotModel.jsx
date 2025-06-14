// src/RobotModel.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function RobotModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, group);

  // Play the first animation on load
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play(); // play first animation
    }
  }, [actions]);

  return <primitive ref={group} object={scene} {...props} />;
}
