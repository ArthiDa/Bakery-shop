import React from 'react';
import { motion as m } from 'framer-motion';

const AboutUs = () => {
    return (
        <m.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 0 }}>
            This is AboutUs
        </m.div>
    );
};

export default AboutUs;