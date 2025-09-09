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
const CopyLink = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CopyLink');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CopyLinkTitle');
  const titleText = ariaLabel || '주소 복사하기';

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
          'M17.9042 6.09582C16.4495 4.64111 14.091 4.64111 12.6363 6.09582L11.1337 7.59842C10.7822 7.94989 10.2124 7.94989 9.8609 7.59842C9.50942 7.24695 9.50942 6.6771 9.8609 6.32563L11.3635 4.82302C13.5211 2.66538 17.0194 2.66538 19.177 4.82302C21.3347 6.98067 21.3347 10.4789 19.177 12.6366L17.6744 14.1392C17.323 14.4906 16.7531 14.4906 16.4016 14.1392C16.0502 13.7877 16.0502 13.2178 16.4016 12.8664L17.9042 11.3638C19.3589 9.90906 19.3589 7.55052 17.9042 6.09582ZM15.1112 8.88889C15.4626 9.24036 15.4626 9.81021 15.1112 10.1617L10.1614 15.1114C9.80995 15.4629 9.2401 15.4629 8.88863 15.1114C8.53715 14.76 8.53715 14.1901 8.88863 13.8386L13.8384 8.88889C14.1898 8.53742 14.7597 8.53742 15.1112 8.88889ZM11.3637 17.9044C9.90897 19.3591 7.55043 19.3591 6.09573 17.9044C4.64102 16.4497 4.64102 14.0912 6.09573 12.6365L7.59833 11.1338C7.9498 10.7824 7.9498 10.2125 7.59833 9.86106C7.24686 9.50959 6.67701 9.50959 6.32554 9.86106L4.82294 11.3637C2.66529 13.5213 2.66529 17.0195 4.82293 19.1772C6.98058 21.3348 10.4788 21.3348 12.6365 19.1772L14.1391 17.6746C14.4905 17.3231 14.4905 16.7533 14.1391 16.4018C13.7876 16.0503 13.2177 16.0503 12.8663 16.4018L11.3637 17.9044Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default CopyLink;
