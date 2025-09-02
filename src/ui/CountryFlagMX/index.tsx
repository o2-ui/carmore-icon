import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (멕시코 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagMX = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_MX_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_MX');
  const titleText = ariaLabel || '멕시코';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(style.layout, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d={'M15.6923 0.615234H0.923096V15.3528H23.0769V0.615234H15.6923Z'} fill={'#DC2339'} />
        <path d={'M0.923096 0.615234H8.30771V15.383H0.923096V0.615234Z'} fill={'#11865D'} />
        <path d={'M8.30774 0.615234H15.6924V15.383H8.30774V0.615234Z'} fill={'white'} />
        <path
          d={
            'M9.37872 8.00784C9.37872 8.94054 9.87535 9.80847 10.6872 10.2748C10.9377 10.4216 11.2573 10.3353 11.4041 10.0848C11.5509 9.83438 11.4646 9.51484 11.2141 9.36803C10.7261 9.08735 10.4281 8.56919 10.4281 8.00784C10.4281 7.71853 10.1949 7.48535 9.90558 7.48535C9.61624 7.48535 9.37872 7.71853 9.37872 8.00784ZM13.4122 10.2144C14.1679 9.73506 14.6214 8.90168 14.6214 8.00784C14.6214 7.71853 14.3882 7.48535 14.0988 7.48535C13.8095 7.48535 13.5763 7.71853 13.5763 8.00784C13.5763 8.54328 13.3042 9.04417 12.8508 9.33348C12.6046 9.48462 12.5269 9.80415 12.6737 10.0546C12.8206 10.305 13.1444 10.3785 13.3949 10.2316C13.3949 10.223 13.4036 10.2187 13.4122 10.2144Z'
          }
          fill={'#8C9157'}
        />
        <path
          d={
            'M12 9.05713C12.5796 9.05713 13.0494 8.35342 13.0494 7.48535C13.0494 6.61728 12.5796 5.91357 12 5.91357C11.4205 5.91357 10.9506 6.61728 10.9506 7.48535C10.9506 8.35342 11.4205 9.05713 12 9.05713Z'
          }
          fill={'#C59262'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagMX;
