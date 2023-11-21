import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'h3'>;

export default forwardRef<HTMLHeadingElement, Props>(function H3(
  { className = '', children, ...rest },
  ref
) {
  return (
    <h3
      ref={ref}
      className={`text-lg mb-2 text-zinc-50 ${className}`}
      {...rest}
    >
      {children}
    </h3>
  );
});
