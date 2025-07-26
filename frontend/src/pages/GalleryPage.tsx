import React from 'react';
import { motion, Variants } from 'framer-motion';
import PageNavigation from '../components/PageNavigation';

const galleryItems = [
    { id: 1, src: 'https://picsum.photos/seed/gallery1/500/500', alt: 'Team working on a drone' },
    { id: 2, src: 'https://picsum.photos/seed/gallery2/500/500', alt: 'Close-up of a drone propeller' },
    { id: 3, src: 'https://picsum.photos/seed/gallery3/500/500', alt: 'The team celebrating a win' },
    { id: 4, src: 'https://picsum.photos/seed/gallery4/500/500', alt: 'Drone in mid-flight during testing' },
    { id: 5, src: 'https://picsum.photos/seed/gallery5/500/500', alt: 'A team member soldering a circuit board' },
    { id: 6, src: 'https://picsum.photos/seed/gallery6/500/500', alt: 'Presenting a project at a tech fest' },
    { id: 7, src: 'https://picsum.photos/seed/gallery7/500/500', alt: '3D model of a new drone design' },
    { id: 8, src: 'https://picsum.photos/seed/gallery8/500/500', alt: 'Group photo of the entire team' },
    { id: 9, src: 'https://picsum.photos/seed/gallery9/500/500', alt: 'Drone capturing aerial footage' },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

const GalleryPage = () => {
    return (
        <motion.div
            className="bg-primary min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
            >
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Gallery</h1>
                    <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
                        A glimpse into our world of innovation, teamwork, and late-night builds.
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {galleryItems.map(item => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="group relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300"
                            whileHover={{ scale: 1.05, zIndex: 200, boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)' }}
                        >

                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <PageNavigation
                prevLink={{ path: '/achievements', label: '← Our Achievements' }}
                nextLink={{ path: '/team', label: 'Meet the Team →' }}
            />
        </motion.div>
    );
};

export default GalleryPage;
