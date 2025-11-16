import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('위로') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const ArrowUpKTX = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ArrowUpKTX');

  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '위로';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        d={'M11.5894 9.1403C11.8251 8.95323 12.1749 8.95323 12.4106 9.1403L19.7821 14.9906C20.2211 15.339 19.9523 16 19.3715 16L4.62853 16C4.04775 16 3.77885 15.339 4.21789 14.9906L11.5894 9.1403Z'}
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ArrowUpKTX;
