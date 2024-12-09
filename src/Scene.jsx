import React, {useRef} from "react";
import * as THREE from "three";
import { useFrame, useThree, } from "@react-three/fiber";
import { useControls } from 'leva'
import { Text, MeshTransmissionMaterial,  } from "@react-three/drei";

const SceneCube = () => {
  const { viewport } = useThree();
const mesh = useRef();

useFrame(() => {
    mesh.current.rotation.z += 0.004
    mesh.current.rotation.x += 0.005
})
const material = useControls({
    thickness:{value: 0.2, min: 0, max: 3, step: 0.05},
    roughness:{value: 0.1, min: 0, max: 1, step: 0.1},
    transmission:{value: 1, min: 0, max: 1, step: 0.1},
    ior:{value: 1.2, min: 0, max: 3, step: 0.1},
    chromaticAberration:{value: 0.2, min: 0, max: 1},
    
})

  return (
    <group>
      <group scale={viewport.height / 3}>
        <Text fontSize={0.4} position={[0, 0.5, -1]}>
          hello everyone
        </Text>
        <mesh ref={mesh}>
            <ambientLight/>
          <MeshTransmissionMaterial {...material} />
          <boxGeometry  position={[0, 2, 0]} args={[1, 1]} />
        </mesh>
        
      </group>

    </group>
  );
};

export default SceneCube;
