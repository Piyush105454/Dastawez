import React from 'react';
import Image from 'next/image';

interface PYQ {
  path: string;
  thumbnail: string;
  branch: string;
  year: string;
  type: string;
  semester: string;
}

interface PYQListProps {
  pyqs: PYQ[];
}

const PYQList: React.FC<PYQListProps> = ({ pyqs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pyqs.map((pyq) => (
        <div key={pyq.path} className="bg-white p-4 rounded-lg shadow-md">
          <a href={pyq.path} target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-semibold mb-2">
              📘 {pyq.branch} {pyq.semester} <br />
              🎓 {pyq.year} <br />
              📅 {pyq.type}
            </h3>
            <div className="img-wrapper">
              <Image src={`/${pyq.thumbnail}`} alt={`${pyq.branch} ${pyq.year} ${pyq.type}`} width={500} height={500} className="w-full h-full object-contain rounded-md mb-2" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PYQList;
