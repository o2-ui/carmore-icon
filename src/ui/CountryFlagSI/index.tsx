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
const CountryFlagSI = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagSI');

  const maskId = getElementId('CountryFlagSIMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '슬로베니아';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} {...rest}>
      <title>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M0.923096 5.53857H23.0769V10.4615H0.923096V5.53857Z'} fill={'#0052B4'} />
        <path d={'M0.923096 10.4614H23.0769V15.3844H0.923096V10.4614Z'} fill={'#D80027'} />
        <path
          d={'M11.031 5.4313V6.07329C11.031 7.54795 9.10458 7.99972 9.10458 7.99972C9.10458 7.99972 7.17815 7.54799 7.17815 6.07329V5.4313L7.17188 3.51932L11.0247 3.50781L11.031 5.4313Z'}
          fill={'white'}
        />
        <path
          d={'M11.031 5.4313V6.07329C11.031 7.54795 9.10458 7.99972 9.10458 7.99972C9.10458 7.99972 7.17815 7.54799 7.17815 6.07329V5.4313L7.17188 3.51932L11.0247 3.50781L11.031 5.4313Z'}
          fill={'#0052B4'}
        />
        <path
          d={'M11.0311 5.43158V6.07357C11.0311 7.54823 9.10466 8 9.10466 8C9.10466 8 7.17822 7.54827 7.17822 6.07357V5.43158L7.82068 6.07357L9.10466 5.11035L10.3891 6.07357L11.0311 5.43158Z'}
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagSI;
