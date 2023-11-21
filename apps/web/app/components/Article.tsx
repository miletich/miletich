import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'section'>;

export default forwardRef<HTMLElement, Props>(function Article(
  { className = '', children, ...rest },
  ref
) {
  return (
    <article ref={ref} className={`mb-8 ${className}`} {...rest}>
      {children}
    </article>
  );
});
