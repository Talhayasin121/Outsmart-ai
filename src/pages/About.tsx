import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Outsmart AI
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize business automation through artificial intelligence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded with a vision to make advanced automation accessible to businesses of all sizes,
                Outsmart AI has grown into a leading force in the AI automation industry.
              </p>
              <p className="text-gray-300 mb-4">
                Our team of experts combines deep technical knowledge with business acumen to deliver
                solutions that drive real results for our clients.
              </p>
              <p className="text-gray-300">
                We believe in the power of technology to transform businesses and create new
                opportunities for growth and innovation.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900 p-8 rounded-lg border border-green-500/20">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Client-Focused</h3>
              <p className="text-gray-300">
                We put our clients first and work tirelessly to ensure their success
              </p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg border border-green-500/20">
              <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Innovation</h3>
              <p className="text-gray-300">
                We constantly push boundaries to deliver cutting-edge solutions
              </p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg border border-green-500/20">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Sarah Johnson</h3>
              <p className="text-gray-300">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Michael Chen</h3>
              <p className="text-gray-300">CTO</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Emily Rodriguez</h3>
              <p className="text-gray-300">Head of Innovation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;