import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Cancel = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Cancel');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '취소하기';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M19.1364 6.13649C19.4879 5.78502 19.4879 5.21517 19.1364 4.8637C18.7849 4.51223 18.2151 4.51223 17.8636 4.8637L12 10.7273L6.13637 4.8637C5.7849 4.51223 5.21505 4.51223 4.86358 4.8637C4.51211 5.21517 4.51211 5.78502 4.86358 6.13649L10.7272 12.0001L4.86363 17.8637C4.51216 18.2152 4.51216 18.785 4.86363 19.1365C5.2151 19.488 5.78495 19.488 6.13642 19.1365L12 13.2729L17.8636 19.1365C18.2151 19.488 18.7849 19.488 19.1364 19.1365C19.4878 18.785 19.4878 18.2152 19.1364 17.8637L13.2728 12.0001L19.1364 6.13649Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Cancel;
