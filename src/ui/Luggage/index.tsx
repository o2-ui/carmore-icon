import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Luggage, 수화물) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Luggage = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Luggage');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '수화물';

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
          'M4.99219 20.5H3.33301C2.59691 20.4998 2.00021 19.9031 2 19.167V9.08301C2.00018 8.34689 2.59689 7.75018 3.33301 7.75H4.99219V20.5ZM14.667 3.5C15.4031 3.50019 15.9998 4.0969 16 4.83301V7.75H17.0068V20.5H6.99219V7.75H8V4.83301C8.00018 4.09702 8.59706 3.50038 9.33301 3.5H14.667ZM20.667 7.75C21.4031 7.75018 21.9998 8.34689 22 9.08301V19.167C21.9998 19.9031 21.4031 20.4998 20.667 20.5H19.0068V7.75H20.667ZM10 7.75H14V5.625H10V7.75Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Luggage;
