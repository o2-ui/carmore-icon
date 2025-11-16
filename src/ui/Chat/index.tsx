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
const Chat = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Chat');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '채팅하기';

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
          'M18.6149 18.4226L15.9776 17.6294C15.7487 17.5606 15.5024 17.5866 15.2923 17.7018C14.1199 18.3446 12.7735 18.6901 11.3677 18.6901C7.17258 18.6901 3.80936 15.6222 3.80936 11.891C3.80936 8.15991 7.17258 5.09196 11.3677 5.09196C15.5629 5.09196 18.9261 8.15991 18.9261 11.891C18.9261 13.1182 18.5644 14.2973 17.8854 15.334C17.7244 15.5798 17.689 15.8892 17.7902 16.1661L18.6149 18.4226ZM19.8373 20.7108C20.5522 20.9258 21.2014 20.2177 20.9415 19.5065L19.6413 15.9488C20.3546 14.7132 20.7355 13.3277 20.7355 11.891C20.7355 7.09482 16.5206 3.25 11.3677 3.25C6.21486 3.25 2 7.09482 2 11.891C2 16.6873 6.21486 20.5321 11.3677 20.5321C12.9405 20.5321 14.4589 20.1738 15.8121 19.5003L19.8373 20.7108Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M8.625 11.925C8.625 12.5464 8.12132 13.05 7.5 13.05C6.87868 13.05 6.375 12.5464 6.375 11.925C6.375 11.3037 6.87868 10.8 7.5 10.8C8.12132 10.8 8.625 11.3037 8.625 11.925ZM12.625 11.925C12.625 12.5464 12.1213 13.05 11.5 13.05C10.8787 13.05 10.375 12.5464 10.375 11.925C10.375 11.3037 10.8787 10.8 11.5 10.8C12.1213 10.8 12.625 11.3037 12.625 11.925ZM15.5 13.05C16.1213 13.05 16.625 12.5464 16.625 11.925C16.625 11.3037 16.1213 10.8 15.5 10.8C14.8787 10.8 14.375 11.3037 14.375 11.925C14.375 12.5464 14.8787 13.05 15.5 13.05Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Chat;
