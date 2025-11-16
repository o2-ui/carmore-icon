import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

type StateType = 'on' | 'off';

type Props = SVGProps<SVGSVGElement> & {
  state?: StateType;
};

/**
 * @description SVG 아이콘 ('다국어 지원') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {StateType} [props.state = 'off'] - 아이콘 활성여부. (기본값: 'off')
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Foreigner = (props: Props) => {
  const { className, state = 'off', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const isOn = state === 'on';

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Foreigner');
  const iconStateClass = isOn ? style['layout--on'] : style['layout--off'];

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '다국어 지원';

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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M11.9689 22C11.9792 22 11.9896 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.4869 6.41906 21.9417 11.8923 21.9994C11.9092 21.9999 11.9262 22.0001 11.9433 22.0001C11.9519 22.0001 11.9604 22.0001 11.9689 22ZM9.63444 4.00647C7.39237 4.66895 5.54405 6.24905 4.5244 8.31186H8.40944C8.56448 7.23274 8.78489 6.25061 9.05874 5.41051C9.22526 4.89967 9.41668 4.42526 9.63444 4.00647ZM8.22889 9.97783H3.91299C3.75163 10.6253 3.66597 11.3026 3.66597 12C3.66597 12.7639 3.76875 13.5038 3.96123 14.2066H8.22947C8.17792 13.5233 8.15093 12.8142 8.15093 12.0883C8.15093 11.3653 8.17771 10.6588 8.22889 9.97783ZM9.90049 14.2066C9.84609 13.5312 9.8169 12.8217 9.8169 12.0883C9.8169 11.3578 9.84586 10.651 9.89987 9.97783H13.9868C14.0408 10.651 14.0698 11.3578 14.0698 12.0883C14.0698 12.8217 14.0406 13.5312 13.9862 14.2066H9.90049ZM8.41055 15.8726H4.61845C5.6388 17.8135 7.40223 19.3027 9.53053 19.9621C9.35522 19.5965 9.19824 19.1941 9.05874 18.7662C8.78554 17.9281 8.56553 16.9486 8.41055 15.8726ZM11.9345 20.3338C11.8842 20.3298 11.7153 20.2879 11.4512 19.9452C11.1775 19.5901 10.895 19.024 10.6427 18.2499C10.4214 17.5711 10.2347 16.768 10.0951 15.8726H13.7916C13.652 16.768 13.4653 17.5711 13.244 18.2499C12.9917 19.024 12.7092 19.5901 12.4355 19.9452C12.1688 20.2913 11.9991 20.3306 11.9507 20.3339C11.9453 20.3339 11.9399 20.3338 11.9345 20.3338ZM14.3369 20.0019C14.52 19.6259 14.6834 19.2098 14.828 18.7662C15.1011 17.9281 15.3212 16.9486 15.4761 15.8726H19.3816C18.3401 17.8536 16.5245 19.3641 14.3369 20.0019ZM15.6572 14.2066H20.0388C20.2313 13.5038 20.334 12.7639 20.334 12C20.334 11.3026 20.2484 10.6253 20.087 9.97783H15.6578C15.709 10.6588 15.7358 11.3653 15.7358 12.0883C15.7358 12.8142 15.7088 13.5233 15.6572 14.2066ZM15.4773 8.31186H19.4756C18.4358 6.2083 16.5343 4.60672 14.2322 3.96829C14.4583 4.39635 14.6564 4.88408 14.828 5.41051C15.1018 6.25061 15.3222 7.23274 15.4773 8.31186ZM13.7928 8.31186H10.0939C10.2336 7.41333 10.4208 6.60753 10.6427 5.92683C10.895 5.15274 11.1775 4.58662 11.4512 4.23149C11.7338 3.86478 11.9075 3.84254 11.9433 3.84254C11.9792 3.84254 12.1529 3.86478 12.4355 4.23149C12.7092 4.58662 12.9917 5.15274 13.244 5.92683C13.4659 6.60753 13.653 7.41333 13.7928 8.31186Z'
        }
        fill={'currentColor'}
      />
      {!isOn && <path className={style.forbidden} d={'M2 2L22 22'} strokeWidth={2} strokeLinecap={'round'} strokeLinejoin={'round'} />}
    </svg>
  );
};

export default Foreigner;
