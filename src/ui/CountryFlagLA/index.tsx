import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (라오스 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagLA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagLA');

  const maskId = getElementId('CountryFlagLAMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagLATitle');
  const titleText = ariaLabel || '라오스';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.383H0.923096V0.615234Z'} fill={'#0052B4'} />
        <path d={'M0.923096 0.619629H23.0769V4.53612H0.923096V0.619629ZM0.923096 11.4666H23.0769V15.3831H0.923096V11.4666Z'} fill={'#D80027'} />
        <path
          d={
            'M12.0001 10.8445C13.5718 10.8445 14.8459 9.57051 14.8459 7.99893C14.8459 6.42734 13.5718 5.15332 12.0001 5.15332C10.4283 5.15332 9.15417 6.42734 9.15417 7.99893C9.15417 9.57051 10.4283 10.8445 12.0001 10.8445Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagLA;
