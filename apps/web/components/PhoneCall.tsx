'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type Screen = 'home' | 'incoming' | 'call' | 'confirmed'

const PhoneCall = () => {
    const [screen, setScreen] = useState<Screen>('home')
  const [callTimer, setCallTimer] = useState(0)
  const [ringing, setRinging] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [chatStep, setChatStep] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const chat = [
    { from: 'agent', text: "Hello Karim, I'm calling you about your application" },
    { from: 'user', text: "Yes it's me, Hello !" },
    { from: 'agent', text: 'Perfect! Your application is on production wanna see ?' },
    { from: 'user', text: 'Yes of course 👍' },
    { from: 'agent', text: 'Great ! you can access now via Karim-b.dz 📦' },
  ]

  const handleAnswer = () => {
    setAnswered(true)
    setRinging(false)
    setScreen('call')

    let t = 0
    timerRef.current = setInterval(() => {
      t += 1
      setCallTimer(t)
    }, 1000)

    chat.forEach((_, i) => {
      setTimeout(() => {
        setChatStep(i + 1)
      }, (i + 1) * 1800)
    })

    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current)
      setScreen('confirmed')
    }, chat.length * 1800 + 1500)
  }

  useEffect(() => {
    const sequence = async () => {
      setScreen('home')
      setCallTimer(0)
      setRinging(false)
      setAnswered(false)
      setChatStep(0)
      if (timerRef.current) clearInterval(timerRef.current)
      await delay(2000)
      setScreen('incoming')
      setRinging(true)
    }
    sequence()
  }, [])

  useEffect(() => {
    if (screen === 'confirmed') {
      const timeout = setTimeout(() => {
        setScreen('home')
        setCallTimer(0)
        setRinging(false)
        setAnswered(false)
        setChatStep(0)
        if (timerRef.current) clearInterval(timerRef.current)
        setTimeout(() => {
          setScreen('incoming')
          setRinging(true)
        }, 2500)
      }, 4000)
      return () => clearTimeout(timeout)
    }
  }, [screen])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <div className=" relative flex justify-center items-center">
      <div className="absolute w-80 h-80 bg-[#7ED6B5]/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-67.5">
        <div
          className="signup-form-container relative bg-[#1c1c1e] rounded-[3rem] shadow-2xl overflow-hidden"
          style={{ aspectRatio: '9/19.5', border: '8px solid #3a3a3c' }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
            <div className={`bg-black rounded-full transition-all duration-700 flex items-center justify-center gap-2 overflow-hidden ${
              answered ? 'w-40 h-8 px-3' : 'w-24 h-7'
            }`}>
              {answered && (
                <>
                  <div className="w-4 h-4 bg-[#7ED6B5] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <span className="text-[#7ED6B5] text-[10px] font-satoshi whitespace-nowrap">
                    {formatTime(callTimer)}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* ── HOME ── */}
          {screen === 'home' && (
            <div className="absolute inset-0 bg-linear-to-b from-[#1a1a2e] to-[#16213e] flex flex-col">
              <div className="flex justify-between items-center px-6 pt-14 pb-2">
                <span className="font-satoshi text-white text-xs">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5 items-end">
                    {[2,3,4,4].map((h,i) => (
                      <div key={i} className="w-0.5 bg-white rounded-sm" style={{ height: `${h*2}px` }} />
                    ))}
                  </div>
                  <div className="flex items-center border border-white/50 rounded-sm px-0.5 ml-1">
                    <div className="w-4 h-2 bg-white rounded-sm" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-6 mb-8">
                <p className="font-myriad text-white/60 text-sm">Lundi 22 Fév</p>
                <p className="font-tanker text-white text-6xl leading-none">9:41</p>
              </div>

              <div className="px-6 grid grid-cols-4 gap-4 mb-4">
                {[
                  { bg: 'bg-blue-500', icon: '📱' },
                  { bg: 'bg-green-500', icon: '💬' },
                  { bg: 'bg-red-500', icon: '▶️' },
                  { bg: 'bg-orange-500', icon: '🛍️' },
                  { bg: 'bg-purple-500', icon: '🎵' },
                  { bg: 'bg-pink-500', icon: '📸' },
                  { bg: 'bg-yellow-500', icon: '🗺️' },
                  { bg: 'bg-teal-500', icon: '📧' },
                ].map((app, i) => (
                  <div key={i} className={`${app.bg} w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-lg`}>
                    {app.icon}
                  </div>
                ))}
              </div>

              {/* Process app icon */}
              <div className="px-6 flex justify-center mt-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-[#E6D74E]">
                    <Image
                      src="/luna.png"
                      alt="Process"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-myriad text-white/60 text-[10px]">Karim-b</span>
                </div>
              </div>

              <div className="mt-auto mb-8 text-center">
                <div className="w-8 h-1 bg-white/30 rounded-full mx-auto mb-3" />
                <p className="font-myriad text-white/40 text-xs">Scroll up</p>
              </div>
            </div>
          )}

          {/* ── INCOMING CALL ── */}
          {screen === 'incoming' && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] flex flex-col items-center animate-fade-in">
              <div className="w-full flex justify-between items-center px-6 pt-14 pb-2">
                <span className="font-satoshi text-white text-xs">9:41</span>
                <div className="flex items-center border border-white/50 rounded-sm px-0.5">
                  <div className="w-4 h-2 bg-white rounded-sm" />
                </div>
              </div>

              <p className="font-myriad text-white/50 text-xs mt-4 tracking-widest uppercase">
                INCOMING CALL
              </p>

              {/* Avatar with pulse rings */}
              <div className="relative mt-5 flex items-center justify-center">
                {ringing && (
                  <>
                    <div className="absolute w-36 h-36 bg-[#FFEA60]/10 rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                    <div className="absolute w-28 h-28 bg-[#FFEA60]/15 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
                  </>
                )}
                <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl z-10 border-4 border-[#FFEA60]">
                  <Image
                    src="/luna.png"
                    alt="Process"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="font-tanker text-white text-s mt-5 uppercase tracking-tight">ASSILA ABDELMOUHAIMENE</p>
              <p className="font-myriad text-white/50 text-sm mt-1">Your App is ready !</p>

              {/* Order preview */}
              <div className="mt-4 mx-6 bg-white/5 border border-white/10 rounded-2xl p-3 w-full max-w-[210px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">🌐</span>
                  <p className="font-satoshi text-white text-xs">Site web deployed</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-myriad text-white/40 text-xs">Client</span>
                  <span className="font-satoshi text-white text-xs">Karim B.</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-myriad text-white/40 text-xs">Application</span>
                  <span className="font-satoshi text-white text-xs">Karim-app.dz</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-myriad text-white/40 text-xs">delivery time</span>
                  <span className="font-satoshi text-[#E6D74E] text-xs">3 jours</span>
                </div>
              </div>

              {/* Answer / Decline */}
              <div className="mt-auto mb-10 flex items-center gap-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                    <svg className="w-7 h-7 text-white rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <span className="font-myriad text-white/40 text-[10px]">Decline</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={handleAnswer}
                    className="w-16 h-16 bg-[#7ED6B5] rounded-full flex items-center justify-center shadow-lg shadow-[#7ED6B5]/40 hover:scale-110 transition-transform duration-200 animate-bounce cursor-pointer"
                    aria-label="Décrocher l'appel Process"
                  >
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </button>
                  <span className="font-satoshi text-[#7ED6B5] text-[10px]">Answer</span>
                </div>
              </div>
            </div>
          )}

          {/* ── CALL IN PROGRESS ── */}
          {screen === 'call' && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] flex flex-col">
              <div className="w-full flex justify-between items-center px-6 pt-14 pb-2">
                <span className="font-satoshi text-white text-xs">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#7ED6B5] rounded-full animate-pulse" />
                  <span className="font-myriad text-[#7ED6B5] text-[10px]">{formatTime(callTimer)}</span>
                </div>
              </div>

              {/* Caller mini header */}
              <div className="flex items-center gap-3 px-4 mb-3">
                <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#FFEA60]/50">
                  <Image
                    src="/luna.png"
                    alt="Process"
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-satoshi text-white text-xs">Assila abdelmouhaimene</p>
                  <p className="font-myriad text-[#7ED6B5] text-[10px]">📞 En ligne</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="flex-1 overflow-hidden px-3 flex flex-col justify-end gap-2 pb-3">
                {chat.slice(0, chatStep).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex animate-fade-in ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.from === 'agent' && (
                      <div className="w-6 h-6 bg-white rounded-xl flex items-center justify-center mr-1.5 flex-shrink-0 self-end mb-0.5 border border-[#FFEA60]/30">
                        <Image
                          src="/luna.png"
                          alt="Process"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-[11px] font-myriad leading-relaxed ${
                      msg.from === 'agent'
                        ? 'bg-white/10 text-white rounded-bl-sm'
                        : 'bg-[#FFEA60] text-black rounded-br-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {chatStep < chat.length && chatStep % 2 === 0 && chatStep > 0 && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="w-6 h-6 bg-white rounded-xl flex items-center justify-center mr-1.5 flex-shrink-0 self-end mb-0.5 border border-[#FFEA60]/30">
                      <Image
                        src="/luna.png"
                        alt="Process"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 flex items-center gap-1">
                      {[0, 150, 300].map((d) => (
                        <div
                          key={d}
                          className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: `${d}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Call buttons */}
              <div className="px-4 pb-6 flex items-center justify-between">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </div>
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                  <svg className="w-6 h-6 text-white rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* ── CONFIRMED ── */}
          {screen === 'confirmed' && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d2818] to-[#0a1f12] flex flex-col items-center justify-center px-6 animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                {['🛒','📞','✅','📦'].map((icon, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm bg-[#7ED6B5]/30 border border-[#7ED6B5]/50">
                      {icon}
                    </div>
                    {i < 3 && <div className="w-3 h-px bg-[#7ED6B5]/50" />}
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-center mb-5">
                <div className="absolute w-24 h-24 bg-[#7ED6B5]/20 rounded-full animate-ping" />
                <div className="w-20 h-20 bg-[#7ED6B5] rounded-full flex items-center justify-center shadow-lg shadow-[#7ED6B5]/40 z-10">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center border border-[#FFEA60]/30">
                  <Image
                    src="/luna.png"
                    alt="Process"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <p className="font-satoshi text-[#FFEA60] text-xs uppercase tracking-widest">Karim-b.dz✓</p>
              </div>

              <p className="font-tanker text-white text-2xl uppercase text-center mb-1">
                Hello from Karim-b.dz! 🎉
              </p>
              <div className="w-full bg-white/5 border border-[#7ED6B5]/30 rounded-2xl p-4 space-y-2">
                {[
                  { label: 'Clients', value: '0' },
                  { label: 'Admins', value: '1' },
                  { label: 'Total income', value: '0 DA' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="font-myriad text-white/40 text-xs">{row.label}</span>
                    <span className="font-satoshi text-white text-xs">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 w-full bg-[#7ED6B5] rounded-2xl py-3 text-center">
                <span className="font-satoshi text-[#0d2818] text-sm">📦 Check orders</span>
              </div>
            </div>
          )}
        </div>

        {/* Floating badges */}
        <div className="absolute -top-4 -right-6 bg-[#E6D74E] text-[#2A114A] font-satoshi text-xs px-3 py-1.5 rounded-full shadow-lg">
          -40% Cut Costs
        </div>
        <div className="absolute -bottom-4 -left-6 bg-[#7ED6B5] text-[#2A114A] font-satoshi text-xs px-3 py-1.5 rounded-full shadow-lg">
          50% Speed Up 📈
        </div>
      </div>
    </div>
  )
}

export default PhoneCall

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}