import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'p'>;

export default forwardRef<HTMLParagraphElement, Props>(function P(
  { className = '', children, ...rest },
  ref
) {
  return (
    <p
      ref={ref}
      className={`text-base xl:text-zinc-500 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
});
