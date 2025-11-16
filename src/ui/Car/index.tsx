import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('차량') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Car = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Car');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '차량';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      fill={'none'}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M3.20461 11L4.96748 5.38799C5.2273 4.56088 5.97923 4 6.82827 4H17.1719C18.0209 4 18.7729 4.56088 19.0327 5.38799L20.7954 10.9997C20.7956 10.4475 21.2331 9.99999 21.7727 9.99999C22.3125 9.99999 22.75 10.4477 22.75 11C22.75 11.5523 22.3125 12 21.7727 12L21.772 18.0004C21.772 18.5524 21.3349 19 20.7955 19.0004V20C20.7955 20.5523 20.3579 21 19.8182 21H18.8409C18.3012 21 17.8636 20.5523 17.8636 20V19.0004H6.13644V20C6.13644 20.5523 5.6989 21 5.15916 21H4.18189C3.64215 21 3.20461 20.5523 3.20461 20V19.0004C2.66488 19.0004 2.22654 18.5527 2.22654 18.0004V12.0004C1.68714 12 1.25 11.552 1.25 11C1.25 10.4477 1.68754 9.99999 2.22728 9.99999C2.76701 9.99999 3.20461 10.4477 3.20461 11ZM7.11292 13.5004C7.11292 14.3288 6.45661 15.0004 5.647 15.0004C4.8374 15.0004 4.18109 14.3288 4.18109 13.5004C4.18109 12.6719 4.8374 12.0004 5.647 12.0004C6.45661 12.0004 7.11292 12.6719 7.11292 13.5004ZM18.3516 15.0004C19.1612 15.0004 19.8175 14.3288 19.8175 13.5004C19.8175 12.6719 19.1612 12.0004 18.3516 12.0004C17.542 12.0004 16.8857 12.6719 16.8857 13.5004C16.8857 14.3288 17.542 15.0004 18.3516 15.0004ZM9.06747 14.0004H14.9311V15.0004H9.06747V14.0004Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Car;
