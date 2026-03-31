import { cn } from "@/lib/cn";

import { getAlertClasses } from "./alert.styles";
import type { AlertProps } from "./alert.types";

export function Alert({
  variant = "glass",
  intent = "info",
  title,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(getAlertClasses(variant, intent), className)}
      {...props}
    >
      {title && <h3 className="text-sm font-semibold">{title}</h3>}
      {children && <p className={cn("text-sm", title && "mt-1")}>{children}</p>}
    </div>
  );
}
