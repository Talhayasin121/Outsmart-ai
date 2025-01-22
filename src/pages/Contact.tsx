import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black p-8 rounded-lg border border-green-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-md font-semibold"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-black p-8 rounded-lg border border-green-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">contact@outsmartai.com</p>
                    <p className="text-gray-300">support@outsmartai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Office Location</h3>
                    <p className="text-gray-300">
                      123 Innovation Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg">
                  {/* Add your map integration here */}
                  <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 border border-gray-700">
                    Map Integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;