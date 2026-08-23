type IconProps = {
  className?: string;
};

const base = "stroke-current fill-none";
const wrap = (children: React.ReactNode, className = "") => (
  <svg
    viewBox="0 0 48 48"
    className={`${base} ${className}`}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const LotusIcon = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M24 30C24 30 15 24 15 15C15 15 24 17 24 30Z" />
      <path d="M24 30C24 30 33 24 33 15C33 15 24 17 24 30Z" />
      <path d="M24 30C24 30 20 19 24 8C28 19 24 30 24 30Z" />
      <path d="M9 33C13 27 19 24 24 24C29 24 35 27 39 33" />
      <path d="M6 39C11 34 18 31 24 31C30 31 37 34 42 39" />
    </>,
    className
  );

export const LeafIcon = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M10 38C10 38 8 22 20 12C32 2 42 8 42 8C42 8 40 26 28 34C20 39.5 10 38 10 38Z" />
      <path d="M10 38C16 30 22 24 30 18" />
    </>,
    className
  );

export const MedalIcon = ({ className }: IconProps) =>
  wrap(
    <>
      <circle cx="24" cy="27" r="11" />
      <path d="M19 17L14 6" />
      <path d="M29 17L34 6" />
      <path d="M24 22L21 32H27L24 22Z" />
    </>,
    className
  );

export const PhoneIcon = ({ className }: IconProps) =>
  wrap(
    <path d="M13 8C13 8 17 8 18 12C19 16 16 17 16 19C16 23 25 32 29 32C31 32 32 29 36 30C40 31 40 35 40 35C40 39 37 41 33 41C21 41 7 27 7 15C7 11 9 8 13 8Z" />,
    className
  );

export const WhatsappIcon = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M12 36L14 29C11 25.5 10 21 11.5 16.5C13.5 10 20 6 27 7.5C34 9 39 15.5 38 22.7C37 30 30.5 35.5 23 35C20 34.8 18 34 16 32.5L12 36Z" />
      <path d="M18 18C18 21 21 27 27 28.5C28.5 28.8 29.5 27.5 29 26C28.5 24.7 27 24.5 26.3 25.2C24 24 20.5 20.5 19.7 18.5C19 17 19.3 15.5 18 15.5C16.5 15.5 18 17 18 18Z" fill="currentColor" stroke="none" />
    </>,
    className
  );

export const MapPinIcon = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M24 44C24 44 38 29.5 38 19C38 11.3 31.7 5 24 5C16.3 5 10 11.3 10 19C10 29.5 24 44 24 44Z" />
      <circle cx="24" cy="19" r="5.5" />
    </>,
    className
  );
