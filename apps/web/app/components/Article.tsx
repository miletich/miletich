import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'section'>;

export default forwardRef<HTMLElement, Props>(function Article(
  { className = '', children, ...rest },
  ref
) {
  return (
    <article
      ref={ref}
      className={`mb-8 md:mb-10 lg:mb-12 ${className}`}
      {...rest}
    >
      {children}
    </article>
  );
});
