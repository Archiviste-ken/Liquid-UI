"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

import { getButtonClasses } from "./button.styles";
import type { ButtonProps } from "./button.types";

export function Button({
  variant = "glass",
  intent = "primary",
  size = "md",
  withGlow,
  loading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type="button"
      whileHover={isDisabled ? undefined : { y: -2 }}
      whileTap={isDisabled ? undefined : { scale: 0.97, y: 0 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className={cn(
        getButtonClasses({ variant, intent, size, withGlow }),
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      {...props}
    >
      {loading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {children}
    </motion.button>
  );
}
