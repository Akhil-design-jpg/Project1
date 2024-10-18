import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 border-4 h-80 w-80 rounded-lg">
      <div className="icon-container">{icon}</div>
      <h3 className="font-bold mt-2 text-xl mb-4 text-black">{title}</h3>
      <p className="text-center text-lg text-black font-semibold">{description}</p>
      <div className="flex gap-2">
        <button className="mt-4 text-violet-900 text-sm font-bold">EXPLORE THIS SERVICE</button>
        <div className="mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4c1d95" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
