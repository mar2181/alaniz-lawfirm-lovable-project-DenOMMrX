import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "He is a man of his word. Everything we talked about was done and I wouldn't recommend any other lawyer but Mr. Alaniz.",
      author: "Krystal M.",
      label: "Verified Client"
    },
    {
      quote: "They were able to answer all of our questions and get the work done quickly. Highly professional.",
      author: "Oralia B.",
      label: "Verified Client"
    },
    {
      quote: "He is a knowledgeable and great attorney at a great price. I highly recommend!",
      author: "Rick-Alexa R.",
      label: "Verified Client"
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-[#0A1628] to-[#051220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center font-serif">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:shadow-xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#C0392B] text-[#C0392B]" />
                ))}
              </div>
              
              <p className="text-gray-100 italic mb-8 leading-relaxed text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-white border-opacity-10 pt-6">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm">
          All reviews sourced from Facebook recommendations.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;