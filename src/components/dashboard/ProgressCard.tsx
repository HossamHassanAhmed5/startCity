import React from 'react';

interface ProgressCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'success';
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, description, icon, color }) => {
  // Color mapping
  const colorMap = {
    primary: {
      bg: 'bg-primary-50',
      text: 'text-primary-600',
      iconBg: 'bg-primary-100',
      progress: 'bg-primary-500',
    },
    secondary: {
      bg: 'bg-secondary-50',
      text: 'text-secondary-600',
      iconBg: 'bg-secondary-100',
      progress: 'bg-secondary-500',
    },
    accent: {
      bg: 'bg-accent-50',
      text: 'text-accent-600',
      iconBg: 'bg-accent-100',
      progress: 'bg-accent-500',
    },
    success: {
      bg: 'bg-success-50',
      text: 'text-success-600',
      iconBg: 'bg-success-100',
      progress: 'bg-success-500',
    },
  };

  const colors = colorMap[color];

  return (
    <div className={`${colors.bg} rounded-xl p-6`}>
      <div className="flex justify-between items-start mb-4">
        <p className="font-medium">{title}</p>
        <div className={`${colors.iconBg} p-2 rounded-full`}>
          <div className={colors.text}>{icon}</div>
        </div>
      </div>
      <div className="mb-1">
        <div className="flex items-baseline">
          <p className="text-2xl font-bold">{typeof value === 'number' ? `${value}%` : value}</p>
        </div>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
      {typeof value === 'number' && (
        <div className="w-full h-1 bg-neutral-200 rounded-full mt-4">
          <div 
            className={`h-1 rounded-full ${colors.progress}`} 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ProgressCard;