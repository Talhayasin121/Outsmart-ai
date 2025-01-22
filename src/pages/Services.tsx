import React from 'react';
import { Cpu, Workflow, Code, MessageSquare } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive automation solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <Cpu className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                AI Voice Agent Development
              </h3>
              <p className="text-gray-300 mb-4">
                Integrate Voice agents into your Businesses That:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Work for you 24/7</li>
                <li>• More efficient than humans</li>
                <li>• Super cheap</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <Workflow className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Process Automation
              </h3>
              <p className="text-gray-300 mb-4">
                Streamline your business processes with intelligent automation
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Workflow Optimization</li>
                <li>• Task Automation</li>
                <li>• Document Processing</li>
                <li>• Quality Assurance</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <Code className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Custom Development
              </h3>
              <p className="text-gray-300 mb-4">
                Tailored solutions designed specifically for your business
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• API Development</li>
                <li>• System Integration</li>
                <li>• Custom Applications</li>
                <li>• Legacy System Modernization</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <MessageSquare className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Chatbot Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Intelligent conversational AI for customer service
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom Chatbot Development</li>
                <li>• Natural Language Understanding</li>
                <li>• Multi-channel Integration</li>
                <li>• Analytics and Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Automate Your Business?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-md hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-md font-semibold"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
