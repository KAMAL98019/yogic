export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Yogic Lifestyle", href: "#yogic-lifestyle" },
  { label: "21 Days", href: "#21-days" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    number: "01",
    title: "Advanced Homeopathic Medicine",
    description:
      "Individualised homeopathic care that looks at the whole person, not just the symptom, guided by classical case-taking.",
    icon: "droplet",
  },
  {
    number: "02",
    title: "Traditional Yogasana & Meditation",
    description:
      "Time-tested asana sequences and meditation practices to build strength, flexibility and a calmer mind.",
    icon: "lotus",
  },
  {
    number: "03",
    title: "Panchakarma Therapies & Reflexology",
    description:
      "Traditional Panchakarma detoxification practices paired with gentle pressure-point reflexology on the hands and feet, supporting circulation, relaxation and the body's natural balance.",
    icon: "footprints",
  },
  {
    number: "04",
    title: "Juicing Therapy and Healing Diet Plan",
    description:
      "Personalised nutritional guidance featuring two distinct approaches tailored to your body’s needs — an ‘Active’ diet plan designed to support energy and rejuvenation, and a ‘Healing’ diet plan focused on deep rest, nourishment, and recovery — complemented by targeted juicing therapies to naturally nourish the body and restore holistic balance.",
    icon: "diet",
  },
] as const;

export const ASHTANGA_LIMBS = [
  {
    step: 1,
    sanskrit: "Yama",
    title: "Social Discipline",
    subtitle: "How we behave with others",
    description:
      "Five principles — Ahimsa, Satya, Asteya, Brahmacharya and Aparigraha — that guide how we relate to the people around us.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 11L5.5 8.5C4.67 7.67 3.33 7.67 2.5 8.5C1.67 9.33 1.67 10.67 2.5 11.5L7 16C8.1 17.1 9.9 17.1 11 16L12 15"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 11L18.5 8.5C19.33 7.67 20.67 7.67 21.5 8.5C22.33 9.33 22.33 10.67 21.5 11.5L17 16C15.9 17.1 14.1 17.1 13 16L12 15"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 11L10.5 13.5M16 11L13.5 13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    media: "limbYama",
    reflection: "Which relationship currently feels the most strained?",
  },
  {
    step: 2,
    sanskrit: "Niyama",
    title: "Self Discipline",
    subtitle: "How we treat ourselves",
    description:
      "Personal observances — purity, contentment, discipline, self-study and surrender — that shape our inner life.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20C12 20 4.5 16.2 4.5 10.5C4.5 7.5 6.7 5 9.4 5C10.7 5 11.6 5.7 12 6.4C12.4 5.7 13.3 5 14.6 5C17.3 5 19.5 7.5 19.5 10.5C19.5 16.2 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11.5C9.3 12.3 10.5 12.7 12 12.7C13.5 12.7 14.7 12.3 15.5 11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    media: "limbNiyama",
    reflection: "How do you generally treat yourself?",
  },
  {
    step: 3,
    sanskrit: "Asana",
    title: "Body Discipline",
    subtitle: "Caring for the body",
    description:
      "Steady, comfortable postures that build strength and flexibility, treating the body as something to look after.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 6.5V10.5M12 9L7 13M12 9L17 13M7 13L5 19M17 13L19 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 13H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    media: "limbAsana",
    reflection: "Are you happy with your current physical state?",
  },
  {
    step: 4,
    sanskrit: "Pranayama",
    title: "Breath Discipline",
    subtitle: "The most ignored essential",
    description:
      "Conscious breathing practices that bring attention back to something we usually take for granted.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 12C8.5 12 5 10.5 5 7.5C5 5.5 6.5 4 8.5 4C10.5 4 12 5.5 12 7.5V12Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 12C15.5 12 19 10.5 19 7.5C19 5.5 17.5 4 15.5 4C13.5 4 12 5.5 12 7.5V12Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M12 12V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 16C7 14.5 9 14.5 12 16C15 17.5 17 17.5 19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    media: "limbPranayama",
    reflection: "How deep is your breath right now?",
  },
  {
    step: 5,
    sanskrit: "Pratyahara",
    title: "Sense Discipline",
    subtitle: "Managing what we feed the senses",
    description:
      "Turning attention inward and being mindful of what we let in through sight, sound, touch, taste and smell.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.5 12C5.8 8.2 8.6 6.5 12 6.5C15.4 6.5 18.2 8.2 20.5 12C18.2 15.8 15.4 17.5 12 17.5C8.6 17.5 5.8 15.8 3.5 12Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 5L20 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    media: "limbPratyahara",
    reflection: "How do you currently overload your senses?",
  },
  {
    step: 6,
    sanskrit: "Dharana",
    title: "Aim Discipline",
    subtitle: "Cultivating focus",
    description:
      "Working towards small, clear goals every day so life feels less like aimless wandering and more like direction.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path d="M12 2V4M12 20V22M2 12H4M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    media: "limbDharana",
    reflection: "Do you feel like you're aimlessly wandering through life?",
  },
  {
    step: 7,
    sanskrit: "Dhyana",
    title: "Meditation",
    subtitle: "Simply being present",
    description:
      "A simplified view of meditation — being in the present moment, without being pulled away by every passing thought.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8.5 11C8.5 9.62 9.62 8.5 11 8.5H13C14.38 8.5 15.5 9.62 15.5 11V13.5C15.5 15.43 13.93 17 12 17C10.07 17 8.5 15.43 8.5 13.5V11Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M6 20C7.6 18.2 9.6 17.3 12 17.3C14.4 17.3 16.4 18.2 18 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    media: "limbDhyana",
    reflection: "Can you comfortably sit with your eyes closed?",
  },
  {
    step: 8,
    sanskrit: "Samadhi",
    title: "Bliss",
    subtitle: "Moments of Sat-Chit-Ananda",
    description:
      "A state of quiet bliss many of us have already touched, even unknowingly, in ordinary daily moments.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M19.07 4.93L16.95 7.05M7.05 16.95L4.93 19.07"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M12 8.5V15.5M8.5 12H15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    media: "limbSamadhi",
    reflection: "Do you find moments of pure stillness in your daily life?",
  },
];

export const HEALTHY_HABITS = [
  {
    title: "Mindful Morning Routine",
    description: "Begin the day with gratitude and gentle movement before screens or stress take over.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 2.5V5M12 19V21.5M4.93 4.93L6.7 6.7M17.3 17.3L19.07 19.07M2.5 12H5M19 12H21.5M4.93 19.07L6.7 17.3M17.3 6.7L19.07 4.93"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hydration",
    description: "Keep the body's fluid balance in mind through the day, especially around meals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3C12 3 6.5 9.4 6.5 14C6.5 17.3 8.96 20 12 20C15.04 20 17.5 17.3 17.5 14C17.5 9.4 12 3 12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 14.5C9.5 16.1 10.6 17.3 12 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Conscious Eating",
    description: "Eat without distractions, chew slowly, and stop at comfortable fullness rather than overeating.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12.5C4 9.46 7.58 7 12 7C16.42 7 20 9.46 20 12.5C20 15.54 16.42 18 12 18C7.58 18 4 15.54 4 12.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M7 12.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 5.5V8M16 5.5V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Regular Movement",
    description: "Asana practice or any enjoyable movement to keep the body supple and strong.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 6.5V11M12 9L7 13M12 9L17 13M7 13L5 19M17 13L19 19M8.5 11H15.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Meditation",
    description: "A few quiet minutes daily to let the mind settle and observe itself.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8.5 11C8.5 9.62 9.62 8.5 11 8.5H13C14.38 8.5 15.5 9.62 15.5 11V13.5C15.5 15.43 13.93 17 12 17C10.07 17 8.5 15.43 8.5 13.5V11Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M6 20C7.6 18.2 9.6 17.3 12 17.3C14.4 17.3 16.4 18.2 18 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Balance",
    description: "Deliberate breaks from screens, especially in the hour before sleep.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6.5" y="3" width="11" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 17.5H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path
          d="M4 8.5C3.3 9.2 3 10.1 3 11C3 11.9 3.3 12.8 4 13.5M20 8.5C20.7 9.2 21 10.1 21 11C21 11.9 20.7 12.8 20 13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Adequate Rest",
    description: "Prioritising sleep as a foundation for physical and emotional wellbeing.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.5 14.5C17.2 16 15.2 17 13 17C9.13 17 6 13.87 6 10C6 7.8 7 5.8 8.5 4.5C5.9 5.1 4 7.42 4 10.2C4 13.96 7.04 17 10.8 17C13.58 17 15.9 15.1 16.5 12.5C17.17 13.25 17.85 13.92 18.5 14.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18 5V9M16 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Time in Nature",
    description: "Sunlight and fresh air, even briefly, as part of the daily rhythm.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 13C8.5 13 6 11 6 8C9.5 8 12 10 12 13Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 10C12 6.5 14 4 17 4C17 7.5 15 10 12 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 20H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Personal Reflection",
    description: "A short daily check-in on how the day was lived and what could shift tomorrow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.5H15L18 6.5V20.5H6V3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path
          d="M15 3.5V6.5H18M9 10H15M9 13H15M9 16H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const DINACHARYA = [
  {
    time: "Wake Up",
    title: "Gratitude Prayer",
    description: "Begin with a quiet moment of gratitude before the day takes over.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 2.5V5M12 19V21.5M4.93 4.93L6.7 6.7M17.3 17.3L19.07 19.07M2.5 12H5M19 12H21.5M4.93 19.07L6.7 17.3M17.3 6.7L19.07 4.93"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    time: "Yoga Practice",
    title: "Surya Namaskar, Pranayama, Chanting, Dhyana",
    description: "6–10 rounds of Sun Salutations followed by breathwork and a short meditation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 6.5V11M12 9L7 13M12 9L17 13M7 13L5 19M17 13L19 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 4.5H2.5M21.5 4.5H19M4 2L5.5 3.5M20 2L18.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: "Breakfast",
    title: "Light & Nourishing",
    description: "A simple, plant-forward breakfast enjoyed without distraction.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="13" r="6.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5.5 13H18.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6C9 4.9 9.9 4 11 4M13 6C13 4.9 13.9 4 15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: "Lunch",
    title: "Balanced Meal",
    description: "A wholesome midday meal followed by a short period of rest.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9.5C9 8.5 10 8 12 8C14 8 15 8.5 16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: "Dhyana Hour",
    title: "Flow Time",
    description: "An hour spent in an activity that brings focus and quiet joy — a hobby, practice or reflection.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7V12L15.5 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    time: "Dinner",
    title: "Light & Early",
    description: "A lighter evening meal, eaten well before bedtime.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 14.5C5 11.46 8.13 9 12 9C15.87 9 19 11.46 19 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 15H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8 6.5C8 5.4 8.9 4.5 10 4.5M14 6.5C14 5.4 14.9 4.5 16 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: "Time to Sleep",
    title: "Wind Down",
    description: "Reflect on the day, step away from gadgets, and prepare the mind for restful sleep.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.5 14.5C17.2 16 15.2 17 13 17C9.13 17 6 13.87 6 10C6 7.8 7 5.8 8.5 4.5C5.9 5.1 4 7.42 4 10.2C4 13.96 7.04 17 10.8 17C13.58 17 15.9 15.1 16.5 12.5C17.17 13.25 17.85 13.92 18.5 14.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18 5V9M16 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

type Day = {
  day: number;
  knowledge?: string;
  practice?: string[];
  extra?: { label: string; value: string };
};

export const CURRICULUM: { week: string; days: Day[] }[] = [
  {
    week: "Week 1",
    days: [
      { day: 1, knowledge: "Ashtanga Yoga", practice: ["Yoga for Balance"], extra: { label: "Relaxation", value: "Yoga Nidra" } },
      { day: 2, knowledge: "Ahimsa", practice: ["Yoga for Legs"] },
      { day: 3, knowledge: "Satya", practice: ["Yoga for Arms & Shoulders"], extra: { label: "Pranayama", value: "Yogic Breathing" } },
      { day: 4, knowledge: "Asteya", practice: ["Yoga for the Back"] },
      { day: 5, knowledge: "Brahmacharya", practice: ["Yoga for Hips & Pelvis"], extra: { label: "Relaxation", value: "Guided Meditation" } },
      { day: 6, knowledge: "Aparigraha", practice: ["Yoga for Abdominals"], extra: { label: "Relaxation", value: "Bhav Meditation" } },
      { day: 7, practice: ["Trataka Dhyana", "Full Body Flow"], extra: { label: "Special", value: "Quiz" } },
    ],
  },
  {
    week: "Week 2",
    days: [
      { day: 8, knowledge: "Shaucha — Purity", practice: ["Yoga for Neck & Shoulders"], extra: { label: "Relaxation", value: "Yoga Nidra" } },
      { day: 9, knowledge: "Santosha — Contentment", practice: ["Yoga for Spine Flexibility"] },
      { day: 10, knowledge: "Tapas — Discipline", practice: ["Sun Salutation Flow"], extra: { label: "Pranayama", value: "Kapalabhati" } },
      { day: 11, knowledge: "Svadhyaya — Self Study", practice: ["Yoga for Core Strength"] },
      { day: 12, knowledge: "Ishwara Pranidhana — Surrender", practice: ["Restorative Yoga"], extra: { label: "Relaxation", value: "Guided Meditation" } },
      { day: 13, knowledge: "Pratyahara — Sense Withdrawal", practice: ["Gentle Hip Openers"], extra: { label: "Relaxation", value: "Body Scan" } },
      { day: 14, practice: ["Pranayama Deep Dive", "Full Body Flow"], extra: { label: "Special", value: "Reflection Journal" } },
    ],
  },
  {
    week: "Week 3",
    days: [
      { day: 15, knowledge: "Dharana — Focus", practice: ["Balance & Focus Flow"], extra: { label: "Relaxation", value: "Trataka" } },
      { day: 16, knowledge: "Dhyana — Meditation", practice: ["Gentle Full Body Yoga"], extra: { label: "Relaxation", value: "Silent Sitting" } },
      { day: 17, knowledge: "Samadhi — Bliss", practice: ["Flow Sequence"], extra: { label: "Relaxation", value: "Gratitude Meditation" } },
      { day: 18, knowledge: "Mindful Eating", practice: ["Yoga for Digestion"], extra: { label: "Pranayama", value: "Nadi Shodhana" } },
      { day: 19, knowledge: "Dinacharya — Daily Rhythm", practice: ["Morning Energiser Flow"] },
      { day: 20, knowledge: "Building Lasting Habits", practice: ["Restorative Full Body Flow"], extra: { label: "Relaxation", value: "Yoga Nidra" } },
      { day: 21, practice: ["Celebration Flow", "Journey Reflection"], extra: { label: "Special", value: "Community Gathering" } },
    ],
  },
];

export const BENEFITS = [
  {
    title: "Greater self-awareness",
    description: "A clearer sense of your own thoughts and emotional patterns as they arise.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 3.5V6M12 18V20.5M3.5 12H6M18 12H20.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Improved body awareness",
    description: "Noticing tension, posture and breath, and responding to the body's signals sooner.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9.5 9L8.5 13.5L9.5 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 9L15.5 13.5L14.5 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 9H14.5M8.5 13.5H15.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5.5 9.5C4.6 10.2 4.1 11.1 4.1 12.2C4.1 13.3 4.6 14.2 5.5 14.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M18.5 9.5C19.4 10.2 19.9 11.1 19.9 12.2C19.9 13.3 19.4 14.2 18.5 14.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Better balance & stability",
    description: "Steadier movement and a calmer nervous system through regular practice.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 4V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 7L12 4L17 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7L4.5 13H9.5L7 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M17 7L14.5 13H19.5L17 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M5 20H19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "More mindful daily habits",
    description: "Small, sustainable shifts in routine that compound over weeks and months.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 20C12 20 5 16.5 5 10.5C5 7.5 7.2 5 10 5C11.2 5 12 5.7 12 5.7C12 5.7 12.8 5 14 5C16.8 5 19 7.5 19 10.5C19 16.5 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 5.7V13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8.5 9.5C9.5 9.5 10.5 10 12 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 9.5C14.5 9.5 13.5 10 12 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const AWARDS = [
  {
    year: "2019",
    title: "Best Clinic",
    org: "Awarded by Sigaram Trust",
  },
  {
    year: "2020",
    title: "Maruthuva Mamani Award",
    org: "Recognition for medical service",
  },
  {
    year: "2020",
    title: "Best Service for Doctors During COVID-19",
    org: "Recognition from the Salem Corporation Commissioner and Collector",
  },
] as const;

export const CONTRIBUTIONS = [
  { role: "Secretary", org: "IHMA Salem Chapter" },
  { role: "Member", org: "Chief Advisory Committee, Seva Bharathi" },
] as const;

export const EDUCATION = [
  "Sri Vidya Mandir Steel Plant",
  "Sri Sairam Homeopathic Medical College, Chennai",
  "Postgraduate studies, Colombo University, Sri Lanka",
] as const;

export const EXPERIENCE = [
  { years: "3 years", place: "Daran Multi-Speciality Hospital" },
  { years: "2 years", place: "Nithish Gastroenterology Hospital" },
] as const;

export const STATS = [
  { value: "2012", label: "Clinic Founded" },
  { value: "14+ Years", label: "Healthcare Journey" },
  { value: "BHMS + MD", label: "Professional Qualification" },
] as const;

export const CONTACT = {
  clinicName: "Sri Sai Ram Homeopathy Clinic",
  doctorName: "Dr. Anbarasi Subramaniam, BHMS., MD.(AM).",
  phones: ["93638 59005", "90925 03603"],
  location: "Salem",
};
