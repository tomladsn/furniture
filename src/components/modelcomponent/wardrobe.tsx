import * as THREE from 'three';
import React, { forwardRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    base_2_Mat_0_1: THREE.Mesh;
    base_2_Mat_0_2: THREE.Mesh;
    base_2_Mat_0_3: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    door: THREE.MeshStandardMaterial;
    handle: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type WardrobeProps = JSX.IntrinsicElements['group'] & {
  showDoor: boolean;
  showHandle: boolean;
};

const Wardrobe = forwardRef<THREE.Group, WardrobeProps>(({ showDoor, showHandle, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/wardrobe.glb') as GLTFResult;
  const bbox = new THREE.Box3().setFromObject(nodes.base_2_Mat_0_2);
  const size = bbox.getSize(new THREE.Vector3());

  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[1, 0.5, -7.7]} scale={0.025}>
        <mesh geometry={nodes.base_2_Mat_0_1.geometry} material={materials.material} />
        {showDoor && <mesh geometry={nodes.base_2_Mat_0_2.geometry} material={materials.door} />}
        {showHandle && <mesh geometry={nodes.base_2_Mat_0_3.geometry} material={materials.handle} />}
        <Html position={[size.x / 2, size.y, 0]} center>
          <div style={{ background: 'white', padding: '2px', borderRadius: '3px', fontSize: '12px' }}>
            {`Width: ${size.x.toFixed(2)}m`}
          </div>
        </Html>
        <Html position={[0, size.y / 2, size.z / 2]} center>
          <div style={{ background: 'white', padding: '2px', borderRadius: '3px', fontSize: '12px' }}>
            {`Height: ${size.y.toFixed(2)}m`}
          </div>
        </Html>
        <Html position={[0, size.y, size.z / 2]} center>
          <div style={{ background: 'white', padding: '2px', borderRadius: '3px', fontSize: '12px' }}>
            {`Depth: ${size.z.toFixed(2)}m`}
          </div>
        </Html>
      </group>
    </group>
  );
});

useGLTF.preload('/wardrobe.glb');

export default Wardrobe;
