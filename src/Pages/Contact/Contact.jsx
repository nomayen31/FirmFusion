import React from 'react';

const Contact = () => {
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-400 mt-1 mr-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-400 mt-1 mr-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3.08a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.01-4.88 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3.08L9 5.21l-1.5 1.5a13.06 13.06 0 0 0 4.89 4.89l1.5-1.5L16.79 15z"></path>
    </svg>
  );

  const MapMarkerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-400 mt-1 mr-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="py-20 text-center bg-gradient-to-br from-indigo-950 to-purple-950 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-0 -left-4"></div>
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 right-4"></div>
          <div className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 top-44 left-24"></div>
        </div>
        <div className="container mx-auto px-4 mt-5 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-indigo-300">
            We’d love to hear from you.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/10 h-full">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start">
                <MailIcon />
                <div>
                  <h3 className="text-lg font-semibold">FirmFusion</h3>
                  <p className="text-sm">info@firmfusion.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon />
                <div>
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <p className="text-sm">01760843880</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapMarkerIcon />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-sm">1260, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <TwitterIcon />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <LinkedinIcon />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Send Us A Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-white text-gray-900 font-bold text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default Contact;
