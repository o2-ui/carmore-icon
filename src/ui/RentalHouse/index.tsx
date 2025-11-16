import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('숙소') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const RentalHouse = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('RentalHouse');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '숙소';

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
          'M12.5477 2.22895C12.2452 1.92368 11.7548 1.92368 11.4523 2.22895L2.47842 11.2854C1.99047 11.7778 2.33605 12.6198 3.02611 12.6198H4.2544L4.25436 21.2183C4.25436 21.65 4.60115 22 5.02892 22H10.4509V22.0002H13.5492V22H18.971C19.3988 22 19.7456 21.65 19.7456 21.2183L19.7456 12.6198H20.9739C21.6639 12.6198 22.0095 11.7778 21.5216 11.2854L12.5477 2.22895ZM13.5492 22V18.3101C13.5492 17.7578 13.1015 17.3101 12.5492 17.3101H11.4509C10.8987 17.3101 10.4509 17.7578 10.4509 18.3101V22H13.5492Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default RentalHouse;
