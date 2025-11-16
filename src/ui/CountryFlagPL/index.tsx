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
const CountryFlagPL = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagPL');

  const maskId = getElementId('CountryFlagPLMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '폴란드';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} {...rest}>
      <title>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path
          d={
            'M0.923096 2.61523C0.923096 1.51066 1.81853 0.615234 2.9231 0.615234H21.0769C22.1815 0.615234 23.0769 1.51066 23.0769 2.61523V13.3841C23.0769 14.4887 22.1815 15.3841 21.0769 15.3841H2.92309C1.81852 15.3841 0.923096 14.4887 0.923096 13.3841V2.61523Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M0.923096 2.61523C0.923096 1.51066 1.81853 0.615234 2.9231 0.615234H21.0769C22.1815 0.615234 23.0769 1.51066 23.0769 2.61523V5.99969C23.0769 7.10426 22.1815 7.99969 21.0769 7.99969H2.92309C1.81852 7.99969 0.923096 7.10426 0.923096 5.99969V2.61523Z'
          }
          fill={'white'}
        />
        <path d={'M0.923096 8H23.0769V13.3845C23.0769 14.489 22.1815 15.3845 21.0769 15.3845H2.92309C1.81852 15.3845 0.923096 14.489 0.923096 13.3845V8Z'} fill={'#D80027'} />
      </g>
    </svg>
  );
};

export default CountryFlagPL;
