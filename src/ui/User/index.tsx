import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const User = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('USER');
  const titleText = ariaLabel || '사용자';

  return (
    <svg
      className={mergeClassNames(style.layout, className)}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM18.9193 16.4024C19.7301 15.1305 20.2 13.6201 20.2 12C20.2 7.47126 16.5287 3.8 12 3.8C7.47126 3.8 3.8 7.47126 3.8 12C3.8 13.6202 4.26987 15.1306 5.08076 16.4024C5.27621 16.1608 5.48504 15.9286 5.70677 15.7068C6.85628 14.5573 8.28784 13.7548 9.8388 13.3665C8.73266 12.6549 8 11.413 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 11.413 15.2674 12.6549 14.1612 13.3665C15.7122 13.7547 17.1438 14.5573 18.2933 15.7068C18.515 15.9286 18.7238 16.1608 18.9193 16.4024ZM17.7547 17.8415C17.5347 17.5371 17.2895 17.2487 17.0205 16.9796C15.689 15.6481 13.8831 14.9001 12 14.9001C10.117 14.9001 8.31107 15.6481 6.97956 16.9796C6.71052 17.2487 6.46532 17.5371 6.2453 17.8415C7.72564 19.3 9.75772 20.2 12 20.2C14.2423 20.2 16.2744 19.3 17.7547 17.8415ZM12 12.2C13.215 12.2 14.2 11.215 14.2 10C14.2 8.78497 13.215 7.8 12 7.8C10.785 7.8 9.8 8.78497 9.8 10C9.8 11.215 10.785 12.2 12 12.2Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default User;
