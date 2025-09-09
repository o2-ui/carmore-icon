import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (파라과이 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagPY = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagPY');

  const maskId = getElementId('CountryFlagPYMask');

  /* a11y 기본 설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagPYTitle');
  const titleText = ariaLabel || '파라과이';

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
        <path d={'M0.923096 0.615234H23.0769V15.3827H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M0.923096 0.615234H23.0769V5.53771H0.923096V0.615234Z'} fill={'#D80027'} />
        <path d={'M0.923096 10.4604H23.0769V15.3829H0.923096V10.4604Z'} fill={'#0052B4'} />
        <path
          d={
            'M13.4529 6.30029L12.9081 6.84509C13.1405 7.07751 13.2842 7.39853 13.2842 7.75313C13.2842 8.46233 12.7092 9.03724 12 9.03724C11.2907 9.03724 10.7158 8.46229 10.7158 7.75313C10.7158 7.39858 10.8595 7.07751 11.0919 6.84509L10.5471 6.30029C10.1752 6.67211 9.94519 7.18576 9.94519 7.75309C9.94519 8.88785 10.8651 9.8077 12 9.8077C13.1349 9.8077 14.0548 8.88785 14.0548 7.75309C14.0548 7.1858 13.8248 6.67211 13.4529 6.30029Z'
          }
          fill={'#6DA544'}
        />
        <path d={'M12 6.98291L12.1913 7.57153H12.8103L12.3095 7.9353L12.5008 8.52388L12 8.16011L11.4993 8.52388L11.6906 7.9353L11.1898 7.57153H11.8087L12 6.98291Z'} fill={'#FFDA44'} />
      </g>
    </svg>
  );
};

export default CountryFlagPY;
