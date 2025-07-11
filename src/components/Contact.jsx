"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import  EarthCanvas  from "./canvas/Earth"
import SectionWrapper  from "../hoc/SectionWrapper"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_5dabe36",
        "template_botu99b",
        {
          from_name: form.name,
          to_name: "Aditya Valand",
          from_email: form.email,
          to_email: "bhatiyaaditya4555@gmail.com",
          message: form.message,
        },
        "_yymVXrC-B8AY6pot",
      )
      .then(() => {
        setLoading(false)
        alert("Thank you. I will get back to you as soon as possible.")

        setForm({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)

        alert("Ahh, something went wrong.")
      })
  }

  return (
    <section id="contactme" className="relative min-h-screen bg-transparent py-10 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Elements */}
      

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-24 items-center">
          {/* Contact Form */}
          <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="space-y-8">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wider font-heading uppercase">
                Get in touch
              </p>
              <h3 className="text-3xl sm:text-4xl font-clash xl:text-5xl font-bold text-white leading-tight">
                Contact<span className="text-red-500">.</span>
              </h3>
              <p className="text-slate-300 text-base sm:text-lg max-w-md font-heading leading-relaxed">
                Let's discuss your next project and bring your ideas to life.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-slate-800/40 backdrop-blur-sm font-heading border border-slate-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-slate-200 font-medium text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="w-full bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 h-12 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:bg-slate-700/70"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-slate-200 font-medium text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className="w-full bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 h-12 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:bg-slate-700/70"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-slate-200 font-medium text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:bg-slate-700/70 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 h-12"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* 3D Earth Model */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="flex items-center justify-center xl:justify-end mt-8 xl:mt-0"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] xl:w-[420px] xl:h-[420px] mx-auto xl:mx-0">
              {/* Glow effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-2xl animate-pulse"></div> */}

              {/* Earth Canvas Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <EarthCanvas />
              </div>

              {/* Floating decorative elements */}
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const WrappedContact = SectionWrapper(Contact, "contact")

export default WrappedContact
