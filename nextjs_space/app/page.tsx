"use client";

import { motion } from "framer-motion";
import { Gamepad2, Building2, Users, Zap, Target, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium mb-6">
              Coming Soon
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Every Decision is Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Last Prompt</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Immersive simulation games where strategy meets consequence. Lead a post-collapse colony or navigate corporate crises—your choices shape everything.
            </p>
          </motion.div>

          {/* Skin Chooser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Colony Card */}
            <Link href="/colony" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-500 p-8 h-full hover:shadow-2xl hover:shadow-green-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-green-400/10 flex items-center justify-center mb-6">
                    <Gamepad2 className="w-8 h-8 text-green-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Post-Collapse Survival</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">Colony</h3>
                  <p className="text-gray-400 mb-6">Lead survivors through resource scarcity, moral dilemmas, and existential threats.</p>
                  <span className="inline-flex items-center gap-2 text-green-400 font-medium group-hover:gap-3 transition-all">
                    Explore Colony <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Corporate Crisis Card */}
            <Link href="/corporate-crisis" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-500 p-8 h-full hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-orange-400/10 flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-orange-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Corporate Training</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">Corporate Crisis</h3>
                  <p className="text-gray-400 mb-6">Navigate executive decisions, stakeholder pressure, and organizational survival.</p>
                  <span className="inline-flex items-center gap-2 text-orange-400 font-medium group-hover:gap-3 transition-all">
                    Explore Corporate Crisis <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Last Prompt */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Last Prompt?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A new breed of simulation that adapts to your decisions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Adaptive AI", description: "Every playthrough is unique. The simulation responds to your leadership style and decisions." },
              { icon: Zap, title: "Real Consequences", description: "No resets, no easy outs. Your choices cascade through the game world permanently." },
              { icon: Target, title: "Meaningful Stakes", description: "Whether virtual survivors or simulated stakeholders, every life and decision matters." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Be First to Play</h2>
                <p className="text-gray-400 mb-6">
                  Join our waitlist for exclusive early access, playtest invitations, and behind-the-scenes updates. No spam, just important announcements.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Join 2,000+ waiting</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <LeadForm interest="both" accentColor="cyan" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}