import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PHONE, FIRM_NAME, NAV_LINKS } from '../lib/constants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="hidden md:flex fixed top-0 w-full bg-[#0A1628] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/292244253_517336660189810_455498458966674781_n.jpg"
            alt="Alaniz Law Firm Attorney"
            className="h-12 w-12 object-cover rounded-full"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-bold">{FIRM_NAME}</div>
            <div className="text-xs text-gray-300">San Benito, TX</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm hover:text-[#C0392B] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${PHONE}`} className="text-[#C0392B] font-bold hover:underline">
            {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;