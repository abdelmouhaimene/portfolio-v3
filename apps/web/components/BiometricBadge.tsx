'use client'
import React, { useEffect, useRef, useState } from "react";

interface BiometricBadgeProps {
  name?: string;
  profession?: string;
  address?: string;
  phone?: string;
  website?: string;
}

export default function BiometricBadge({
  name = "A. ASSILA",
  profession = "Software Engineer",
  address = "14 Rue des Cyprès, Arles, France",
  phone = "+33 4 90 12 34 56",
  website = "elias-faucher.design",
}: BiometricBadgeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative flex items-center justify-center w-full md:min-h-[420px] min-h-[210px] p-8 ">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes flapOpen {
          0%   { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(-14deg) translateY(-6px); }
        }
        @keyframes cardEmerge {
          0%   { opacity: 0; transform: translateY(78px) scale(0.8) rotate(-7deg); }
          55%  { opacity: 1; transform: translateY(-8px) scale(1.02) rotate(1.5deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes shineSweep {
          0%   { transform: translate(-160%, -20%) rotate(12deg); opacity: 0; }
          12%  { opacity: 0.85; }
          100% { transform: translate(160%, 20%) rotate(12deg); opacity: 0; }
        }
        @keyframes ringPulse {
          0%   { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50%      { opacity: 0.85; }
        }
        .badge-wallet-hidden { opacity: 0; }
        .badge-wallet-play {
          animation: flapOpen 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;
          transform-origin: 50% 100%;
        }
        .badge-card-hidden { opacity: 0; transform: translateY(78px) scale(0.8) rotate(-7deg); }
        .badge-card-play {
          animation: cardEmerge 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }
        .badge-shine-play {
          animation: shineSweep 1.15s ease-out 1.15s 1 both;
        }
        .badge-ring-play {
          animation: ringPulse 1.4s ease-out 1.2s 2 both;
        }
        .badge-star {
          animation: twinkle 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .badge-wallet-play, .badge-card-play, .badge-shine-play, .badge-ring-play, .badge-star {
            animation: none !important;
          }
          .badge-wallet-hidden, .badge-card-hidden {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ambient starfield */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "18%", size: 3, delay: "0s" },
          { top: "22%", left: "76%", size: 2, delay: "0.6s" },
          { top: "68%", left: "10%", size: 2, delay: "1.1s" },
          { top: "78%", left: "82%", size: 3, delay: "0.3s" },
          { top: "8%", left: "52%", size: 2, delay: "1.6s" },
          { top: "88%", left: "48%", size: 2, delay: "0.9s" },
        ].map((s, i) => (
          <span
            key={i}
            className="badge-star absolute rounded-full bg-[#f4e9c1]"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              boxShadow: "0 0 6px 1px rgba(244,233,193,0.6)",
            }}
          />
        ))}
      </div>

      {/* wallet pocket behind the card */}
      <div className="relative">
        <div
          className={`absolute left-1/2 -translate-x-1/2 -top-6 w-[300px] h-[160px] md:w-[500px] md:h-[260px] rounded-[22px] bg-gradient-to-b from-[#241812] to-[#100b08] border border-[#3a2a1c] shadow-[0_18px_30px_rgba(0,0,0,0.55)] ${
            inView ? "badge-wallet-play" : "badge-wallet-hidden"
          }`}
          style={{ zIndex: 0 }}
        >
          <div className="absolute inset-x-6 top-4 h-[2px] rounded-full bg-[#4a3624] opacity-70" />
        </div>

        {/* the card */}
        <div
          className={`relative  w-[300px] h-[160px] md:w-[500px] md:h-[260px] rounded-[20px] overflow-hidden border border-[#c9a13b]/40 ${
            inView ? "badge-card-play" : "badge-card-hidden"
          }`}
          style={{
            zIndex: 1,
            background:
              "radial-gradient(120% 140% at 15% 10%, #1b3a6b 0%, #0f2a52 32%, #0a1f44 55%, #0a1120 85%)",
            boxShadow:
              "0 22px 40px rgba(3, 8, 20, 0.65), inset 0 0 40px rgba(244,195,48,0.05)",
          }}
        >
          {/* swirl texture */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
            viewBox="0 0 340 196"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="swirl">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012 0.028"
                  numOctaves={3}
                  seed={7}
                  result="noise"
                />
                <feColorMatrix
                  in="noise"
                  type="matrix"
                  values="0 0 0 0 0.55
                          0 0 0 0 0.68
                          0 0 0 0 0.85
                          0 0 0 0.5 0"
                />
              </filter>
            </defs>
            <rect width="340" height="196" filter="url(#swirl)" />
          </svg>

          {/* shine sweep */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className={`absolute -top-1/2 left-0 h-[220%] w-[35%] ${inView ? "badge-shine-play" : ""}`}
              style={{
                background:
                  "linear-gradient(75deg, transparent 0%, rgba(255,247,214,0.0) 35%, rgba(255,247,214,0.55) 50%, rgba(255,247,214,0.0) 65%, transparent 100%)",
              }}
            />
          </div>

          {/* card content */}
          <div className="relative z-10 flex h-full">
            <div className="flex flex-col justify-between px-5 py-4 flex-1 min-w-0">
              <div>
                <h1
                  className="text-[#f4e9c1] leading-tight truncate"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "22px",
                    textShadow: "0 0 12px rgba(244,195,48,0.35)",
                  }}
                >
                  {name}
                </h1>
                <p
                  className="text-[#9fc3e8] mt-1 truncate"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.03em" }}
                >
                  {profession}
                </p>
              </div>

              <div className="space-y-1.5">
                <InfoRow icon="pin" text={address} />
                <InfoRow icon="phone" text={phone} />
                <InfoRow icon="globe" text={website} />
              </div>
            </div>

            {/* biometric fingerprint emblem */}
            <div className="relative flex items-center justify-center w-[92px] shrink-0 border-l border-[#f4e9c1]/15">
              <span
                className={`absolute w-12 h-12 rounded-full border border-[#f4c430]/60 ${
                  inView ? "badge-ring-play" : "opacity-0"
                }`}
              />
              <span className="absolute w-16 h-16 rounded-full bg-[#f4c430]/10 blur-md" />
              <FingerprintIcon className="relative w-9 h-9 text-[#f4c430]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type InfoIcon = "pin" | "phone" | "globe";

interface InfoRowProps {
  icon: InfoIcon;
  text: string;
}

function InfoRow({ icon, text }: InfoRowProps) {
  const icons: Record<InfoIcon, JSX.Element> = {
    pin: (
      <path
        d="M8 1.5c-2.2 0-4 1.79-4 4 0 3 4 7 4 7s4-4 4-7c0-2.21-1.8-4-4-4Zm0 5.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z"
        fill="currentColor"
      />
    ),
    phone: (
      <path
        d="M3.6 1.8 5.9 2.3c.3.06.5.32.5.63l-.1 1.9c-.02.28-.16.53-.4.68l-1 .62a8.7 8.7 0 0 0 4.1 4.1l.62-1c.15-.24.4-.38.68-.4l1.9-.1c.31 0 .57.2.63.5l.5 2.3a.65.65 0 0 1-.4.75c-.55.2-1.2.32-1.83.24a10.8 10.8 0 0 1-9.3-9.3 3.6 3.6 0 0 1 .24-1.83.65.65 0 0 1 .57-.42Z"
        fill="currentColor"
      />
    ),
    globe: (
      <path
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm4.9 5.7h-2c-.05-1.05-.24-2.02-.55-2.83a5.1 5.1 0 0 1 2.55 2.83Zm-4.9-4.2c.5.7.9 1.7 1.05 2.9H6.95c.15-1.2.55-2.2 1.05-2.9Zm-2.4 1.37c-.31.81-.5 1.78-.55 2.83h-2a5.1 5.1 0 0 1 2.55-2.83ZM3.05 8.7h2c.05 1.05.24 2.02.55 2.83A5.1 5.1 0 0 1 3.05 8.7Zm3.9 0h2.1c-.15 1.2-.55 2.2-1.05 2.9-.5-.7-.9-1.7-1.05-2.9Zm2.95 2.83c.31-.81.5-1.78.55-2.83h2a5.1 5.1 0 0 1-2.55 2.83Z"
        fill="currentColor"
      />
    ),
  };
  return (
    <div className="flex items-center gap-2 min-w-0">
      <svg viewBox="0 0 16 14" className="w-3 h-3 text-[#f4c430]/80 shrink-0">
        {icons[icon]}
      </svg>
      <span
        className="text-[#dce6f2]/85 truncate"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10.5px" }}
      >
        {text}
      </span>
    </div>
  );
}

interface FingerprintIconProps {
  className?: string;
}

function FingerprintIcon({ className }: FingerprintIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C7.6 2 4 5.6 4 10v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M20 10c0-2.2-.9-4.2-2.3-5.6M12 4.5c3 0 5.5 2.5 5.5 5.5v3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.5 10a3.5 3.5 0 0 1 7 0v2.5c0 3.5-1.5 6-3.5 7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M12 10v2.2c0 2.6-1 4.6-2.6 6.2M6.3 13.5C6.1 14.8 6 16 6 17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M15.5 10.2v2.1c0 1.6-.3 3-1 4.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}