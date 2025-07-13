import React from "react";
import { CheckCircle, FileText, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="p-8 max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Second-Look Legal</h1>
        <p className="text-lg text-gray-600 mb-6">
          Flat-fee legal risk reviews for founders, freelancers, and investors. Get peace of mind before you sign.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <FileText className="w-10 h-10 mx-auto mb-4" />
          <h2 className="font-semibold text-xl mb-2">Quick Contract Reviews</h2>
          <p className="text-sm text-gray-600">
            Upload NDAs, SAFEs, consulting agreements, or SaaS contracts. We’ll flag key risks and explain them.
          </p>
        </div>
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <ShieldCheck className="w-10 h-10 mx-auto mb-4" />
          <h2 className="font-semibold text-xl mb-2">Affordable Pricing</h2>
          <p className="text-sm text-gray-600">
            Flat-fee pricing starting at $99. No billable hours. Just actionable insight before you sign.
          </p>
        </div>
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <CheckCircle className="w-10 h-10 mx-auto mb-4" />
          <h2 className="font-semibold text-xl mb-2">Backed by a Real Lawyer</h2>
          <p className="text-sm text-gray-600">
            We use AI to screen for red flags, then a licensed attorney reviews and annotates every report.
          </p>
        </div>
      </section>

      {/* Upload Form */}
      <section className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Submit Your Contract</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fill out the form below to get a second-look risk report within 48 hours.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" required className="w-full border rounded p-2" />
          <input type="email" placeholder="Your Email" required className="w-full border rounded p-2" />
          <textarea placeholder="What kind of contract is this? (e.g. SAFE, NDA, MSA)" className="w-full border rounded p-2" />
          <input type="file" required className="w-full" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit for Review</button>
        </form>
      </section>

      {/* Payment Section */}
      <section className="p-6 bg-white rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Secure Checkout</h2>
        <p className="text-gray-600 mb-4">Pay securely via Stripe for fast processing.</p>
        <button onClick={() => window.open('https://buy.stripe.com/test_bIY3eU9I52ep4rS6oo')} className="bg-green-600 text-white px-4 py-2 rounded">
          Upgrade & Pay
        </button>
      </section>

      {/* Scheduling Section */}
      <section className="p-6 bg-white rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Schedule a Call</h2>
        <p className="text-gray-600 mb-4">Book a 15-minute Zoom consult before uploading.</p>
        <button onClick={() => window.open('https://calendly.com/secondlooklegal/consult')} className="bg-indigo-600 text-white px-4 py-2 rounded">
          Book Now
        </button>
      </section>

      {/* FAQs Section */}
      <section className="p-6 bg-gray-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Turnaround time:</strong> 48 hours from submission.</li>
          <li><strong>Flat‑fee:</strong> $99–$299 depending on contract type.</li>
          <li><strong>Legal relationship:</strong> Educational review only, not full representation.</li>
          <li><strong>Confidentiality:</strong> All documents encrypted and deleted after review.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="p-6 bg-white rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">What Clients Say</h2>
        <blockquote className="italic text-gray-700 mb-4">
          “Saved me from a hidden clause that would’ve cost thousands—fast and clear!” – Start‑up Founder
        </blockquote>
        <blockquote className="italic text-gray-700">
          “Great peace of mind before signing. Highly recommend.” – Independent Consultant
        </blockquote>
      </section>
    </main>
  );
}
