import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (승객) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Passenger = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Passenger');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '승객';

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
        d="M18 19.593V17.3493C18 14.5729 16.254 12.2134 13.8508 11.3994C15.0063 10.721 15.7905 9.4304 15.7905 7.95119C15.7905 5.77373 14.0889 4 12 4C9.91111 4 8.20952 5.77373 8.20952 7.95119C8.20952 9.4304 8.99365 10.721 10.1492 11.3994C7.74286 12.2134 6 14.5729 6 17.3493V19.593C6 19.818 6.1746 20 6.39048 20H17.6159C17.8254 19.9967 18 19.818 18 19.593Z"
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Passenger;
