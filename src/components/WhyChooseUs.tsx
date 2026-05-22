import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    "A Lawyer Who Keeps His Word — Every commitment we make, we follow through on.",
    "Knowledgeable & Experienced — Multi-practice expertise across the most important areas of law.",
    "Affordable Rates — Quality legal representation at a price that works for the Rio Grande Valley community.",
    "Fast, Responsive Service — We answer your questions and get your legal work done efficiently.",
    "Free Initial Consultation — 15-minute consultation at no cost so you can make an informed decision.",
    "Local Roots — Proudly serving San Benito and the greater Rio Grande Valley since our founding."
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-16 text-center font-serif">
          Why Clients Choose Alaniz LAW FIRM
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4 items-start p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#C0392B] bg-opacity-10 p-2 rounded-lg flex-shrink-0">
                <Check className="text-[#C0392B]" size={24} />
              </div>
              <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;