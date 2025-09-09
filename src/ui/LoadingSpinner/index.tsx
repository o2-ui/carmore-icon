import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { mergeClassNames } from '@/util/string-helper';

type Props = SVGProps<SVGSVGElement> & {
  spin?: boolean;
};

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {boolean} [props.spin] - 회전 애니메이션 실행 여부. (기본값: true)
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role` 등의 a11y 관련 props 설정을 권장합니다.
 */
const LoadingSpinner = (props: Props) => {
  const { className, spin, width, height, role, 'aria-hidden': ariaHidden, ...rest } = props;

  const iconSpin: boolean = spin ?? true;
  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'status';
  const iconAriaHidden = ariaHidden ?? false;
  const loadingLabel = '로딩 중';

  return (
    <div role={iconRole}>
      <span className={style.srOnly}>{loadingLabel}</span>
      <svg
        className={mergeClassNames(style.layout, iconSpin && style.spinAnimation, className)}
        width={iconWidth}
        height={iconHeight}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox={'0 0 24 24'}
        aria-hidden={iconAriaHidden}
        {...rest}
      >
        <circle className={style['layout__background']} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} fill="none" />
        <circle className={style['layout__foreground']} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} strokeLinecap="butt" fill="none" strokeDasharray="47 15" strokeDashoffset={0} />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
