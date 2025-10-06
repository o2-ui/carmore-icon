import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type Props = SVGProps<SVGSVGElement> & {
  thin?: boolean;
  half?: boolean;
};

/**
 * @description SVG 아이콘 ('왼쪽으로') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @param {boolean} [props.thin=false] - 화살표 굵기 조절 여부. (기본값: false)
 * @param {boolean} [props.half=false] - 기준 너비 조절 여부. (기본값: 'false)
 */
const ArrowLeft = (props: Props) => {
  const { className, width, height, thin = false, half = false, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ArrowLeft');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ArrowLeftTitle');
  const titleText = ariaLabel || '왼쪽으로';

  const viewBox = half ? '0 0 12 24' : '0 0 24 24';

  let pathD = '';
  if (thin && half) {
    pathD =
      'M2.50507 12.4949C2.23171 12.2216 2.23171 11.7783 2.50507 11.505L8.50507 5.50498C8.77844 5.23161 9.22166 5.23161 9.49502 5.50498C9.76839 5.77834 9.76839 6.22156 9.49502 6.49493L3.99 12L9.49502 17.505C9.76839 17.7783 9.76839 18.2216 9.49502 18.4949C9.22166 18.7683 8.77844 18.7683 8.50507 18.4949L2.50507 12.4949Z';
  } else if (thin && !half) {
    pathD =
      'M8.20502 12.4949C7.93166 12.2216 7.93166 11.7783 8.20502 11.505L14.205 5.50498C14.4784 5.23161 14.9216 5.23161 15.195 5.50498C15.4683 5.77834 15.4683 6.22156 15.195 6.49493L9.68995 12L15.195 17.505C15.4683 17.7783 15.4683 18.2216 15.195 18.4949C14.9216 18.7683 14.4784 18.7683 14.205 18.4949L8.20502 12.4949Z';
  } else if (!thin && half) {
    pathD =
      'M2.46355 12.7364C2.11208 12.3849 2.11208 11.8151 2.46355 11.4636L8.46355 5.4636C8.81503 5.11213 9.38487 5.11213 9.73635 5.4636C10.0878 5.81508 10.0878 6.38492 9.73635 6.7364L4.37274 12.1L9.73635 17.4636C10.0878 17.8151 10.0878 18.3849 9.73635 18.7364C9.38488 19.0879 8.81503 19.0879 8.46356 18.7364L2.46355 12.7364Z';
  } else if (!thin && !half) {
    pathD =
      'M7.86358 12.6363C7.51211 12.2848 7.51211 11.715 7.86358 11.3635L13.8636 5.36351C14.2151 5.01203 14.7849 5.01203 15.1364 5.36351C15.4878 5.71498 15.4878 6.28483 15.1364 6.6363L9.77277 11.9999L15.1364 17.3635C15.4878 17.715 15.4878 18.2848 15.1364 18.6363C14.7849 18.9878 14.2151 18.9878 13.8636 18.6363L7.86358 12.6363Z';
  }

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={viewBox}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={pathD} fill={'currentColor'} />
    </svg>
  );
};

export default ArrowLeft;
