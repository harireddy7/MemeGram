import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../hooks/useStorage';

export const ProgressBar = ({ file, resetFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      resetFile();
    }
  }, [url, resetFile]);

  return <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: `${progress}%` }}></motion.div>;
};
