import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('경고알림') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Warning = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Warning');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('WarningTitle');
  const titleText = ariaLabel || '경고알림';

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
        d={
          'M10.3512 3.69216C11.084 2.43595 12.916 2.43595 13.6488 3.69216L22.2421 18.4235C22.9749 19.6797 22.0589 21.25 20.5933 21.25H3.40669C1.94111 21.25 1.02512 19.6797 1.75791 18.4235L10.3512 3.69216Z'
        }
        fill={'currentColor'}
      />
      <rect x={'11.1001'} y={'7.75'} width={'1.8'} height={'7.5'} rx={'0.9'} fill={'white'} />
      <circle cx={'12.0001'} cy={'17.15'} r={'0.9'} fill={'white'} />
    </svg>
  );
};

export default Warning;
