import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('입력값 제거') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const InputDelete = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('InputDelete');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('InputDeleteTitle');
  const titleText = ariaLabel || '입력값 제거';

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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12ZM15.8048 8.19526C16.0651 8.45561 16.0651 8.87772 15.8048 9.13807L12.9428 12L15.8047 14.8619C16.0651 15.1223 16.0651 15.5444 15.8047 15.8047C15.5444 16.0651 15.1223 16.0651 14.8619 15.8047L12 12.9428L9.13811 15.8047C8.87776 16.0651 8.45565 16.0651 8.1953 15.8047C7.93495 15.5444 7.93495 15.1223 8.1953 14.8619L11.0572 12L8.19526 9.13807C7.93491 8.87772 7.93491 8.45561 8.19526 8.19526C8.45561 7.93491 8.87772 7.93491 9.13807 8.19526L12 11.0572L14.862 8.19526C15.1223 7.93491 15.5444 7.93491 15.8048 8.19526Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default InputDelete;
