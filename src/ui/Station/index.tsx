import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('역') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Station = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Station');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('StationTitle');
  const titleText = ariaLabel || '역';

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
      fill={'none'}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M3.5 4.48365C3.5 3.11197 4.63421 2 6.03332 2H17.9667C19.3658 2 20.5 3.11197 20.5 4.48365V17.8497C20.5 19.1527 19.4766 20.2213 18.1748 20.3251L18.4865 21.1602C18.6388 21.568 18.3308 22 17.8878 22L6.11215 22C5.66919 22 5.36123 21.568 5.51346 21.1602L5.82516 20.3251C4.52342 20.2213 3.5 19.1527 3.5 17.8497V4.48365ZM5.625 5.83334C5.625 5.55719 5.85333 5.33333 6.135 5.33333H17.865C18.1467 5.33333 18.375 5.55719 18.375 5.83333V12.3333C18.375 12.6095 18.1467 12.8333 17.865 12.8333H6.135C5.85334 12.8333 5.625 12.6095 5.625 12.3333V5.83334ZM6.42428 15.4633C7.05803 15.4633 7.57178 15.9856 7.57178 16.63C7.57178 17.2743 7.05803 17.7966 6.42428 17.7966C5.79054 17.7966 5.27678 17.2743 5.27678 16.63C5.27678 15.9856 5.79054 15.4633 6.42428 15.4633ZM16.009 16.6301C16.009 15.9857 16.5228 15.4634 17.1565 15.4634C17.7903 15.4634 18.304 15.9857 18.304 16.6301C18.304 17.2744 17.7903 17.7967 17.1565 17.7967C16.5228 17.7967 16.009 17.2744 16.009 16.6301Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Station;
