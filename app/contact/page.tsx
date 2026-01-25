"use client";

import React, { useState, useCallback, memo } from "react";
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

// --- Types ---
interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
}

interface SocialIconProps {
  Icon: React.ElementType;
  link: string;
  color: string;
}

// --- Memoized Helper Components ---

const ContactInfoItem = memo(({ icon: Icon, title, content, link }: ContactInfoProps) => (
  <div className="flex items-start gap-6 group">
    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#582066] group-hover:bg-[#582066] group-hover:text-white transition-all duration-300 shadow-sm">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
      {link ? (
        <a href={link} className="text-slate-500 hover:text-[#582066] transition-colors inline-block mt-1">
          {content}
        </a>
      ) : (
        <p className="text-slate-500 mt-1">{content}</p>
      )}
    </div>
  </div>
));
ContactInfoItem.displayName = "ContactInfoItem";

const SocialIcon = memo(({ Icon, link, color }: SocialIconProps) => (
  <motion.a
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all ${color}`}
  >
    <Icon size={20} />
  </motion.a>
));
SocialIcon.displayName = "SocialIcon";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("idle");
    }
  }, []);

  return (
    <section id="contact-us" className="bg-transparent py-24 px-6 min-h-screen selection:bg-purple-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20 text-center md:text-left"
        >
          <motion.span variants={itemVariants} className="text-[#582066] font-bold tracking-widest text-sm uppercase block mb-4">
            Get In Touch
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
            Let’s start a <br />
            <span className="text-[#582066]">Conversation.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <ContactInfoItem icon={Mail} title="Email Us" content="asimseoweb@gmail.com" link="mailto:asimseoweb@gmail.com" />
              <ContactInfoItem icon={Phone} title="Chat on WhatsApp" content="+92 313 5741451" link="https://wa.me/923135741451" />
              <ContactInfoItem icon={MapPin} title="Visit Us" content="Near Khadija Hospital, Faisalabad, Pakistan" />
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-6">Follow Our Journey</p>
              <div className="flex gap-4">
                <SocialIcon Icon={Instagram} link="https://www.instagram.com/backlinks.asim/" color="hover:text-pink-500 hover:border-pink-200" />
                <SocialIcon Icon={Facebook} link="https://www.facebook.com/Asimshahzadseo/" color="hover:text-blue-600 hover:border-blue-200" />
                <SocialIcon Icon={Linkedin} link="https://www.linkedin.com/in/asim-shahzad-seo-linkbuilding/" color="hover:text-blue-700 hover:border-blue-200" />
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative"
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
                    <FormInput label="Full Name" name="name" type="text" placeholder="John Doe" />
                    <FormInput label="Email Address" name="email" type="email" placeholder="john@example.com" />
                  </div>

                  <FormInput label="Phone Number" name="phone" type="tel" placeholder="+92 313 0000000" />

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#582066] focus:ring-2 focus:ring-purple-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#582066] text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-purple-900/20 hover:bg-[#43184d] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <Send size={18} className={status === "sending" ? "animate-pulse" : ""} />
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

// --- Single Responsibility Input Component ---
const FormInput = ({ label, ...props }: { label: string; [key: string]: any }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
    <input
      required
      {...props}
      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#582066] focus:ring-2 focus:ring-purple-100 outline-none transition-all"
    />
  </div>
);

export default Contact;