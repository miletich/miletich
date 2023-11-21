import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'h1'>;

export default forwardRef<HTMLHeadingElement, Props>(function H1(
  { className = '', children, ...rest },
  ref
) {
  return (
    <h1 ref={ref} className={`text-xl text-zinc-50 ${className}`} {...rest}>
      {children}
    </h1>
  );
});
