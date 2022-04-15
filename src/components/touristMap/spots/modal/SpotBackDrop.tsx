import React from 'react';
import { motion } from 'framer-motion';
import "./SpotModal.css"

interface SpotBackDropProps {
  onClick: any;
}

const SpotBackDrop: React.FC<SpotBackDropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className="modal__overlay"
      onClick={onClick}
      initial={{ opacitiy: 0 } as any}
      animate={{ opacitiy: 1 } as any}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default SpotBackDrop;
