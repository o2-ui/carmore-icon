import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('달력, 월') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Month = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Month');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '달력';

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
          'M14.5101 10.5C16.2768 10.5 17.0503 11.6937 17.0503 13.7947V14.2053C17.0503 16.3063 16.2768 17.5 14.5101 17.5C12.7433 17.5 11.9698 16.3063 11.9698 14.2053V13.7947C11.9698 11.6937 12.7433 10.5 14.5101 10.5ZM14.5101 11.6555C13.5169 11.6555 13.2017 12.3049 13.2017 13.8806V14.1194C13.2017 15.6951 13.5169 16.3445 14.5101 16.3445C15.5032 16.3445 15.8184 15.6951 15.8184 14.1194V13.8806C15.8184 12.3049 15.5032 11.6555 14.5101 11.6555Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M9.12283 10.5C10.689 10.5 11.3957 11.3213 11.3957 12.2381V12.2858C11.3957 12.9829 10.9755 13.661 10.2593 13.8806C10.985 13.9761 11.6822 14.4345 11.6822 15.4181V15.5136C11.6822 16.5737 10.8227 17.5 9.18013 17.5C8.43524 17.5 7.81451 17.3472 7.26062 16.9939C6.96458 16.8029 6.93593 16.4686 7.09827 16.2012C7.27017 15.9147 7.54711 15.8479 7.83361 16.0198C8.28245 16.3063 8.62624 16.4113 9.09418 16.4113C10.1065 16.4113 10.4503 15.9911 10.4503 15.4563V15.3799C10.4503 14.7306 10.0396 14.425 9.06553 14.425H8.55939C8.2538 14.425 8.1201 14.1862 8.1201 13.8997C8.1201 13.6132 8.2538 13.3745 8.55939 13.3745H8.96048C9.81041 13.3745 10.202 13.0498 10.202 12.3909V12.3622C10.202 11.8752 9.86771 11.5696 9.11328 11.5696C8.65489 11.5696 8.35885 11.7224 8.03415 12.0184C7.79541 12.2285 7.48026 12.1903 7.29882 11.9611C7.10782 11.7319 7.13647 11.4359 7.31792 11.2258C7.71901 10.7769 8.3302 10.5 9.12283 10.5Z'
        }
        fill={'currentColor'}
      />
      <rect x={'6'} y={'7'} width={'12'} height={'1.5'} rx={'0.75'} fill={'currentColor'} />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M18 3.8H6C4.78497 3.8 3.8 4.78497 3.8 6V18C3.8 19.215 4.78497 20.2 6 20.2H18C19.215 20.2 20.2 19.215 20.2 18V6C20.2 4.78497 19.215 3.8 18 3.8ZM6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Month;
