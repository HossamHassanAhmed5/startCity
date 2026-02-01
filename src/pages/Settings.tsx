import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PersonaSelector from '../components/auth/PersonaSelector';
import { 
  User, Bell, Shield, CreditCard, Globe, 
  Save, Eye, EyeOff, Trash2, Download, Crown
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const { user, updateUser, persona } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || 'John',
    lastName: user?.name?.split(' ')[1] || 'Doe',
    email: user?.email || 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: user?.company || 'TechFlow AI',
    role: 'Founder & CEO',
    bio: 'Building the future of AI-powered workflow automation.',
    location: 'San Francisco, CA',
    website: 'https://techflow.ai',
    linkedin: 'johndoe',
    twitter: 'johndoe'
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    pushNotifications: true,
    weeklyDigest: true,
    eventReminders: true,
    fundingAlerts: false,
    networkingRequests: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationChange = (key: string) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key as keyof typeof notifications]
    });
  };

  const handleSave = () => {
    updateUser({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company
    });
    alert('Settings saved successfully!');
  };

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-neutral-500">Manage your account and preferences</p>
        </div>
        <button onClick={handleSave} className="btn-primary">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === 'profile' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-50'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('persona')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === 'persona' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-50'
                }`}
              >
                <Crown className="h-5 w-5 mr-3" />
                Persona
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === 'notifications' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-50'
                }`}
              >
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === 'security' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-50'
                }`}
              >
                <Shield className="h-5 w-5 mr-3" />
                Security
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === 'billing' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-50'
                }`}
              >
                <CreditCard className="h-5 w-5 mr-3" />
                Billing
              </button>
              <button
                onClick={() => setActiveTab('preferences')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === 'preferences' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-50'
                }`}
              >
                <Globe className="h-5 w-5 mr-3" />
                Preferences
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-md p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-bold mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'persona' && (
              <div>
                <h2 className="text-lg font-bold mb-6">Persona Management</h2>
                <p className="text-neutral-600 mb-6">
                  Switch between different personas to access role-specific features and tools.
                </p>
                <PersonaSelector showCurrent={true} />
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </p>
                          <p className="text-sm text-neutral-500">
                            {key === 'emailUpdates' && 'Receive email notifications about platform updates'}
                            {key === 'pushNotifications' && 'Get push notifications on your device'}
                            {key === 'weeklyDigest' && 'Weekly summary of your activity and opportunities'}
                            {key === 'eventReminders' && 'Reminders about upcoming events you\'re attending'}
                            {key === 'fundingAlerts' && 'Notifications about new funding opportunities'}
                            {key === 'networkingRequests' && 'Alerts when someone wants to connect with you'}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handleNotificationChange(key)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-bold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5 text-neutral-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-neutral-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <button className="btn-primary">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <h2 className="text-lg font-bold mb-6">Billing & Subscription</h2>
                <div className="space-y-6">
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold">
                          {persona === 'explorer' && 'Free Plan'}
                          {persona === 'dream-builder' && 'Dream Builder Plan'}
                          {persona === 'city-creator' && 'City Creator Plan'}
                          {persona === 'enterprise-citizen' && 'Enterprise Plan'}
                          {persona === 'investor' && 'Investor Plan'}
                        </h3>
                        <p className="text-neutral-600">
                          {persona === 'explorer' && '$0/month'}
                          {persona === 'dream-builder' && '$29/month'}
                          {persona === 'city-creator' && '$99/month'}
                          {persona === 'enterprise-citizen' && 'Custom pricing'}
                          {persona === 'investor' && '$199/month'}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">
                      Next billing date: April 15, 2025
                    </p>
                    <div className="flex gap-3">
                      <button className="btn-outline">
                        Change Plan
                      </button>
                      {persona !== 'explorer' && (
                        <button className="btn-outline">
                          Cancel Subscription
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div>
                <h2 className="text-lg font-bold mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Language
                    </label>
                    <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Timezone
                    </label>
                    <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                      <option value="PST">Pacific Standard Time (PST)</option>
                      <option value="EST">Eastern Standard Time (EST)</option>
                      <option value="CST">Central Standard Time (CST)</option>
                      <option value="MST">Mountain Standard Time (MST)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;