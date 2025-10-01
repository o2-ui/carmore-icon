import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (HotelValet) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const HotelValet = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('HotelValet');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('HotelValetTitle');
  const titleText = ariaLabel || '주차 대행';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      role={iconRole}
      aria-labelledby={titleId}
      fill={'none'}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        d={
          'M11.5067 9.89847H12.4821C12.8704 9.89847 13.1852 9.58366 13.1852 9.19535C13.1852 8.80703 12.8704 8.49222 12.4821 8.49222H11.5067C11.1184 8.49222 10.8036 8.80703 10.8036 9.19535C10.8036 9.58366 11.1184 9.89847 11.5067 9.89847Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M7.83428 6.675C7.95771 5.81097 8.6977 5.16919 9.5705 5.16919H14.4309C15.3037 5.16919 16.0437 5.81097 16.1671 6.675L16.8264 11.2904C16.9774 12.347 16.1575 13.2923 15.0902 13.2923H14.2161V17.1561C14.2161 17.6212 14.0313 18.0673 13.7024 18.3962L13.2408 18.8578C12.5559 19.5427 11.4454 19.5427 10.7605 18.8578L10.299 18.3962C9.97008 18.0673 9.7853 17.6212 9.7853 17.1561V13.2923H8.91116C7.84386 13.2923 7.024 12.347 7.17494 11.2904L7.83428 6.675ZM11.4468 13.2923V17.1561C11.4468 17.1805 11.4566 17.204 11.4739 17.2213L11.9354 17.6829C11.9715 17.7189 12.0299 17.7189 12.066 17.6829L12.5275 17.2213C12.5448 17.204 12.5545 17.1805 12.5545 17.1561V13.2923H11.4468ZM9.5705 6.83073C9.52456 6.83073 9.48562 6.86451 9.47912 6.90998L8.81978 11.5254C8.81183 11.581 8.85498 11.6307 8.91116 11.6307H15.0902C15.1464 11.6307 15.1895 11.581 15.1816 11.5254L14.5223 6.90998C14.5158 6.86451 14.4768 6.83073 14.4309 6.83073H9.5705Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M1 12C1 5.92913 5.92913 1 12 1C18.0709 1 23 5.92913 23 12C23 18.0709 18.0709 23 12 23C5.92913 23 1 18.0709 1 12ZM21.3077 12C21.3077 6.86328 17.1367 2.69231 12 2.69231C6.86328 2.69231 2.69231 6.86328 2.69231 12C2.69231 17.1367 6.86328 21.3077 12 21.3077C17.1367 21.3077 21.3077 17.1367 21.3077 12Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default HotelValet;
