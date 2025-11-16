import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (베트남 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagVN = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagVN');

  const maskId = getElementId('CountryFlagVNMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '베트남';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} {...rest}>
      <title>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M9.4316 0.615234H0.923096V15.3827H23.0769V0.615234H9.4316Z'} fill={'#D80027'} />
        <path d={'M12 3.72803L12.9806 6.74563H16.1539L13.5866 8.61062L14.5673 11.6283L12 9.76328L9.43279 11.6283L10.4134 8.61062L7.84619 6.74563H11.0194L12 3.72803Z'} fill={'#FFDA44'} />
      </g>
    </svg>
  );
};

export default CountryFlagVN;
