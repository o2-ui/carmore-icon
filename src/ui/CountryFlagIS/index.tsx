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
const CountryFlagIS = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagIS');

  const maskId = getElementId('CountryFlagISMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '아이슬란드';

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
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={'0'} y={'0'} width={'24'} height={'16'}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill="white" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3846H0.923096V0.615234Z'} fill={'#0052B4'} />
        <path d={'M23.0769 9.72574H9.67192V15.3846H6.22076V9.72574H0.923096V6.27407H6.22076V0.615234H9.67192V6.27407H23.0769V8.92293V9.72574Z'} fill={'white'} />
        <path d={'M23.0769 7.07693V8.92293H8.86958V15.3846H7.02311V8.92293H0.923096V7.07693H7.02311V0.615234H8.86958V7.07693H23.0769Z'} fill={'#D80027'} />
      </g>
    </svg>
  );
};

export default CountryFlagIS;
