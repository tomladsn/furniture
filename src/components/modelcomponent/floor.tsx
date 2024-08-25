import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useBox } from '@react-three/cannon';

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh;
    Plane_2: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    floor: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Floor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/environment.glb') as GLTFResult;

  // Use useBox to create physics bodies for Plane_1 and Plane_2
  const [plane1Ref] = useBox(() => ({
    args: [5.427, 5.427, 0.1], // Adjust the args to match the mesh's dimensions
    type: 'Static', // Static means it doesn't move but collides
    position: [0, 0, 0], // Adjust based on actual position in your scene
  }));

  const [plane2Ref] = useBox(() => ({
    args: [5.427, 5.427, 0.1], // Adjust the args to match the mesh's dimensions
    type: 'Static', // Static means it doesn't move but collides
    position: [0, 0, 0], // Adjust based on actual position in your scene
  }));

  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI, 0]} scale={5.427}>
        <pointLight
          position={[0, 0, 1]}
          intensity={10}
          castShadow
          color="white"
        />
        <mesh ref={plane1Ref as React.MutableRefObject<THREE.Mesh>} geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh ref={plane2Ref as React.MutableRefObject<THREE.Mesh>} geometry={nodes.Plane_2.geometry} material={materials.floor} />
      </group>
    </group>
  );
}

useGLTF.preload('/environment.glb');
export default Floor;
