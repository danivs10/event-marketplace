import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Event data:', eventData);
    // Redirect to the provider dashboard
    navigate('/provider/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-text mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-text">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-text">Description</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
            rows={4}
            className="input-field"
          ></textarea>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-text">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-text">Category</label>
          <select
            id="category"
            name="category"
            value={eventData.category}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select a category</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="birthday">Birthday</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-text">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;