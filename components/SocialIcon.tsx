type SocialIconProps = {
  name: string;
};

export default function SocialIcon({ name }: SocialIconProps) {
  const icon = {
    Instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="0.75" fill="currentColor" stroke="none" />
      </>
    ),
    TikTok: (
      <path
        fill="currentColor"
        stroke="none"
        d="M19.6 7.2a6.8 6.8 0 0 1-4.2-1.5v9.1a6 6 0 1 1-5.2-5.9v3.4a2.7 2.7 0 1 0 1.9 2.6V2.5h3.4c.2 2 1.8 3.6 4.1 3.8v.9Z"
      />
    ),
    Facebook: (
      <path
        fill="currentColor"
        stroke="none"
        d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H7V13h2.8v8h3.7Z"
      />
    ),
  }[name];

  if (!icon) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      {icon}
    </svg>
  );
}
