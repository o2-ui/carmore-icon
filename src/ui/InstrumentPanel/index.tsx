import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (InstrumentPanel, 차량 계기판) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const InstrumentPanel = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('InstrumentPanel');

  const maskId = getElementId('InstrumentPanelMask');

  /* a11y 기본 설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '차량 계기판';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 24'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>

      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={24}>
        <rect x={0} y={0} width={24} height={24} fill={'white'} />
      </mask>

      <g mask={`url(#${maskId})`}>
        <circle cx={'1.77392'} cy={'1.77392'} r={'1.77392'} transform={'matrix(0.697573 0.716514 -0.697573 0.716514 12 11.2432)'} fill={'currentColor'} />
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={
            'M19.8577 20.939L14.6191 16.1696C15.167 15.535 15.4998 14.6999 15.4998 13.785C15.4998 11.7995 13.9328 10.19 11.9998 10.19C11.5825 10.19 11.1823 10.265 10.8112 10.4026L9.20007 8.1968C8.91006 7.79975 8.3616 7.71936 7.97504 8.01724C7.58848 8.31512 7.51022 8.87848 7.80023 9.27553L9.36524 11.4182C8.82634 12.0505 8.49976 12.8786 8.49976 13.785C8.49976 14.7099 8.83974 15.5531 9.39834 16.1902L4.19535 21C2.5198 19.089 1.5 16.5594 1.5 13.7851C1.5 7.82865 6.20101 3 12 3C17.799 3 22.5 7.82865 22.5 13.7851C22.5 16.5299 21.5017 19.0353 19.8577 20.939ZM11.2431 4.79748V5.69624C11.2431 6.19261 11.6348 6.595 12.1181 6.595C12.6013 6.595 12.9931 6.19261 12.9931 5.69624V4.79748C12.9931 4.30111 12.6013 3.89873 12.1181 3.89873C11.6348 3.89873 11.2431 4.30111 11.2431 4.79748ZM20.0246 14.1865C20.5078 14.1865 20.8996 13.7842 20.8996 13.2878C20.8996 12.7914 20.5078 12.389 20.0246 12.389H19.083C18.5998 12.389 18.208 12.7914 18.208 13.2878C18.208 13.7842 18.5998 14.1865 19.083 14.1865H20.0246ZM5.0663 14.1865C5.54955 14.1865 5.9413 13.7842 5.9413 13.2878C5.9413 12.7914 5.54955 12.389 5.0663 12.389H4.12476C3.64151 12.389 3.24976 12.7914 3.24976 13.2878C3.24976 13.7842 3.64151 14.1865 4.12476 14.1865H5.0663Z'
          }
          fill={'currentColor'}
        />
      </g>
    </svg>
  );
};

export default InstrumentPanel;
