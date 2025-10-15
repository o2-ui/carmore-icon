import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'default' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  state: StateType;
};

/**
 * @description SVG 아이콘 ('렌트카') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'default'] - 아이콘 강조효과 활성여부. (기본값: 'default')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const TabDay = (props: Props) => {
  const { className, state = 'default', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isActive = state === 'active';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('TabDay');
  const iconStateClass = isActive ? style['layout--active'] : style['layout-default'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('TabDayTitle');
  const titleText = ariaLabel || '렌트카';

  return (
    <svg
      className={mergeClassNames(iconClass, iconStateClass, className)}
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
        clipRule={'evenodd'}
        d={
          'M3.20461 10.5L4.96748 4.88799C5.2273 4.06088 5.97923 3.5 6.82827 3.5H17.1719C18.0209 3.5 18.7729 4.06088 19.0327 4.88799L20.7954 10.4997C20.7956 9.94752 21.2331 9.49999 21.7727 9.49999C22.3125 9.49999 22.75 9.94771 22.75 10.5C22.75 11.0523 22.3125 11.5 21.7727 11.5L21.772 17.5004C21.772 18.0524 21.3349 18.5 20.7955 18.5004V19.5C20.7955 20.0523 20.3579 20.5 19.8182 20.5H18.8409C18.3012 20.5 17.8636 20.0523 17.8636 19.5V18.5004H6.13644V19.5C6.13644 20.0523 5.6989 20.5 5.15916 20.5H4.18189C3.64215 20.5 3.20461 20.0523 3.20461 19.5V18.5004C2.66488 18.5004 2.22654 18.0527 2.22654 17.5004V11.5004C2.22654 11.5002 2.22654 11.5005 2.22654 11.5004C1.68714 11.5 1.25 11.052 1.25 10.5C1.25 9.94771 1.68754 9.49999 2.22728 9.49999C2.76701 9.49999 3.20461 9.94775 3.20461 10.5C3.20461 10.5002 3.20461 10.4999 3.20461 10.5L20.7948 10.5004L20.7954 10.4997L3.20461 10.5ZM7.11292 13.0004C7.11292 13.8288 6.45661 14.5004 5.647 14.5004C4.8374 14.5004 4.18109 13.8288 4.18109 13.0004C4.18109 12.1719 4.8374 11.5004 5.647 11.5004C6.45661 11.5004 7.11292 12.1719 7.11292 13.0004ZM18.3516 14.5004C19.1612 14.5004 19.8175 13.8288 19.8175 13.0004C19.8175 12.1719 19.1612 11.5004 18.3516 11.5004C17.542 11.5004 16.8857 12.1719 16.8857 13.0004C16.8857 13.8288 17.542 14.5004 18.3516 14.5004ZM9.06747 13.5004H14.9311V14.5004H9.06747V13.5004Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default TabDay;
