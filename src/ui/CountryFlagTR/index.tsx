import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (터키 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagTR = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagTR');

  const maskId = getElementId('CountryFlagTRMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagTRTitle');
  const titleText = ariaLabel || '터키';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'#E30A17'} />
        <path
          d={
            'M12.1382 5.73719C11.5724 5.32694 10.8858 5.10669 10.1819 5.11101C8.41994 5.11101 6.99484 6.44111 6.99484 8.08645C6.99484 9.73179 8.42425 11.0619 10.1819 11.0619C10.9203 11.0619 11.6027 10.8287 12.1382 10.4357C10.8426 12.1026 8.43721 12.4049 6.77027 11.1051C5.10334 9.80521 4.80104 7.40413 6.10091 5.73719C7.40077 4.07026 9.80185 3.76796 11.4688 5.06783C11.7193 5.26216 11.9438 5.49104 12.1382 5.73719ZM13.8612 8.57876L13.0796 9.52451L13.1314 8.29806L11.9913 7.84893L13.1703 7.52073L13.248 6.2986L13.9217 7.32208L15.1093 7.01546L14.3535 7.96553L15.0143 8.99765L13.8612 8.57876Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagTR;
