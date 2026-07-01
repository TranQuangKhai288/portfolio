import { useState } from "react";
import contactData from "../data/contactData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      Swal.fire({
        title: "Missing Fields ⚠️",
        text: "Please fill in all fields before sending.",
        icon: "warning",
        confirmButtonColor: "#3b82f6",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim(),
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: "Message Sent! ✉️",
          text: "Thank you for reaching out. I’ll get back to you soon!",
          icon: "success",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Cool 😎",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: "Oops! 😢",
        text: "Something went wrong while sending your message. Please try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-transparent"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title & Subtitle */}
        <div className="text-center mb-12" data-aos-delay="200" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">{contactData.title}</h2>
          <p className="text-slate-550 dark:text-slate-400 text-sm max-w-md mx-auto">{contactData.subtitle}</p>
        </div>

        {/* Tabs Menu */}
        <div className="flex justify-center mb-10 gap-2 flex-wrap" data-aos-delay="300" data-aos="fade-down">
          {[
            { value: "contact", label: "Contact Me", icon: "bx bx-envelope" },
            { value: "support", label: "Support Me", icon: "bx bx-heart" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${activeTab === tab.value
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/10 scale-105"
                  : "bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm text-slate-655 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div>
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos-delay="400" data-aos="fade-down">
              {/* Left Side: Social & Contact Links */}
              <div className="flex flex-col gap-4 w-full justify-center">
                {contactData.socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-6 py-5 bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 rounded-2xl shadow-sm text-slate-800 dark:text-slate-200 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    aria-label={item.label}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center shadow-md rounded-xl bg-blue-50 dark:bg-indigo-950/40 text-blue-600 dark:text-indigo-400 shrink-0">
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="font-bold text-lg leading-tight text-slate-800 dark:text-white">{item.label}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <i className="bx bx-chevron-right text-xl text-slate-400 dark:text-slate-500" />
                  </a>
                ))}
              </div>

              {/* Right Side: Contact Form */}
              <div className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-slate-200/50 dark:border-slate-800/60 max-w-xl w-full mx-auto lg:mx-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                    <i className="bx bx-chat text-xl text-blue-500 dark:text-indigo-400" />
                    Send Me a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
                    />
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
                      rows="5"
                    />
                    <Tippy content="Send your message" placement="top">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            Sending...
                            <i className="bx bx-loader-alt animate-spin text-lg" />
                          </>
                        ) : (
                          <>
                            Send Message
                            <i className="bx bx-send text-base translate-y-[1px]" />
                          </>
                        )}
                      </button>
                    </Tippy>
                  </form>
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="max-w-xl mx-auto" data-aos-delay="400" data-aos="fade-down">
              {contactData.supportPlatforms.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center max-w-xl mx-auto"
                >
                  {item.type === "image" ? (
                    <div className="flex flex-col items-center">
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                        {item.label}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-md">
                        If my work has helped or inspired you, consider supporting me by scanning the QR code below. Every little bit helps me learn and build more amazing projects! 🙌
                      </p>
                      <div className="p-3 bg-white rounded-2xl shadow-md border border-slate-200 max-w-[280px]">
                        <img
                          src={item.imageSrc}
                          alt={item.alt}
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;