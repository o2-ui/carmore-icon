import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (People, 사람)을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const People = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('People');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '사람';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      role={iconRole}
      fill={'none'}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        d="M9.00403 11.759C9.84443 12.3729 10.8821 12.731 12.0002 12.731C14.7348 12.731 17.1157 10.364 17.1157 7.61548C17.1157 4.79466 14.8211 2.5 12.0002 2.5C9.17942 2.5 6.88477 4.79466 6.88477 7.61548C6.88477 9.3182 7.71786 10.8309 9.00403 11.759Z"
        fill={'currentColor'}
      />
      <path
        d="M16.5018 12.4019C15.3252 13.5126 13.7394 14.1923 12.0002 14.1923C10.2609 14.1923 8.67511 13.5126 7.49855 12.4019C4.52427 14.0096 2.5 17.1593 2.5 20.7693C2.5 21.1712 2.82885 21.5001 3.23078 21.5001H20.7696C21.1715 21.5001 21.5003 21.1712 21.5003 20.7693C21.5003 17.1593 19.4761 14.0096 16.5018 12.4019Z"
        fill={'currentColor'}
      />
    </svg>
  );
};

export default People;
