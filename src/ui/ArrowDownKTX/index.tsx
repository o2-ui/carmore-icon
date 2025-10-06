import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('아래로') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const ArrowDownKTX = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ArrowDownKTX');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ArrowDownKTXTitle');
  const titleText = ariaLabel || '아래로';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        d={'M12.4106 15.8597C12.1749 16.0468 11.8251 16.0468 11.5894 15.8597L4.21789 10.0094C3.77885 9.66096 4.04775 9 4.62854 9L19.3715 9C19.9523 9 20.2211 9.66096 19.7821 10.0094L12.4106 15.8597Z'}
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ArrowDownKTX;
