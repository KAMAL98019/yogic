/**
 * Central image registry.
 *
 * These are all thematic / lifestyle images (clinic, nature, remedies,
 * practice) — not portraits of Dr. Anbarasi. To swap one in: drop the file
 * into `public/images/` and set its path here (e.g. "/images/hero-bg.jpg").
 * Leave a value as `null` to keep the placeholder artwork. Nothing else in
 * the codebase needs to change.
 */
export const MEDIA: Record<string, string | null> = {
  heroBackground: "/images/hero/heroimg.png",
  aboutGalleryOne: "/images/about/clinic_practice.png",
  aboutGalleryTwo: "/images/about/yogasana_practice.png",
  aboutGalleryThree: "/images/about/natural_remedies.png",
  quoteBackground: "/images/philosophy/bgimg.png",
  knowledgeBook: "/images/cards/heal.png",
  dietPlanImage: "/images/cards/nutrition.png",
  ctaBackground: "/images/cta/bg.png",
  limbYama: "/images/yoga/01-yama-social-discipline.png",
  limbNiyama: "/images/yoga/02-niyama-self-discipline.png",
  limbAsana: "/images/yoga/03-asana-body-discipline.png",
  limbPranayama: "/images/yoga/04-pranayama-breath-discipline.png",
  limbPratyahara: "/images/yoga/05-pratyahara-sense-discipline.png",
  limbDharana: "/images/yoga/06-dharana-aim-discipline.png",
  limbDhyana: "/images/yoga/07-dhyana-meditation.png",
  limbSamadhi: "/images/yoga/08-samadhi-bliss.png",
};
