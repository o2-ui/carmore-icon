import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const ArrowDoubleDown = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ArrowDoubleDown');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ArrowDoubleDownTitle');
  const titleText = ariaLabel || '더 아래로';

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
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M12.6364 11.1363C12.2849 11.4878 11.7151 11.4878 11.3636 11.1363L6.36363 6.1363C6.01216 5.78483 6.01216 5.21498 6.36363 4.86351C6.7151 4.51203 7.28495 4.51203 7.63642 4.86351L12 9.22711L16.3636 4.86351C16.7151 4.51203 17.2849 4.51203 17.6364 4.86351C17.9879 5.21498 17.9879 5.78483 17.6364 6.1363L12.6364 11.1363Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M12.6364 19.1363C12.2849 19.4878 11.7151 19.4878 11.3636 19.1363L6.36363 14.1363C6.01216 13.7848 6.01216 13.215 6.36363 12.8635C6.7151 12.512 7.28495 12.512 7.63642 12.8635L12 17.2271L16.3636 12.8635C16.7151 12.512 17.2849 12.512 17.6364 12.8635C17.9879 13.215 17.9879 13.7848 17.6364 14.1363L12.6364 19.1363Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ArrowDoubleDown;
