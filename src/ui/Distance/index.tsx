import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Distance, 차간거리) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Distance = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Distance');

  /* a11y 기본 설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('DistanceTitle');
  const titleText = ariaLabel || '차간거리';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 24'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <rect x={'3.35254'} y={'15.1982'} width={'17.5904'} height={'2.05225'} fill={'currentColor'} />
      <path d={'M6.17383 18.1978L18.1637 18.1978V20.25H6.17383V18.1978Z'} fill={'currentColor'} />
      <path
        d={
          'M3 9.14817V11.3228C3 11.8372 3.4094 12.0544 3.84564 12.0544H5.70134C5.78188 12.9763 6.52013 13.7079 7.47651 13.7079C8.43289 13.7079 9.22483 12.9763 9.27852 12.0544H15.7114C15.7651 12.9763 16.557 13.7079 17.4866 13.7079C18.4161 13.7079 19.2081 12.9763 19.2617 12.0544H20.2114C20.8926 12.0544 21 11.7571 21 11.3228V9.23168C21 8.8776 20.9732 8.60702 20.7819 8.22955L18.9295 4.56507C18.7114 4.13081 18.1409 3.75 17.6208 3.75L10.4765 3.77672C9.98658 3.77672 9.49668 4.07402 9.19466 4.59179L7.47319 7.28086L4.06376 8.01242C3.19128 8.14607 3.02685 8.71395 3 9.14817ZM14.6404 5.08361H17.1776C17.587 5.11034 17.6211 5.09694 17.8393 5.55792L18.6849 7.27755H14.6438V5.08361H14.6404ZM9.43596 7.27421L10.5534 5.55792C10.7715 5.20384 10.9561 5.08361 11.5601 5.08361H12.2416H13.3046V7.27421H9.43596Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Distance;
