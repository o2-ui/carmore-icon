import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Gear, 변속장치) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Gear = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Gear');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '변속장치';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      role={iconRole}
      fill={'none'}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        d={
          'M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM11.1074 5.80176L7.22168 17.127H9.03711L10.0146 14.2109H14.167L15.1279 17.127H16.9443L13.0576 5.80176H11.1074ZM13.6045 12.5312H10.5625L12.0898 7.85059L13.6045 12.5312Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Gear;
