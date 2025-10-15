import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'default' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  state: StateType;
};

/**
 * @description SVG 아이콘 ('내 정보') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'default'] - 아이콘 강조효과 활성여부. (기본값: 'default')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const TabMypage = (props: Props) => {
  const { className, state = 'default', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isActive = state === 'active';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('TabMypage');
  const iconStateClass = isActive ? style['layout--active'] : style['layout-default'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('TabMypageTitle');
  const titleText = ariaLabel || '내 정보';

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
      <circle cx={'11.9999'} cy={'7.55556'} r={'5.55556'} fill={'currentColor'} />
      <path d={'M2 21.9999C2 17.7044 5.48223 14.2222 9.77777 14.2222H14.2222C18.5178 14.2222 22 17.7044 22 21.9999H2Z'} fill={'currentColor'} />
    </svg>
  );
};

export default TabMypage;
