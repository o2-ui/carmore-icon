import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('목록') 을 랜더링합니다. (비활성)
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const ListInactive = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ListInactive');

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
          'M19.5996 17.7002C20.0965 17.7002 20.4998 18.1027 20.5 18.5996C20.5 19.0967 20.0967 19.5 19.5996 19.5H4.40039C3.90333 19.5 3.5 19.0967 3.5 18.5996C3.50021 18.1027 3.90346 17.7002 4.40039 17.7002H19.5996ZM14.5996 11.0996C15.0967 11.0996 15.5 11.5029 15.5 12C15.5 12.4971 15.0967 12.9004 14.5996 12.9004H4.40039C3.90333 12.9004 3.5 12.4971 3.5 12C3.5 11.5029 3.90333 11.0996 4.40039 11.0996H14.5996ZM19.5996 4.5C20.0967 4.5 20.5 4.90333 20.5 5.40039C20.4998 5.89727 20.0965 6.2998 19.5996 6.2998H4.40039C3.90346 6.2998 3.50021 5.89727 3.5 5.40039C3.5 4.90333 3.90333 4.5 4.40039 4.5H19.5996Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default ListInactive;
