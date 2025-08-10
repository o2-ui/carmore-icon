import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param {SVGProps<SVGSVGElement>} props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const BackBtn = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'button';
  const iconArialLabel = ariaLabel || '뒤로가기';

  return (
    <svg
      className={mergeClassNames(style['layout'], className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      aria-label={iconArialLabel}
      {...rest}
    >
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M7.88562 7.10282C8.23751 7.45388 8.23818 8.02373 7.88712 8.37561L5.16916 11.1H21C21.497 11.1 21.9 11.5029 21.9 12C21.9 12.497 21.497 12.9 21 12.9H5.17276L7.88637 15.6136C8.23784 15.9651 8.23784 16.5349 7.88637 16.8864C7.5349 17.2378 6.96505 17.2378 6.61358 16.8864L2.36358 12.6364C2.0124 12.2852 2.01207 11.7159 2.36283 11.3643L6.61283 7.10432C6.96389 6.75243 7.53374 6.75176 7.88562 7.10282Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default BackBtn;
