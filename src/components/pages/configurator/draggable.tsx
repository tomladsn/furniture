import React, { useRef } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';

extend({ Group: THREE.Group });

type DraggableProps = {
  children: React.ReactNode;
};

const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const ref = useRef<THREE.Group>(null!);

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      ref.current.position.set(x / aspect, -y / aspect, 0);
    },
  );

  return (
    <primitive object={new THREE.Group()} ref={ref} {...bind()}>
      {children}
    </primitive>
  );
};

export default Draggable;
