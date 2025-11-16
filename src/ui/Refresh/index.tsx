import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Refresh = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Refresh');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '새로고침';

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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M5.39998 3.9C5.39998 3.40294 4.99703 3 4.49998 3C4.00292 3 3.59998 3.40294 3.59998 3.9V8.9C3.59998 9.39706 4.00292 9.8 4.49998 9.8H9.49998C9.99703 9.8 10.4 9.39706 10.4 8.9C10.4 8.40294 9.99703 8 9.49998 8H6.63441C6.70257 7.92143 6.77243 7.84436 6.84394 7.76886C8.13914 6.40124 9.96941 5.55 12 5.55C15.9212 5.55 19.1 8.72878 19.1 12.65C19.1 16.5712 15.9212 19.75 12 19.75C8.07875 19.75 4.89998 16.5712 4.89998 12.65C4.89998 12.1529 4.49703 11.75 3.99998 11.75C3.50292 11.75 3.09998 12.1529 3.09998 12.65C3.09998 17.5653 7.08464 21.55 12 21.55C16.9153 21.55 20.9 17.5653 20.9 12.65C20.9 7.73466 16.9153 3.75 12 3.75C9.45481 3.75 7.15799 4.81953 5.53701 6.53114C5.49078 6.57995 5.4451 6.62929 5.39998 6.67915V3.9Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Refresh;
