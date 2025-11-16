import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Birth, 생일)을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Birth = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Birth');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '생일';

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
          'M20.5 13.3574C21.0523 13.3574 21.5 13.8051 21.5 14.3574V20.5C21.5 21.0523 21.0523 21.5 20.5 21.5H3.5C2.94772 21.5 2.5 21.0523 2.5 20.5V14.3574C2.5 13.8051 2.94772 13.3574 3.5 13.3574H20.5ZM12 2.5C12.3748 2.5 12.6787 2.80395 12.6787 3.17871V7.92871H14.7139V4.53613C14.7139 4.16147 15.018 3.85759 15.3926 3.85742C15.7673 3.85742 16.0713 4.16137 16.0713 4.53613V7.92871H17.7861C18.3382 7.92892 18.7861 8.37655 18.7861 8.92871V12H5.21387V8.92871C5.21387 8.37658 5.66179 7.92896 6.21387 7.92871H7.92871V4.53613C7.92871 4.16137 8.23266 3.85742 8.60742 3.85742C8.98204 3.8576 9.28613 4.16148 9.28613 4.53613V7.92871H11.3213V3.17871C11.3213 2.80396 11.6253 2.50003 12 2.5Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Birth;
