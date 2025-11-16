import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('목록') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const ListDot = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ListDot');

  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '목록';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        d={
          'M19.5999 16.8501C20.0969 16.8501 20.5002 17.2534 20.5002 17.7505C20.5 18.2474 20.0968 18.6499 19.5999 18.6499H7.70044C7.20351 18.6499 6.80026 18.2474 6.80005 17.7505C6.80005 17.2534 7.20338 16.8501 7.70044 16.8501H19.5999ZM19.5999 11.1001C20.0969 11.1001 20.5002 11.5034 20.5002 12.0005C20.5 12.4974 20.0968 12.8999 19.5999 12.8999H7.70044C7.20351 12.8999 6.80026 12.4974 6.80005 12.0005C6.80005 11.5034 7.20338 11.1001 7.70044 11.1001H19.5999ZM19.5999 5.3501C20.0969 5.3501 20.5002 5.75343 20.5002 6.25049C20.5 6.74736 20.0968 7.1499 19.5999 7.1499H7.70044C7.20351 7.1499 6.80026 6.74736 6.80005 6.25049C6.80005 5.75343 7.20338 5.3501 7.70044 5.3501H19.5999Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M4.40039 16.8501C4.89727 16.8503 5.2998 17.2536 5.2998 17.7505C5.29959 18.2472 4.89714 18.6497 4.40039 18.6499C3.90346 18.6499 3.50021 18.2474 3.5 17.7505C3.5 17.2534 3.90333 16.8501 4.40039 16.8501ZM4.40039 11.1001C4.89727 11.1003 5.2998 11.5036 5.2998 12.0005C5.29959 12.4972 4.89714 12.8997 4.40039 12.8999C3.90346 12.8999 3.50021 12.4974 3.5 12.0005C3.5 11.5034 3.90333 11.1001 4.40039 11.1001ZM4.40039 5.3501C4.89727 5.35031 5.2998 5.75356 5.2998 6.25049C5.29959 6.74723 4.89714 7.14969 4.40039 7.1499C3.90346 7.1499 3.50021 6.74736 3.5 6.25049C3.5 5.75343 3.90333 5.3501 4.40039 5.3501Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ListDot;
