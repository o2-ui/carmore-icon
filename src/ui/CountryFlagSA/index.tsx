import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (사우디아라비아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagSA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagSA');

  const maskId = getElementId('CountryFlagSAMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagSATitle');
  const titleText = ariaLabel || '사우디아라비아';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.383H0.923096V0.615234Z'} fill={'#055E1C'} />
        <path
          d={
            'M8.8651 9.44368C8.8651 9.97562 9.28615 10.4068 9.8056 10.4068H12.6271C12.6271 10.85 12.978 11.2094 13.4109 11.2094H14.3514C14.7842 11.2094 15.1352 10.85 15.1352 10.4068V9.44368H8.8651ZM15.2134 4.78857V7.03585C15.2134 7.38988 14.9321 7.6779 14.5864 7.6779V8.64102C15.4507 8.64102 16.1538 7.92096 16.1538 7.03585V4.78857H15.2134ZM8.47321 7.03589C8.47321 7.38993 8.19196 7.67794 7.84619 7.67794V8.64107C8.71054 8.64107 9.41366 7.92101 9.41366 7.03589V4.78862H8.47316V7.03589H8.47321Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M13.8027 4.78857H14.7432V7.03585H13.8027V4.78857ZM12.392 6.0729C12.392 6.16142 12.3217 6.23341 12.2352 6.23341C12.1488 6.23341 12.0784 6.16142 12.0784 6.0729V4.7887H11.1379V6.0729C11.1379 6.16142 11.0676 6.23341 10.9812 6.23341C10.8947 6.23341 10.8244 6.16142 10.8244 6.0729V4.7887H9.88391V6.0729C9.88391 6.69245 10.3761 7.19653 10.9811 7.19653C11.2141 7.19653 11.4303 7.12156 11.6081 6.99418C11.786 7.12156 12.0022 7.19653 12.2352 7.19653C12.2821 7.19653 12.3282 7.19316 12.3736 7.18723C12.307 7.46841 12.0597 7.67807 11.7649 7.67807V8.6412C12.6293 8.6412 13.3324 7.92114 13.3324 7.03602V4.7887H12.3919L12.392 6.0729Z'
          }
          fill={'white'}
        />
        <path d={'M9.88391 7.67773H11.2945V8.64086H9.88391V7.67773Z'} fill={'white'} />
      </g>
    </svg>
  );
};

export default CountryFlagSA;
