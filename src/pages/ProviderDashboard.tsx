import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Calendar, DollarSign } from 'lucide-react';

const ProviderDashboard: React.FC = () => {
  const mockEvents = [
    { id: 1, title: 'Wedding Planning Package', bookings: 5, revenue: 5000 },
    { id: 2, title: 'Corporate Event Management', bookings: 3, revenue: 7500 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-text">Provider Dashboard</h1>
        <Link to="/provider/create-event" className="btn-primary flex items-center">
          <PlusCircle className="w-5 h-5 mr-2" />
          Create New Event
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-text">Your Events</h2>
          {mockEvents.map(event => (
            <div key={event.id} className="mb-4 p-4 border border-gray-200 rounded-md">
              <h3 className="font-semibold text-lg text-text">{event.title}</h3>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {event.bookings} bookings
                </span>
                <span className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  ${event.revenue}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-text">Analytics</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text">Total Bookings</h3>
              <p className="text-3xl font-bold text-primary">8</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Total Revenue</h3>
              <p className="text-3xl font-bold text-primary">$12,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;