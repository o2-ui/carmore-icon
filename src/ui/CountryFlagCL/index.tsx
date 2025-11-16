import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (칠레 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagCL = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagCL');

  const maskId = getElementId('CountryFlagCLMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '칠레';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} {...rest}>
      <title>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.383H0.923096V0.615234Z'} fill={'#D80027'} />
        <path d={'M9.38733 0.615234H23.0769V7.99913H9.38733V0.615234Z'} fill={'white'} />
        <path d={'M0.923096 0.615234H9.38733V7.99913H0.923096V0.615234Z'} fill={'#0037A1'} />
        <path d={'M5.15519 1.67334L5.80728 3.68124H7.91902L6.2089 4.92053L6.86531 6.92843L5.15519 5.68914L3.44507 6.92843L4.10148 4.92053L2.39136 3.68124H4.5031L5.15519 1.67334Z'} fill={'white'} />
      </g>
    </svg>
  );
};

export default CountryFlagCL;
