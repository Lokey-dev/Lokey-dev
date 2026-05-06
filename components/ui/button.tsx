import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold uppercase tracking-[0.18em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-arena-cyan to-arena-purple text-black shadow-neon hover:scale-[1.02] hover:shadow-purple",
        secondary: "border border-white/15 bg-white/10 text-white hover:bg-white/15 hover:shadow-neon",
        ghost: "text-white/80 hover:bg-white/10 hover:text-white",
        destructive: "bg-red-500 text-white hover:bg-red-400",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));
  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, { className: cn(classes, children.props.className) });
  }
  return <button className={classes} ref={ref} {...props}>{children}</button>;
});
Button.displayName = "Button";

export { Button, buttonVariants };
