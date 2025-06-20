'use client';
import { Mail, Github, Linkedin } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function SkinVision() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const useSectionInView = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return [ref, inView] as const;
  };

  return (
    <main className="bg-[#FFEFF0] text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="px-4 py-16 bg-[#FFEFF0]"
      >
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="space-y-6 w-full md:w-1/2">
            <h1 className="text-[28px] font-thin leading-tight">SkinVision AI</h1>
            <h1 className="text-4xl font-bold leading-snug">
              Understand Your <br /> Skin, Instantly.
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-6 py-3 rounded-xl w-fit shadow-md"
            >
              Try it now →
            </motion.button>
          </div>

          {/* Right */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img src="/hero-face.jpg" className="rounded-xl object-cover w-full max-w-[400px]" />
            <div className="absolute top-4 right-4 bg-[#00000030] backdrop-blur-sm p-4 rounded-xl text-white shadow-lg">
              <h4 className="font-bold mb-2">Dehydrated Skin</h4>
              <ul className="text-sm space-y-1">
                <li>• Dry skin</li>
                <li>• Oily skin</li>
                <li>• Normal skin</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-sm text-gray-600 mb-8">AI-powered scan with instant insights</p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {["Upload Photo", "AI Scan Begins", "Get Tips"].map((title, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUpVariants}
                viewport={{ once: true }}
                className="aspect-square w-full md:w-1/3 max-w-[260px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center"
              >
                <div className="text-3xl mb-2">{["⬆️", "✨", "📝"][i]}</div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">
                  {
                    ["Take or upload a clear face image",
                     "AI checks for acne, pigmentation, and more",
                     "Personalized product recommendations"][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Concern Input */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="px-6 py-12 text-center space-y-4"
      >
        <p className="text-lg">Describe your skin concern.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            className="px-4 py-3 rounded-full border text-center w-full md:w-96"
            placeholder="I have acne and dark spots....."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#E35E54] text-white px-6 py-3 rounded-full"
          >
            Analyze
          </motion.button>
        </div>
        <div className="bg-[#F9D8DB] text-[#8A4D50] px-4 py-2 rounded-full w-fit mx-auto">
          Suggested: Niacinamide (AM), Tretinoin (PM)
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="px-6 py-12 text-center space-y-8">
        <h2 className="text-2xl font-semibold">What Users Are Saying</h2>
        <div className="flex gap-8 items-center justify-start overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((id, i) => (
            <motion.div
              key={id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariants}
              viewport={{ once: true }}
              className="aspect-square w-full md:w-1/3 max-w-[260px] min-w-[220px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-2 mb-2">
                <img src={`/user${id}.jpg`} className="w-10 h-10 rounded-full" alt={`User ${id}`} />
                <div>
                  <p className="font-semibold">{["Rajvansh R.", "Lauren D.", "Michael B.", "Sophia L.", "Daniel K."][i]}</p>
                  <span className="text-sm text-gray-500">Verified user</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                {[
                  "“The SkinVision scan was so accurate– it found issue my dermatologist missed.”",
                  "“Incredible! It can analyze my skin and give product names in seconds.”",
                  "“Very helpful! Found early signs of skin issues I wouldn’t have noticed.”",
                  "“Quick and easy! The product recommendations saved me so much time.”",
                  "“I never expected such accuracy. Highly recommend this tool.”"
                ][i]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="text-center px-6 py-12 space-y-4"
      >
        <h2 className="text-xl font-medium">Try SkinVision AI free - no signup required.</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#E35E54] text-white px-6 py-3 rounded-full"
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* FAQ */}
      <section className="px-6 py-12 space-y-4 text-center">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            "How does the AI scan work?",
            "Is my data kept private?",
            "Can I get treatment recommendations?"
          ].map((q, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.02 }}
              className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-full shadow"
            >
              <span>{q}</span>
              <span>+</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center gap-6 py-8">
        <Mail />
        <Github />
        <Linkedin />
      </footer>
    </main>
  );
}
