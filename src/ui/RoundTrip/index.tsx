import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('왕복') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const RoundTrip = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('RoundTrip');

  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '왕복';

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
          'M15.4697 6.15533C15.1768 5.86244 15.1768 5.38756 15.4697 5.09467C15.7626 4.80178 16.2374 4.80178 16.5303 5.09467L19.5303 8.09467C19.6768 8.24112 19.75 8.43306 19.75 8.625C19.75 8.72669 19.7298 8.82366 19.6931 8.91209C19.6565 9.00055 19.6022 9.08342 19.5303 9.15533L16.5303 12.1553C16.2374 12.4482 15.7626 12.4482 15.4697 12.1553C15.1768 11.8624 15.1768 11.3876 15.4697 11.0947L17.1893 9.375H5C4.58579 9.375 4.25 9.03921 4.25 8.625C4.25 8.21079 4.58579 7.875 5 7.875H17.1893L15.4697 6.15533Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M8.53033 12.9053C8.82322 12.6124 8.82322 12.1376 8.53033 11.8447C8.23744 11.5518 7.76256 11.5518 7.46967 11.8447L4.46967 14.8447C4.32322 14.9911 4.25 15.1831 4.25 15.375C4.25 15.4767 4.27024 15.5737 4.30691 15.6621C4.34351 15.7505 4.39776 15.8334 4.46967 15.9053L7.46967 18.9053C7.76256 19.1982 8.23744 19.1982 8.53033 18.9053C8.82322 18.6124 8.82322 18.1376 8.53033 17.8447L6.81066 16.125H19C19.4142 16.125 19.75 15.7892 19.75 15.375C19.75 14.9608 19.4142 14.625 19 14.625H6.81066L8.53033 12.9053Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default RoundTrip;
