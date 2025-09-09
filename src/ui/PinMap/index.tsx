import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const PinMap = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('PinMap');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('PinMapTitle');
  const titleText = ariaLabel || '위치보기';

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
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path d={'M13.8 8.4C13.8 9.14558 13.1956 9.75 12.45 9.75C11.7044 9.75 11.1 9.14558 11.1 8.4C11.1 7.65442 11.7044 7.05 12.45 7.05C13.1956 7.05 13.8 7.65442 13.8 8.4Z'} fill={'currentColor'} />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M18.7828 13.8H15.8985L16.0573 13.5965C17.0104 12.1661 17.85 10.3959 17.85 8.56998C17.85 5.40195 15.4251 3 12.45 3C9.47486 3 7.05 5.40195 7.05 8.56998C7.05 10.3959 7.88962 12.1661 8.84267 13.5965L9.00146 13.8H6.11725C5.37511 13.8 4.71082 14.2654 4.45024 14.968L3.11497 18.568C2.6785 19.7447 3.53891 21 4.78198 21H20.118C21.3611 21 22.2215 19.7447 21.785 18.568L20.4498 14.968C20.1892 14.2654 19.5249 13.8 18.7828 13.8ZM12.45 15.1208C12.6839 14.8863 12.9204 14.6463 13.1239 14.4295L14.5955 12.5439C15.4506 11.2472 16.05 9.85688 16.05 8.56998C16.05 6.36432 14.3996 4.8 12.45 4.8C10.5004 4.8 8.85 6.36432 8.85 8.56998C8.85 9.85687 9.44938 11.2471 10.3045 12.5439L11.7761 14.4295C11.9796 14.6463 12.2161 14.8863 12.45 15.1208ZM6.11725 15.6H10.4063C10.7473 15.9667 11.176 16.3933 11.522 16.7374L11.55 16.7653C11.6338 16.8487 11.9782 17.1927 12.0277 17.2424C12.1499 17.3474 12.2999 17.4 12.45 17.4C12.6001 17.4 12.7501 17.3474 12.8723 17.2424C12.9218 17.1927 13.2662 16.8487 13.35 16.7653L13.378 16.7374C13.724 16.3933 14.1527 15.9667 14.4937 15.6H18.7828L20.118 19.2H4.78198L6.11725 15.6Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default PinMap;
