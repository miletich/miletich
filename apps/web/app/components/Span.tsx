import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'span'>;

export default forwardRef<HTMLParagraphElement, Props>(function Span(
  { className = '', children, ...rest },
  ref
) {
  return (
    <span ref={ref} className={`text-base ${className}`} {...rest}>
      {children}
    </span>
  );
});
