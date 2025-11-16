import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Door, 승차구) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Door = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Door');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('DoorTitle');
  const titleText = ariaLabel || '승차구';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      role={iconRole}
      aria-label={titleText}
      aria-labelledby={titleId}
      fill={'none'}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M3.5 5.89744C3.5 4.57337 4.57337 3.5 5.89744 3.5H13.2401C13.9774 3.5 14.6737 3.83926 15.1281 4.4199L17.159 7.01497L19.9608 10.452C20.3095 10.8798 20.5 11.4148 20.5 11.9668V18.1026C20.5 19.4266 19.4266 20.5 18.1026 20.5H5.89744C4.57337 20.5 3.5 19.4266 3.5 18.1026V5.89744ZM5.89744 6.50769C5.89744 6.17066 6.17066 5.89744 6.50769 5.89744H12.2228C12.417 5.89744 12.5997 5.98988 12.7146 6.14641L14.2892 8.28996L15.7103 10.1471C15.8514 10.3315 15.8756 10.58 15.7728 10.7882C15.6699 10.9964 15.4579 11.1282 15.2256 11.1282H6.50769C6.17066 11.1282 5.89744 10.855 5.89744 10.5179V6.50769ZM6.76923 12.8718C6.28775 12.8718 5.89744 13.2621 5.89744 13.7436C5.89744 14.2251 6.28775 14.6154 6.76923 14.6154H8.51282C8.9943 14.6154 9.38462 14.2251 9.38462 13.7436C9.38462 13.2621 8.9943 12.8718 8.51282 12.8718H6.76923Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Door;
