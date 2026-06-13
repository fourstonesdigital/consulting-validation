"use client";

import { useState } from "react";

export default function Home() {
  const PAIN_POINTS = [
    "Following up with leads takes too long — or doesn't happen",
    "Scheduling is a constant back-and-forth nightmare",
    "Student intake is manual and inconsistent",
    "I'm writing the same emails and texts over and over",
    "Inactive families fall off and I don't re-engage them",
    "I have no visibility into which marketing is working",
    "Session notes and parent updates eat up tutor time",
    "I can't step away without the business suffering",
    "Payments and billing are a headache to track",
    "I'm using too many disconnected tools",
  ];

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    location: "",
    students: "",
    painPoints: [] as string[],
    otherPain: "",
    revenue: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (point: string) => {
    const current = formData.painPoints;
    if (current.includes(point)) {
      setFormData({ ...formData, painPoints: current.filter((p) => p !== point) });
    } else if (current.length < 3) {
      setFormData({ ...formData, painPoints: [...current, point] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        ...formData,
        painPoints: formData.painPoints.join(" | "),
      }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email kyle@ngeniusprep.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-[#1B2B4B] text-white px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FFC233] text-sm font-semibold uppercase tracking-widest mb-4">
            For Tutoring Business Owners
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            AI-Powered Systems That Run Your Tutoring Business — So You Don&apos;t Have To
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I build custom software and AI automations for tutoring businesses — the kind that handle follow-ups, intake, scheduling, and communications without you lifting a finger. I built it for my own business first. Now I&apos;m doing it for others.
          </p>
          <div className="inline-flex flex-col items-center gap-3">
            <a
              href="#apply"
              className="inline-block bg-[#D7190B] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Apply for a Free Strategy Session →
            </a>
            <p className="text-[#FFC233] text-sm font-semibold">
              ⚠️ Only taking 3 businesses. No upfront cost.
            </p>
          </div>
        </div>
      </section>

      {/* Scarcity Bar */}
      <section className="bg-[#D7190B] px-6 py-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold text-base md:text-lg">
            🔒 I&apos;m only taking on <span className="underline">3 businesses</span> for this. No upfront cost. You pay when you see results.
          </p>
        </div>
      </section>

      {/* AI Features Banner */}
      <section className="bg-[#FFC233] px-6 py-5">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 text-[#1B2B4B] font-semibold text-sm text-center">
          {[
            "🤖 AI-Powered Lead Follow-Up",
            "📅 Automated Scheduling",
            "📋 Smart Student Intake",
            "💬 AI-Drafted Session Notes",
            "📈 Revenue Growth Automations",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* Pain points */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-3 text-center">
            Your competitors are already using AI.
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Most tutoring businesses are still doing everything manually. That gap is an opportunity — if you move first.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Leads go cold because follow-up is slow and inconsistent",
              "You're writing the same emails and texts over and over",
              "Scheduling takes hours of back-and-forth every week",
              "Student intake is still a mess of forms, calls, and PDFs",
              "You have no idea which marketing is actually driving revenue",
              "You can't scale without hiring — because humans are handling what AI could do",
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <span className="text-[#D7190B] text-xl mt-0.5">✗</span>
                <p className="text-gray-700">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What AI can do */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-3 text-center">
            What AI actually does for a tutoring business
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Not hype. Real automations I&apos;ve already built and run in my own business.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤖",
                title: "AI Lead Follow-Up",
                desc: "New inquiry comes in → AI sends a personalized response within minutes, qualifies the lead, and books the consultation. No human required.",
              },
              {
                icon: "📋",
                title: "Automated Student Intake",
                desc: "Students complete intake online → data flows directly into your system, tutors get briefed automatically, nothing falls through the cracks.",
              },
              {
                icon: "📝",
                title: "AI Session Notes & Emails",
                desc: "After every session, AI drafts a progress update email to parents. Tutors review and send in 30 seconds instead of 10 minutes.",
              },
              {
                icon: "🔔",
                title: "Smart Reminders & Re-Engagement",
                desc: "Inactive families get automatically re-engaged. Students approaching test dates get personalized outreach. All on autopilot.",
              },
              {
                icon: "📅",
                title: "Scheduling Without the Back-and-Forth",
                desc: "Students and parents book directly into your calendar. Reminders go out automatically. No more scheduling by text.",
              },
              {
                icon: "📈",
                title: "Revenue Reporting That Actually Makes Sense",
                desc: "See exactly where your revenue is coming from, which programs are growing, and where you're leaving money on the table.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-bold text-[#1B2B4B] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Story */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1B2B4B] text-white rounded-2xl p-8 md:p-12">
            <p className="text-[#FFC233] text-sm font-semibold uppercase tracking-widest mb-4">
              Proof of Concept
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              I built it for my own business first.
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I own nGenius Prep — an ACT test prep and tutoring company in Alabama. A couple years ago, I was drowning in the same admin chaos every tutoring business owner knows.
              </p>
              <p>
                So I built a custom AI-powered platform from scratch. It handles student intake, CRM, automated follow-up, AI-drafted session notes, tutor communications, billing, scheduling, and more. All connected. All automated.
              </p>
              <p>
                The business now runs without me managing every detail. I want to build the same thing — tailored to how <em>your</em> business actually works — for a small number of other tutoring businesses.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center border-t border-gray-600 pt-8">
              {[
                { stat: "300+", label: "Students tracked" },
                { stat: "12+", label: "AI automations running" },
                { stat: "0", label: "Spreadsheets" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-[#FFC233]">{stat}</div>
                  <div className="text-gray-400 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-3 text-center">
            What the strategy session looks like
          </h2>
          <p className="text-gray-500 text-center mb-10">
            No pitch. No pressure. An honest look at where AI can move the needle for your business.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Audit your current operations",
                desc: "Where are you losing time? Where are leads slipping? We map the real workflow — manual steps, bottlenecks, and the tools you're duct-taping together.",
              },
              {
                num: "02",
                title: "Identify your highest-leverage AI wins",
                desc: "Not everything needs to be automated. We find the 2-3 places where AI would have the biggest impact on your time and your revenue.",
              },
              {
                num: "03",
                title: "Walk away with a clear roadmap",
                desc: "Whether or not we work together, you'll leave knowing exactly what to build, what to automate, and what to stop doing manually.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="text-4xl font-bold text-[#FFC233] opacity-60 shrink-0 w-12">
                  {num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B2B4B] mb-1">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-6 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-6">✅</div>
              <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">
                You&apos;re in. I&apos;ll be in touch shortly.
              </h2>
              <p className="text-gray-600">
                I personally review every application. Expect to hear from me within 1-2 business days.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <span className="inline-block bg-[#D7190B] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                  Only 3 spots available
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-3">
                  Apply for a Free AI Strategy Session
                </h2>
                <p className="text-gray-500">
                  No upfront cost. Takes 2 minutes. I review every application personally.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      required
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Apex Tutoring"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Where are you located? *
                  </label>
                  <input
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    How many active students do you have? *
                  </label>
                  <select
                    required
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B] bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="1-10">1–10</option>
                    <option value="11-30">11–30</option>
                    <option value="31-75">31–75</option>
                    <option value="75+">75+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What are your biggest pain points? <span className="text-[#D7190B]">Pick up to 3</span> *
                  </label>
                  <p className="text-xs text-gray-400 mb-3">Selected: {formData.painPoints.length}/3</p>
                  <div className="space-y-2">
                    {PAIN_POINTS.map((point) => {
                      const selected = formData.painPoints.includes(point);
                      const maxed = formData.painPoints.length >= 3 && !selected;
                      return (
                        <label
                          key={point}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            selected
                              ? "border-[#1B2B4B] bg-[#1B2B4B]/5"
                              : maxed
                              ? "border-gray-200 opacity-40 cursor-not-allowed"
                              : "border-gray-200 hover:border-[#1B2B4B]/40"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            disabled={maxed}
                            onChange={() => handleCheckbox(point)}
                            className="mt-0.5 accent-[#1B2B4B] shrink-0"
                          />
                          <span className="text-sm text-gray-700">{point}</span>
                        </label>
                      );
                    })}
                  </div>
                  {formData.painPoints.length === 0 && (
                    <input type="hidden" name="painPointsRequired" required />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Annual business revenue *
                  </label>
                  <select
                    required
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B] bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K – $500K</option>
                    <option value="500k-1m">$500K – $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Anything else you want me to know? <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="otherPain"
                    value={formData.otherPain}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any context that would help me prepare for our conversation..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B] resize-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@apextutoring.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-[#D7190B] text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D7190B] hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors"
                >
                  {loading ? "Submitting…" : "Apply Now — It's Free"}
                </button>
                <p className="text-center text-gray-400 text-sm">
                  No spam. No pressure. I personally read every application.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B2B4B] px-6 py-8 text-center text-gray-400 text-sm">
        <p>Questions? Email <a href="mailto:kyle@ngeniusprep.com" className="underline text-gray-300">kyle@ngeniusprep.com</a></p>
      </footer>
    </main>
  );
}
