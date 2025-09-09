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
const OutLink = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('OutLink');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('OutLinkTitle');
  const titleText = ariaLabel || '외부 링크 접근하기';

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
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M4.99998 4.9001C4.94475 4.9001 4.89998 4.94487 4.89998 5.0001V19.0001C4.89998 19.0553 4.94475 19.1001 4.99998 19.1001H19C19.0552 19.1001 19.1 19.0553 19.1 19.0001V14.9C19.1 14.4029 19.5029 14 20 14C20.497 14 20.9 14.4029 20.9 14.9V19.0001C20.9 20.0494 20.0493 20.9001 19 20.9001H4.99998C3.95063 20.9001 3.09998 20.0494 3.09998 19.0001V5.0001C3.09998 3.95076 3.95063 3.1001 4.99998 3.1001H9.1C9.59706 3.1001 10 3.50304 10 4.0001C10 4.49715 9.59706 4.9001 9.1 4.9001H4.99998Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M13.7231 4.9001C13.226 4.9001 12.8231 4.49715 12.8231 4.0001C12.8231 3.50304 13.226 3.1001 13.7231 3.1001H20C20.497 3.1001 20.9 3.50304 20.9 4.0001V10.277C20.9 10.7741 20.497 11.177 20 11.177C19.5029 11.177 19.1 10.7741 19.1 10.277V6.17289L12.6364 12.6365C12.2849 12.988 11.7151 12.988 11.3636 12.6365C11.0121 12.285 11.0121 11.7152 11.3636 11.3637L17.8272 4.9001H13.7231Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default OutLink;
