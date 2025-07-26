import React from 'react';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-accent text-primary mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-support">{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-support-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-primary sm:text-5xl">Our Story</h1>
                <p className="mt-4 text-xl text-support">
                    Forging a path of innovation from classroom theory to real-world application.
                </p>
            </div>
            
            <div className="mt-16 max-w-5xl mx-auto bg-neutral p-8 rounded-lg shadow-lg space-y-6">
                <p className="text-lg text-support leading-relaxed">
                    Team Pushpak was founded in 2021 at the esteemed [Your College Name] by a group of passionate engineering students. United by a shared fascination for robotics and autonomous systems, we set out to create a platform for hands-on learning, collaborative innovation, and competitive excellence.
                </p>
                <p className="text-lg text-support leading-relaxed">
                    Our name, "Pushpak," is inspired by the mythical flying chariot, a symbol of advanced ancient technology and boundless potential. It represents our ambition to not just build drones, but to pioneer intelligent aerial systems that can positively impact society—from environmental monitoring to emergency response.
                </p>
            </div>
            
            <div className="max-w-5xl mx-auto mt-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard 
                  title="Innovation" 
                  description="We constantly challenge the status quo, exploring new technologies and creative solutions to complex problems."
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707m12.728 0l.707.707M12 21v-1m0-16a8 8 0 100 16 8 8 0 000-16z" /></svg>}
                />
                <ValueCard 
                  title="Collaboration" 
                  description="We believe the best ideas are born from diverse perspectives. We foster a culture of teamwork and open communication."
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                />
                <ValueCard 
                  title="Excellence" 
                  description="From design and fabrication to coding and testing, we are committed to the highest standards of quality and performance."
                   icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                />
              </div>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;
