import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (이집트 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagEG = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagEG');

  const maskId = getElementId('CountryFlagEGMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '이집트';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} {...rest}>
      <title>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.383H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M0.923096 0.615234H23.0769V5.53927H0.923096V0.615234Z'} fill={'#D80027'} />
        <path d={'M0.923096 10.4634H23.0769V15.3874H0.923096V10.4634Z'} fill={'black'} />
        <path
          d={
            'M10.4553 9.45966C10.4553 9.45966 10.4553 6.93274 10.65 6.66014C10.7842 6.47409 11.377 6.88514 11.6322 6.85486C11.6322 6.85486 11.814 6.53034 11.827 6.33563C11.8399 6.13659 11.7794 6.00678 11.6149 6.06736C11.6149 6.06736 11.563 5.97649 11.6366 5.92457C11.7058 5.87264 11.8789 5.92889 11.8789 5.92889C11.8789 5.92889 11.8572 5.88563 11.9481 5.88995C12.0736 5.89861 12.2596 5.95053 12.2683 6.13226C12.277 6.26639 12.2813 6.46543 12.2856 6.5087C12.3159 6.80293 12.4024 6.88514 12.4024 6.88514C12.4024 6.88514 13.1986 6.48707 13.3544 6.66014C13.4971 6.82457 13.5491 9.45966 13.5491 9.45966L12.7659 8.73274L13.2895 10.0092C13.2895 10.0092 12.6664 10.113 12.039 10.113C11.4116 10.113 10.6933 9.9313 10.6933 9.9313L11.2904 8.71111L10.4553 9.45966Z'
          }
          fill={'#C09300'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagEG;
