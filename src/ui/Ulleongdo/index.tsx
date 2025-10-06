import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('울릉도') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 색상이 지정되어 있으므로 fill은 그대로 유지됩니다.
 */
const Ulleongdo = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Ulleongdo');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('UlleongdoTitle');
  const titleText = ariaLabel || '울릉도';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path d={'M23 18.5005C22.9999 19.6049 22.1045 20.5005 21 20.5005H3C1.89552 20.5005 1.00015 19.6049 1 18.5005V17.6196H23V18.5005Z'} fill={'#87B9FF'} />
      <path
        d={
          'M6.93598 8.79478L5.4474 7.467C5.17908 7.22766 4.76607 7.2573 4.53468 7.5325L2.10734 10.4194C2.03023 10.5111 1.98051 10.6226 1.96388 10.7413L1 17.6194H16.8293L15.8592 8.96685C15.8466 8.85418 15.8042 8.7469 15.7363 8.65608L12.3391 4.11071C12.1012 3.79245 11.6334 3.76679 11.3621 4.05712L6.93598 8.79478Z'
        }
        fill={'#494949'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M1.94238 10.897L5.59035 12.1986C5.81009 12.277 6.05511 12.2291 6.22923 12.0738L7.68135 10.7786C7.8346 10.6419 8.04429 10.5873 8.24472 10.632L11.721 11.4072C11.8271 11.4309 11.9375 11.427 12.0416 11.3961L15.9996 10.2192L15.8594 8.96809C15.8468 8.85541 15.8043 8.74814 15.7364 8.65732L12.3392 4.11194C12.1013 3.79368 11.6335 3.76802 11.3623 4.05836L6.93613 8.79601L5.44755 7.46823C5.17923 7.2289 4.76622 7.25854 4.53483 7.53373L2.10749 10.4206C2.03038 10.5123 1.98066 10.6239 1.96403 10.7425L1.94238 10.897Z'
        }
        fill={'#A6D324'}
      />
      <path d={'M21.3364 13.7451L19.5819 14.2671C19.5651 14.2721 19.5478 14.2749 19.5303 14.2753L18.6669 14.2986L17.7771 17.6192H23L21.3364 13.7451Z'} fill={'#494949'} />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M18.4124 15.2475L18.6288 16.0888C18.6467 16.1585 18.7302 16.187 18.787 16.1429L20.1339 15.0957C20.317 14.9533 20.574 14.9556 20.7546 15.1011L21.8982 16.0228C22.0595 16.1527 22.2877 15.9819 22.2085 15.7906L22.1686 15.6942L21.3362 13.7447L19.7698 12.2833C19.6671 12.1875 19.5002 12.2246 19.4478 12.355L18.6667 14.2981L18.4124 15.2475Z'
        }
        fill={'#B3DD3C'}
      />
    </svg>
  );
};

export default Ulleongdo;
