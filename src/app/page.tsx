import { Mail, Github, Linkedin } from "lucide-react";
// import { motion } from "framer-motion";
//  import hero-face from './hero-face.jpg';


export default function SkinVision() {
  return (
    <main className="bg-[#FFEFF0] text-gray-900">
{/* Hero Section */}
<section className="px-4 py-16 bg-[#FFEFF0]">
  <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Left */}
    <div className="space-y-6 w-full md:w-1/2">
      <h1 className="text-[28px] font-thin leading-tight">
        SkinVision AI 
      </h1>
      <h1 className="text-4xl font-bold leading-snug">
        Understand Your <br /> Skin, Instantly.
      </h1>
      <button className="bg-black text-white px-6 py-3 rounded-xl w-fit shadow-md">Try it now →</button>
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
</section>

{/* How It Works */}
<section className="px-4 py-16 text-center">
  <div className="max-w-[900px] mx-auto">
    <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
    <p className="text-sm text-gray-600 mb-8">AI-powered scan with instant insights</p>

    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="aspect-square w-full md:w-1/3 max-w-[260px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
        <div className="text-3xl mb-2">⬆️</div>
        <h3 className="font-semibold">Upload Photo</h3>
        <p className="text-sm text-gray-600">Take or upload a clear face image</p>
      </div>

      <div className="aspect-square w-full md:w-1/3 max-w-[260px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
        <div className="text-3xl mb-2">✨</div>
        <h3 className="font-semibold">AI Scan Begins</h3>
        <p className="text-sm text-gray-600">AI checks for acne, pigmentation, and more</p>
      </div>

      <div className="aspect-square w-full md:w-1/3 max-w-[260px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
        <div className="text-3xl mb-2">📝</div>
        <h3 className="font-semibold">Get Tips</h3>
        <p className="text-sm text-gray-600">Personalized product recommendations</p>
      </div>
    </div>
  </div>
</section>







      {/* Skin Concern Input */}
      <section className="px-6 py-12 text-center space-y-4">
        <p className="text-lg">Describe your skin concern.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            className="px-4 py-3 rounded-full border text-center w-full md:w-96"
            placeholder="I have acne and dark spots....."
          />
          <button className="bg-[#E35E54] text-white px-6 py-3 rounded-full">Analyze</button>
        </div>
        <div className="bg-[#F9D8DB] text-[#8A4D50] px-4 py-2 rounded-full w-fit mx-auto">
          Suggestied, Niacinamide (AM), Tretroin (FM)
        </div>
      </section>

      {/* Testimonials */}
<section className="px-6 py-12 text-center space-y-8">
  <h2 className="text-2xl font-semibold">What Users Are Saying</h2>
  
  <div className="flex gap-8 items-centergit --version
 justify-start overflow-x-auto">
    
    <div className="aspect-square w-full md:w-1/3 max-w-[260px] min-w-[220px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-2">
        <img src="/user1.jpg" className="w-10 h-10 rounded-full" alt="Rajvansh" />
        <div>
          <p className="font-semibold">Rajvansh R.</p>
          <span className="text-sm text-gray-500">Verified user</span>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">“The SkinVision scan was so accurate– it found issue my dermatologist missed.”</p>
    </div>

    <div className="aspect-square w-full md:w-1/3 max-w-[260px] min-w-[220px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-2">
        <img src="/user2.jpg" className="w-10 h-10 rounded-full" alt="Lauren" />
        <div>
          <p className="font-semibold">Lauren D.</p>
          <span className="text-sm text-gray-500">Verified user</span>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">“Incredible! It can analyze my skin and give product names in seconds.”</p>
    </div>

    <div className="aspect-square w-full md:w-1/3 max-w-[260px] min-w-[220px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-2">
        <img src="/user3.jpg" className="w-10 h-10 rounded-full" alt="Michael" />
        <div>
          <p className="font-semibold">Michael B.</p>
          <span className="text-sm text-gray-500">Verified user</span>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">“Very helpful! Found early signs of skin issues I wouldn’t have noticed.”</p>
    </div>

    <div className="aspect-square w-full md:w-1/3 max-w-[260px] min-w-[220px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-2">
        <img src="/user4.jpg" className="w-10 h-10 rounded-full" alt="Sophia" />
        <div>
          <p className="font-semibold">Sophia L.</p>
          <span className="text-sm text-gray-500">Verified user</span>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">“Quick and easy! The product recommendations saved me so much time.”</p>
    </div>

    <div className="aspect-square w-full md:w-1/3 max-w-[260px] min-w-[220px] border rounded-xl bg-white shadow p-6 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-2">
        <img src="/user5.jpg" className="w-10 h-10 rounded-full" alt="Daniel" />
        <div>
          <p className="font-semibold">Daniel K.</p>
          <span className="text-sm text-gray-500">Verified user</span>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">“I never expected such accuracy. Highly recommend this tool.”</p>
    </div>

  </div>

</section>



      {/* CTA */}
      <section className="text-center px-6 py-12 space-y-4">
        <h2 className="text-xl font-medium">Try SkinVision AI free - no signup required.</h2>
        <button className="bg-[#E35E54] text-white px-6 py-3 rounded-full">Get Started</button>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 space-y-4 text-center">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <button className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-full shadow">
            <span>How does the AI scan work?</span>
            <span>+</span>
          </button>
          <button className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-full shadow">
            <span>Is my data kept private?</span>
            <span>+</span>
          </button>
          <button className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-full shadow">
            <span>Can I get treatment recommendations?</span>
            <span>+</span>
          </button>
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
