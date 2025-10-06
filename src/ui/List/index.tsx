import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('목록') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const List = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('List');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ListTitle');
  const titleText = ariaLabel || '목록';

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
          'M19.3496 16.9004C19.8466 16.9004 20.2499 17.3028 20.25 17.7998C20.25 18.2969 19.8467 18.7002 19.3496 18.7002H4.65039C4.15333 18.7002 3.75 18.2969 3.75 17.7998C3.75011 17.3028 4.1534 16.9004 4.65039 16.9004H19.3496ZM19.3496 10.7998C19.8467 10.7998 20.25 11.2031 20.25 11.7002C20.2499 12.1972 19.8466 12.5996 19.3496 12.5996H4.65039C4.15338 12.5996 3.75008 12.1972 3.75 11.7002C3.75 11.2031 4.15333 10.7998 4.65039 10.7998H19.3496ZM19.3496 5C19.8467 5 20.25 5.40333 20.25 5.90039C20.2498 6.39727 19.8465 6.7998 19.3496 6.7998H4.65039C4.15346 6.7998 3.75021 6.39727 3.75 5.90039C3.75 5.40333 4.15333 5 4.65039 5H19.3496Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default List;
