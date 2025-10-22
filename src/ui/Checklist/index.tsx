import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('확인사항') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Checklist = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Checklist');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ChecklistTitle');
  const titleText = ariaLabel || '확인사항';

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
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM16.4637 9.33654C16.8121 9.68526 16.8121 10.2506 16.4637 10.5994L11.9636 15.1056L11.9558 15.1135C11.6952 15.3743 11.3135 15.44 10.9918 15.3106C10.8835 15.267 10.782 15.2013 10.6942 15.1134L10.6891 15.1083L7.98628 12.3994C7.63791 12.0507 7.63791 11.4853 7.98628 11.1366C8.33466 10.7878 8.8995 10.7878 9.24787 11.1366L11.325 13.2192L15.2021 9.33654C15.5505 8.98782 16.1153 8.98782 16.4637 9.33654Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Checklist;
