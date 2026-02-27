"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const submitLead = useMutation(api.leads.submit);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || undefined;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      await submitLead({ firstName, lastName, email, phone, message });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-semibold text-white">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Your first name"
            required
            className="border-white/[0.06] bg-white/[0.03] text-foreground placeholder:text-[#71717A] focus:border-oak-500 focus:ring-oak-500/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-semibold text-white">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            required
            className="border-white/[0.06] bg-white/[0.03] text-foreground placeholder:text-[#71717A] focus:border-oak-500 focus:ring-oak-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className="border-white/[0.06] bg-white/[0.03] text-foreground placeholder:text-[#71717A] focus:border-oak-500 focus:ring-oak-500/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-semibold text-white">
            Phone <span className="text-[#71717A] font-normal">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(212) 555-1212"
            className="border-white/[0.06] bg-white/[0.03] text-foreground placeholder:text-[#71717A] focus:border-oak-500 focus:ring-oak-500/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold text-white">
          How can we help?
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your privacy compliance needs..."
          rows={5}
          required
          className="resize-y border-white/[0.06] bg-white/[0.03] text-foreground placeholder:text-[#71717A] focus:border-oak-500 focus:ring-oak-500/20"
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg border border-oak-500/20 bg-oak-500/10 p-3 text-sm text-oak-400">
          <CheckCircle className="h-4 w-4" />
          Thank you! Your message has been sent. We&apos;ll be in touch within 24 hours.
        </div>
      )}
      {status === "error" && errorMessage && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-oak-500 text-white hover:bg-oak-600 font-semibold text-base h-11 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
