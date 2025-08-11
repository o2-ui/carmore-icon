import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

const ARROW_DOWN_PATH_D = {
  THIN: 'M12.4949 15.4949C12.2216 15.7683 11.7783 15.7683 11.505 15.4949L5.50498 9.49492C5.23161 9.22156 5.23161 8.77834 5.50498 8.50498C5.77834 8.23161 6.22156 8.23161 6.49493 8.50498L12 14.01L17.505 8.50498C17.7783 8.23161 18.2216 8.23161 18.4949 8.50498C18.7683 8.77834 18.7683 9.22156 18.4949 9.49493L12.4949 15.4949Z',
  BOLD: 'M12.6364 15.6363C12.2849 15.9878 11.7151 15.9878 11.3636 15.6363L5.36363 9.6363C5.01216 9.28483 5.01216 8.71498 5.36363 8.36351C5.7151 8.01203 6.28495 8.01203 6.63642 8.36351L12 13.7271L17.3636 8.36351C17.7151 8.01203 18.2849 8.01203 18.6364 8.36351C18.9879 8.71498 18.9879 9.28483 18.6364 9.6363L12.6364 15.6363Z',
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
const ArrowDown = (props: Props) => {
  const { className, thin, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isThin = thin ?? false;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ARROW_DOWN');
  const titleText = ariaLabel || '아래로';

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
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={isThin ? ARROW_DOWN_PATH_D['THIN'] : ARROW_DOWN_PATH_D['BOLD']} fill={'currentColor'} />
    </svg>
  );
};

export default ArrowDown;
