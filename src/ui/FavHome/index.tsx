import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'default' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  state?: StateType;
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
const FavHome = (props: Props) => {
  const { className, state = 'default', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isActive = state === 'active';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('FavHome');
  const iconStateClass = isActive ? style['layout--active'] : style['layout--default'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('FavHomeTitle');
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

      {!isActive && (
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={
            'M15.8142 21.75C14.8201 21.75 14.0142 20.9441 14.0142 19.95V15.1793H10.1249V19.95C10.1249 20.9441 9.31901 21.75 8.3249 21.75H6.16637C4.20329 21.75 2.69971 20.1269 2.69971 18.2347V11.4832C2.69971 10.5383 3.07547 9.62354 3.75695 8.95556M17.833 19.95C18.7535 19.95 19.4997 19.182 19.4997 18.2347V11.4832C19.4997 11.0137 19.3128 10.5648 18.9825 10.241L13.1491 4.5232C12.5055 3.89227 11.494 3.89227 10.8503 4.5232L5.01695 10.241C4.68665 10.5648 4.49971 11.0137 4.49971 11.4832V18.2347C4.49971 19.182 5.2459 19.95 6.16637 19.95H8.3249V14.8793C8.3249 14.0509 8.99647 13.3793 9.8249 13.3793H14.3142C15.1426 13.3793 15.8142 14.0509 15.8142 14.8793V19.95H17.833ZM3.75695 8.95556L9.59028 3.23774C10.9339 1.92075 13.0655 1.92075 14.4091 3.23774L20.2425 8.95556C20.9239 9.62354 21.2997 10.5383 21.2997 11.4832V18.2347C21.2997 20.1269 19.7961 21.75 17.833 21.75H15.8142'
          }
          fill={'currentColor'}
        />
      )}
      {isActive && (
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={
            'M3 11.0347C3 10.4798 3.22433 9.94929 3.62069 9.56666L10.6207 2.80924C11.3931 2.06359 12.6069 2.06359 13.3793 2.80923L20.3793 9.56666C20.7757 9.94928 21 10.4798 21 11.0347V19.7228C21 20.8424 20.1046 21.75 19 21.75H15.5C15.2239 21.75 15 21.5261 15 21.25V15.75C15 14.9216 14.3284 14.25 13.5 14.25H10.5C9.67157 14.25 9 14.9216 9 15.75V21.25C9 21.5261 8.77614 21.75 8.5 21.75H5C3.89543 21.75 3 20.8424 3 19.7228V11.0347Z'
          }
          fill={'currentColor'}
        />
      )}
    </svg>
  );
};

export default FavHome;
