import Image from "next/image";
import { ArrowUpRight, Monitor, Smartphone, Image as ImageIcon } from "lucide-react";
import asim from "../assets/asim.jpg";

const Hero = () => {
  return (
    <section id= "who-am-i" className="relative w-full min-h-screen bg-transparent flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1f2d] leading-[1.1]">
              Secure {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b14bf4] to-[#6d91fe]">
                High-Authority
              </span>{" "}
              Backlinks For
              <br />
              Real Growth
            </h1>

            <p className="text-[#5e626f] text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Hi, I'm Asim! With over 3 years of experience in SEO & Link Building, I am ready to help your brand dominate search results!
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-8">
            <button className="px-10 py-4 bg-gradient-to-r from-[#b14bf4] to-[#6d91fe] text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:opacity-90 transition-all">
              Let's Connect
            </button>

            <button  className="flex items-center gap-2 text-[#5e626f] font-bold text-lg hover:text-[#1a1f2d] transition-colors">
              See My Portfolio <ArrowUpRight size={20} />
            </button>
          </div>

          {/* STATS */}
          <div className="flex gap-12 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-[#1a1f2d]">1200+</h3>
              <p className="text-[#5e626f] font-medium">Live Links Delivered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#1a1f2d]">80+</h3>
              <p className="text-[#5e626f] font-medium">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#1a1f2d]">100+</h3>
              <p className="text-[#5e626f] font-medium">Authority Sites (DA80+)
</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full p-[2px] bg-gradient-to-tr from-[#b14bf4] to-[#6d91fe]">

            <div className="w-full h-full rounded-full bg-transparent flex items-end justify-center border-[12px] border-white">
              <div className="relative w-full h-[110%] ">
                <Image
                  src={asim}
                  alt="Travis Profile"
                  fill
                  priority
                  sizes="(max-width: 1000px) 500px, 800px"
                  className="object-cover object-top "
                />
              </div>
            </div>

            {/* FLOATING ICONS */}
            <div className="absolute top-[40%] -left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Monitor size={24} className="text-[#b14bf4]" />
            </div>

            <div className="absolute top-10 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Smartphone size={24} className="text-[#b14bf4]" />
            </div>

            <div className="absolute bottom-10 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
              <ImageIcon size={24} className="text-[#b14bf4]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
