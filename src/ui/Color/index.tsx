import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Color, 색상)을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Color = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Color');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '색상';

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
          'M11.7285 2.5C15.5698 2.5 18.5516 4.61451 19.8682 6.71289C20.9264 8.39962 21.5008 10.3561 21.5 12.5059C21.4999 17.1399 18.4747 20.5 14.625 20.5C11.818 20.4999 9.4776 18.7645 8.375 15.8838C8.11244 15.1977 7.66984 14.6504 6.61816 14.5684C3.93902 14.3594 2.50003 12.4506 2.5 9.83887C2.5 8.91574 2.73396 8.05621 3.13281 7.32812C3.14673 7.29913 3.84011 5.86538 5.39941 4.59961C6.76373 3.3336 9.08887 2.50003 11.7285 2.5ZM15.0635 13.3301C13.9284 13.3303 13.008 14.2355 13.0078 15.3525C13.0078 16.4691 13.9283 17.3748 15.0635 17.375C16.1992 17.375 17.1201 16.4692 17.1201 15.3525C17.1199 14.2354 16.1995 13.3301 15.0635 13.3301ZM16.8154 8.30469C16.0141 8.30469 15.3643 8.9432 15.3643 9.73145C15.3643 10.5197 16.0141 11.1592 16.8154 11.1592C17.6168 11.1592 18.2666 10.5197 18.2666 9.73145C18.2666 8.9432 17.6167 8.3047 16.8154 8.30469ZM13.4512 5.10938C12.6499 5.10938 12 5.74788 12 6.53613C12 7.3244 12.6498 7.96387 13.4512 7.96387C14.2524 7.96374 14.9023 7.32432 14.9023 6.53613C14.9023 5.74796 14.2524 5.1095 13.4512 5.10938ZM8.71973 5.37305C8.15772 5.37305 7.70218 5.82119 7.70215 6.37402C7.70215 6.92688 8.1577 7.375 8.71973 7.375C9.28165 7.37489 9.7373 6.92681 9.7373 6.37402C9.73727 5.82126 9.28163 5.37316 8.71973 5.37305Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Color;
