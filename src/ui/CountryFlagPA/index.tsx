import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (파나마 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagPA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagPA');

  const maskId = getElementId('CountryFlagPAMask');

  /* a11y 기본 설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '파나마';

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
        <path d={'M0.923096 0.615234H23.0769V15.3827H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M12 7.99902V15.3828H0.923096V7.99902H12Z'} fill={'#0052B4'} />
        <path d={'M23.0769 0.615234V7.99898H12V0.615234H23.0769Z'} fill={'#D80027'} />
        <path d={'M6.46154 2.24658L6.97315 3.82095H8.62876L7.28936 4.79403L7.80094 6.3684L6.46154 5.39537L5.12214 6.3684L5.63371 4.79403L4.29431 3.82095H5.94992L6.46154 2.24658Z'} fill={'#0052B4'} />
        <path
          d={'M17.5385 9.62988L18.0501 11.2043H19.7057L18.3663 12.1773L18.8779 13.7517L17.5385 12.7787L16.1991 13.7517L16.7107 12.1773L15.3713 11.2043H17.0269L17.5385 9.62988Z'}
          fill={'#D80027'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagPA;
