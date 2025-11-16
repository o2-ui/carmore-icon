import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('포인트') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Point = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Point');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '포인트';

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
        d={
          'M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM9 7V17H10.6318V13.7539H12.1152C12.6772 13.7539 13.1922 13.6897 13.6582 13.5596L13.6611 13.5586C14.138 13.418 14.5534 13.2053 14.9033 12.9189C15.256 12.6301 15.525 12.2641 15.71 11.8242C15.9053 11.3816 16 10.8686 16 10.29C16 9.69301 15.9056 9.17728 15.708 8.75098C15.5128 8.32999 15.2374 7.98808 14.8828 7.72852C14.5306 7.46115 14.1092 7.27349 13.623 7.16309C13.1504 7.05371 12.6246 7 12.0469 7H9ZM11.8955 8.45117C12.7697 8.45117 13.3923 8.59872 13.7891 8.86816L13.793 8.87109C14.1704 9.11429 14.3828 9.56508 14.3828 10.29C14.3828 11.0151 14.1787 11.5124 13.8037 11.8232C13.4287 12.1319 12.8225 12.3027 11.9512 12.3027H10.6318V8.45117H11.8955Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Point;
