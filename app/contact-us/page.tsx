import ContactContent from "@/components/contact-content";
import Hero from "@/components/hero-page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Connect with Leora",
  description:
    "Have questions or need information? Contact our team today and let's build meaningful connections together.",
};

export default function ContactUsPage() {
  return (
    <main className="relative z-[1]">
      <Hero
        title="Contact Us"
        // description="Have questions or need information? Contact our team today and let's build meaningful connections together."
        description="Connect with Leora"
      />
      <ContactContent />
    </main>
  );
}
