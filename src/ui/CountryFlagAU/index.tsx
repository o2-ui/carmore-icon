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
const CountryFlagAU = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagAU');

  const maskId = getElementId('CountryFlagAUMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '호주';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#D9D9D9'} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'#10338C'} />
        <path
          d={
            'M10.5188 7.98676C10.5317 7.97381 10.5404 7.96085 10.5533 7.9479C10.5447 7.96085 10.5317 7.97381 10.5188 7.98676ZM9.04184 9.79621L9.51688 10.7851L10.5835 10.539L10.1085 11.5236L10.9679 12.2059L9.89691 12.4478L9.90122 13.5447L9.04184 12.858L8.18678 13.5447L8.1911 12.4478L7.12012 12.2059L7.9795 11.5236L7.50014 10.539L8.57113 10.7851L9.04184 9.79621ZM17.5881 11.027L17.8127 11.4977L18.3223 11.3811L18.0934 11.8518L18.5037 12.1757L17.9941 12.288V12.8148L17.5881 12.4866L17.1779 12.8148L17.1822 12.288L16.6726 12.1757L17.0829 11.8518L16.854 11.3811L17.3636 11.4977L17.5881 11.027ZM15.4893 6.01753L15.7139 6.48825L16.2235 6.37165L15.9946 6.84236L16.4049 7.16625L15.8953 7.28285V7.80539L15.4893 7.47718L15.0791 7.80539L15.0834 7.28285L14.5695 7.16625L14.9798 6.84236L14.7509 6.37165L15.2605 6.48825L15.4893 6.01753ZM17.5881 3.15869L17.8127 3.62941L18.3223 3.51281L18.0934 3.98352L18.5037 4.30741L17.9941 4.42401V4.94655L17.5881 4.61834L17.1779 4.94655L17.1822 4.42401L16.6726 4.30741L17.0829 3.98352L16.854 3.51281L17.3636 3.62941L17.5881 3.15869ZM19.4235 5.30498L19.6481 5.7757L20.1576 5.6591L19.9288 6.12981L20.339 6.4537L19.8294 6.56598V7.09283L19.4235 6.76463L19.0132 7.09283V6.56598L18.5037 6.4537L18.9139 6.12981L18.685 5.6591L19.1946 5.7757L19.4235 5.30498ZM18.1107 7.80539L18.2877 8.35383H18.8621L18.3957 8.69068L18.5771 9.23912L18.1107 8.89796L17.6443 9.23912L17.8213 8.69068L17.3593 8.35383H17.9336L18.1107 7.80539Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M11.9266 0.615234V1.93669L9.97897 3.02063H11.9266V5.5815H9.37438L11.9266 6.99796V7.98689H10.7736L7.59948 6.22063V7.98689H5.1984V5.88811L1.42404 7.98689H0.871277V6.66544L2.82323 5.5815H0.871277V3.02063H3.4235L0.871277 1.59985V0.615234H2.02431L5.1984 2.37718V0.615234H7.59948V2.71402L11.3782 0.615234H11.9266Z'
          }
          fill={'white'}
        />
        <path d={'M7.0899 0.615234H5.70798V3.60795H0.871277V4.98986H5.70798V7.98689H7.0899V4.98986H11.9266V3.60795H7.0899V0.615234Z'} fill={'#D80027'} />
        <path d={'M7.59949 5.58154L11.9266 7.98694V7.30462L8.82594 5.58154H7.59949Z'} fill={'#0052B4'} />
        <path d={'M7.59949 5.58154L11.9266 7.98694V7.30462L8.82594 5.58154H7.59949Z'} fill={'white'} />
        <path d={'M7.59948 5.58154L11.9266 7.98694V7.30462L8.82593 5.58154H7.59948ZM3.97627 5.58154L0.871277 7.30462V7.98694L5.1984 5.58154H3.97627Z'} fill={'#D80027'} />
        <path d={'M5.1984 3.02063L0.871277 0.615234V1.29324L3.97627 3.02063H5.1984Z'} fill={'#0052B4'} />
        <path d={'M5.1984 3.02063L0.871277 0.615234V1.29324L3.97627 3.02063H5.1984Z'} fill={'white'} />
        <path d={'M5.1984 3.02063L0.871277 0.615234V1.29324L3.97627 3.02063H5.1984ZM8.82593 3.02063L11.9266 1.29324V0.615234L7.59948 3.02063H8.82593Z'} fill={'#D80027'} />
      </g>
    </svg>
  );
};

export default CountryFlagAU;
