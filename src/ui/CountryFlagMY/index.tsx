import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (말레이시아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagMY = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagMY');

  const maskId = getElementId('CountryFlagMYMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '말레이시아';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} fill={'white'} />
        <path
          d={
            'M0.923096 0.615234H23.0769V1.66895H0.923096V0.615234ZM0.923096 2.72698H23.0769V3.78069H0.923096V2.72698ZM0.923096 4.8344H23.0769V5.88811H0.923096V4.8344ZM0.923096 6.94614H23.0769V7.99985H0.923096V6.94614ZM0.923096 9.05356H23.0769V10.1073H0.923096V9.05356ZM0.923096 11.1653H23.0769V12.219H0.923096V11.1653ZM0.923096 13.2727H23.0769V14.3264H0.923096V13.2727Z'
          }
          fill={'#CC0000'}
        />
        <rect x={0.923096} y={0.615234} width={11.0769} height={8.43832} fill={'#000066'} />
        <path
          d={
            'M7.54334 2.43314C6.21756 1.94083 4.74495 2.61452 4.25265 3.94029C3.76034 5.26607 4.43402 6.73867 5.7598 7.23098C6.33416 7.44691 6.96898 7.44691 7.54765 7.23098C6.22188 8.28901 4.29151 8.07741 3.22917 6.75163C2.16682 5.42585 2.38274 3.49549 3.70852 2.43314C4.83132 1.53921 6.42485 1.53921 7.54334 2.43314ZM8.69637 5.67201L7.80676 6.67822L8.03996 5.35676L6.70123 5.28766L7.88018 4.64421L7.09853 3.55163L8.33362 4.06985L8.69637 2.77862L9.05912 4.06985L10.2942 3.55163L9.51688 4.64853L10.6958 5.29198L9.3571 5.36108L9.5903 6.68253L8.69637 5.67201Z'
          }
          fill={'#FFCC00'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagMY;
