import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

type StateType = 'on' | 'off';

type Props = SVGProps<SVGSVGElement> & {
  state?: StateType;
};

/**
 * @description SVG 아이콘 ('군인') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'off'] - 아이콘 활성여부. (기본값: 'off')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Solider = (props: Props) => {
  const { className, state = 'off', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isOn = state === 'on';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Solider');
  const iconStateClass = isOn ? style['layout--on'] : style['layout--off'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '군인';

  return (
    <svg
      className={mergeClassNames(iconClass, iconStateClass, className)}
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
          'M17 14C19.2092 14 20.9998 15.7912 21 18V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V18C18.9998 16.8954 18.1043 16 17 16H7C5.89543 16 5 16.8954 5 18V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V18C3 15.7909 4.79086 14 7 14H17ZM12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3ZM12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M13.4839 2.14634C12.415 1.96424 11.5453 1.95218 10.7751 2.10964C9.99446 2.26922 9.38162 2.58971 8.81773 2.97398C8.21257 3.38636 7.64394 3.97613 7.18673 4.58366C6.73089 5.18937 6.33941 5.87446 6.13224 6.50974C5.88448 7.26951 5.98483 8.09977 6.43355 8.71133C6.91762 9.37106 7.75665 9.68855 8.65281 9.38321C9.45108 9.11122 9.85209 8.46821 10.0667 8.08056C10.0667 8.08056 12.1303 7.49617 13.4839 7.5C14.8153 7.50377 16.8434 8.08056 16.8434 8.08056V7.21407C17.0618 6.8847 17.2495 6.38822 17.2495 5.7832C17.2495 5.41883 17.1267 5.04111 16.9708 4.71582C16.8062 4.37226 16.5685 4.01143 16.2614 3.67138C15.6453 2.98911 14.7176 2.35652 13.4839 2.14634Z'
        }
        fill={'currentColor'}
      />
      <path d={'M12.814 4.90673C12.814 4.64785 13.0238 4.43799 13.2827 4.43799H13.8154C14.0743 4.43799 14.2842 4.64785 14.2842 4.90673V6.28479H12.814V4.90673Z'} fill={'white'} />
      {!isOn && <path className={style.forbidden} d={'M2 2L22 22'} strokeWidth={2} strokeLinecap={'round'} strokeLinejoin={'round'} />}
    </svg>
  );
};

export default Solider;
