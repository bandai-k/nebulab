import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Nebulab",
  description: "Nebulabへの連絡はメールでお願いします。",
};

export default function ContactPage() {
  return <ContactClient />;
}
