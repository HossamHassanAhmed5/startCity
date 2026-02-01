import React from 'react';

interface PartnerLogoProps {
  name: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name }) => {
  // In a real application, you would use actual logos
  return (
    <div className="flex items-center justify-center h-12">
      <div className="text-neutral-400 font-medium text-lg">{name}</div>
    </div>
  );
};

export default PartnerLogo;