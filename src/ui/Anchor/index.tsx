import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('닻') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Anchor = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Anchor');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('AnchorTitle');
  const titleText = ariaLabel || '닻';

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
      fill={'none'}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        d={
          'M17.2767 14.7924C17.1537 14.8848 17.1765 15.0757 17.318 15.1363L18.5444 15.6619C18.654 15.7089 18.6989 15.8404 18.6306 15.9382C17.4795 17.5851 13.5 19.3894 13.5 16.5L13.0198 11.2181C13.0092 11.101 13.1014 11 13.219 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H13.2C13.0895 9 13 8.91046 13 8.8V7.82C14.16 7.4 15 6.3 15 5C15 3.35 13.65 2 12 2C10.35 2 9 3.35 9 5C9 6.3 9.84 7.4 11 7.82V8.8C11 8.91046 10.9105 9 10.8 9H9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H10.781C10.8986 11 10.9908 11.101 10.9802 11.2181L10.5 16.5C10.5 19.3894 6.52053 17.5851 5.36939 15.9382C5.30105 15.8404 5.34596 15.7089 5.4556 15.6619L6.68204 15.1363C6.82346 15.0757 6.84634 14.8848 6.72326 14.7924L3.32 12.24C3.18815 12.1411 3 12.2352 3 12.4V15C3 18.88 7.92 22 12 22C16.08 22 21 18.88 21 15V12.4C21 12.2352 20.8118 12.1411 20.68 12.24L17.2767 14.7924ZM12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6C11.45 6 11 5.55 11 5C11 4.45 11.45 4 12 4Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Anchor;
