import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'section'>;

export default forwardRef<HTMLElement, Props>(function Section(
  { className = '', children, ...rest },
  ref
) {
  return (
    <section ref={ref} className={`mb-6 ${className}`} {...rest}>
      {children}
    </section>
  );
});
