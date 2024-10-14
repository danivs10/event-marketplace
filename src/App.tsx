import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import ProviderDashboard from './pages/ProviderDashboard';
import CreateEvent from './pages/CreateEvent';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('your_stripe_publishable_key_here');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<EventList />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/provider/dashboard" element={<ProviderDashboard />} />
              <Route path="/provider/create-event" element={<CreateEvent />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Elements>
    </Router>
  );
}

export default App;