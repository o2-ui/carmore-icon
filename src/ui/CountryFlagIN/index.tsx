import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (인도 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagIN = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_IN_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_IN');
  const titleText = ariaLabel || '인도';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(style.layout, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M1.67017 0.615234H22.3298V15.3845H1.67017V0.615234Z'} fill={'#181A93'} />
        <path d={'M0.923096 0.615234H23.0769V5.53831H0.923096V0.615234Z'} fill={'#FFA44A'} />
        <path d={'M0.923096 10.4614H23.0769V15.3845H0.923096V10.4614Z'} fill={'#1A9F0B'} />
        <path d={'M0.923096 5.53809H23.0769V10.4612H0.923096V5.53809Z'} fill={'white'} />
        <path
          d={
            'M12 9.4768C12.8157 9.4768 13.4769 8.81555 13.4769 7.99987C13.4769 7.18419 12.8157 6.52295 12 6.52295C11.1843 6.52295 10.5231 7.18419 10.5231 7.99987C10.5231 8.81555 11.1843 9.4768 12 9.4768Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M12 9.96922C10.9161 9.96922 10.0308 9.08393 10.0308 7.99999C10.0308 6.91605 10.9161 6.03076 12 6.03076C13.0839 6.03076 13.9692 6.91605 13.9692 7.99999C13.9692 9.08393 13.0839 9.96922 12 9.96922ZM12 9.47692C12.786 9.47692 13.4769 8.78596 13.4769 7.99999C13.4769 7.21403 12.7903 6.52307 12 6.52307C11.2097 6.52307 10.5231 7.21403 10.5231 7.99999C10.5231 8.78596 11.214 9.47692 12 9.47692Z'
          }
          fill={'#181A93'}
        />
        <path
          d={
            'M12 8.98437C12.5438 8.98437 12.9846 8.54354 12.9846 7.99975C12.9846 7.45596 12.5438 7.01514 12 7.01514C11.4562 7.01514 11.0154 7.45596 11.0154 7.99975C11.0154 8.54354 11.4562 8.98437 12 8.98437Z'
          }
          fill={'#181A93'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagIN;
