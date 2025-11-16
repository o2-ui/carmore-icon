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
const Download = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Download');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '내려받기';

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
          'M11.9999 4C12.502 4 12.9091 4.40202 12.9091 4.89796V12.0433L15.3978 9.5853C15.7529 9.23463 16.3285 9.23463 16.6836 9.5853C17.0387 9.93598 17.0387 10.5045 16.6836 10.8552L12.6428 14.8462C12.2877 15.1968 11.7121 15.1968 11.357 14.8462L7.31626 10.8552C6.96121 10.5045 6.96121 9.93598 7.31626 9.5853C7.67131 9.23463 8.24697 9.23463 8.60203 9.5853L11.0907 12.0433V4.89796C11.0907 4.40202 11.4978 4 11.9999 4Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M4.8935 12.3678C4.89349 11.8514 4.46961 11.4327 3.94674 11.4328C3.42387 11.4328 2.99999 11.8514 3 12.3678L3.00004 17.4026C3.00004 18.0915 3.27711 18.7521 3.7703 19.2392C4.26349 19.7263 4.93242 20 5.62989 20H18.3701C19.0676 20 19.7365 19.7263 20.2297 19.2392C20.7229 18.7521 21 18.0915 21 17.4026L20.9999 12.3678C20.9999 11.8514 20.5761 11.4327 20.0531 11.4328C19.5303 11.4328 19.1064 11.8514 19.1064 12.3678L19.1065 17.4026C19.1065 17.5955 19.0289 17.7805 18.8908 17.9169C18.7527 18.0533 18.5655 18.1299 18.3701 18.1299H5.62989C5.4346 18.1299 5.2473 18.0533 5.10921 17.9169C4.97112 17.7805 4.89354 17.5955 4.89354 17.4026L4.8935 12.3678Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Download;
