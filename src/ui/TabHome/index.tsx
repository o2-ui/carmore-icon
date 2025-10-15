import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'default' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  state: StateType;
};

/**
 * @description SVG 아이콘 ('집') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'default'] - 아이콘 강조효과 활성여부. (기본값: 'default')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const TabHome = (props: Props) => {
  const { className, state = 'default', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isActive = state === 'active';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('TabHome');
  const iconStateClass = isActive ? style['layout--active'] : style['layout-default'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('TabHomeTitle');
  const titleText = ariaLabel || '집';

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
          'M3.45857 10.1282C3.00787 10.5445 2.75 11.1411 2.75 11.7676V19.5565C2.75 20.7679 3.69518 21.75 4.86111 21.75H9.02778C9.64143 21.75 10.1389 21.2525 10.1389 20.6389V16.2663C10.1389 15.0549 11.0841 14.0728 12.25 14.0728C13.4159 14.0728 14.3611 15.0549 14.3611 16.2663V20.6389C14.3611 21.2525 14.8586 21.75 15.4722 21.75H19.6389C20.8048 21.75 21.75 20.7679 21.75 19.5565V11.7676C21.75 11.1411 21.4921 10.5445 21.0414 10.1282L13.6525 3.30405C12.8527 2.56532 11.6473 2.56532 10.8475 3.30405L3.45857 10.1282Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default TabHome;
