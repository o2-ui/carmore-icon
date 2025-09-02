import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (싱가포르 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagSG = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_SG_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_SG');
  const titleText = ariaLabel || '싱가포르';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(style.layout, className)}
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
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} fill={'white'} />
        <rect x={0.923096} y={0.615234} width={22.1538} height={7.38446} fill={'#D80027'} />
        <path
          d={
            'M4.53513 4.30755C4.53513 3.23166 5.29131 2.33287 6.30104 2.11233C6.14285 2.07764 5.98139 2.06012 5.81945 2.06006C4.57814 2.06006 3.57196 3.06624 3.57196 4.30751C3.57196 5.54877 4.57819 6.555 5.81945 6.555C5.98483 6.555 6.14583 6.53661 6.30104 6.50273C5.29131 6.28227 4.53513 5.38348 4.53513 4.30755ZM7.42478 2.22063L7.58419 2.71117H8.1L7.68267 3.01436L7.84207 3.5049L7.42478 3.20176L7.00745 3.5049L7.1669 3.01436L6.74957 2.71117H7.26538L7.42478 2.22063Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M6.17357 3.18408L6.33293 3.67463H6.84874L6.43141 3.97781L6.59081 4.46836L6.17357 4.16521L5.75624 4.46836L5.91568 3.97781L5.49835 3.67463H6.01416L6.17357 3.18408ZM8.676 3.18408L8.83541 3.67463H9.35122L8.93389 3.97781L9.09329 4.46836L8.676 4.16521L8.25871 4.46836L8.41816 3.97781L8.00083 3.67463H8.51664L8.676 3.18408ZM8.19437 4.62889L8.35378 5.11943H8.86959L8.4523 5.42262L8.6117 5.91316L8.19437 5.61001L7.77713 5.91316L7.93653 5.42262L7.51924 5.11943H8.03501L8.19437 4.62889ZM6.65515 4.62889L6.81452 5.11943H7.33033L6.91304 5.42262L7.07244 5.91316L6.65515 5.61001L6.23787 5.91316L6.39727 5.42262L5.97998 5.11943H6.49575L6.65515 4.62889Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagSG;
