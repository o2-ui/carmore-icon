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
const Check = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CHECK');
  const titleText = ariaLabel || '확인하기';

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
          'M3.4236 13.3699L8.40761 18.8523C8.41362 18.8597 8.4202 18.8668 8.4273 18.8734L8.43351 18.8792C8.9065 19.3184 9.64217 19.3047 10.0986 18.8483L20.5986 8.34833C21.0672 7.8797 21.0672 7.11991 20.5986 6.65128C20.13 6.18265 19.3702 6.18265 18.9015 6.65128L9.23976 16.313L5.09569 11.6511C5.08905 11.6425 5.08169 11.6345 5.07364 11.627L5.0666 11.6205C4.58094 11.1695 3.82167 11.1976 3.3707 11.6833C2.92283 12.1656 2.9475 12.9178 3.4236 13.3699Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Check;
