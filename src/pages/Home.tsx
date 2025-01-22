import React from 'react';
import { ArrowRight, Bot, Zap, BarChart, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Outsmart your competitors with AI-Powered solutions
              </h1>
              <p className="text-xl mb-8">
                Streamline operations, boost efficiency, and drive growth with
                our cutting-edge automation solutions.
              </p>
              <div className="space-x-4">
                <a
                  href="#book-demo"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-md font-semibold"
                >
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#learn-more"
                  className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-200 font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Bot className="h-64 w-64 mx-auto text-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900" id="learn-more">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Outsmart AI?
            </h2>
            <p className="text-xl text-gray-300">
              We deliver intelligent solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Lightning Fast
              </h3>
              <p className="text-gray-300">
                Accelerate your business processes with our rapid automation
                solutions
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <ArrowRight className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Time-Saving
              </h3>
              <p className="text-gray-300">
                Focus on what matters most by letting automation handle
                repetitive and time-consuming tasks. Save hours every day and
                boost overall productivity effortlessly.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-500/20">
              <Settings className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Customizable
              </h3>
              <p className="text-gray-300">
                Tailored solutions that adapt to your unique business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black" id="book-demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-md hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-md font-semibold"
          >
            Schedule Your Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
