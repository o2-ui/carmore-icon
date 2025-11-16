import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Share = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Share');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '공유하기';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M11.0908 14.2112C11.0908 14.7072 11.4978 15.1092 12 15.1092C12.5021 15.1092 12.9091 14.7072 12.9091 14.2112L12.9091 7.06582L15.3978 9.52385C15.7529 9.87452 16.3286 9.87452 16.6836 9.52385C17.0387 9.17317 17.0387 8.60461 16.6836 8.25393L12.6428 4.26292C12.2878 3.91236 11.7121 3.91236 11.3571 4.26292L7.31627 8.25393C6.96121 8.60461 6.96121 9.17317 7.31627 9.52385C7.67133 9.87452 8.24702 9.87452 8.60209 9.52385L11.0908 7.06582L11.0908 14.2112Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M3.94674 11.4327C4.46961 11.4327 4.89349 11.8514 4.8935 12.3678L4.89354 17.4026C4.89354 17.5955 4.97112 17.7805 5.10921 17.9169C5.2473 18.0533 5.4346 18.1298 5.62989 18.1298H18.3701C18.5655 18.1298 18.7527 18.0533 18.8908 17.9169C19.0289 17.7805 19.1065 17.5955 19.1065 17.4026L19.1064 12.3678C19.1064 11.8514 19.5303 11.4327 20.0531 11.4327C20.5761 11.4327 20.9999 11.8514 20.9999 12.3678L21 17.4026C21 18.0914 20.7229 18.7521 20.2297 19.2392C19.7365 19.7263 19.0676 20 18.3701 20H5.62989C4.93242 20 4.26349 19.7263 3.7703 19.2392C3.27711 18.7521 3.00004 18.0914 3.00004 17.4026L3 12.3678C2.99999 11.8514 3.42387 11.4327 3.94674 11.4327Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Share;
