import { type ComponentProps, forwardRef } from 'react';
import { viewBox, m1, m2, m3, d } from './consts';

type Props = ComponentProps<'svg'>;

export default forwardRef<SVGSVGElement, Props>(function Logo(
  { className = '', ...rest },
  ref
) {
  return (
    <svg viewBox={viewBox} ref={ref} className={` ${className}`} {...rest}>
      <g id="m-letter">
        <path id="m1-letter" d={m1} />
        <path id="m2-letter" d={m2} />
        <path id="m3-letter" d={m3} />
      </g>
      <path id="d-letter" d={d} />
    </svg>
  );
});
