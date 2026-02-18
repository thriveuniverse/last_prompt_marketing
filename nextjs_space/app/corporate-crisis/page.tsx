"use client";

import { motion } from "framer-motion";
import { Building2, Users, TrendingDown, Scale, Clock, Target, Briefcase, LineChart, ArrowRight, Calendar } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { FeatureCard } from "@/components/feature-card";

export default function CorporateCrisisPage() {
  const features = [
    { icon: TrendingDown, title: "Crisis Scenarios", description: "PR disasters, financial meltdowns, leadership scandals. Navigate realistic corporate emergencies." },
    { icon: Users, title: "Stakeholder Management", description: "Board, employees, media, shareholders—all with conflicting agendas and finite patience." },
    { icon: Scale, title: "Ethical Crossroads", description: "Profit vs. principle. Short-term survival vs. long-term trust. No decision is purely good." },
    { icon: Clock, title: "Time Pressure", description: "Real-time crisis escalation. Delay too long, and options disappear permanently." },
    { icon: Target, title: "KPI Tracking", description: "Stock price, employee morale, public trust—watch metrics respond to your leadership." },
    { icon: LineChart, title: "ROI Measurement", description: "Post-simulation analytics show decision patterns and leadership tendencies." },
  ];

  const useCases = [
    { title: "Executive Development", description: "Train C-suite candidates in high-stakes decision making." },
    { title: "Team Building", description: "Run collaborative crisis scenarios with leadership teams." },
    { title: "Onboarding", description: "Immerse new leaders in your organization's values and challenges." },
    { title: "Assessment", description: "Evaluate leadership potential through observed behavior." },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">Corporate Crisis</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Lead When It
                <span className="text-orange-400"> Matters Most</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Immersive crisis simulation for leadership development. Face PR nightmares, stakeholder revolts, and ethical dilemmas in a risk-free environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-all">
                  <Calendar className="w-5 h-5" /> Request Demo
                </a>
                <a href="#signup" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-900/30 to-gray-900">
                  <div className="text-center">
                    <Briefcase className="w-16 h-16 text-orange-400/50 mx-auto mb-4" />
                    <p className="text-gray-500">Demo Video Placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B Value Props */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">For HR & L&D Leaders</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">Transform Leadership Training</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Move beyond case studies. Create lived experience without real-world risk.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-gray-400 text-sm">{uc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simulation Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Enterprise-grade tools for measurable leadership development.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} accentColor="orange" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section id="demo" className="py-24 bg-gray-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">For Organizations</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">Request a Demo</h2>
              <p className="text-gray-400 mb-6">
                See Corporate Crisis in action. Our team will walk you through the simulation, discuss customization options, and explore how it fits your L&D objectives.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  30-minute personalized walkthrough
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Custom scenario discussion
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Pricing and pilot program options
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm interest="corporate" variant="demo" accentColor="orange" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* General Signup */}
      <section id="signup" className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-gray-400">Get case studies, ROI insights, and early access opportunities.</p>
          </motion.div>
          <LeadForm interest="corporate" accentColor="orange" />
        </div>
      </section>
    </div>
  );
}