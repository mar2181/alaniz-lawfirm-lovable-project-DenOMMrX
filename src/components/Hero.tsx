import { Phone } from 'lucide-react';
import { PHONE, FIRM_NAME } from '../lib/constants';

const HERO_BG = 'https://v3b.fal.media/files/b/0a9b29ed/BTPS9Z2vwbByJm-2-7zRs_5b069d9b20aa4c8b9fbf96bfd6b797e9.jpg';
const PORTRAIT_IMG = 'https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/292244253_517336660189810_455498458966674781_n.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* MOBILE VERSION */}
      <section className="md:hidden relative w-full flex flex-col bg-neutral-900 overflow-hidden pt-0">
        {/* Full-width hero image - 55% of screen height */}
        <div className="w-full h-[55vh] bg-cover bg-center relative overflow-hidden">
          <img
            src={HERO_BG}
            alt="Law firm background"
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Dark rounded card panel below */}
        <div className="px-4 py-8 bg-[#0A1628]">
          <div className="bg-gradient-to-br from-white via-[#F8F9FA] to-white rounded-3xl shadow-2xl border border-gray-100 p-6 text-center">
            {/* Firm name in large bold text */}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0A1628] font-serif mb-2">
              {FIRM_NAME}
            </h1>
            <h2 className="text-base sm:text-lg font-bold text-[#C0392B] mb-4">
              Fighting for You
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 mb-5 leading-relaxed">
              Trusted legal representation in Family Law, Criminal Defense, Personal Injury, and more — serving San Benito and the Rio Grande Valley.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#C0392B] hover:bg-[#A03226] text-white font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2 w-full mb-2 shadow text-sm"
            >
              Schedule Consultation
            </button>
            <a
              href={`tel:${PHONE}`}
              className="border-2 border-[#C0392B] hover:bg-[#C0392B] hover:text-white text-[#C0392B] font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2 w-full text-sm"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <p className="text-xs text-gray-500 mt-3">
              *Free 15-minute consultation
            </p>
          </div>
        </div>
      </section>

      {/* DESKTOP VERSION */}
      <section className="hidden md:flex relative w-full min-h-screen flex-col items-center justify-start bg-neutral-900 overflow-hidden pb-10 pt-20">
        {/* BG HEADER (fixed height for desktop) */}
        <div className="w-full h-[250px] bg-cover bg-center relative overflow-hidden">
          <img
            src={HERO_BG}
            alt="Law firm background"
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Portrait - Overlapping and Floating */}
        <div className="relative z-20 w-full flex justify-center" style={{ marginTop: '-70px' }}>
          <div className="rounded-2xl shadow-2xl border-4 border-white bg-white overflow-hidden w-[80vw] h-[45vw] max-w-xs sm:max-w-md flex items-center justify-center aspect-square">
            <img
              src={PORTRAIT_IMG}
              alt="Attorney portrait"
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
          </div>
        </div>

        {/* INFO CARD - On desktop, card below hero photo */}
        <div className="relative z-10 w-full flex justify-center px-3">
          <div className="-mt-8 w-full max-w-md bg-gradient-to-br from-white via-[#F8F9FA] to-white shadow-2xl rounded-2xl p-6 sm:p-10 border border-gray-100 text-center flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A1628] font-serif mb-3">
              {FIRM_NAME}
            </h1>
            <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] mb-4">
              Fighting for You. Every Step of the Way.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-xs mx-auto leading-relaxed">
              Trusted legal representation in Family Law, Criminal Defense, Personal Injury, and more — serving San Benito and the Rio Grande Valley.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#C0392B] hover:bg-[#A03226] text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2 w-full mb-3 mt-2 shadow"
            >
              Schedule Your Free Consultation
            </button>
            <a
              href={`tel:${PHONE}`}
              className="border-2 border-[#C0392B] hover:bg-[#C0392B] hover:text-white text-[#C0392B] font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2 w-full"
            >
              <Phone size={20} />
              Call Us: {PHONE}
            </a>
            <p className="text-xs text-gray-500 mt-4">
              *Free 15-minute initial consultation. Fee applies if consultation exceeds 15 minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;