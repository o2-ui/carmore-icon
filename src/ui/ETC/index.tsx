import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (ETC) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const ETC = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ETC');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ETCTitle');
  const titleText = ariaLabel || '확인사항';

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
          'M12 1C5.92913 1 1 5.92913 1 12C1 18.0709 5.92913 23 12 23C18.0709 23 23 18.0709 23 12C23 5.92913 18.0709 1 12 1ZM12 2.69231C17.1367 2.69231 21.3077 6.86328 21.3077 12C21.3077 17.1367 17.1367 21.3077 12 21.3077C6.86328 21.3077 2.69231 17.1367 2.69231 12C2.69231 6.86328 6.86328 2.69231 12 2.69231Z'
        }
        fill={'currentColor'}
      />
      <path d={'M7.5 12.6538L9.59716 14.4015C9.97402 14.7155 10.5307 14.6799 10.8645 14.3205L16.2692 8.5'} stroke={'currentColor'} strokeWidth={1.66154} strokeLinecap={'round'} />
    </svg>
  );
};

export default ETC;
