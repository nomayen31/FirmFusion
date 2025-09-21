import React, { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      author: "Bonnie Green",
      role: "Web developer at Google",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Using these components cut our build time in half. The design system is consistent, accessible, and easy to customize.",
      author: "Cody Fisher",
      role: "Product Engineer at Acme",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Clean, modern, and production ready. Exactly what we needed to launch faster without sacrificing quality.",
      author: "Leslie Alexander",
      role: "Founder, PixelCraft",
      avatar:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative overflow-hidden isolate text-slate-100">
      <div className="max-w-5xl px-6 py-24 mx-auto sm:py-28 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Testimonials</h2>
          <p className="mt-3 text-base leading-7 text-slate-400">
            Explore the whole collection of open-source web components and elements built
            with the utility classes from Tailwind
          </p>
        </div>

        <figure className="max-w-4xl mx-auto text-center mt-14">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mx-auto text-slate-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.17 6.17C4.4 8.93 3 11.97 3 16h7V6H7.17zm13.66 0C18.4 8.93 17 11.97 17 16h7V6h-3.17z" />
          </svg>

          <blockquote className="mt-6 text-xl font-medium leading-9 text-balance text-slate-200 sm:text-2xl sm:leading-10">
            “{t.quote}.”
          </blockquote>

          <figcaption className="flex items-center justify-center mt-8 gap-x-3">
            <img
              src={t.avatar}
              alt={t.author}
              className="object-cover rounded-full h-9 w-9 ring-2 ring-slate-700"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-100">{t.author}</div>
              <div className="text-sm text-slate-400">{t.role}</div>
            </div>
          </figcaption>
        </figure>

        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 transition border rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 transition border rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>


      <div className="pointer-events-none absolute inset-0 -z-10 transparent)]" />
    </section>
  );
}
