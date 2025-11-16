import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagTW = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagTW');

  const maskId = getElementId('CountryFlagTWMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '대만';

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
      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#D9D9D9'} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615723H23.0769V15.3847H0.923096V0.615723Z'} fill={'#D80027'} />
        <path d={'M0.923096 0.615723H12V8.00019H0.923096V0.615723Z'} fill={'#0052B4'} />
        <path
          d={
            'M8.98998 4.3076L7.95684 4.79355L8.50697 5.79415L7.38512 5.5795L7.24294 6.7128L6.46154 5.87931L5.6801 6.7128L5.53796 5.5795L4.41612 5.79411L4.96624 4.79351L3.93311 4.3076L4.96624 3.82164L4.41612 2.82104L5.53796 3.03565L5.68014 1.90234L6.46154 2.73584L7.24299 1.90234L7.38512 3.03565L8.50701 2.82104L7.95684 3.82164L8.98998 4.3076Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M6.46161 5.56287C7.15476 5.56287 7.71668 5.00096 7.71668 4.3078C7.71668 3.61465 7.15476 3.05273 6.46161 3.05273C5.76846 3.05273 5.20654 3.61465 5.20654 4.3078C5.20654 5.00096 5.76846 5.56287 6.46161 5.56287Z'
          }
          fill={'#0052B4'}
        />
        <path
          d={
            'M6.46159 5.14682C5.99896 5.14682 5.62256 4.77038 5.62256 4.30778C5.62256 3.84515 5.999 3.46875 6.46159 3.46875C6.92423 3.46875 7.30063 3.84519 7.30063 4.30778C7.30063 4.77038 6.92423 5.14682 6.46159 5.14682Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagTW;
