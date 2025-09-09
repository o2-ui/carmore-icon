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
const Reply = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Reply');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ReplyTitle');
  const titleText = ariaLabel || '응답하기';

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
        clip-rule={'evenodd'}
        d={
          'M19.2 6.28396L4.8 6.28396V15.903H15.2672C16.1392 15.903 16.9815 16.2167 17.6378 16.7858L19.2 18.1406V6.28396ZM19.2 4.5C20.1941 4.5 21 5.29871 21 6.28396V20.1063C21 20.8726 20.0893 21.2822 19.5073 20.7776L16.4525 18.1284C16.1243 17.8438 15.7032 17.687 15.2672 17.687H4.8C3.80589 17.687 3 16.8883 3 15.903V6.28396C3 5.2987 3.80589 4.5 4.8 4.5H19.2Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Reply;
