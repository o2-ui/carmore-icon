import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Date, 날짜)을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Date = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Date');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('DateTitle');
  const titleText = ariaLabel || '날짜';

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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M5.35071 2.5C3.77631 2.5 2.5 3.77631 2.5 5.35072V18.6493C2.5 20.2237 3.77631 21.5 5.35072 21.5H18.6493C20.2237 21.5 21.5 20.2237 21.5 18.6493V5.35071C21.5 3.77631 20.2237 2.5 18.6493 2.5H5.35071ZM18.4211 7.16089H5.59291V8.58625H18.4211V7.16089ZM8.01602 11.4369H9.91175V13.3326H8.01602V11.4369ZM12.9478 11.4369H11.052V13.3326H12.9478V11.4369ZM14.088 11.4369H15.9838V13.3326H14.088V11.4369ZM9.91175 14.758H8.01602V16.6537H9.91175V14.758ZM11.052 14.758H12.9478V16.6537H11.052V14.758ZM15.9838 14.758H14.088V16.6537H15.9838V14.758Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Date;
