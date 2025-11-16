import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('닫기') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Close = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Close');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '닫기';

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
      <rect x={'0.00195312'} width={'24'} height={'24'} rx={'6'} fill={'currentColor'} fillOpacity={'0.1'} />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M17.1364 8.13649C17.4879 7.78502 17.4879 7.21517 17.1364 6.8637C16.7849 6.51223 16.2151 6.51223 15.8636 6.8637L12 10.7273L8.13637 6.8637C7.7849 6.51223 7.21505 6.51223 6.86358 6.8637C6.51211 7.21517 6.51211 7.78502 6.86358 8.13649L10.7272 12.0001L6.86363 15.8637C6.51216 16.2152 6.51216 16.785 6.86363 17.1365C7.2151 17.488 7.78495 17.488 8.13642 17.1365L12 13.2729L15.8636 17.1365C16.2151 17.488 16.7849 17.488 17.1364 17.1365C17.4878 16.785 17.4878 16.2152 17.1364 15.8637L13.2728 12.0001L17.1364 8.13649Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Close;
