import Image from "next/image";
import Container from "./ui/Container";
import { NAV_LINKS, CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-footer text-footer-ink/80">
      <Container className="py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-lg bg-footer-ink px-3 py-2">
            <Image
              src="/images/logo.png"
              alt="Sri Sai Ram Homeopathy Clinic"
              width={140}
              height={63}
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-footer-ink/60 max-w-xs">
            {CONTACT.doctorName}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-footer-ink">Navigate</h4>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-footer-ink/60 hover:text-footer-ink transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-footer-ink">Contact</h4>
          {CONTACT.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-sm text-footer-ink/60 hover:text-footer-ink transition-colors"
            >
              {phone}
            </a>
          ))}
          <span className="text-sm text-footer-ink/60">{CONTACT.location}, Tamil Nadu</span>
        </div>
      </Container>

      <div className="border-t border-footer-ink/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-footer-ink/50">
          <p>© 2026 Sri Sai Ram Homeopathy Clinic. All rights reserved.</p>
          <p>The information on this site is for general wellness education and does not replace individualised medical advice.</p>
        </Container>
      </div>
    </footer>
  );
}
