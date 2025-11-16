import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (조지아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagGE = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagGE');

  const maskId = getElementId('CountryFlagGEMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '조지아';

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
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} fill={'white'} />
        <path d={'M10.5723 6.52293H0.923096V9.47677H10.5723V15.3845H13.5262V9.47677H23.1754V6.52293H13.5262V0.615234H10.5723V6.52293Z'} fill={'#EB000E'} />
        <path
          d={
            'M17.9569 3.27382L17.76 2.09229H18.7446L18.5477 3.27382L19.7292 3.0769V4.06152L18.5477 3.86459L18.7446 5.04613H17.76L17.9569 3.86459L16.7754 4.06152V3.0769L17.9569 3.27382ZM5.45229 3.27382L5.25537 2.09229H6.23998L6.04306 3.27382L7.2246 3.0769V4.06152L6.04306 3.86459L6.23998 5.04613H5.25537L5.45229 3.86459L4.27075 4.06152V3.0769L5.45229 3.27382ZM5.45229 12.1354L5.25537 10.9538H6.23998L6.04306 12.1354L7.2246 11.9384V12.9231L6.04306 12.7261L6.23998 13.9077H5.25537L5.45229 12.7261L4.27075 12.9231V11.9384L5.45229 12.1354ZM17.9569 12.1354L17.76 10.9538H18.7446L18.5477 12.1354L19.7292 11.9384V12.9231L18.5477 12.7261L18.7446 13.9077H17.76L17.9569 12.7261L16.7754 12.9231V11.9384L17.9569 12.1354Z'
          }
          fill={'#EB000E'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagGE;
