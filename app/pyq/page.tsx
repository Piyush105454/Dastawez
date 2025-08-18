import React from 'react';
import PYQList from '../../src/components/PYQList';
import pyqs from '../../public/pyq-data/pyqs.json';

const PYQPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">SOIT Previous Year Question Papers</h1>
      <PYQList pyqs={pyqs} />
    </div>
  );
};

export default PYQPage;
