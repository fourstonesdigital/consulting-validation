"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    location: "",
    students: "",
    pain: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
            Your Tutoring Business Should Run Without You in the Room
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I built a custom software system for my tutoring business — automated intake, scheduling, follow-up, billing, and more. 
            Now I&apos;m building it for a few others. Here&apos;s how to apply.
          </p>
          <a
            href="#apply"
            className="inline-block bg-[#D7190B] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Apply for a Free Strategy Session →
          </a>
        </div>
      </section>

      {/* Pain points */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-8 text-center">
            Sound familiar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You're spending hours each week on admin that has nothing to do with teaching",
              "Leads fall through the cracks because follow-up is manual and inconsistent",
              "You're using 4-5 different tools that don't talk to each other",
              "You can't take a week off without the business grinding to a halt",
              "Scheduling, intake forms, and session notes are a constant headache",
              "You built a great tutoring program — but running the business is exhausting",
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <span className="text-[#D7190B] text-xl mt-0.5">✗</span>
                <p className="text-gray-700">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Story */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1B2B4B] text-white rounded-2xl p-8 md:p-12">
            <p className="text-[#FFC233] text-sm font-semibold uppercase tracking-widest mb-4">
              My Story
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              I built it for my own business first.
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I own nGenius Prep — an ACT test prep and tutoring company in Madison, Alabama. 
                A couple years ago, I was drowning in the same admin chaos every tutoring business deals with.
              </p>
              <p>
                So I built a custom platform from scratch. It handles student intake, CRM, scheduling, 
                automated follow-up, session notes, tutor communications, billing integrations, and more. 
                All in one place, built exactly for how a tutoring business actually works.
              </p>
              <p>
                Now the business runs without me managing every detail. I want to build the same thing for a small number of other tutoring businesses.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center border-t border-gray-600 pt-8">
              {[
                { stat: "300+", label: "Students tracked" },
                { stat: "12+", label: "Automations running" },
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
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-3 text-center">
            What the strategy session looks like
          </h2>
          <p className="text-gray-500 text-center mb-10">
            No pitch. No sales pressure. Just an honest look at your business.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Map your current workflow",
                desc: "Where are you losing time? Where are leads slipping through? We dig into the real operational picture.",
              },
              {
                num: "02",
                title: "Identify the highest-leverage fixes",
                desc: "Not everything needs custom software. We figure out what would actually move the needle for your business.",
              },
              {
                num: "03",
                title: "Walk away with a clear plan",
                desc: "Whether or not we work together, you'll leave with actionable clarity on what to fix first.",
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
      <section id="apply" className="px-6 py-16">
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-3 text-center">
                Apply for a Free Strategy Session
              </h2>
              <p className="text-gray-500 text-center mb-10">
                Takes 2 minutes. I review every application personally.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    What&apos;s your biggest operational headache right now? *
                  </label>
                  <textarea
                    required
                    name="pain"
                    value={formData.pain}
                    onChange={handleChange}
                    rows={4}
                    placeholder="E.g. following up with leads, scheduling, session notes, tracking payments..."
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
      <footer className="bg-gray-100 px-6 py-8 text-center text-gray-400 text-sm">
        <p>Questions? Email <a href="mailto:kyle@ngeniusprep.com" className="underline">kyle@ngeniusprep.com</a></p>
      </footer>
    </main>
  );
}
