import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (HotelCreditCard) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const HotelCreditCard = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('HotelCreditCard');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('HotelCreditCardTitle');
  const titleText = ariaLabel || '신용카드';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      role={iconRole}
      aria-labelledby={titleId}
      fill={'none'}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        d={
          'M16.6153 16.6152C16.1055 16.6152 15.6923 16.2019 15.6923 15.6921C15.6923 15.1823 16.1055 14.769 16.6153 14.769H18.4615C18.9713 14.769 19.3846 15.1823 19.3846 15.6921C19.3846 16.2019 18.9713 16.6152 18.4615 16.6152H16.6153Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M0.923096 7.61516C0.923096 5.57596 2.5762 3.92285 4.6154 3.92285H19.3846C21.4238 3.92285 23.0769 5.57595 23.0769 7.61516V16.3844C23.0769 18.4236 21.4238 20.0767 19.3846 20.0767H4.6154C2.57619 20.0767 0.923096 18.4236 0.923096 16.3844V7.61516ZM4.6154 5.58439H19.3846C20.5062 5.58439 21.4154 6.49359 21.4154 7.61516V8.49219H2.58463V7.61516C2.58463 6.4936 3.49384 5.58439 4.6154 5.58439ZM2.58463 10.1537V16.3844C2.58463 17.506 3.49384 18.4152 4.6154 18.4152H19.3846C20.5062 18.4152 21.4154 17.506 21.4154 16.3844V10.1537H2.58463Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default HotelCreditCard;
