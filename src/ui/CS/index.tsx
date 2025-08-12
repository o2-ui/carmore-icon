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
const CS = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CS');
  const titleText = ariaLabel || '고객 상담';

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
          'M4.88513 18.4226L7.52243 17.6294C7.75129 17.5606 7.9976 17.5866 8.20771 17.7018C9.38008 18.3446 10.7265 18.6901 12.1323 18.6901C16.3274 18.6901 19.6906 15.6222 19.6906 11.891C19.6906 8.15991 16.3274 5.09196 12.1323 5.09196C7.93709 5.09196 4.57387 8.15991 4.57387 11.891C4.57387 13.1182 4.93563 14.2973 5.61459 15.334C5.77556 15.5798 5.81096 15.8892 5.70978 16.1661L4.88513 18.4226ZM3.66269 20.7108C2.94777 20.9258 2.29855 20.2177 2.55849 19.5065L3.85865 15.9488C3.14542 14.7132 2.76451 13.3277 2.76451 11.891C2.76451 7.09482 6.97937 3.25 12.1323 3.25C17.2851 3.25 21.5 7.09482 21.5 11.891C21.5 16.6873 17.2851 20.5321 12.1323 20.5321C10.5595 20.5321 9.04111 20.1738 7.68794 19.5003L3.66269 20.7108Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default CS;
