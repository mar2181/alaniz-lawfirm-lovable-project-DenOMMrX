import { Phone, MessageCircle } from 'lucide-react';
import { PHONE, PHONE_TEXT } from '../lib/constants';

const Pricing = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-12 font-serif">
          Consultation & Fees
        </h2>
        
        <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-12 sm:p-16 rounded-2xl shadow-lg border border-gray-100">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            We offer a <span className="font-bold text-[#C0392B]">FREE 15-minute</span> initial consultation to discuss your legal needs. If your consultation exceeds 15 minutes, a fee will be charged. Pricing for legal services varies by case type and complexity.
          </p>
          
          <p className="text-lg text-gray-700 mb-10">
            Contact us directly to learn about current rates and payment options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="bg-gradient-to-r from-[#C0392B] to-[#A03226] hover:from-[#A03226] hover:to-[#8B2922] text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call {PHONE}
            </a>
            
            <a
              href={`sms:${PHONE_TEXT}`}
              className="bg-[#0A1628] hover:bg-black text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Text {PHONE_TEXT}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;