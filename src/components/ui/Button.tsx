import type { ReactNode } from "react";
import Link from "next/link";
import { button } from "@/constants/classes";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline" | "dark";
type ButtonSize = "sm" | "md";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  solid: button.solid,
  outline: button.outline,
  dark: button.dark,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: button.sm,
  md: button.md,
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        button.base,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
