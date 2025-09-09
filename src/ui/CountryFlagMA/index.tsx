import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (모로코 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagMA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagMA');

  const maskId = getElementId('CountryFlagMAMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagMATitle');
  const titleText = ariaLabel || '모로코';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234V15.3827H23.0769V0.615234H0.923096Z'} fill={'#D80027'} />
        <path
          d={
            'M16.1539 6.72215H12.9806L12 3.70459L11.0194 6.72224H7.84619L10.4134 8.58727L9.43279 11.605L12 9.7398L14.5673 11.6048L13.5867 8.58714L16.1539 6.72215ZM11.1319 8.35372L11.4635 7.33332H12.5366L12.8681 8.35372V8.35377L12 8.9844L11.1319 8.35372ZM12.338 6.72215H11.6621L12 5.68219L12.338 6.72215ZM13.3881 7.97606L13.1792 7.33332H14.2728L13.3881 7.97606ZM10.8209 7.33332L10.612 7.97606L9.72728 7.33332H10.8209ZM10.5954 10.0048L10.9333 8.96493L11.4801 9.36214L10.5954 10.0048ZM12.52 9.3621L13.0667 8.96489L13.4046 10.0048L12.52 9.3621Z'
          }
          fill={'#20661B'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagMA;
