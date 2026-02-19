import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-all duration-200",
      // Checked (ON) - Green accent
      "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
      // Unchecked (OFF) - Red semaphore style  
      "data-[state=unchecked]:bg-red-500/20 data-[state=unchecked]:border-red-500/50",
      "data-[state=unchecked]:hover:bg-red-500/30 data-[state=unchecked]:hover:border-red-500/70",
      // Focus states
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
        "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        // Add subtle shadow for depth
        "shadow-[0_2px_4px_rgba(0,0,0,0.2)]",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
