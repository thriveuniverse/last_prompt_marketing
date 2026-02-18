"use client";

import { motion } from "framer-motion";
import { Gamepad2, Users, Flame, Heart, Shield, TreePine, Skull, Wheat, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { FeatureCard } from "@/components/feature-card";

export default function ColonyPage() {
  const features = [
    { icon: Users, title: "Population Management", description: "Balance skills, morale, and survival. Every colonist has a story—and a breaking point." },
    { icon: Flame, title: "Dynamic Crises", description: "Droughts, plagues, raiders, internal strife. Threats emerge organically from your decisions." },
    { icon: Heart, title: "Moral Dilemmas", description: "Sacrifice one to save many? Exile the sick? There are no 'correct' answers." },
    { icon: Shield, title: "Doctrine System", description: "Establish laws and customs. Your leadership philosophy shapes colony culture permanently." },
    { icon: TreePine, title: "Environmental Systems", description: "Seasons change, resources deplete. Sustainability isn't optional—it's survival." },
    { icon: Skull, title: "Permadeath Stakes", description: "No saves, no restarts. When colonists die, they're gone. Rebuild or fall." },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/50 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-green-400 font-semibold uppercase tracking-wider text-sm">Colony</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The World Ended.
                <span className="text-green-400"> Now Lead.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                In Colony, you inherit leadership of humanity's last settlement. Resources are scarce. Trust is fragile. Every decision could be your colony's last prompt.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#signup" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all">
                  Join Waitlist <ArrowRight className="w-4 h-4" />
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
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-900/30 to-gray-900">
                  <div className="text-center">
                    <Wheat className="w-16 h-16 text-green-400/50 mx-auto mb-4" />
                    <p className="text-gray-500">Screenshot / Trailer Placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Systems</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Deep mechanics that create emergent narratives from your leadership style.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} accentColor="green" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Teaser */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/30 to-gray-800/50 rounded-2xl p-8 md:p-12 border border-green-500/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Free Download</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">Scenario Pack: First Winter</h3>
                <p className="text-gray-400 mb-6">
                  Preview Colony's decision engine with our free tabletop scenario. Face 12 critical choices as your settlement's first winter approaches.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> 12 decision nodes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Multiple endings</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Printable cards</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-4">Join the waitlist to receive your free scenario pack.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-24 bg-gray-900/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join the Colony</h2>
            <p className="text-gray-400">Get early access, playtest invitations, and exclusive content.</p>
          </motion.div>
          <LeadForm interest="colony" accentColor="green" />
        </div>
      </section>
    </div>
  );
}