import { Globe } from 'lucide-react';
import { FIRM_NAME, NAV_LINKS, PHONE, EMAIL, FACEBOOK } from '../lib/constants';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0A1628] to-[#051220] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Branding */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C0392B] to-[#A03226] rounded-full flex items-center justify-center font-bold text-lg shadow-lg">A</div>
              <div>
                <p className="font-bold text-sm">{FIRM_NAME}</p>
                <p className="text-xs text-gray-400">San Benito, TX</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Trusted legal representation across multiple practice areas serving the Rio Grande Valley.
            </p>
          </div>
          
          {/* Center - Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-[#C0392B] transition-colors text-sm block"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Right - Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-6">Connect With Us</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
                <a href={`tel:${PHONE}`} className="text-[#C0392B] hover:text-[#E74C3C] transition-colors font-semibold">
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-[#C0392B] hover:text-[#E74C3C] transition-colors font-semibold break-all">
                  {EMAIL}
                </a>
              </div>
              <div className="pt-4">
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C0392B] hover:text-[#E74C3C] transition-colors font-medium"
                >
                  <Globe size={18} />
                  <span>Follow on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 {FIRM_NAME} | All Rights Reserved | San Benito, TX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;