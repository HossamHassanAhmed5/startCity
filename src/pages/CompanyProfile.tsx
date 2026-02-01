import React from 'react';
import { Building2, MapPin, Users, Globe, Mail, Phone, Calendar, Award } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-6 left-6 flex items-end space-x-6">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-white pb-2">
                <h1 className="text-3xl font-bold mb-1">TechCorp Solutions</h1>
                <p className="text-blue-100 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Company</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TechCorp Solutions is a leading technology company specializing in innovative software solutions 
                for enterprise clients. Founded in 2015, we have grown from a small startup to a recognized 
                leader in the industry, serving Fortune 500 companies worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to transform businesses through cutting-edge technology, delivering solutions 
                that drive efficiency, innovation, and growth. We pride ourselves on our collaborative approach 
                and commitment to excellence in everything we do.
              </p>
            </div>

            {/* Services Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Solutions</h3>
                  <p className="text-gray-600 text-sm">Scalable cloud infrastructure and migration services</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600 text-sm">Advanced AI solutions for business automation</p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Custom Software</h3>
                  <p className="text-gray-600 text-sm">Tailored software development for unique needs</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Consulting</h3>
                  <p className="text-gray-600 text-sm">Strategic technology consulting and planning</p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JS
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">John Smith</h3>
                    <p className="text-gray-600 text-sm">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    AD
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Alice Davis</h3>
                    <p className="text-gray-600 text-sm">Chief Technology Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Employees</p>
                    <p className="font-semibold text-gray-900">250-500</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Founded</p>
                    <p className="font-semibold text-gray-900">2015</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Industry</p>
                    <p className="font-semibold text-gray-900">Technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="font-semibold text-blue-600">www.techcorp.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900">contact@techcorp.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600">150+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <p className="text-2xl font-bold text-green-600">98%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <p className="text-2xl font-bold text-purple-600">50+</p>
                  <p className="text-sm text-gray-600">Enterprise Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}