import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs.map(doc => (
        <motion.div
          className="img-wrap"
          key={doc.id}
          onClick={() => setSelectedImg(doc.url)}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={doc.url}
            alt="uploaded-img"
            initial={{ opacity: 0, y: '-50px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div className="overlay" whileHover={{ opacity: 0 }}></motion.div>
        </motion.div>
      ))}
    </div>
  );
};
