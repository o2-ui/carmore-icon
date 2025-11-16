import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (엄지척) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const ThumbUp = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ThumbUp');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '엄지척';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 24'}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M17.8432 22.4998H4.83252C3.26816 22.4998 2 21.2483 2 19.7044V13.1817C2 11.6378 3.26816 10.3863 4.83252 10.3863H6.57936L10.1069 2.55337C10.2584 2.21686 10.5965 2 10.9697 2C13.0555 2 14.7463 3.66874 14.7463 5.72724V8.52268L19.1355 8.52273C19.9665 8.51344 20.7597 8.86478 21.305 9.48368C21.8503 10.1026 22.0927 10.9266 21.9678 11.7389L20.6651 20.1236C20.4533 21.5019 19.245 22.5155 17.8432 22.4998ZM8.13708 20.6362L17.8539 20.6361C18.3247 20.6414 18.7274 20.3035 18.7983 19.8426L20.101 11.4577C20.1426 11.1874 20.0618 10.9127 19.88 10.7064C19.6982 10.5001 19.4338 10.383 19.1462 10.3861H13.8021C13.2807 10.3861 12.858 9.96896 12.858 9.45433V5.72709C12.858 4.89539 12.3059 4.19094 11.5437 3.95116L8.13708 11.5157V20.6362ZM4.78536 12.25H6.24883V20.6363H4.78536C4.26391 20.6363 3.84119 20.2191 3.84119 19.7045V13.1818C3.84119 12.6672 4.26391 12.25 4.78536 12.25Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ThumbUp;
