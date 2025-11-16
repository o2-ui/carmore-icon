import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (Location, 위치)을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Location = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Location');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('LocationTitle');
  const titleText = ariaLabel || '위치';

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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M12 22C12 22 18.7667 14.381 19 9.41176C19 5.31836 15.866 2 12 2C8.13401 2 5 5.31836 5 9.41176C5.23333 14.381 12 22 12 22ZM12.0001 11.9999C13.5464 11.9999 14.8001 10.7207 14.8001 9.14279C14.8001 7.56483 13.5464 6.28564 12.0001 6.28564C10.4537 6.28564 9.20005 7.56483 9.20005 9.14279C9.20005 10.7207 10.4537 11.9999 12.0001 11.9999Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Location;
