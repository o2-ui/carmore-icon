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
const CountryFlagHR = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagHR');

  const maskId = getElementId('CountryFlagHRMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagHRTitle');
  const titleText = ariaLabel || '크로아티아';

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
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={'0'} y={'0'} width={'24'} height={'16'}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'white'} />
        <path d={'M0.923096 0.615234H23.0769V5.53831H0.923096V0.615234Z'} fill={'#D80027'} />
        <path d={'M0.923096 10.4614H23.0769V15.3845H0.923096V10.4614Z'} fill={'#0052B4'} />
        <path
          d={
            'M14.2801 5.50393V3.6038L15.0359 2.98193L15.8002 3.6038V5.50393H14.2801ZM9.71981 5.50393V3.6038L8.97272 2.98193L8.19971 3.6038V5.50393H9.71981ZM11.2399 5.50393V3.6038L12 2.98193L12.76 3.6038V5.50393H11.2399Z'
          }
          fill={'#338AF3'}
        />
        <path d={'M14.2802 5.50393H12.7601V3.6038L13.5158 2.98193L14.2802 3.6038V5.50393ZM11.24 5.50393H9.71985V3.6038L10.4756 2.98193L11.24 3.6038V5.50393Z'} fill={'#0052B4'} />
        <path
          d={
            'M8.19971 5.50391V9.90445C8.19971 10.9538 8.82157 11.8996 9.72845 12.4696C10.6483 13.0483 11.5465 13.1044 12 13.1044C12.4534 13.1044 13.356 13.031 14.2715 12.4653C15.1784 11.9039 15.8002 10.9495 15.8002 9.90445V5.50391H8.19971Z'
          }
          fill={'white'}
          stroke={'#D80027'}
        />
        <path
          d={
            'M8.19971 5.50391H9.71981V7.02401H8.19971V5.50391ZM11.2399 5.50391H12.76V7.02401H11.2399V5.50391ZM14.2801 5.50391H15.8002V7.02401H14.2801V5.50391ZM9.71981 7.02401H11.2399V8.54412H9.71981V7.02401ZM12.76 7.02401H14.2801V8.54412H12.76V7.02401ZM8.19971 8.54412H9.71981V10.0642H8.19971V8.54412ZM9.71981 10.0642H11.2399V11.5843H9.71981V10.0642ZM11.2399 8.54412H12.76V10.0642H11.2399V8.54412ZM14.2801 8.54412H15.8002V10.0642H14.2801V8.54412ZM12.76 10.0642H14.2801V11.5843H12.76V10.0642ZM14.2801 12.461C14.6515 12.2278 14.9797 11.9298 15.2302 11.5843H14.2801V12.461ZM8.76975 11.5843C9.02022 11.9298 9.34411 12.2278 9.71981 12.4653V11.5843H8.76975ZM11.2399 11.5843V13.0397C11.5509 13.0915 11.8143 13.1044 12 13.1044C12.1857 13.1044 12.4491 13.0915 12.76 13.0354V11.5843H11.2399Z'
          }
          fill={'#D80027'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagHR;
