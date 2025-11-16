import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (필리핀 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagPH = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagPH');

  const maskId = getElementId('CountryFlagPHMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '필리핀';

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
        <path d={'M23.0769 0.615234V7.99969H12L0.923096 0.615234H23.0769Z'} fill={'#0052B4'} />
        <path d={'M23.0769 8V15.3845H0.923096L12 8H23.0769Z'} fill={'#D80027'} />
        <path
          d={
            'M7.92875 7.99988L6.74802 7.44452L7.37681 6.301L6.09465 6.54625L5.93218 5.25107L5.0391 6.20364L4.14607 5.25107L3.98359 6.54625L2.70148 6.30095L3.33022 7.44447L2.14949 7.99988L3.33022 8.55524L2.70148 9.69876L3.98368 9.45351L4.14607 10.7487L5.0391 9.79611L5.93218 10.7487L6.09465 9.45351L7.37676 9.6988L6.74797 8.55532L7.92875 7.99988ZM1.86591 2.01172L2.25883 2.56106L2.90264 2.35709L2.50162 2.90056L2.89455 3.44981L2.25377 3.23641L1.85275 3.77983L1.85782 3.10448L1.21704 2.89099L1.86089 2.68711L1.86591 2.01172ZM1.86591 12.2199L2.25883 12.7693L2.90264 12.5653L2.50162 13.1088L2.89455 13.6581L2.25377 13.4446L1.85275 13.988L1.85782 13.3127L1.21704 13.0992L1.86089 12.8953L1.86591 12.2199ZM10.0267 7.11584L9.63381 7.66515L8.99001 7.46122L9.39103 8.00464L8.9981 8.55398L9.63888 8.34053L10.0399 8.88391L10.0348 8.20861L10.6756 7.99512L10.0318 7.79119L10.0267 7.11584Z'
          }
          fill={'#FFDA44'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagPH;
