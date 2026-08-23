import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PhoneIcon, WhatsappIcon, MapPinIcon } from "./decor/Icons";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  const primaryPhone = CONTACT.phones[0].replace(/\s/g, "");

  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32">
      <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Sri Sai Ram Homeopathy Clinic"
          description={`${CONTACT.doctorName} · ${CONTACT.location}`}
        />

        <Reveal className="grid sm:grid-cols-2 gap-5">
          <a
            href={`tel:${primaryPhone}`}
            className="flex flex-col gap-4 rounded-2xl bg-ink-card border border-hairline p-6 hover:border-gold-soft transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-ink-card">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Call the Clinic</p>
              <p className="mt-1 text-base font-medium text-cream">{CONTACT.phones[0]}</p>
              <p className="text-sm text-cream-faint">{CONTACT.phones[1]}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/91${primaryPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 rounded-2xl bg-ink-card border border-hairline p-6 hover:border-gold-soft transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-ink-card">
              <WhatsappIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">WhatsApp</p>
              <p className="mt-1 text-base font-medium text-cream">Message the Clinic</p>
            </div>
          </a>

          <div className="sm:col-span-2 flex flex-col gap-4 rounded-2xl bg-ink-card border border-hairline p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-ink-card">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Location</p>
              <p className="mt-1 text-base font-medium text-cream">{CONTACT.location}, Tamil Nadu</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
