import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagCA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_CA_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_CA');
  const titleText = ariaLabel || '캐나다';

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
      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#D9D9D9'} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'white'} />
        <path
          d={
            'M0.923096 0.615234H7.05535V15.3845H0.923096V0.615234ZM16.9447 0.615234H23.0769V15.3845H16.9447V0.615234ZM14.1593 9.51132L16.3358 8.42306L15.2475 7.87893V6.79067L13.071 7.87893L14.1593 5.70241H13.071L11.9827 4.07002L10.8945 5.70241H9.80623L10.8945 7.87893L8.71797 6.79067V7.87893L7.62971 8.42306L9.80623 9.51132L9.2621 10.5996H11.4386V12.232H12.5269V10.5996H14.7034L14.1593 9.51132Z'
          }
          fill={'#FF0000'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagCA;
