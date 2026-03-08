// app/donate/page.tsx
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErr("");

    const form = e.currentTarget;

    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Send failed");
      }

      setStatus("ok");
      form.reset();
    } catch (error: any) {
      setStatus("error");
      setErr(error?.message || "Something went wrong.");
    }
  }


  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 740 }}>
        <h1>Contact Us</h1>
        <p className="sub">
          To inquire about where/how to donate clothing, please fill out the form below or email us directly at {" "}
          <a href="mailto:rethreadfoundation@gmail.com">rethreadfoundation@gmail.com</a>.
        </p>

        <form onSubmit={onSubmit} className="card" style={{ marginTop: 20 }}>
          <label>
            <div>Name / Organization</div>
            <input name="name" required placeholder="Jane Doe, Example Org" className="input" />
          </label>

          <label>
            <div>Email</div>
            <input type="email" name="email" required placeholder="you@example.com" className="input" />
          </label>

          <label>
            <div>Subject (optional)</div>
            <input name="subject" placeholder="How to donate?" className="input" />
          </label>

          <label>
            <div>Message</div>
            <textarea name="message" required rows={6} placeholder="Tell us a bit about your situation..." className="textarea" />
          </label>

          <button className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "ok" && <p style={{ color: "green", marginTop: 12 }}>Thanks! Your message has been sent.</p>}
          {status === "error" && <p style={{ color: "crimson", marginTop: 12 }}>Couldn’t send message: {err}</p>}
        </form>
      </div>
    </main>
  );
}
