import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('신차') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const NewCar = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('NewCar');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('NewCarTitle');
  const titleText = ariaLabel || '신차';

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
          'M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM14.7119 7.5C14.2216 7.50003 13.8244 7.89742 13.8242 8.3877V13.1641C13.8242 13.194 13.7995 13.2178 13.7695 13.2178C13.7513 13.2177 13.7346 13.2086 13.7246 13.1934L10.2764 7.95996C10.0872 7.67293 9.76661 7.50006 9.42285 7.5C8.85813 7.5 8.40047 7.95776 8.40039 8.52246V15.6064C8.40065 16.0999 8.80041 16.4999 9.29395 16.5C9.78755 16.5 10.1882 16.1 10.1885 15.6064V10.8281C10.1886 10.8026 10.2089 10.7824 10.2344 10.7822C10.25 10.7822 10.2648 10.7897 10.2734 10.8027L13.751 16.0488C13.9378 16.3306 14.2537 16.5 14.5918 16.5C15.1487 16.5 15.5996 16.0481 15.5996 15.4912V8.3877C15.5994 7.8974 15.2023 7.5 14.7119 7.5Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default NewCar;
