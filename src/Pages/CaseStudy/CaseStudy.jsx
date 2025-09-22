import React, { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const toArray = (x) => (Array.isArray(x) ? x : Array.isArray(x?.data) ? x.data : []);
const safeArray = (v) => (Array.isArray(v) ? v : []);
const toDate = (v) => {
  const d = v ? new Date(v) : null;
  return isNaN(d?.getTime?.()) ? null : d;
};

const CaseStudy = () => {
  const loaderData = useLoaderData();
  const items = useMemo(() => toArray(loaderData), [loaderData]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (!selectedId && items.length) setSelectedId(items[0]?.id ?? 0);
  }, [items, selectedId]);

  const selected = useMemo(
    () => items.find((i) => (i?.id ?? 0) === selectedId) ?? null,
    [items, selectedId]
  );

  const gallery = useMemo(() => {
    if (!selected) return [];
    const arr = [];
    if (selected.image) arr.push(selected.image);
    if (selected.banner) arr.push(selected.banner);
    if (Array.isArray(selected.images)) arr.push(...selected.images);
    return Array.from(new Set(arr.filter(Boolean)));
  }, [selected]);

  const [displayImg, setDisplayImg] = useState(null);

  useEffect(() => {
    setDisplayImg(gallery[0] || null);
  }, [gallery]);

  return (
    <main className="min-h-screen bg-[#0A0C34] px-4 py-8 sm:px-6 lg:px-10">
        <Helmet>
  <title>Case Study | JobFinder</title>
  <meta name="description" content="View and manage your JobFinder profile." />
</Helmet>
      <header className="mx-auto mb-6 max-w-7xl">
        <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 bg-clip-text sm:text-4xl">
          Case Studies
        </h1>
      </header>

      <section className="grid grid-cols-1 gap-6 mx-auto max-w-7xl lg:grid-cols-12">
        <aside className="p-4 border lg:col-span-4 rounded-2xl border-white/10 bg-white/5 backdrop-blur">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search titles…"
              onChange={(e) => {
                const q = e.target.value.toLowerCase();
                const first = items.find((it) =>
                  String(it?.title || "").toLowerCase().includes(q)
                );
                if (first) setSelectedId(first.id ?? 0);
              }}
              className="w-full px-4 py-3 text-white border outline-none rounded-xl border-white/10 bg-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-white/40"
            />
          </div>
          <ul className="max-h-[70vh] overflow-auto pr-1 space-y-2">
            {items.map((it, i) => {
              const id = it?.id ?? i;
              const active = id === selectedId;
              return (
                <li key={id}>
                  <button
                    onClick={() => setSelectedId(id)}
                    className={`w-full text-left rounded-xl px-4 py-3 transition-transform hover:scale-[1.01] ${
                      active
                        ? "bg-white text-[#0A0C34] font-semibold shadow"
                        : "bg-white/5 text-white/90 border border-white/10"
                    }`}
                  >
                    <div className="line-clamp-2">{it?.title ?? "Untitled"}</div>
                    <div className={`mt-1 text-xs ${active ? "text-[#0A0C34]/70" : "text-white/60"}`}>
                      {toDate(it?.date)?.toLocaleDateString() || "—"}
                    </div>
                  </button>
                </li>
              );
            })}
            {!items.length && (
              <li className="p-4 border rounded-xl border-white/10 bg-white/5 text-white/80">
                No case studies found.
              </li>
            )}
          </ul>
        </aside>

        <article className="lg:col-span-8">
          {selected ? (
            <div className="p-6 border shadow-2xl rounded-2xl border-white/10 bg-white/5 backdrop-blur">
              {displayImg && (
                <div className="mb-5">
                  <img
                    src={displayImg}
                    alt={selected.title || "Case study image"}
                    className="object-cover w-full h-56 rounded-xl md:h-72"
                  />
                </div>
              )}

              <h2 className="text-2xl font-bold text-white">{selected.title ?? "Untitled"}</h2>

              <div className="flex flex-wrap gap-2 mt-3">
                {selected?.type && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0A0C34]">
                    {selected.type}
                  </span>
                )}
                {selected?.category && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-indigo-100/90">
                    {selected.category}
                  </span>
                )}
                {selected?.company && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-indigo-100/90">
                    {selected.company}
                  </span>
                )}
                {selected?.author && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-indigo-100/90">
                    by {selected.author}
                  </span>
                )}
                {toDate(selected?.date) && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-indigo-100/90">
                    {toDate(selected.date).toLocaleDateString()}
                  </span>
                )}
                
                {safeArray(selected?.tags).map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-indigo-100/90"
                  >
                    {String(t)}
                  </span>
                ))}
              </div>

              {selected?.description && (
                <div className="mt-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">Overview</h3>
                  <p className="whitespace-pre-wrap text-indigo-100/90">{selected.description}</p>
                </div>
              )}

              {gallery.length > 1 && (
                <div className="mt-6">
                  <h4 className="mb-2 text-sm font-semibold text-indigo-100/80">Gallery</h4>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {gallery.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setDisplayImg(src)}
                        className={`group overflow-hidden rounded-xl border transition ${
                          displayImg === src
                            ? "border-white/70"
                            : "border-white/10 hover:border-white/30"
                        }`}
                        title="View image"
                      >
                        <img
                          src={src}
                          alt={`Thumbnail ${idx + 1}`}
                          className="object-cover w-full h-20 opacity-90 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                {selected?.link ? (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A0C34] shadow transition-transform hover:scale-[1.02]"
                  >
                    View Full Case Study
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold border cursor-not-allowed rounded-xl border-white/20 text-white/85"
                  >
                    No External Link
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-10 text-center border rounded-2xl border-white/10 bg-white/5 text-indigo-100/80">
              Select a case study from the left to view details.
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

export default CaseStudy;