import React from "react";
import {
  Wallet,
  Users,
  TrendingUp,
  Bell,
  PieChart,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { htw, problemStats, services } from "../constants";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/40 via-slate-950 to-emerald-500/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              <Sparkles size={16} />
              <span>Designed for Hostel Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Say Goodbye to
              <span className="block mt-2 bg-linear-to-r from-indigo-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                Money Chaos
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The ultimate budgeting app for hostel life. Track expenses, split
              bills automatically, and keep your roommate relationships
              drama-free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to={"dashboard"} asChild>
                <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer">
                  Get Started Free
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-slate-500 mt-1">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">₹50K+</div>
                <div className="text-sm text-slate-500 mt-1">
                  Managed Monthly
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">98%</div>
                <div className="text-sm text-slate-500 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              We Know Your Struggles
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Managing expenses in hostel life shouldn't feel like solving a
              puzzle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemStats.map((problem, index) => {
              const Icon = problem.icon;
              const colorClasses = {
                rose: "bg-rose-500/10 border-rose-500/20 text-rose-400",
                amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
                indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
              };

              return (
                <div
                  key={index}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 hover:shadow-xl"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl ${colorClasses[problem.color]} mb-6`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything You Need,
              <span className="block mt-2 bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Nothing You Don't
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built specifically for students, by students who understand the
              struggle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-slate-500"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-400"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Simple. Clean. Effective.
            </h2>
            <p className="text-xl text-slate-400">
              Get started in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {htw.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-6xl font-bold bg-linear-to-br from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-slate-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-linear-to-br from-indigo-500/20 to-emerald-500/20 border border-indigo-500/30 rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who've made hostel budgeting effortless
            </p>
            <Link to="/dashboard" asChild>
              <button className="group px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 inline-flex items-center gap-3 cursor-pointer">
                Start Your Free Journey
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </Link>
            <p className="text-sm text-slate-500 mt-6">
              No credit card required • Free forever • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-slate-500 text-sm">
            <p>Made with ❤️ for hostel students everywhere</p>
            <p className="mt-2">
              © {new Date().getFullYear()} <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-base font-semibold">RoomSplit</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
