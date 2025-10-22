import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type StateType = 'default' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  state?: StateType;
};

/**
 * @description SVG 아이콘 ('호텔 탭') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'default'] - 아이콘 강조효과 활성여부. (기본값: 'default')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const TabHotel = (props: Props) => {
  const { className, state = 'default', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isActive = state === 'active';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('TabHotel');
  const iconStateClass = isActive ? style['layout--active'] : style['layout--default'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('TabHotelTitle');
  const titleText = ariaLabel || '호텔 탭';

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
          'M5.42676 2.8C5.42676 2.63431 5.56107 2.5 5.72676 2.5H18.2728C18.4385 2.5 18.5728 2.63431 18.5728 2.8V4.2357C18.5728 4.40139 18.4385 4.5357 18.2728 4.5357H5.72676C5.56107 4.5357 5.42676 4.40139 5.42676 4.2357V2.8Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M18.1045 5.21436C18.3618 5.21436 18.573 5.44205 18.5732 5.73193V21.1001C18.5732 21.321 18.3937 21.4995 18.1729 21.4995H13.6562C13.4906 21.4995 13.3564 21.3654 13.3564 21.1997V17.0503C13.3564 16.8847 13.2222 16.7507 13.0566 16.7505H11.0479C10.8822 16.7505 10.748 16.8846 10.748 17.0503V21.1997C10.748 21.3653 10.6138 21.4994 10.4482 21.4995H5.83203C5.61116 21.4995 5.4317 21.321 5.43164 21.1001V5.73193C5.43187 5.44219 5.64224 5.21458 5.89941 5.21436H18.1045ZM8.8916 11.9995C8.83643 11.9996 8.79199 12.0449 8.79199 12.1001V13.9351C8.79199 13.9902 8.83643 14.0356 8.8916 14.0356H10.6484C10.7035 14.0354 10.748 13.9901 10.748 13.9351V12.1001C10.748 12.045 10.7035 11.9998 10.6484 11.9995H8.8916ZM13.4561 11.9995C13.401 11.9997 13.3564 12.045 13.3564 12.1001V13.9351C13.3564 13.9902 13.401 14.0354 13.4561 14.0356H15.2129C15.268 14.0355 15.3125 13.9903 15.3125 13.9351V12.1001C15.3125 12.0449 15.268 11.9996 15.2129 11.9995H13.4561ZM8.8916 7.92822C8.83662 7.92835 8.7922 7.97287 8.79199 8.02783V9.86377C8.79199 9.91892 8.83649 9.96422 8.8916 9.96436H10.6484C10.7035 9.96417 10.748 9.91888 10.748 9.86377V8.02783C10.7478 7.9729 10.7034 7.92841 10.6484 7.92822H8.8916ZM13.4561 7.92822C13.4011 7.92844 13.3567 7.97291 13.3564 8.02783V9.86377C13.3564 9.91887 13.401 9.96414 13.4561 9.96436H15.2129C15.268 9.96425 15.3125 9.91893 15.3125 9.86377V8.02783C15.3123 7.97285 15.2679 7.92833 15.2129 7.92822H13.4561Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M19.2191 9.09493V21.1997C19.2191 21.3654 19.3534 21.4997 19.5191 21.4997H21.5C21.7761 21.4997 22 21.2759 22 20.9997V11.1163C22 10.8831 21.9253 10.6731 21.8132 10.5798L19.7088 8.8625C19.5129 8.7026 19.2191 8.84202 19.2191 9.09493Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M4.78088 9.09493V21.1997C4.78088 21.3654 4.64657 21.4997 4.48088 21.4997H2.5C2.22386 21.4997 2 21.2759 2 20.9997V11.1163C2 10.8831 2.07474 10.6731 2.18684 10.5798L4.2912 8.8625C4.48715 8.7026 4.78088 8.84202 4.78088 9.09493Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default TabHotel;
