import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (몰타 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagMT = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_MT_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_MT');
  const titleText = ariaLabel || '몰타';

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
        <path d={'M11.9785 0.615234H23.0554V15.383H11.9785V0.615234Z'} fill={'#C31B28'} />
        <path d={'M5.29339 3.56V2.04004H3.77328V3.56H2.25317V5.07996H3.77328V6.59992H5.29339V5.07996H6.8135V3.56H5.29339Z'} fill={'#ACABB1'} />
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={
            'M3.73013 1.99707H5.33661V3.51703H6.85672V5.12335H5.33661V6.64331H3.73013V5.12335H2.21002V3.51703H3.73013V1.99707ZM3.8165 2.08343V3.60339H2.29639V5.03699H3.8165V6.55695H5.25024V5.03699H6.77035V3.60339H5.25024V2.08343H3.8165Z'
          }
          fill={'#C31B28'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagMT;
