import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (이스라엘 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagIL = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_IL_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_IL');
  const titleText = ariaLabel || '이스라엘';

  return (
    <svg className={mergeClassNames(style.layout, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.383H0.923096V0.615234Z'} fill={'white'} />
        <path
          d={
            'M15.6319 5.9005H13.2092L12 3.80192L10.7908 5.9005H8.36817L9.57735 7.99908L8.36817 10.0977H10.7908L12 12.1962L13.2092 10.0977H15.6319L14.4227 7.99908L15.6319 5.9005ZM13.5849 7.99908L12.8421 9.43267H11.1622L10.4151 7.99908L11.1579 6.56548H12.8378L13.5849 7.99908ZM12 4.8987L12.5139 5.90481H11.4818L12 4.8987ZM9.48234 6.56548H10.5145L10.0481 7.47227L9.48234 6.56548ZM9.48234 9.43267L10.0437 8.47838L10.5576 9.43267H9.48234ZM12 11.0519L11.4861 10.0977H12.5182L12 11.0519ZM14.5652 9.43267H13.4856L13.9995 8.47838L14.5652 9.43267ZM13.4381 6.56548H14.5652L14.0038 7.51977L13.4381 6.56548Z'
          }
          fill={'#2E52B2'}
        />
        <path d={'M0.923096 0.615234H23.0338V3.37875H0.923096V0.615234Z'} fill={'#2E52B2'} />
        <path d={'M0.923096 12.5892H23.0338V15.3845H0.923096V12.5892Z'} fill={'#2E52B2'} />
      </g>
    </svg>
  );
};

export default CountryFlagIL;
