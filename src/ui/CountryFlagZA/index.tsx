import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (남아프리카공화국 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagZA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagZA');

  const maskId = getElementId('CountryFlagZAMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '남아프리카공화국';

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
        <path d={'M5.85683 7.9999L0.923096 3.06396V12.9367L5.85683 7.9999Z'} fill={'black'} />
        <path d={'M7.89775 7.99984L0.923096 1.02051V3.06394L5.85683 7.99988L0.923096 12.9367V14.9763L7.89775 7.99984Z'} fill={'#FFB915'} />
        <path
          d={
            'M22.9832 9.44449C22.9857 9.42546 23.018 9.4065 23.0769 9.38747V6.55489H10.5549L4.61526 0.615234H0.923096V1.02036L7.89775 7.99969L0.923096 14.9762V15.3841H4.61526L10.5549 9.44449H22.9832Z'
          }
          fill={'#007847'}
        />
        <path d={'M22.6953 10.8896H11.1534L6.65851 15.3845H23.0769V10.8896H22.6953Z'} fill={'#000C8A'} />
        <path d={'M22.6953 5.11004H23.0769V0.615234H6.65851L11.1534 5.11004H22.6953Z'} fill={'#E1392D'} />
      </g>
    </svg>
  );
};

export default CountryFlagZA;
