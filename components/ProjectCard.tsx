// ... (other imports)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Projects } from '@/constants';

// ... (other imports)

// ... (other imports)

const ProjectCard = ({ image, title, text }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div
            onClick={handleFlip}
            className='relative w-[450px] h-[280px] rounded-md cursor-pointer overflow-hidden'
        >
            <motion.div
                className='flip-card-inner w-full h-full'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: 'normal' }}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{ zIndex: isFlipped ? 1 : 0 }}
            >
                {/* Front side of the card */}
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className={`w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4 ${isFlipped ? 'hidden' : ''}`}
                >
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                        Learn more &gt;
                    </div>
                </div>

                {/* Back side of the card */}
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className={`w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4 ${isFlipped ? '' : 'hidden'}`}
                >
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />

                    {/* Animated text entrance from left to right */}
                    <motion.div
                        className='flex flex-col gap-4 py-3'
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                        <p className='text-gray-200 text-[20px]'>{text}</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
