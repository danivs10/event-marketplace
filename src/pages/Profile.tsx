import React, { useState } from 'react';
import { User, Calendar, Settings } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const mockBookings = [
    { id: 1, service: 'Wedding Planning', date: '2024-08-15', status: 'Confirmed' },
    { id: 2, service: 'Birthday Party', date: '2024-06-22', status: 'Pending' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        <div className="flex border-b mb-6">
          <button
            className={`py-2 px-4 ${activeTab === 'bookings' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('bookings')}
          >
            <Calendar className="w-5 h-5 inline-block mr-2" />
            My Bookings
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'settings' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="w-5 h-5 inline-block mr-2" />
            Settings
          </button>
        </div>

        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">My Bookings</h2>
            {mockBookings.map(booking => (
              <div key={booking.id} className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800">{booking.service}</h3>
                <p className="text-gray-600">Date: {booking.date}</p>
                <p className={`font-semibold ${booking.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {booking.status}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue="John Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;