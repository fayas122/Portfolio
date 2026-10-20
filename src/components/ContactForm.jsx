
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ArrowLeft, Send, CheckCircle, LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Email sending failed:", err);
      setStatus("error");
      setError("Unable to send your message. Please try again.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1511] px-4 py-5 text-white">
      <div className="mx-auto w-full max-w-xl">
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-[#80e9ad]"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </Link>

        <div className="mb-5">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#80e9ad]">
            Get in touch
          </p>

          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's start a conversation.
          </h1>

          <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
            Have a project or opportunity? Send me a message.
            I'd love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-[#426951]/50 bg-[#101d17] p-4 sm:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs text-slate-300"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
                className="w-full rounded-lg border border-white/10 bg-[#0b1511] px-3 py-2.5 text-xs outline-none transition focus:border-[#80e9ad]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs text-slate-300"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
                className="w-full rounded-lg border border-white/10 bg-[#0b1511] px-3 py-2.5 text-xs outline-none transition focus:border-[#80e9ad]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-xs text-slate-300"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              maxLength={200}
              required
              className="w-full rounded-lg border border-white/10 bg-[#0b1511] px-3 py-2.5 text-xs outline-none transition focus:border-[#80e9ad]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={4}
              minLength={10}
              maxLength={5000}
              required
              className="w-full resize-y rounded-lg border border-white/10 bg-[#0b1511] px-3 py-2.5 text-xs leading-5 outline-none transition focus:border-[#80e9ad]"
            />
          </div>

          {status === "success" && (
            <p
              role="status"
              className="flex items-center gap-2 text-xs text-[#80e9ad]"
            >
              <CheckCircle size={15} />
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="text-xs text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#80e9ad] px-4 py-3 text-xs font-semibold text-[#08120c] transition hover:bg-[#a0f5c2] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <LoaderCircle size={15} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={14} />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
