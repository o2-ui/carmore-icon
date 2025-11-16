import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('버스') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Bus = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Bus');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '버스';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      fill={'none'}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M6.10352 2C4.72086 2 3.6 3.11197 3.6 4.48365V17.8497C3.6 18.9352 4.3019 19.858 5.28 20.1958V21.1667C5.28 21.6269 5.65608 22 6.12 22H7.8C8.26392 22 8.64 21.6269 8.64 21.1667V20.3333L15.36 20.3313V21.1667C15.36 21.6269 15.7361 22 16.2 22H17.88C18.3439 22 18.72 21.6269 18.72 21.1667V20.1958C19.6981 19.858 20.4 18.9352 20.4 17.8497V4.48365C20.4 3.11197 19.2791 2 17.8965 2H6.10352ZM6.204 6.16667C5.92565 6.16667 5.7 6.39052 5.7 6.66667V13.1667C5.7 13.4428 5.92565 13.6667 6.204 13.6667H17.796C18.0744 13.6667 18.3 13.4428 18.3 13.1667V6.66667C18.3 6.39052 18.0744 6.16667 17.796 6.16667H6.204ZM7.62388 16.6299C7.62388 15.9856 7.11617 15.4633 6.48988 15.4633C5.86359 15.4633 5.35588 15.9856 5.35588 16.6299C5.35588 17.2743 5.86359 17.7966 6.48988 17.7966C7.11617 17.7966 7.62388 17.2743 7.62388 16.6299ZM17.586 15.4633C16.9597 15.4633 16.452 15.9856 16.452 16.6299C16.452 17.2743 16.9597 17.7966 17.586 17.7966C18.2123 17.7966 18.72 17.2743 18.72 16.6299C18.72 15.9856 18.2123 15.4633 17.586 15.4633ZM22.08 5.33333H20.82V10.3333H22.08C22.312 10.3333 22.5 10.1468 22.5 9.91667V5.75C22.5 5.51988 22.312 5.33333 22.08 5.33333ZM1.5 5.75C1.5 5.51988 1.68804 5.33333 1.92 5.33333H3.18V10.3333H1.92C1.68804 10.3333 1.5 10.1468 1.5 9.91667V5.75ZM7.8 3.66667C7.33608 3.66667 6.96 4.03976 6.96 4.5C6.96 4.96024 7.33608 5.33333 7.8 5.33333H16.2C16.6639 5.33333 17.04 4.96024 17.04 4.5C17.04 4.03976 16.6639 3.66667 16.2 3.66667H7.8Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Bus;
