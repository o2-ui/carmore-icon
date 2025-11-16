import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('공항') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Airport = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Airport');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '공항';

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
        d={
          'M5.67107 13.823C5.41337 13.8955 5.14211 13.8085 4.97936 13.591L1.65642 9.32826C1.52079 9.13977 1.46654 8.90778 1.52079 8.69029C1.57504 8.4728 1.72423 8.28431 1.91412 8.19731L3.27042 7.60284C3.48743 7.51585 3.73156 7.54485 3.92144 7.68984L6.76967 9.83573L16.5079 5.52945C18.0541 4.84798 19.3155 4.5 20.2649 4.5C21.6347 4.5 22.1674 5.12695 22.4485 5.81943C22.5832 6.58594 22.5394 7.20117 21.236 8.14903C20.1526 8.93681 19.424 9.34276 18.0541 9.95173L15.1516 11.1407L12.1949 15.8529C12.0999 15.9979 11.9779 16.0994 11.8287 16.1429L10.5662 16.471C10.4983 16.4855 10.4305 16.5 10.3627 16.5C10.2152 16.5 10.1062 16.4619 9.9841 16.3459C9.82135 16.1864 9.72641 15.9399 9.75353 15.6934L10.1333 12.5761L5.67107 13.823Z'
        }
        fill={'currentColor'}
      />
      <path
        d={'M5.4975 19.005C4.9466 19.005 4.5 19.4516 4.5 20.0025C4.5 20.5534 4.9466 21 5.4975 21H18.5025C19.0534 21 19.5 20.5534 19.5 20.0025C19.5 19.4516 19.0534 19.005 18.5025 19.005H5.4975Z'}
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Airport;
