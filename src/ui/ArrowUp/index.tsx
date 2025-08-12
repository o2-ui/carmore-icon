import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

const ARROW_UP_PATH_D = {
  THIN: 'M6.50495 0.505074C6.77832 0.231707 7.22153 0.231707 7.4949 0.505074L13.4949 6.50507C13.7683 6.77844 13.7683 7.22166 13.4949 7.49502C13.2215 7.76839 12.7783 7.76839 12.505 7.49502L6.99993 1.99L1.4949 7.49502C1.22153 7.76839 0.778319 7.76839 0.504952 7.49502C0.231585 7.22166 0.231585 6.77844 0.504952 6.50507L6.50495 0.505074Z',
  BOLD: 'M6.36358 0.363702C6.71505 0.0122297 7.2849 0.0122297 7.63637 0.363702L13.6364 6.3637C13.9878 6.71517 13.9878 7.28502 13.6364 7.63649C13.2849 7.98797 12.7151 7.98797 12.3636 7.63649L6.99998 2.27289L1.63637 7.63649C1.2849 7.98797 0.715051 7.98797 0.363579 7.63649C0.0121076 7.28502 0.0121076 6.71517 0.363579 6.3637L6.36358 0.363702Z',
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
