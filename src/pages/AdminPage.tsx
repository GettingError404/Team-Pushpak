import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="bg-support-light min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-neutral p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
                <p className="mt-4 text-support">
                    Welcome, Admin. This is the central hub for managing the Team Pushpak website content.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Placeholder cards for admin actions */}
                    <div className="p-4 border rounded-lg hover:shadow-xl transition-shadow">
                        <h2 className="font-bold text-primary">Manage Projects</h2>
                        <p className="text-sm text-support">Add, edit, or remove project showcases.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:shadow-xl transition-shadow">
                        <h2 className="font-bold text-primary">Update Achievements</h2>
                        <p className="text-sm text-support">Post new awards and recognitions.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:shadow-xl transition-shadow">
                        <h2 className="font-bold text-primary">Edit Team Members</h2>
                        <p className="text-sm text-support">Update roles and add new members.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminPage;
