import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('편집하기') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Edit = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Edit');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '편집하기';

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
      <path d={'M3.58779 20.7392C3.25706 20.8137 2.93653 20.4924 3.01083 20.1609L3.84668 16.4312L7.30841 19.9013L3.58779 20.7392Z'} fill={'currentColor'} />
      <rect width={'4.83574'} height={'13.2315'} transform={'matrix(-0.706244 -0.707969 0.706244 -0.707969 8.06714 19.0986)'} fill={'currentColor'} />
      <path
        d={'M18.1885 8.9458L14.7741 5.52308L16.5706 3.72222C16.8306 3.46156 17.2522 3.46156 17.5122 3.72222L19.9849 6.20099C20.245 6.46166 20.245 6.88428 19.9849 7.14495L18.1885 8.9458Z'}
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M8.99927 20.2001C8.99927 19.8981 9.24349 19.6533 9.54475 19.6533L20.4545 19.6533C20.7558 19.6533 21 19.8981 21 20.2001C21 20.5021 20.7558 20.747 20.4545 20.747L9.54475 20.747C9.24349 20.747 8.99927 20.5021 8.99927 20.2001Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Edit;
