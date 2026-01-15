"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Send,
  CheckCircle2
} from "lucide-react";

// --- Type Definitions ---

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

interface SocialIconProps {
  icon: React.ReactElement; // Required for React.cloneElement
  link: string;
  color: string;
}

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id= "contact" className="bg-transparent py-24 px-6 min-h-screen selection:bg-purple-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#582066] font-bold tracking-widest text-sm uppercase block mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none"
          >
            Let’s start a <br />
            <span className="text-[#582066]">Conversation.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                content="asimseoweb@gmail.com"
                link="mailto:asimseoweb@gmail.com"
              />
              <ContactInfoItem 
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content="+923135741451"
                link="tel:+923135741451"
              />
              <ContactInfoItem 
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                content="Near Khadija Hospital, Faisalabad, Pakistan"
              />
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-6">Follow Our Journey</p>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram />} link="https://www.instagram.com/backlinks.asim/" color="hover:text-pink-500" />
                <SocialIcon icon={<Facebook />} link="https://www.facebook.com/Asimshahzadseo/" color="hover:text-blue-600" />
                <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/asim-shahzad-seo-linkbuilding/" color="hover:text-blue-700" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20 space-y-4"
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form" 
                  onSubmit={handleSubmit} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        required 
                        name="name"
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#582066] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        required 
                        name="email"
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#582066] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      required 
                      name="phone"
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#582066] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea 
                      required 
                      name="message"
                      rows={5} 
                      placeholder="How can we help you?" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#582066] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#582066] text-white font-bold py-5 rounded-2xl shadow-xl shadow-purple-900/20 hover:bg-[#43184d] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Helper Components ---

const ContactInfoItem = ({ icon, title, content, link }: ContactInfoProps) => (
  <div className="flex items-start gap-6 group">
    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#582066] group-hover:bg-[#582066] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
      {link ? (
        <a href={link} className="text-slate-500 hover:text-[#582066] transition-colors">{content}</a>
      ) : (
        <p className="text-slate-500">{content}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ icon, link, color }: SocialIconProps) => (
  <motion.a 
    whileHover={{ y: -5 }}
    href={link} 
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all ${color}`}
  >
    {React.cloneElement(icon, { size: 20 } as React.SVGProps<SVGSVGElement>)}
  </motion.a>
);

export default Contact;