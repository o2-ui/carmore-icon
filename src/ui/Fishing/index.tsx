import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'on' | 'off';

type Props = SVGProps<SVGSVGElement> & {
  state?: StateType;
};

/**
 * @description SVG 아이콘 ('낚시') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'off'] - 아이콘 활성여부. (기본값: 'off')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Fishing = (props: Props) => {
  const { className, state = 'off', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isOn = state === 'on';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Fishing');
  const iconStateClass = isOn ? style['layout--on'] : style['layout--off'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('FishingTitle');
  const titleText = ariaLabel || '낚시';

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
        d={
          'M18.5 6C18.4988 6.885 18.2035 7.74449 17.6604 8.44326C17.1173 9.14203 16.3573 9.64042 15.5 9.86V17C15.5 18.3261 14.9732 19.5979 14.0355 20.5355C13.0979 21.4732 11.8261 22 10.5 22C9.17392 22 7.90215 21.4732 6.96447 20.5355C6.02678 19.5979 5.5 18.3261 5.5 17V13.1466C5.5 12.71 5.98314 12.4831 6.28021 12.7802L9.6336 16.1336C9.94282 16.4428 9.73965 17 9.31768 17H7.5C7.5 17.7956 7.81607 18.5587 8.37868 19.1213C8.94129 19.6839 9.70435 20 10.5 20C11.2956 20 12.0587 19.6839 12.6213 19.1213C13.1839 18.5587 13.5 17.7956 13.5 17V9.86C11.73 9.4 10.5 7.8 10.5 5.97C10.5 3.76 12.3 2 14.5 2C16.72 2 18.5 3.79 18.5 6ZM14.5 8C15.0304 8 15.5391 7.78929 15.9142 7.41421C16.2893 7.03914 16.5 6.53043 16.5 6C16.5 5.46957 16.2893 4.96086 15.9142 4.58579C15.5391 4.21071 15.0304 4 14.5 4C13.9696 4 13.4609 4.21071 13.0858 4.58579C12.7107 4.96086 12.5 5.46957 12.5 6C12.5 6.53043 12.7107 7.03914 13.0858 7.41421C13.4609 7.78929 13.9696 8 14.5 8Z'
        }
        fill={'currentColor'}
      />
      <path d={'M12.814 4.90673C12.814 4.64785 13.0238 4.43799 13.2827 4.43799H13.8154C14.0743 4.43799 14.2842 4.64785 14.2842 4.90673V6.28479H12.814V4.90673Z'} fill={'white'} />
      {!isOn && <path className={style.forbidden} d={'M2 2L22 22'} strokeWidth={2} strokeLinecap={'round'} strokeLinejoin={'round'} />}
    </svg>
  );
};

export default Fishing;
