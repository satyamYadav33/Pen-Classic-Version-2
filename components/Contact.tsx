
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    feedback: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', feedback: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="opacity-60 max-w-2xl mx-auto">Have questions about our collection or bulk orders? We're here to help you find the perfect pen.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-transparent hover:border-amber-600/30 transition-all group">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="opacity-60 text-sm mb-4">Our support team usually responds within 24 hours.</p>
            <a href="mailto:hello@satyarajclassic.com" className="font-bold text-amber-600 hover:underline">hello@satyarajclassic.com</a>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-transparent hover:border-amber-600/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="opacity-60 text-sm mb-4">Mon-Fri from 9am to 6pm IST.</p>
            <a href="tel:+919876543210" className="font-bold text-amber-600 hover:underline">+91 98765 43210</a>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-transparent hover:border-amber-600/30 transition-all group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Studio</h3>
            <p className="opacity-60 text-sm mb-4">Come feel the grip in person.</p>
            <p className="font-bold">123 Artisan Way, Pen City, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Phone Number</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 12345 67890"
                className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Your Feedback</label>
              <textarea 
                required
                rows={4}
                value={formData.feedback}
                onChange={e => setFormData({...formData, feedback: e.target.value})}
                placeholder="How can we help you write better?"
                className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button 
              disabled={status !== 'idle'}
              className="w-full py-4 bg-amber-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-amber-700 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <Send size={20} />
                </>
              )}
              {status === 'sending' && (
                <>
                  <span>Sending...</span>
                  <Loader2 size={20} className="animate-spin" />
                </>
              )}
              {status === 'success' && (
                <span>Sent Successfully!</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
