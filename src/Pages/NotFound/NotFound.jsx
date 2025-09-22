import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0C34]">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <section className="relative mx-6 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 text-white/90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 3l1.84 5.67h5.96l-4.82 3.5 1.84 5.66L12 14.34 7.18 17.83l1.84-5.66L4.2 8.67h5.96L12 3z" />
          </svg>
        </div>

        <h1 className="bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl">
          404
        </h1>

        <p className="mt-4 text-lg text-indigo-100/90">
          Oops—this page drifted off the map.
        </p>
        <p className="mt-1 text-sm text-indigo-100/70">
          The link may be broken or the page may have moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-[#0A0C34] shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white/90 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10 text-xs text-indigo-100/50">
          Error code: <span className="font-mono">404_NOT_FOUND</span>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-slow absolute left-10 top-10 h-1 w-1 rounded-full bg-white/60" />
        <div className="animate-pulse-slow absolute bottom-16 left-1/3 h-1 w-1 rounded-full bg-white/50" />
        <div className="animate-pulse-slow absolute right-12 top-1/4 h-1 w-1 rounded-full bg-white/60" />
        <div className="animate-pulse-slow absolute bottom-10 right-1/3 h-1 w-1 rounded-full bg-white/60" />
      </div>
    </main>
  );
};

export default NotFound;
