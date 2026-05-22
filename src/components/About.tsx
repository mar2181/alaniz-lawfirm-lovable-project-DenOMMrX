import { FIRM_NAME } from '../lib/constants';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-16 text-center font-serif">
          About {FIRM_NAME}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 border border-gray-200">
            <img
              src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/Faw70Dmq.jpg"
              alt="Alaniz Law Firm Professional"
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At {FIRM_NAME}, we believe every client deserves a lawyer who keeps their word. Located in the heart of San Benito, Texas, our firm has built its reputation on trust, results, and a genuine commitment to the people we serve across the Rio Grande Valley.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're navigating a family matter, facing criminal charges, dealing with a personal injury, or planning your estate — we're here to guide you through every step of the legal process with clarity, dedication, and integrity.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Mr. Alaniz and his staff are known for answering your questions, getting the work done efficiently, and always following through on what they promise. We don't just take your case — we stand behind it.
            </p>
            
            <div className="bg-gradient-to-r from-[#C0392B] to-[#A03226] text-white p-8 rounded-xl mt-8 shadow-lg border border-[#A03226]">
              <p className="font-bold text-xl text-center">
                FREE 15-Minute Consultations<br />
                <span className="text-sm font-normal">Call or Text Us Today</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;