import { Heart, Shield, Handshake, AlertCircle, Building, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Divorce, child custody, support agreements, and more. We help families navigate difficult transitions with care and legal expertise.",
      image: "https://v3b.fal.media/files/b/0a9b2a55/6zwf5YzTOP_fvtvOyDa6c_3aa8d63d51ef49dfae2dcafc6df3de85.jpg"
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "From misdemeanors to serious criminal charges, we defend your rights and work to achieve the best possible outcome for your case.",
      image: "https://v3b.fal.media/files/b/0a9b2a56/wEo2DFCngFxU6WEH5QxNe_e33e4031646e4af0824680854466d832.jpg"
    },
    {
      icon: Handshake,
      title: "Civil Law",
      description: "Disputes between individuals or businesses — we represent your interests in civil matters with clarity and determination.",
      image: "https://v3b.fal.media/files/b/0a9b2a55/9XCsJhf1KRMmZzlffAa8Z_7cdde306fd164314bfa650377e71187f.jpg"
    },
    {
      icon: AlertCircle,
      title: "Personal Injury",
      description: "Injured due to someone else's negligence? We fight to get you the compensation you deserve for medical bills, lost wages, and pain and suffering.",
      image: "https://v3b.fal.media/files/b/0a9b2a55/4JpAc-UiLofcoBTOkQ-in_e19a41b139674f4482e00e958393588c.jpg"
    },
    {
      icon: Building,
      title: "Real Estate Law",
      description: "Buying, selling, or dealing with property disputes? We provide the legal guidance you need to protect your real estate interests.",
      image: "https://v3b.fal.media/files/b/0a9b2a55/EMb5Tpg3ZdbEyzp87snh2_026ef19a2caf4230bc6bd622b217cb31.jpg"
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Wills, trusts, and end-of-life planning — we help you protect what matters most and ensure your wishes are honored.",
      image: "https://v3b.fal.media/files/b/0a9b2a55/4y_N9p7ADheLekno0LmAJ_d998c7bff3e4449bb5352c2616f7bd22.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-16 text-center font-serif">
          Our Practice Areas
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#C0392B] flex flex-col group"
              >
                <div className="h-48 overflow-hidden bg-gray-200 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error(`Image failed to load for ${service.title}:`, service.image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 p-3 bg-[#FEF1F0] rounded-lg w-fit">
                    <Icon size={32} className="text-[#C0392B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;