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
const Copy = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Copy');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '복사하기';

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
          'M5 4.8H13C13.1105 4.8 13.2 4.88954 13.2 5V7.5H11C9.89543 7.5 9 8.39543 9 9.5V14.7H5C4.88954 14.7 4.8 14.6105 4.8 14.5V5C4.8 4.88954 4.88954 4.8 5 4.8ZM9 16.5H5C3.89543 16.5 3 15.6046 3 14.5V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V7.5H19C20.1046 7.5 21 8.39543 21 9.5V19C21 20.1046 20.1046 21 19 21H11C9.89543 21 9 20.1046 9 19V16.5ZM10.8 9.5C10.8 9.38954 10.8895 9.3 11 9.3H19C19.1105 9.3 19.2 9.38954 19.2 9.5V19C19.2 19.1105 19.1105 19.2 19 19.2H11C10.8895 19.2 10.8 19.1105 10.8 19V9.5Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Copy;
