import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('진행방향') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const DirectionUp = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('DirectionUp');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '진행방향';

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
          'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 8.25015C12.1318 8.25015 12.2512 8.32772 12.3047 8.4481L14.9713 14.4481C15.0259 14.5708 15.0014 14.7143 14.9093 14.8121C14.8172 14.9098 14.6754 14.9427 14.5497 14.8956L12 13.9395L9.45042 14.8956C9.32466 14.9427 9.18288 14.9098 9.09078 14.8121C8.99867 14.7143 8.97423 14.5708 9.02878 14.4481L11.6954 8.4481C11.7489 8.32772 11.8683 8.25015 12 8.25015Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default DirectionUp;
