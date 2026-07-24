"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/site";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  placeholder?: string;
};

type InquiryFormProps = {
  fields?: Field[];
  submitLabel?: string;
  /** "dark" sits on a deep surface; "light" on Paper. */
  tone?: "light" | "dark";
  /** Email subject line so submissions are easy to triage (e.g. "Speaking booking"). */
  subject?: string;
};

const defaultFields: Field[] = [
  { name: "name", label: "Your name", required: true, placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@company.com" },
  { name: "org", label: "Company / team", placeholder: "Acme Inc." },
  {
    name: "message",
    label: "What are you trying to solve?",
    type: "textarea",
    required: true,
    placeholder: "A sentence or two on the situation and the outcome you're after.",
  },
];

/**
 * Inquiry form that composes the message straight into the visitor's own email
 * client via a `mailto:` link — no backend, no third-party relay, and no
 * activation step, so a message always sends. The visitor confirms with their
 * mail app's Send button.
 */
export default function InquiryForm({
  fields = defaultFields,
  submitLabel = "Send inquiry",
  tone = "light",
  subject = "New message from the website",
}: InquiryFormProps) {
  const [done, setDone] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");
  const dark = tone === "dark";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Build a readable email body from the filled fields.
    const body = fields
      .map((f) => `${f.label}: ${String(data.get(f.name) ?? "").trim()}`)
      .filter((line) => !line.endsWith(": "))
      .join("\n\n");

    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    // Open the visitor's email client with everything prefilled.
    window.location.href = href;
    setDone(true);
  }

  if (done) {
    return (
      <div className={`space-y-3 text-body ${dark ? "text-paper/80" : "text-ink"}`} role="status">
        <p className={dark ? "text-amber" : "text-signature"}>
          Your email app should have opened with your message ready — just hit send.
        </p>
        <p className="text-small">
          Didn&rsquo;t open?{" "}
          <a href={mailtoHref} className="underline">
            Click here to email me
          </a>
          , or write to{" "}
          <a href={`mailto:${contactEmail}`} className="underline">
            {contactEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  const labelCls = `block text-small font-medium ${dark ? "text-paper/80" : "text-ink"}`;
  const inputCls = `mt-2 w-full rounded-lg border px-4 py-3 text-body outline-none transition-colors duration-300 ease-calm ${
    dark
      ? "border-paper/20 bg-paper/5 text-paper placeholder:text-paper/35 focus:border-amber"
      : "border-ink/15 bg-paper text-ink placeholder:text-ink/35 focus:border-blue-lift"
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot, bots fill this; humans never see it. FormSubmit drops it. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className={labelCls}>
            {field.label}
            {field.required ? <span className="text-amber"> *</span> : null}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={5}
              className={inputCls}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
              className={inputCls}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className={`rounded-lg px-7 py-3.5 text-small font-medium transition-all duration-300 ease-calm ${
          dark
            ? "bg-amber text-ink hover:brightness-[0.97]"
            : "bg-signature text-paper hover:bg-blue-lift"
        }`}
      >
        {submitLabel}
      </button>
    </form>
  );
}
