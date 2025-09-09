import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagNZ = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagNZ');

  const maskId = getElementId('CountryFlagNZMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagNZTitle');
  const titleText = ariaLabel || '뉴질랜드';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#D9D9D9'} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3846H0.923096V0.615234Z'} fill={'#0052B4'} />
        <path
          d={
            'M19.3253 7.03736L19.4719 7.48857H19.9463L19.5625 7.7674L19.7091 8.21857L19.3253 7.93974L18.9415 8.21857L19.0881 7.7674L18.7043 7.48857H19.1786L19.3253 7.03736ZM17.6294 10.2857L17.8494 10.9625H18.5609L17.9852 11.3808L18.2051 12.0575L17.6294 11.6392L17.0537 12.0575L17.2737 11.3808L16.698 10.9625H17.4095L17.6294 10.2857ZM17.6935 4.97021L17.8768 5.53427H18.4698L17.99 5.88276L18.1732 6.44674L17.6935 6.09816L17.2137 6.44674L17.397 5.88276L16.9173 5.53427H17.5102L17.6935 4.97021ZM16.0617 7.01772L16.2816 7.69449H16.9932L16.4175 8.11273L16.6375 8.78951L16.0617 8.37127L15.4861 8.78951L15.7059 8.11273L15.1302 7.69449H15.8418L16.0617 7.01772Z'
          }
          fill={'#D80027'}
        />
        <path
          d={
            'M12 0.615234V1.93772L10.0452 3.02326H12V5.59168H9.44225L12 7.0129V7.9997H10.8452L7.66557 6.23319V7.9997H5.25755V5.89798L1.47456 7.9997H0.923096V6.67769L2.87748 5.59168H0.923096V3.02326H3.48044L0.923096 1.60255V0.615234H2.07752L5.25755 2.38226V0.615234H7.66557V2.71695L11.4486 0.615234H12Z'
          }
          fill={'white'}
        />
        <path d={'M7.15386 0.615234H5.76925V3.61527H0.923096V4.99988H5.76925V7.99992H7.15386V4.99988H12V3.61527H7.15386V0.615234Z'} fill={'#D80027'} />
        <path d={'M7.66541 5.59229L11.9999 8.00039V7.31938L8.89109 5.59229H7.66541Z'} fill={'#0052B4'} />
        <path d={'M7.66541 5.59229L11.9999 8.00039V7.31938L8.89109 5.59229H7.66541Z'} fill={'white'} />
        <path d={'M7.66557 5.59229L12 8.00039V7.31938L8.89125 5.59229H7.66557ZM4.03182 5.59229L0.923096 7.31938V8.00039L5.25755 5.59229H4.03182Z'} fill={'#D80027'} />
        <path d={'M5.25755 3.0233L0.923096 0.615234V1.29621L4.03186 3.0233H5.25755Z'} fill={'#0052B4'} />
        <path d={'M5.25755 3.0233L0.923096 0.615234V1.29621L4.03186 3.0233H5.25755Z'} fill={'white'} />
        <path d={'M5.25755 3.0233L0.923096 0.615234V1.29621L4.03186 3.0233H5.25755ZM8.8913 3.0233L12 1.29621V0.615234L7.66557 3.0233H8.8913Z'} fill={'#D80027'} />
      </g>
    </svg>
  );
};

export default CountryFlagNZ;
