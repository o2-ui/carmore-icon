import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('결제수단') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const MethodCreditCard = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('MethodCreditCard');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '결제수단';

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
        d={
          'M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM5.96387 7.75L6.60352 10.0371H5.5V11.7432H7.08008L8.48047 16.75H10.293L11.7148 11.7432H12.2822L13.707 16.75H15.5195L16.9199 11.7432H18.5V10.0371H17.3965L18.0361 7.75H16.0049L15.4736 10.0371H13.4541L12.8691 7.75H11.1299L10.543 10.0371H8.52734L7.99512 7.75H5.96387ZM15.0771 11.7432L14.5488 14.0166H14.4717L13.8906 11.7432H15.0771ZM10.1045 11.7432L9.52441 14.0039H9.45117L8.9248 11.7432H10.1045Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default MethodCreditCard;
