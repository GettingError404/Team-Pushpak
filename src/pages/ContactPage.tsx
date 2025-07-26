import React from 'react';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-support hover:text-primary transition-colors">
        <span className="text-accent">{icon}</span>
        <span>{label}</span>
    </a>
);

const ContactPage: React.FC = () => {
  return (
    <div className="bg-support-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-left">
                    <h1 className="text-4xl font-bold text-primary sm:text-5xl">Get in Touch</h1>
                    <p className="mt-4 text-lg text-support leading-relaxed">
                        Have a project idea, a sponsorship opportunity, or interested in joining the team? We'd love to hear from you. Reach out to us through the form or connect with us on social media.
                    </p>
                    <div className="mt-8 space-y-4">
                        <SocialLink 
                            href="https://linkedin.com" 
                            label="/team-pushpak"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                        />
                        <SocialLink 
                            href="https://github.com" 
                            label="/team-pushpak"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
                        />
                         <SocialLink 
                            href="https://instagram.com" 
                            label="@team.pushpak"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>}
                        />
                    </div>
                </div>
                <div className="bg-neutral p-8 rounded-lg shadow-lg">
                    <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-support">Full Name</label>
                        <input type="text" name="name" id="name" className="mt-1 block w-full bg-support-light border-transparent rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm text-support p-3" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-support">Email Address</label>
                        <input type="email" name="email" id="email" className="mt-1 block w-full bg-support-light border-transparent rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm text-support p-3" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-support">Message</label>
                        <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-support-light border-transparent rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm text-support p-3"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-neutral bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                        Send Message
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
