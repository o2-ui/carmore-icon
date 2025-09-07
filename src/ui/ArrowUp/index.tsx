import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

const ARROW_UP_PATH_D = {
  THIN: 'M11.505 8.50507C11.7783 8.23171 12.2215 8.23171 12.4949 8.50507L18.4949 14.5051C18.7683 14.7784 18.7683 15.2217 18.4949 15.495C18.2215 15.7684 17.7783 15.7684 17.505 15.495L11.9999 9.99L6.4949 15.495C6.22153 15.7684 5.77832 15.7684 5.50495 15.495C5.23159 15.2217 5.23159 14.7784 5.50495 14.5051L11.505 8.50507Z',
  BOLD: 'M11.3636 8.3637C11.7151 8.01223 12.2849 8.01223 12.6364 8.3637L18.6364 14.3637C18.9878 14.7152 18.9878 15.285 18.6364 15.6365C18.2849 15.988 17.7151 15.988 17.3636 15.6365L12 10.2729L6.63637 15.6365C6.2849 15.988 5.71505 15.988 5.36358 15.6365C5.01211 15.285 5.01211 14.7152 5.36358 14.3637L11.3636 8.3637Z',
} as const;

interface Props extends SVGProps<SVGSVGElement> {
  thin?: boolean;
}

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const ArrowUp = (props: Props) => {
  const { className, thin, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isThin = thin ?? false;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ARROW_UP');
  const titleText = ariaLabel || '위로';

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
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={isThin ? ARROW_UP_PATH_D['THIN'] : ARROW_UP_PATH_D['BOLD']} fill={'currentColor'} />
    </svg>
  );
};

export default ArrowUp;
