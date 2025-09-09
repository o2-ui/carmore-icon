import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (알바니아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagAL = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagAL');

  const maskId = getElementId('CountryFlagALMask');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagALTitle');
  const titleText = ariaLabel || '알바니아';

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
        <rect x={0.923} y={0.615} width={22.154} height={14.769} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'#ED2024'} />
        <path
          d={
            'M8.9231 3.61852V7.55698L10.6708 8.17237L9.44002 9.37852L10.0308 10.117L11.3354 8.76313L11.6308 9.32929L10.8923 10.5354L11.7785 11.9139L11.3354 12.5539L12.0246 13.4401L12.6892 12.5293L12.32 11.8893L13.0585 10.4616L12.3939 9.32929L12.6892 8.76313L13.9692 10.117L14.5846 9.40313L13.3046 8.14775L15.0769 7.50775V3.61852L13.7969 4.08621L13.7723 5.0216L12.96 5.09544V4.45544L13.3785 3.88929L14.7569 3.34775L14.1908 3.24929L14.5354 2.9539L14.7569 3.05237L14.56 2.70775L14.2154 2.83083L13.9692 2.56006L12.6154 2.83083L12.96 3.1016L12.0246 4.30775L11.0892 3.12621L11.4092 2.85544L10.1785 2.56006L9.83387 2.83083L9.46463 2.73237L9.26771 3.07698L9.48925 2.92929L9.8831 3.20006L9.31694 3.32314L10.6708 3.81544L11.0646 4.3816V5.09544L10.2523 5.0216V4.13544L8.9231 3.61852Z'
          }
          fill={'#212121'}
        />
        <path
          d={
            'M7.37231 6.7689H8.9477V7.38429H7.37231V6.7689ZM7.37231 5.75967H8.9477V6.42429H7.37231V5.75967ZM7.37231 4.72583H8.9477V5.36583H7.37231V4.72583ZM7.37231 3.74121H8.9477V4.3566H7.37231V3.74121Z'
          }
          fill={'#212121'}
        />
        <path
          d={
            'M15.0523 6.7689H16.6277V7.38429H15.0523V6.7689ZM15.0523 5.75967H16.6277V6.42429H15.0523V5.75967ZM15.0523 4.72583H16.6277V5.36583H15.0523V4.72583ZM15.0523 3.74121H16.6277V4.3566H15.0523V3.74121Z'
          }
          fill={'#212121'}
        />
        <path d={'M14.0677 9.50146H15.6431V9.96916H14.0677V9.50146ZM8.35693 9.50146H9.93232V9.96916H8.35693V9.50146Z'} fill={'#212121'} />
      </g>
    </svg>
  );
};

export default CountryFlagAL;
