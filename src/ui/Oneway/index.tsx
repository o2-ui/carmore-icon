import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('편도') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Oneway = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Oneway');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('OnewayTitle');
  const titleText = ariaLabel || '편도';

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
          'M15.4697 9.53033C15.1768 9.23744 15.1768 8.76256 15.4697 8.46967C15.7626 8.17678 16.2374 8.17678 16.5303 8.46967L19.5303 11.4697C19.6768 11.6161 19.75 11.8081 19.75 12C19.75 12.1017 19.7298 12.1987 19.6931 12.2871C19.6565 12.3755 19.6022 12.4584 19.5303 12.5303L16.5303 15.5303C16.2374 15.8232 15.7626 15.8232 15.4697 15.5303C15.1768 15.2374 15.1768 14.7626 15.4697 14.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L15.4697 9.53033Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Oneway;
