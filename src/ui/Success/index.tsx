import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('성공') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Success = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Success');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('SuccessTitle');
  const titleText = ariaLabel || '성공';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 25 24'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path d={'M22.9168 12C22.9168 17.5228 18.2531 22 12.5002 22C6.7472 22 2.0835 17.5228 2.0835 12C2.0835 6.47715 6.7472 2 12.5002 2C18.2531 2 22.9168 6.47715 22.9168 12Z'} fill={'currentColor'} />
      <path
        d={
          'M17.1497 10.5995C17.5126 10.2508 17.5126 9.68545 17.1497 9.33673C16.7868 8.98802 16.1984 8.98802 15.8355 9.33673L11.7969 13.2194L9.6332 11.1368C9.27031 10.788 8.68194 10.788 8.31905 11.1368C7.95615 11.4855 7.95615 12.0509 8.31905 12.3996L11.1345 15.1085C11.1362 15.1102 11.138 15.1119 11.1398 15.1136C11.2312 15.2015 11.337 15.2672 11.4498 15.3108C11.7849 15.4402 12.1825 15.3745 12.454 15.1137C12.4567 15.1111 12.4594 15.1084 12.4621 15.1058L17.1497 10.5995Z'
        }
        fill={'white'}
      />
    </svg>
  );
};

export default Success;
