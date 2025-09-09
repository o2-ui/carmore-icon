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
const CountryFlagPT = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagPT');

  const maskId = getElementId('CountryFlagPTMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagPTTitle');
  const titleText = ariaLabel || '포르투갈';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3841H0.923096V0.615234Z'} fill={'#D80027'} />
        <path d={'M9.4316 0.615234V15.3841H0.923096V0.615234H9.4316Z'} fill={'#6DA544'} />
        <path
          d={
            'M9.43158 10.7689C10.961 10.7689 12.2008 9.5291 12.2008 7.9997C12.2008 6.4703 10.961 5.23047 9.43158 5.23047C7.90218 5.23047 6.66235 6.4703 6.66235 7.9997C6.66235 9.5291 7.90218 10.7689 9.43158 10.7689Z'
          }
          fill={'#FFDA44'}
        />
        <path d={'M7.87378 6.61523V8.34605C7.87378 9.20633 8.57119 9.90374 9.43147 9.90374C10.2918 9.90374 10.9892 9.20633 10.9892 8.34605V6.61523H7.87378Z'} fill={'#D80027'} />
        <path d={'M9.43146 8.86535C9.14515 8.86535 8.91223 8.63243 8.91223 8.34612V7.65381H9.95074V8.34612C9.95069 8.63239 9.71773 8.86535 9.43146 8.86535Z'} fill={'white'} />
      </g>
    </svg>
  );
};

export default CountryFlagPT;
