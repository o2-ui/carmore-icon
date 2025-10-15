import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'default' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  state: StateType;
};

/**
 * @description SVG 아이콘 ('알림') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'default'] - 아이콘 강조효과 활성여부. (기본값: 'default')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const TabAlert = (props: Props) => {
  const { className, state = 'default', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isActive = state === 'active';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('TabAlert');
  const iconStateClass = isActive ? style['layout--active'] : style['layout-default'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('TabAlertTitle');
  const titleText = ariaLabel || '알림';

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
      {isActive && (
        <>
          <path
            d={
              'M12 1C11.3959 1 10.9062 1.49249 10.9062 2.1V3.2C10.9062 3.23052 10.9075 3.26075 10.9099 3.29064C7.80436 3.81281 5.4375 6.52842 5.4375 9.8V15.85C5.4375 16.1538 5.19266 16.4 4.89062 16.4C3.98453 16.4 3.25 17.1387 3.25 18.05C3.25 18.9613 3.98453 19.7 4.89062 19.7H19.1094C20.0155 19.7 20.75 18.9613 20.75 18.05C20.75 17.1387 20.0155 16.4 19.1094 16.4C18.8073 16.4 18.5625 16.1538 18.5625 15.85V9.8C18.5625 6.52842 16.1956 3.81281 13.0901 3.29064C13.0925 3.26075 13.0938 3.23052 13.0938 3.2V2.1C13.0938 1.49249 12.6041 1 12 1Z'
            }
            fill={'currentColor'}
          />
          <path d={'M9.8125 20.7998C9.8125 22.0148 10.7919 22.9998 12 22.9998C13.2081 22.9998 14.1875 22.0148 14.1875 20.7998H9.8125Z'} fill={'currentColor'} />
        </>
      )}
      {!isActive && (
        <>
          <path
            d={
              'M12 1C11.3959 1 10.9062 1.49249 10.9062 2.1V3.2C10.9062 3.23052 10.9075 3.26075 10.9099 3.29064C7.80436 3.81281 5.4375 6.52842 5.4375 9.8V15.85C5.4375 16.1538 5.19266 16.4 4.89062 16.4C3.98453 16.4 3.25 17.1387 3.25 18.05C3.25 18.9613 3.98453 19.7 4.89062 19.7H19.1094C20.0155 19.7 20.75 18.9613 20.75 18.05C20.75 17.1387 20.0155 16.4 19.1094 16.4C18.8073 16.4 18.5625 16.1538 18.5625 15.85V9.8C18.5625 6.52842 16.1956 3.81281 13.0901 3.29064C13.0925 3.26075 13.0938 3.23052 13.0938 3.2V2.1C13.0938 1.49249 12.6041 1 12 1Z'
            }
            fill={'currentColor'}
          />
          <path d={'M9.8125 20.7998C9.8125 22.0148 10.7919 22.9998 12 22.9998C13.2081 22.9998 14.1875 22.0148 14.1875 20.7998H9.8125Z'} fill={'currentColor'} />
        </>
      )}
    </svg>
  );
};

export default TabAlert;
