import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';
import { useState } from 'react';
import { PHONE, PHONE_TEXT, EMAIL, ADDRESS, HOURS, FACEBOOK } from '../lib/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', area: '', description: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-16 text-center font-serif">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all"
              />
              
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all"
              >
                <option value="">Select Area of Legal Need</option>
                <option value="family">Family Law</option>
                <option value="criminal">Criminal Defense</option>
                <option value="civil">Civil Law</option>
                <option value="injury">Personal Injury</option>
                <option value="realestate">Real Estate</option>
                <option value="estate">Estate Planning</option>
                <option value="other">Other</option>
              </select>
              
              <textarea
                name="description"
                placeholder="Brief Description of Your Case"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all resize-none"
              />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C0392B] to-[#A03226] hover:from-[#A03226] hover:to-[#8B2922] text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                {submitted ? "✓ Message Sent!" : "Send My Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-8">Contact Information</h3>
            
            <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <MapPin className="text-[#C0392B] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-[#0A1628]">Address</p>
                <p className="text-gray-600 text-sm sm:text-base">{ADDRESS}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <Phone className="text-[#C0392B] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-[#0A1628]">Office Phone</p>
                <a href={`tel:${PHONE}`} className="text-[#C0392B] hover:underline text-sm sm:text-base">
                  {PHONE}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <MessageCircle className="text-[#C0392B] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-[#0A1628]">Office Cell / Text</p>
                <a href={`sms:${PHONE_TEXT}`} className="text-[#C0392B] hover:underline text-sm sm:text-base">
                  {PHONE_TEXT}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <Mail className="text-[#C0392B] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-[#0A1628]">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-[#C0392B] hover:underline text-sm sm:text-base">
                  {EMAIL}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <Clock className="text-[#C0392B] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-[#0A1628]">Hours</p>
                <p className="text-gray-600 text-sm sm:text-base">{HOURS}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <Globe className="text-[#C0392B] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-[#0A1628]">Follow Us</p>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:underline text-sm">
                  facebook.com/alanizlawfirmpllc
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-100">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.891232109738!2d-97.36156!3d26.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fbaa8b0e0e0e1%3A0x1234567890!2s201%20S%20Sam%20Houston%20Blvd%2C%20San%20Benito%2C%20TX%2078586!5e0!3m2!1sen!2sus!4v1234567890"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

const MessageCircle = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);

export default Contact;