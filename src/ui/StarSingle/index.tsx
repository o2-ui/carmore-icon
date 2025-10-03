import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('별') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const StarSingle = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('StarSingle');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('StarSingleTitle');
  const titleText = ariaLabel || '별';

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
        d={
          'M7.20586 21.3783C6.47688 21.7791 5.62488 21.1318 5.7641 20.2828L6.6797 14.6998L2.80116 10.7459C2.2114 10.1447 2.53684 9.09725 3.35186 8.9734L8.71188 8.15885L11.1089 3.07928C11.4734 2.30691 12.5266 2.30691 12.8911 3.07928L15.2881 8.15885L20.6481 8.9734C21.4632 9.09725 21.7886 10.1447 21.1988 10.7459L17.3203 14.6998L18.2359 20.2828C18.3751 21.1318 17.5231 21.7791 16.7941 21.3783L12 18.7424L7.20586 21.3783Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default StarSingle;
