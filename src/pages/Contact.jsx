import { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MailIcon, PhoneIcon, CheckCircleIcon, PinIcon, CheckmarkGlyph } from '../constants/icons'
import { BENEFITS, LOCATIONS } from '../constants/data'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-brand-950 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-300 focus:border-brand-950 focus:outline-none focus:ring-4 focus:ring-brand-950/[0.07]'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', agree: false })
  const [status, setStatus] = useState(null)
  const [sent, setSent] = useState(false)
  const [shake, setShake] = useState(false)
  const emailRef = useRef(null)

  const updateField = (field) => (e) => {
    const value = field === 'agree' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
    setStatus(null)
  }

  const triggerShake = () => {
    setShake(false)
    requestAnimationFrame(() => setShake(true))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sent) return

    const missing = !form.name.trim() || !form.email.trim() || !form.message.trim()
    const emailValid = EMAIL_RE.test(form.email.trim())

    if (missing) {
      setStatus({ message: 'Please fill out all fields before sending.', isError: true })
      triggerShake()
      return
    }
    if (!emailValid) {
      setStatus({ message: 'That email address doesn’t look right.', isError: true })
      triggerShake()
      emailRef.current?.focus()
      return
    }
    if (!form.agree) {
      setStatus({ message: 'Please agree to the Terms and Conditions to continue.', isError: true })
      triggerShake()
      return
    }

    setSent(true)
    setStatus({ message: 'Thanks — your message is on its way. We’ll be in touch soon.', isError: false })

    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '', agree: false })
    }, 2200)
  }

  return (
    <div className="bg-white">
      <section className="bg-brand-950 pb-16">
        <Navbar />
        <div className="mx-auto max-w-[720px] animate-[heroFadeUp_0.7s_ease_forwards] px-6 text-center opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
          <p className="mb-4 text-[13px] font-bold tracking-[0.06em] text-brand-mint">Contact us</p>
          <h1 className="mb-5 text-[clamp(36px,6vw,56px)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
            Get in touch with us
          </h1>
          <p className="mx-auto max-w-[520px] text-[17px] leading-relaxed text-white/70">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16 min-[900px]:py-20">
        <div className="grid grid-cols-1 items-start gap-14 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-24">
          <div className="animate-[heroFadeUp_0.7s_ease_forwards] opacity-0 [animation-delay:120ms] motion-reduce:animate-none motion-reduce:opacity-100">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label htmlFor="name" className="mb-2.5 block text-xs font-bold tracking-[0.06em] text-brand-950">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={updateField('name')}
                  className={inputCls}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="mb-2.5 block text-xs font-bold tracking-[0.06em] text-brand-950">
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  value={form.email}
                  onChange={updateField('email')}
                  className={inputCls}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="mb-2.5 block text-xs font-bold tracking-[0.06em] text-brand-950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter Your Message"
                  value={form.message}
                  onChange={updateField('message')}
                  className={`${inputCls} min-h-[110px] resize-none`}
                />
              </div>

              <label className="mb-5 mt-1 flex cursor-pointer items-center gap-2.5 text-sm text-gray-600 select-none">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={updateField('agree')}
                  className="peer sr-only"
                />
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border-[1.5px] border-gray-300 bg-white transition-all duration-200 peer-checked:scale-105 peer-checked:border-brand-950 peer-checked:bg-brand-950 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-950/10">
                  <CheckmarkGlyph className="h-2.5 w-2.5 text-white opacity-0 transition-opacity duration-150 peer-checked:opacity-100" />
                </span>
                <span>
                  I agree with{' '}
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-950 underline underline-offset-2">
                    Terms and Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                onAnimationEnd={() => setShake(false)}
                className={`relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-lg px-5 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(10,31,30,0.22)] ${
                  sent ? 'bg-emerald-700' : 'bg-brand-950'
                } ${shake ? 'animate-[shake_0.4s_ease]' : ''}`}
              >
                <span className={`transition-transform duration-300 ${sent ? '-translate-x-1' : ''}`}>
                  Send Your Request
                </span>
                <span
                  className={`flex transition-all duration-300 ${sent ? 'scale-100 opacity-100' : 'scale-[0.4] opacity-0'}`}
                >
                  <CheckmarkGlyph className="h-[18px] w-[18px]" />
                </span>
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-3 min-h-[20px] px-0.5 text-[13.5px] ${
                    status.isError ? 'text-[#c4462b]' : 'text-gray-600'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>

            <div className="mt-10">
              <h3 className="mb-4.5 text-base font-bold text-brand-950">You can also Contact Us via</h3>
              <div className="flex flex-wrap gap-x-8 gap-y-6">
                <a
                  href="mailto:hello@bris.com"
                  className="group flex items-center gap-3 text-[14.5px] text-brand-950 transition-transform duration-200 hover:-translate-y-px"
                >
                  <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-gray-200 text-brand-950 transition-all duration-200 group-hover:-rotate-6 group-hover:border-brand-950 group-hover:bg-brand-950 group-hover:text-white">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  hello@bris.com
                </a>
                <a
                  href="tel:+917648999213"
                  className="group flex items-center gap-3 text-[14.5px] text-brand-950 transition-transform duration-200 hover:-translate-y-px"
                >
                  <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-gray-200 text-brand-950 transition-all duration-200 group-hover:-rotate-6 group-hover:border-brand-950 group-hover:bg-brand-950 group-hover:text-white">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  +91 7648999213
                </a>
              </div>
            </div>
          </div>

          <div className="animate-[heroFadeUp_0.7s_ease_forwards] opacity-0 [animation-delay:220ms] motion-reduce:animate-none motion-reduce:opacity-100">
            <h2 className="mb-6.5 text-[19px] font-bold text-brand-950">With our services you can</h2>

            <ul className="mb-12 flex flex-col gap-5">
              {BENEFITS.map((text) => (
                <li key={text} className="flex items-start gap-3.5 text-[15.5px] leading-relaxed text-brand-950">
                  <span className="mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center text-brand-mint">
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 gap-7 border-t border-gray-100 pt-2 min-[480px]:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <div key={loc.label}>
                  <h4 className="mt-6 mb-2.5 flex items-center gap-2 text-[15px] font-bold text-brand-950">
                    <span className="flex text-brand-950">
                      <PinIcon className="h-[15px] w-[15px]" />
                    </span>
                    {loc.label}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {loc.lines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < loc.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
