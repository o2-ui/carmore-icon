import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (세르비아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagRS = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagRS');

  const maskId = getElementId('CountryFlagRSMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '세르비아';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox="0 0 24 16"
      width={iconWidth}
      height={iconHeight}
      fill="none"
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <mask id={maskId} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill="white" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3846H0.923096V0.615234Z'} fill={'#0052B4'} />
        <path d={'M0.923096 0.615234H23.0769V5.53819H0.923096V0.615234Z'} fill={'#D80027'} />
        <path d={'M0.923096 10.4609H23.0769V15.3839H0.923096V10.4609Z'} fill={'white'} />
        <path d={'M6.52509 4.78906V8.47283C6.52509 10.5683 9.2626 11.2103 9.2626 11.2103C9.2626 11.2103 12 10.5682 12 8.47283V4.78906H6.52509Z'} fill={'#D80027'} />
        <path
          d={
            'M7.65727 5.43127H10.8679V4.147L10.2257 4.46806L9.26252 3.50488L8.29939 4.46806L7.65727 4.147V5.43127ZM11.3579 8.98575L9.271 6.89883L7.18408 8.98575L7.86518 9.66681L9.271 8.26099L10.6768 9.66681L11.3579 8.98575Z'
          }
          fill={'#FFDA44'}
        />
        <path
          d={
            'M11.3579 7.03633H10.3842C10.4409 6.93887 10.4708 6.82812 10.4708 6.71536C10.4708 6.36072 10.1832 6.07324 9.82865 6.07324C9.58362 6.07324 9.37082 6.21049 9.26256 6.4123C9.1543 6.21054 8.94146 6.07324 8.69647 6.07324C8.34188 6.07324 8.05436 6.36072 8.05436 6.71536C8.05436 6.83244 8.0862 6.94187 8.14094 7.03633H7.18408C7.18408 7.39096 7.49298 7.67844 7.84757 7.67844H7.8262C7.8262 8.03308 8.11368 8.32056 8.46831 8.32056C8.46831 8.63456 8.69379 8.89543 8.99161 8.95125L8.48562 10.0936C8.735 10.1951 9.00169 10.2471 9.27091 10.2469C9.54013 10.2471 9.80683 10.195 10.0562 10.0936L9.55022 8.95125C9.84804 8.89543 10.0735 8.63456 10.0735 8.32056C10.4281 8.32056 10.7156 8.03308 10.7156 7.67844H10.6943C11.049 7.67844 11.3579 7.39096 11.3579 7.03633Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagRS;
