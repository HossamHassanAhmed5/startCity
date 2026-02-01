import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/navigation/DashboardSidebar';
import DashboardHeader from '../components/navigation/DashboardHeader';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-neutral-100">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="container-custom">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;