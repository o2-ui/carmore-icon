import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('추가정보') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const MoreInfo = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('MoreInfo');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('MoreInfoTitle');
  const titleText = ariaLabel || '추가정보';

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
        d={
          'M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 9.52539C11.503 9.52539 11.0997 9.92784 11.0996 10.4248V16.9502C11.0997 17.4472 11.503 17.8496 12 17.8496C12.497 17.8496 12.9003 17.4472 12.9004 16.9502V10.4248C12.9003 9.92784 12.497 9.52539 12 9.52539ZM12 6.15039C11.3787 6.15039 10.875 6.65407 10.875 7.27539C10.8752 7.89653 11.3788 8.40039 12 8.40039C12.6212 8.40039 13.1248 7.89653 13.125 7.27539C13.125 6.65407 12.6213 6.15039 12 6.15039Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default MoreInfo;
