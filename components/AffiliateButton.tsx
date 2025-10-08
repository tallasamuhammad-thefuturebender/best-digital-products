// components/AffiliateButton.tsx
import React from "react";

type AffiliateButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href: string;
};

export default function AffiliateButton({
  variant = "primary",
  children,
  href,
}: AffiliateButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all inline-block text-center";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]}`;

  return (
    <a href={href} className={combinedStyles}>
      {children}
    </a>
  );
}