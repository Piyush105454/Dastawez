'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function GovernmentServicesScript() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);

  // 🔍 Search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // 📋 Open modal
  const openModal = (serviceName) => {
    setSelectedService(serviceName);
    setModalOpen(true);
    setShowSuccess(false);
  };

  // ❌ Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // ✅ Fake form submit with success animation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setModalOpen(false);
      setShowSuccess(false);
    }, 2500);
  };

  // 🕒 Generate timeslots dynamically
  useEffect(() => {
    const now = new Date();
    let startHour = now.getHours() + 1;
    if (startHour >= 24) startHour -= 24;

    const slots = [];
    for (let i = 0; i < 24; i++) {
      let hour = (startHour + i) % 24;
      const displayHour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      slots.push({
        value: `${String(hour).padStart(2, '0')}:00`,
        label: `${displayHour}:00 ${ampm}`,
      });
    }
    setTimeSlots(slots);
  }, []);

  return (
    <>
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search services..."
        onChange={handleSearch}
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      />

      {/* 📱 Mobile Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {menuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 p-6"
          >
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🏛️ Service Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {['Passport Renewal', 'Driving License', 'Property Tax'].map((service) => (
          <AnimatePresence key={service}>
            {service.toLowerCase().includes(searchTerm) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center"
              >
                <span>{service}</span>
                <button
                  onClick={() => openModal(service)}
                  className="px-3 py-1 bg-green-600 text-white rounded-md"
                >
                  Apply Now
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* 📋 Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-white p-6 rounded-xl shadow-lg w-96"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Apply for {selectedService}</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <select className="w-full p-2 border rounded" required>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg"
                >
                  Submit
                </button>
              </form>

              {/* ✅ Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center"
                  >
                    ✅ Application submitted successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
