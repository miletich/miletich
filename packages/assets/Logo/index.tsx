import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'svg'>;

export default forwardRef<SVGSVGElement, Props>(function Logo(
  { className = '', ...rest },
  ref
) {
  const m1 = `
    M 2,0
    L 3,0
    L 1,2
    L 0,2
    L 2,0z
  `;
  const m2 = `
    M 4,0
    L 5,0
    L 3,2
    L 2,2
    L 4,0z
  `;
  const m3 = `
    M 5,1
    L 5,2
    L 4,2
    L 5,1z
  `;
  const d = `
    M 5,0
    L 6,0
    L 7,1
    L 6,2
    L 5,2
    L 6,1,
    L 5,0z
  `;

  return (
    <svg viewBox="0 0 7 2" ref={ref} className={` ${className}`} {...rest}>
      <g id="m-letter">
        <path id="m1-letter" d={m1} />
        <path id="m2-letter" d={m2} />
        <path id="m3-letter" d={m3} />
      </g>
      <path id="d-letter" d={d} />
    </svg>
  );
});
