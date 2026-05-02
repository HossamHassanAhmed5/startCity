import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AIAssistantProvider } from './contexts/AIAssistantContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Home from './pages/Home';
import StartupBuilder from './pages/StartupBuilder';
import KnowledgeCenter from './pages/KnowledgeCenter';
import Marketplace from './pages/Marketplace';
import FundingOpportunities from './pages/FundingOpportunities';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import CommunityHub from './pages/CommunityHub';
import PitchShowcase from './pages/PitchShowcase';
import StartupMap from './pages/StartupMap';
import Profile from './pages/Profile';
import Subscription from './pages/Subscription';
import Projects from './pages/Projects';

// Dashboard Pages
import MyStartup from './pages/MyStartup';
import Network from './pages/Network';
import Learning from './pages/Learning';
import Services from './pages/Services';
import DashboardFunding from './pages/DashboardFunding';
import DashboardEvents from './pages/DashboardEvents';
import Settings from './pages/Settings';
import Help from './pages/Help';

// City Creator Pages
import TeamBuilder from './pages/TeamBuilder';
import VeloraNetwork from './pages/VeloraNetwork';

// Persona-specific Pages
import ExplorerDashboard from './pages/ExplorerDashboard';
import CompanyProfile from './pages/CompanyProfile';
import InvestorDashboard from './pages/InvestorDashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AIAssistantProvider>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="startup-builder" element={<StartupBuilder />} />
          <Route path="knowledge-center" element={<KnowledgeCenter />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="funding" element={<FundingOpportunities />} />
          <Route path="events" element={<Events />} />
          <Route path="community" element={<CommunityHub />} />
          <Route path="pitch" element={<PitchShowcase />} />
          <Route path="map" element={<StartupMap />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="startup" element={<MyStartup />} />
          <Route path="team-builder" element={<TeamBuilder />} />
          <Route path="network" element={<Network />} />
          <Route path="velora-network" element={<VeloraNetwork />} />
          <Route path="learning" element={<Learning />} />
          <Route path="services" element={<Services />} />
          <Route path="funding" element={<DashboardFunding />} />
          <Route path="events" element={<DashboardEvents />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
          
          {/* Persona-specific routes */}
          <Route path="explorer" element={<ExplorerDashboard />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="investor" element={<InvestorDashboard />} />
          <Route path="wishlist" element={<ExplorerDashboard />} />
          <Route path="inspiration" element={<ExplorerDashboard />} />
          <Route path="progress" element={<ExplorerDashboard />} />
          <Route path="challenges" element={<CompanyProfile />} />
          <Route path="startup-directory" element={<InvestorDashboard />} />
          <Route path="analytics" element={<InvestorDashboard />} />
          <Route path="messages" element={<InvestorDashboard />} />
          <Route path="deal-flow" element={<InvestorDashboard />} />
          <Route path="portfolio" element={<InvestorDashboard />} />
          <Route path="bookmarks" element={<InvestorDashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </AIAssistantProvider>
    </AuthProvider>
  );
};

export default App;