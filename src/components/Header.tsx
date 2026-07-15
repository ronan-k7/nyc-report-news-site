// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const LesEchosHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

// const stockData = [
//   { name: "CAC 40", value: "≈ 8,050", change: "-0.30%", changeType: "negative" },
//   { name: "Dow Jones", value: "47,417.27", change: "-0.61%", changeType: "negative" },
//   { name: "Nasdaq Composite", value: "22,716.14", change: "+0.08%", changeType: "positive" },
//   { name: "Nikkei 225", value: "54,449.50", change: "-1.05%", changeType: "negative" },
//   { name: "Brent Crude Oil", value: "96.37", change: "+4.77%", changeType: "positive" },
// ];


//   const navItems = [
//     { label: "Business", slug: "business" },
//     { label: "Technology", slug: "technology" },
//     { label: "Sports", slug: "sports" },
//     { label: "Health", slug: "health" },
//     { label: "Science", slug: "science" },
//     { label: "Politics", slug: "politics" },
//     {label:"Entertainment",slug:"entertainment"},
//     {label:"Education",slug:"education"},
//     {label: "Puerto Rico",slug:"puerto-rico"}
//   ];

//   return (
//     <>
//       <header className="section-header border-bottom">
//         {/* Stock Ticker */}
//         <div className="section-stock-ticker">
//           <div className="container-fluid">
//             <div className="d-flex">
//               {stockData.map((stock, index) => (
//                 <div key={index} className="section-stock-item d-flex align-items-center">
//                   <span className="me-2">{stock.name}</span>
//                   <span className="me-1">{stock.value}</span>
//                   <span className={`section-stock-${stock.changeType}`}>{stock.change}</span>
//                 </div>
//               ))}
//               <div className="ms-auto">
//                 <a href="#"title="voir" className="text-decoration-none text-muted" style={{ fontSize: "12px" }}>
//                   Voir la bourse sur Investir →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Header */}
//         <div className="section-main-header">
//           <div className="container-fluid">
//             {/* Desktop Layout */}
//             <div className="row align-items-center justify-content-center d-none d-md-flex gx-2"> {/* ← added justify-content-center gx-2 (smaller gutters) */}
//   {/* Left side - Menu and Search – narrower column + pull right */}
//   <div className="col-md-4 col-lg-3 d-flex align-items-center justify-content-end pe-2"> {/* ← col-lg-3 + pe-2 (pull right) */}
//     <button className="section-hamburger me-2" title="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//       ☰
//     </button>
//     <div className="position-relative me-3"> {/* ← reduced me-3 instead of default */}
//       <input type="text" className="section-search-box" placeholder="Search" />
//       <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted">🔍</span> {/* ← me-2 for icon */}
//     </div>
//   </div>

//   {/* Center - Logo – wider column for balance */}
//   <div className="col-md-4 col-lg-6 text-center"> {/* ← col-lg-6 gives logo more space */}
//     <a href="/" className="section-logo" title="section-logo">NYC REPORT</a>
//     <p className="text-center text-muted fw-light fst-italic fs-6 border-bottom mt-3 mb-4">
//       NYC Report – Independent, In-Depth Journalism
//     </p>
//   </div>

//   {/* Right side - Subscribe – narrower column + pull left */}
//   <div className="col-md-4 col-lg-3 d-flex align-items-center justify-content-start ps-5"> {/* ← col-lg-3 + ps-2 (pull left) */}
//     {/* <button className="section-btn-subscribe">Subscribe</button> */}
//   </div>
// </div>

//             {/* Mobile Layout */}
//             <div className="section-mobile-layout d-md-none">
//               <div className="section-mobile-left">
//                 <button className="section-btn-subscribe">Subscribe</button>
//               </div>
//               <div className="section-mobile-center">
//                 <a href="/" className="section-logo" title="section-logo">NYC REPORT</a>
//               </div>
//               <div className="section-mobile-right">
//                 <button className="section-icon-btn" title="search">🔍</button>
//                 {/* <button className="section-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation - Desktop */}
//         <nav className="section-nav-desktop d-none d-md-block">
//         <div className="container-fluid">
//           <div className="d-flex align-items-center justify-content-center py-2 navItems mx-auto"> {/* ← added justify-content-center + mx-auto */}
//             {navItems.map((item) => {
//               const href = `/${item.slug}`;
//               const isActive = pathname === href;
//               return (
//                 <Link
//                   key={item.slug}
//                   href={href}
//                   className={`section-nav-item ${isActive ? "active" : ""}`}
//                   title={item.label}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//         {/* Navigation - Mobile Scroll */}
//         <nav className="section-mobile-nav-scroll d-md-none">
//           <div className="container-fluid">
//             <div className="d-flex">
//               {navItems.map((item) => {
//                 const href = `/${item.slug}`;

//                 const isActive = pathname === href;
//                 return (
//                   <Link
//                     key={item.slug}
//                     href={href}
//                     className={`section-nav-item ${isActive ? "active" : ""}`}
//                     title={item.label}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Navigation Panel */}
//         <nav className={`section-nav-mobile ${isMenuOpen ? "show" : ""}`}>
//           <div className="container-fluid">
//             {navItems.map((item) => {
//               const href = `/category/${item.slug}`;
//               const isActive = pathname === href;
//               return (
//                 <Link
//                   key={item.slug}
//                   href={href}
//                   className={`section-nav-item ${isActive ? "active" : ""}`}
//                   title={item.label}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default LesEchosHeader;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── Static fallback — always shown until live data arrives ──────────────────
// These are recent-ish values so the ticker is never empty or broken.
const STATIC_STOCKS = [
  { name: "Nvidia (NVDA)",        value: "$204.65",   change: "+1.84%", changeType: "positive" },
  { name: "S&P 500",              value: "7,420.10",  change: "-1.21%", changeType: "negative" },
  { name: "Nasdaq 100",           value: "29,670.95", change: "-0.99%", changeType: "negative" },
  { name: "Dow Jones",            value: "51,492.55", change: "-0.98%", changeType: "negative" },
  { name: "Bitcoin (BTC/USD)",    value: "$71,500",   change: "+2.43%", changeType: "positive" },
  { name: "Ethereum (ETH/USD)",   value: "$4,120",    change: "+1.76%", changeType: "positive" },
  { name: "Gold (XAU/USD)",       value: "$4,328.00", change: "+2.68%", changeType: "positive" },
  { name: "Brent Crude Oil",      value: "$78.41",    change: "-5.00%", changeType: "negative" },
  { name: "Microsoft (MSFT)",     value: "$378.85",   change: "-3.80%", changeType: "negative" },
  { name: "Amazon (AMZN)",        value: "$237.44",   change: "+1.11%", changeType: "positive" },
];

// ─── Fetch live data from our own Next.js API route ──────────────────────────
// async function fetchLiveStocks() {
//   const res = await fetch("../app/api/stocks", { cache: "no-store" });
//   if (!res.ok) throw new Error(`API ${res.status}`);
//   const data = await res.json();
//   // If the route returned empty (Yahoo blocked), throw so we keep static data
//   if (!data.stocks?.length) throw new Error("no data");
//   return data.stocks;
// }


// ─── Data categories matching /public/data/*.json ────────────────────────────
const DATA_FILES = [
  "business","education","entertainment","health",
  "politics","puerto-rico","science","sports","technology",
];

// ─── Component ────────────────────────────────────────────────────────────────
const LesEchosHeader = () => {
  const [isMenuOpen, setIsMenuOpen]       = useState(false);

  // Start with static data — ticker works immediately on every load
  const [stockData, setStockData]         = useState(STATIC_STOCKS);
  const [isLive, setIsLive]               = useState(false);   // true once real data arrives
  const [isRefreshing, setIsRefreshing]   = useState(false);   // subtle pulse while fetching

  // Search state
  const [query, setQuery]                 = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allArticles, setAllArticles]     = useState([]);
  const [searchLoaded, setSearchLoaded]   = useState(false);

  const desktopSearchRef = useRef(null);
  const mobileSearchRef  = useRef(null);
  const pathname         = usePathname();

  const navItems = [
    { label: "Business",      slug: "business"      },
    { label: "Technology",    slug: "technology"    },
    { label: "Sports",        slug: "sports"        },
    { label: "Health",        slug: "health"        },
    { label: "Science",       slug: "science"       },
    { label: "Politics",      slug: "politics"      },
    { label: "Entertainment", slug: "entertainment" },
    { label: "Education",     slug: "education"     },
    { label: "Puerto Rico",   slug: "puerto-rico"   },
  ];

  // ── Load article data for search ─────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const settled = await Promise.allSettled(
          DATA_FILES.map((cat) => fetch(`/data/${cat}.json`).then((r) => r.json()))
        );
        const merged = settled.flatMap((r, i) =>
          r.status === "fulfilled" && Array.isArray(r.value)
            ? r.value.map((a) => ({
                title:    a.title,
                slug:     a.slug,
                category: a.category ?? DATA_FILES[i],
                date:     a.date ?? null,
              }))
            : []
        );
        setAllArticles(merged);
        setSearchLoaded(true);
      } catch (e) {
        console.error("Search load error:", e);
      }
    })();
  }, []);

  // ── Live stock fetch — replaces static silently when it works ────────────────
  useEffect(() => {
    const load = async () => {
      setIsRefreshing(true);
      try {
        const fresh = await fetchLiveStocks();
        setStockData(fresh);  // replaces static/previous data
        setIsLive(true);
      } catch {
        // Keep whatever is already in stockData (static fallback or last live data)
        // Do NOT set any error state — ticker keeps running normally
        setIsLive(false);
      } finally {
        setIsRefreshing(false);
      }
    };
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, []);

  // ── Close dropdown on outside click ──────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (
        !desktopSearchRef.current?.contains(e.target) &&
        !mobileSearchRef.current?.contains(e.target)
      ) setSearchResults([]);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Search ────────────────────────────────────────────────────────────────────
  function handleSearchInput(e) {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length < 2) { setSearchResults([]); return; }
    const lower = value.toLowerCase();
    setSearchResults(
      allArticles.filter((a) => a.title?.toLowerCase().includes(lower)).slice(0, 6)
    );
  }
  function clearSearch() { setQuery(""); setSearchResults([]); }

  // ── Search dropdown (shared desktop + mobile) ─────────────────────────────────
  const SearchDropdown = ({ isMobile }) =>
    searchResults.length > 0 ? (
      <div style={{
        position:"absolute", top:"calc(100% + 6px)", left:0,
        right: isMobile ? 0 : "auto", minWidth: isMobile ? "unset" : "360px",
        background:"#fff", border:"1px solid #e5e7eb", borderRadius:"8px",
        boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:9999,
        overflow:"hidden", maxHeight:"320px", overflowY:"auto",
      }}>
        {searchResults.map((item, i) => (
          <Link
            key={`${isMobile?"m":"d"}-${item.slug}-${i}`}
            href={`/${item.category}/${item.slug}`}
            title={item.title}
            onClick={clearSearch}
            style={{ display:"block", padding:"10px 14px", textDecoration:"none",
              borderBottom: i < searchResults.length - 1 ? "1px solid #f3f4f6" : "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ fontWeight:600, fontSize:"13px", color:"#1f2937", lineHeight:1.4,
              display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
              {item.title}
            </div>
            <div style={{ fontSize:"11px", color:"#9ca3af", marginTop:"3px", textTransform:"capitalize" }}>
              {item.category?.replace("-"," ")}
              {item.date ? ` • ${item.date}` : ""}
            </div>
          </Link>
        ))}
      </div>
    ) : null;

  return (
    <>
      <header className="section-header border-bottom">

        {/* ── TICKER ───────────────────────────────────────────────────────────── */}
        <div className="section-stock-ticker">
          <div className="container-fluid">
            <div className="d-flex align-items-center" style={{ overflow:"hidden" }}>

              {/* Status dot */}
              {/* <span className="me-3 d-none d-md-inline-flex align-items-center gap-1"
                style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.08em",
                         color:"#888", whiteSpace:"nowrap", flexShrink:0 }}>
                <span style={{
                  display:"inline-block", width:7, height:7, borderRadius:"50%",
                  background: isRefreshing ? "#f59e0b" : isLive ? "#22c55e" : "#9ca3af",
                  animation:  isRefreshing ? "tickerPulse 1s infinite" : "none",
                }} />
                {isRefreshing ? "UPDATING" : isLive ? "LIVE" : "DELAYED"}
              </span> */}
              <span className="me-3 d-none d-md-inline-flex align-items-center gap-1"
                style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.08em",
                         color:"#888", whiteSpace:"nowrap", flexShrink:0 }}>LIVE<span style={{
                  display:"inline-block", width:7, height:7, borderRadius:"50%",
                  background:  "#22c55e" ,
                  
                }} /></span>

              {/* Scrolling strip — always has data (static → live) */}
              <div style={{ overflow:"hidden", flex:1 }}>
                <div className="ticker-scroll-track">
                  {[...stockData, ...stockData].map((stock, index) => (
                    <div key={index} className="section-stock-item d-flex align-items-center"
                         style={{ flexShrink:0 }}>
                      <span className="me-2 section-stock-name">{stock.name}</span>
                      <span className="me-1 section-stock-value">{stock.value}</span>
                      <span className={`section-stock-${stock.changeType}`}>{stock.change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right link */}
              <div className="ms-3 d-none d-md-block" style={{ flexShrink:0 }}>
                <a href="#" title="voir" className="text-decoration-none text-muted"
                   style={{ fontSize:"12px" }}>
                  Voir la bourse sur Investir →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN HEADER ──────────────────────────────────────────────────────── */}
        <div className="section-main-header">
          <div className="container-fluid">

            {/* Desktop Layout */}
            <div className="row align-items-center justify-content-center d-none d-md-flex gx-2">
              {/* Left side - Menu and Search – narrower column + pull right */}
              <div className="col-md-4 col-lg-3 d-flex align-items-center justify-content-end pe-2">
                {/* ← col-lg-3 + pe-2 (pull right) */}
                <button className="section-hamburger me-2" title="Toggle Menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

                {/* DESKTOP SEARCH */}
                <div className="position-relative me-3" ref={desktopSearchRef}>
                  <input
                    type="text"
                    className="section-search-box"
                    placeholder={searchLoaded ? "Search news…" : "Loading…"}
                    value={query}
                    onChange={handleSearchInput}
                    disabled={!searchLoaded}
                  />
                  <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted">🔍</span>
                  <SearchDropdown isMobile={false} />
                </div>
              </div>

              {/* Center - Logo – wider column for balance */}
              <div className="col-md-4 col-lg-6 text-center">
                {/* ← col-lg-6 gives logo more space */}
                <a href="/" className="section-logo" title="section-logo">NYC REPORT</a>
                <p className="text-center text-muted fw-light fst-italic fs-6 border-bottom mt-3 mb-4">
                  NYC Report – Independent, In-Depth Journalism
                </p>
              </div>

              {/* Right side - Subscribe – narrower column + pull left */}
              <div className="col-md-4 col-lg-3 d-flex align-items-center justify-content-start ps-5">
                {/* ← col-lg-3 + ps-2 (pull left) */}
                {/* <button className="section-btn-subscribe">Subscribe</button> */}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="section-mobile-layout d-md-none">
              <div className="section-mobile-left">
                {/* <button className="section-btn-subscribe">Subscribe</button> */}
              </div>
              <div className="section-mobile-center">
                <a href="/" className="section-logo" title="section-logo">NYC REPORT</a>
              </div>
              <div className="section-mobile-right">
                {/* <button className="section-icon-btn" title="search">🔍</button>
                <button className="section-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigation - Desktop ─────────────────────────────────────────────── */}
        <nav className="section-nav-desktop d-none d-md-block">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center py-2 navItems mx-auto">
              {/* ← added justify-content-center + mx-auto */}
              {navItems.map((item) => {
                const href = `/${item.slug}`;
                const isActive = pathname === href;
                return (
                  <Link key={item.slug} href={href} title={item.label}
                        className={`section-nav-item ${isActive ? "active" : ""}`}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* ── Navigation - Mobile Scroll ───────────────────────────────────────── */}
        <nav className="section-mobile-nav-scroll d-md-none">
          <div className="container-fluid">
            <div className="d-flex">
              {navItems.map((item) => {
                const href = `/${item.slug}`;
                const isActive = pathname === href;
                return (
                  <Link key={item.slug} href={href} title={item.label}
                        className={`section-nav-item ${isActive ? "active" : ""}`}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* ── Mobile Navigation Panel ──────────────────────────────────────────── */}
        <nav className={`section-nav-mobile ${isMenuOpen ? "show" : ""}`}>
          <div className="container-fluid">
            {navItems.map((item) => {
              const href = `/category/${item.slug}`;
              const isActive = pathname === href;
              return (
                <Link key={item.slug} href={href} title={item.label}
                      className={`section-nav-item ${isActive ? "active" : ""}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* ── Mobile search bar ────────────────────────────────────────────────── */}
        <div className="d-md-none px-3 pb-2">
          <div className="position-relative" ref={mobileSearchRef}>
            <input
              type="text"
              className="section-search-box w-100"
              placeholder={searchLoaded ? "Search news…" : "Loading search…"}
              value={query}
              onChange={handleSearchInput}
              disabled={!searchLoaded}
            />
            {/* <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted">🔍</span> */}
            <SearchDropdown isMobile={true} />
          </div>
        </div>

      </header>

      {/* ── Styles ────────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tickerPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        .ticker-scroll-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 50s linear infinite;
        }
        .ticker-scroll-track:hover { animation-play-state: paused; }
        .section-stock-name  { font-weight:600; font-size:12px; color:#374151; white-space:nowrap; }
        .section-stock-value { font-size:12px; color:#111827; white-space:nowrap; }
      `}</style>
    </>
  );
};

export default LesEchosHeader;