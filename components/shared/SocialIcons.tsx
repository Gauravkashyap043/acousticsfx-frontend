"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { fetchContent, type ContentMap } from "@/lib/content-api";

const SOCIAL_KEYS = [
  "social.facebook",
  "social.instagram",
  "social.twitter",
  "social.linkedin",
  "social.youtube",
];

const SOCIALS = [
  { key: "social.facebook", label: "Facebook", icon: FaFacebookF },
  { key: "social.instagram", label: "Instagram", icon: FaInstagram },
  { key: "social.twitter", label: "Twitter", icon: FaTwitter },
  { key: "social.linkedin", label: "LinkedIn", icon: FaLinkedinIn },
  { key: "social.youtube", label: "YouTube", icon: FaYoutube },
] as const;

interface SocialIconsProps {
  direction?: "horizontal" | "vertical";
  variant?: "filled" | "plain";
  className?: string;
  iconClassName?: string;
}

export default function SocialIcons({
  direction = "horizontal",
  variant = "filled",
  className,
  iconClassName,
}: SocialIconsProps) {
  const [content, setContent] = useState<ContentMap>({});

  useEffect(() => {
    fetchContent(SOCIAL_KEYS).then(setContent).catch(console.error);
  }, []);

  const links = SOCIALS.filter((s) => content[s.key]?.value);

  if (links.length === 0) return null;

  const isVertical = direction === "vertical";
  const isFilled = variant === "filled";

  return (
    <div
      className={
        className ??
        `flex ${isVertical ? "flex-col" : "flex-row"} gap-3`
      }
    >
      {links.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.key}
            href={content[s.key]!.value}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={
              isFilled
                ? "w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm cursor-pointer hover:bg-orange-600 transition no-underline"
                : "cursor-pointer hover:opacity-70 transition no-underline"
            }
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
