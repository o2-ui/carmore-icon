import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagFR = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const clipId = getElementId('COUNTRY_FLAG_FR_CLIP_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_FR');
  const titleText = ariaLabel || '프랑스';

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
        <path d={'M0.923096 0.615234H23.0769V15.3846H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M0.923096 0.615234H8.30755V15.3846H0.923096V0.615234Z'} fill={'#0052B4'} />
        <path d={'M15.6925 0.615234H23.077V15.3846H15.6925V0.615234Z'} fill={'#D80027'} />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CountryFlagFR;
