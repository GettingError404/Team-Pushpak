import React from 'react';

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

const GalleryPage: React.FC = () => {
    return (
        <div className="bg-neutral min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary sm:text-5xl">Gallery</h1>
                    <p className="mt-4 text-xl text-support max-w-3xl mx-auto">
                        A glimpse into our world of innovation, teamwork, and late-night builds.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryItems.map(item => (
                        <div key={item.id} className="group aspect-w-1 aspect-h-1">
                            <img 
                                src={item.src} 
                                alt={item.alt}
                                className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
