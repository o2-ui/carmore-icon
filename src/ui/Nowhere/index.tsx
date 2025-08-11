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
const Nowhere = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('NOWHERE');
  const titleText = ariaLabel || '위치 특정하기';

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
          'M11.1 1.9C11.1 1.40294 11.5029 1 12 1C12.4971 1 12.9 1.40294 12.9 1.9V4.1508C16.5438 4.56404 19.436 7.45617 19.8493 11.1H22.1C22.5971 11.1 23 11.5029 23 12C23 12.4971 22.5971 12.9 22.1 12.9H19.8493C19.4361 16.5439 16.5439 19.4361 12.9 19.8494V22.1C12.9 22.5971 12.4971 23 12 23C11.5029 23 11.1 22.5971 11.1 22.1V19.8494C7.45607 19.4362 4.56386 16.5439 4.15067 12.9H1.9C1.40294 12.9 1 12.4971 1 12C1 11.5029 1.40294 11.1 1.9 11.1H4.15069C4.56396 7.45615 7.45614 4.56401 11.1 4.1508V1.9ZM12.9 18.0342V15.9C12.9 15.4029 12.4971 15 12 15C11.5029 15 11.1 15.4029 11.1 15.9V18.0342C8.45146 17.6425 6.35751 15.5486 5.96589 12.9H8.1C8.59706 12.9 9 12.4971 9 12C9 11.5029 8.59706 11.1 8.1 11.1H5.96592C6.35761 8.45154 8.45152 6.35766 11.1 5.96602V8.1C11.1 8.59706 11.5029 9 12 9C12.4971 9 12.9 8.59706 12.9 8.1V5.96603C15.5485 6.35769 17.6423 8.45156 18.034 11.1H15.9C15.4029 11.1 15 11.5029 15 12C15 12.4971 15.4029 12.9 15.9 12.9H18.0341C17.6424 15.5485 15.5485 17.6425 12.9 18.0342Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Nowhere;
