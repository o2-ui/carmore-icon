import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('주차구역') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Parking = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Parking');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ParkingTitle');
  const titleText = ariaLabel || '주차구역';

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
          'M12 1C5.92913 1 1 5.92913 1 12C1 18.0709 5.92913 23 12 23C18.0709 23 23 18.0709 23 12C23 5.92913 18.0709 1 12 1ZM12 2.69231C17.1367 2.69231 21.3077 6.86328 21.3077 12C21.3077 17.1367 17.1367 21.3077 12 21.3077C6.86328 21.3077 2.69231 17.1367 2.69231 12C2.69231 6.86328 6.86328 2.69231 12 2.69231Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M10.0256 13.974H13.1281C14.1006 13.974 15.0337 13.5881 15.7207 12.8999C16.4089 12.2128 16.7948 11.2798 16.7948 10.3073C16.7948 9.33478 16.4089 8.40175 15.7207 7.71468C15.0337 7.02647 14.1006 6.64062 13.1281 6.64062C11.27 6.64062 9.17941 6.64062 9.17941 6.64062C8.71233 6.64062 8.33325 7.0197 8.33325 7.48678V16.5124C8.33325 16.9795 8.71233 17.3586 9.17941 17.3586C9.64648 17.3586 10.0256 16.9795 10.0256 16.5124V13.974ZM10.0256 12.2817H13.1281C13.6516 12.2817 14.1537 12.0741 14.5237 11.7029C14.8949 11.3328 15.1025 10.8308 15.1025 10.3073C15.1025 9.7838 14.8949 9.28175 14.5237 8.9117C14.1537 8.54052 13.6516 8.33293 13.1281 8.33293H10.0256V12.2817Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Parking;
