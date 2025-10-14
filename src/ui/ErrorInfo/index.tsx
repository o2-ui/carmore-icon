import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('오류알림') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const ErrorInfo = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ErrorInfo');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ErrorInfoTitle');
  const titleText = ariaLabel || '오류알림';

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
      <path d={'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z'} fill={'currentColor'} />
      <path
        d={
          'M11.1001 6.7999C11.1001 6.30285 11.503 5.8999 12.0001 5.8999C12.4972 5.8999 12.9001 6.30285 12.9001 6.7999V13.9999C12.9001 14.497 12.4972 14.8999 12.0001 14.8999C11.503 14.8999 11.1001 14.497 11.1001 13.9999V6.7999Z'
        }
        fill={'white'}
      />
      <circle cx={'12.0001'} cy={'16.7999'} r={'0.9'} fill={'white'} />
    </svg>
  );
};

export default ErrorInfo;
