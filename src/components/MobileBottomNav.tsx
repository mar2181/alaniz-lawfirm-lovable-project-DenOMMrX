import { useState } from 'react';
import { House, Settings, MessageCircle, Menu, X, Heart, Share2 } from 'lucide-react';
import { NAV_LINKS, FIRM_NAME } from '../lib/constants';

const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: FIRM_NAME,
        text: "Check out Alaniz LAW FIRM, PLLC.",
        url: window.location.href,
      }).catch(() => {
        console.log('Share cancelled');
      });
    } else {
      alert('Share feature not supported on this device');
    }
  };

  const navItems = [
    { id: 'home', icon: House, label: 'Home' },
    { id: 'services', icon: Settings, label: 'Services' },
    { id: 'contact', icon: MessageCircle, label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#0A1628] text-white z-50 shadow-lg">
        <div className="flex items-center justify-between h-16 px-4">
          <h1 className="text-sm font-bold">{FIRM_NAME}</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Heart
                size={20}
                className={liked ? 'fill-[#C0392B] text-[#C0392B]' : 'text-gray-400'}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Share2 size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav - Floating Bar */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-[#0A1628] text-white z-40 rounded-full shadow-2xl border border-gray-700">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center gap-1 flex-1 py-2"
              >
                <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-[#C0392B]' : ''}`}>
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-400'} />
                </div>
                <span className={`text-xs ${isActive ? 'text-[#C0392B] font-semibold' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center gap-1 flex-1 py-2"
          >
            <div className="p-2 rounded-full">
              <Menu size={20} className="text-gray-400" />
            </div>
            <span className="text-xs text-gray-400">Menu</span>
          </button>
        </div>
      </nav>

      {/* Slide-up Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-30 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
          <div className="relative bg-[#0A1628] rounded-t-3xl p-6 pb-24 z-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-bold text-lg">Menu</span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white py-3 border-b border-white/10 text-base hover:text-[#C0392B] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Spacer for mobile to prevent content overlap with bottom nav */}
      <div className="md:hidden h-28" />
    </>
  );
};

export default MobileBottomNav;