import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, User, MessageSquare, MapPin } from 'lucide-react';
import SocialHandles from './SocialHandles';
import FloatingContactImage from './FloatingContactImage';

const Contact = () => {
  const [formState, setFormState] = useState({
    firstname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen py-16 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="line-bg relative w-full h-full">
        {/* Animated Lines */}
        {[...Array(108)].map((_, i) => (
          <div
            key={i}
            className="line absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent transform-gpu"
            style={{
              left: `${i * (100 / 108)}%`,
              animation: 'lineRise 10s ease-in-out infinite',
              animationDelay: `${i * 0.05}s`,
              opacity: 0.1
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] top-[10%] left-[10%] animate-pulse"/>
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-[100px] top-[40%] right-[10%] animate-pulse"/>
        <div className="absolute w-96 h-96 rounded-full bg-indigo-500/20 blur-[100px] bottom-[20%] left-[30%] animate-pulse"/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-purple-900/10 to-indigo-900/10" />
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0.5, 0],
              scale: [1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
            Let's Build Together
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to turn your vision into reality? I'm here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800/50 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-white">Get in Touch</h3>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">adityaagrwal3005@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">6395858698</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Uttar Pradesh, India</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12">
                <p className="text-gray-400 mb-6">Connect with me</p>
                <SocialHandles />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden sm:block lg:col-span-3 bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800/50 shadow-xl"
      >
        <form className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
            <input
              type="text"
              name="firstname"
              placeholder="Your Name"
              value={formState.firstname}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formState.phone}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute top-4 left-4 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formState.message}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5 ml-2" />
          </motion.button>
        </form>
      </motion.div>

      {/* Mobile Contact Button - Visible only on mobile (below sm breakpoint) */}
      <div className="fixed bottom-20 right-4 z-50">
      <motion.a
        href="mailto:adityaagrwal3005@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block p-1 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg"
      >
        <div className="bg-gray-900 rounded-xl p-0.5">
          <img 
            src="https://asingla.netlify.app/static/media/floating_contact.33436ad5f0d9d8b68087.png" 
            alt="Contact"
            className="w-20 h-25 rounded-xl object-cover"
          />
        </div>
      </motion.a>
    </div>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;