import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  position?: 'header' | 'column';
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      `${
        props.checked && props.position === 'header' ? 'mt-3.2' : 'mt-3.1' // prevent checkbox 'jumping' when checked
      } rounded-border-md p-0.5 bg-white peer h-4 w-4 shrink-0 border border-primary ring-offset-background disabled:cursor-not-allowed disabled:opacity-50`,
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('h-full flex items-center justify-center text-current')}
    >
      <Check className='h-4 w-4' strokeWidth={4} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
