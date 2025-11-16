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
const CountryFlagGB = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagGB');

  const maskId = getElementId('CountryFlagGBMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '영국';

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
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#D9D9D9'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3846H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M13.3846 0.615234H10.6154V6.61521H0.923096V9.38444H10.6154V15.3844H13.3846V9.38444H23.0769V6.61521H13.3846V0.615234Z'} fill={'#D80027'} />
        <path
          d={'M17.9619 10.5684L23.077 13.4101V10.5684H17.9619ZM14.4081 10.5684L23.077 15.3844V14.0225L16.8595 10.5684H14.4081ZM20.7679 15.3844L14.4081 11.8509V15.3844H20.7679Z'}
          fill={'#0052B4'}
        />
        <path d={'M14.4081 10.5684L23.077 15.3844V14.0225L16.8595 10.5684H14.4081Z'} fill={'white'} />
        <path d={'M14.4081 10.5684L23.077 15.3844V14.0225L16.8595 10.5684H14.4081Z'} fill={'#D80027'} />
        <path d={'M4.83208 10.5684L0.923096 12.74V10.5684H4.83208ZM9.592 11.1808V15.3844H2.02607L9.592 11.1808Z'} fill={'#0052B4'} />
        <path d={'M7.14058 10.5684L0.923096 14.0225V15.3844L9.592 10.5684H7.14058Z'} fill={'#D80027'} />
        <path d={'M6.03817 5.43127L0.923096 2.58952V5.43127H6.03817ZM9.592 5.43127L0.923096 0.615234V1.97709L7.14058 5.43127H9.592ZM3.2322 0.615234L9.592 4.14877V0.615234H3.2322Z'} fill={'#0052B4'} />
        <path d={'M9.592 5.43127L0.923096 0.615234V1.97709L7.14058 5.43127H9.592Z'} fill={'white'} />
        <path d={'M9.592 5.43127L0.923096 0.615234V1.97709L7.14058 5.43127H9.592Z'} fill={'#D80027'} />
        <path d={'M19.168 5.43132L23.077 3.25963V5.43132H19.168ZM14.4081 4.81888V0.615234H21.974L14.4081 4.81888Z'} fill={'#0052B4'} />
        <path d={'M16.8595 5.43127L23.077 1.97709V0.615234L14.4081 5.43127H16.8595Z'} fill={'#D80027'} />
      </g>
    </svg>
  );
};

export default CountryFlagGB;
