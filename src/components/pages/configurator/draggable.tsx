import React, { useRef } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';

extend({ Group: THREE.Group });

type DraggableProps = {
  children: React.ReactNode;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDrag?: (position: [number, number, number]) => void;  // Pass updated position back
};

const Draggable: React.FC<DraggableProps> = ({ children, onDragStart, onDragEnd, onDrag }) => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const ref = useRef<THREE.Group>(null!);

  const bind = useDrag(
    ({ offset: [x, y], first, last }) => {
      if (first && onDragStart) onDragStart();
      if (last && onDragEnd) onDragEnd();

      const currentX = ref.current.position.x;
      const currentY = ref.current.position.y;

      // Update X and Z positions (based on offset)
      const updatedX = x / aspect;   // Scale movement along X axis
      const updatedZ = y / aspect;   // Map Y offset to Z axis

      ref.current.position.set(updatedX, currentY, updatedZ);  // Update X and Z positions

      if (onDrag) {
        // Pass the new position back to the parent
        onDrag([updatedX, currentY, updatedZ]);
      }
    }
    // Removed `axis: 'xy'` here
  );

  return (
    <primitive object={new THREE.Group()} ref={ref} {...bind()} >
      {children}
    </primitive>
  );
};

export default Draggable;
