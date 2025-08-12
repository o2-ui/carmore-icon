import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const ArrowDoubleUp = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ARROW_DOUBLE_UP');
  const titleText = ariaLabel || '더 위로';

  return (
    <svg
      className={mergeClassNames(style.layout, className)}
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
          'M11.3636 12.8637C11.7151 12.5122 12.2849 12.5122 12.6364 12.8637L17.6364 17.8637C17.9878 18.2152 17.9878 18.785 17.6364 19.1365C17.2849 19.488 16.715 19.488 16.3636 19.1365L12 14.7729L7.63637 19.1365C7.2849 19.488 6.71505 19.488 6.36358 19.1365C6.01211 18.785 6.01211 18.2152 6.36358 17.8637L11.3636 12.8637Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M11.3636 4.8637C11.7151 4.51223 12.2849 4.51223 12.6364 4.8637L17.6364 9.8637C17.9878 10.2152 17.9878 10.785 17.6364 11.1365C17.2849 11.488 16.715 11.488 16.3636 11.1365L12 6.77289L7.63637 11.1365C7.2849 11.488 6.71505 11.488 6.36358 11.1365C6.01211 10.785 6.01211 10.2152 6.36358 9.8637L11.3636 4.8637Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ArrowDoubleUp;
