import { type ComponentProps, forwardRef } from 'react';
import Span from './Span';

type Props = ComponentProps<'span'>;

export default forwardRef<HTMLParagraphElement, Props>(function Tag(
  { className = '', children, ...rest },
  ref
) {
  return (
    <Span className={`${className}`} {...rest} ref={ref}>
      {children}
    </Span>
  );
});
