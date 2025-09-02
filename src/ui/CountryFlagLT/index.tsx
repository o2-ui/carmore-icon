import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (리투아니아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagLT = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const clipId = getElementId('COUNTRY_FLAG_LT_CLIP_ID');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_LT');
  const titleText = ariaLabel || '리투아니아';

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
      <g clipPath={`url(#${clipId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3841H0.923096V0.615234Z'} fill={'#6DA544'} />
        <path d={'M0.923096 0.615234H23.0769V5.53819H0.923096V0.615234Z'} fill={'#FFDA44'} />
        <path d={'M0.923096 10.4614H23.0769V15.3844H0.923096V10.4614Z'} fill={'#D80027'} />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CountryFlagLT;
