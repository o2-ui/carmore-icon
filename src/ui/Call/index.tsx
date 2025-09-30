import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('전화하기') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Call = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Call');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CallTitle');
  const titleText = ariaLabel || '전화하기';

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
          'M10.7185 19.0513C13.2042 20.6605 16.0414 21.668 18.9951 21.9884C19.7803 22.0594 20.5427 21.802 21.1114 21.2811C21.6801 20.7603 22.0026 20.0242 21.9994 19.2537L21.9994 16.5312C22.0276 15.1475 21.0158 13.9598 19.6418 13.7663C18.8247 13.6586 18.0305 13.4611 17.266 13.1764C16.2664 12.8013 15.1371 13.0417 14.3762 13.7928L13.7174 14.4505C12.0319 13.378 10.6017 11.9503 9.52728 10.2677L10.1825 9.61365C10.9386 8.85042 11.1794 7.72314 10.8029 6.72317C10.5184 5.96214 10.3205 5.16928 10.2138 4.36179C10.0201 2.99339 8.84743 1.98662 7.47156 2.00013L4.73942 2.00009C3.96912 2.00081 3.23541 2.32434 2.71666 2.89162C2.1979 3.45891 1.94188 4.21773 2.01113 4.98272C2.32761 7.95877 3.33715 10.8049 4.95937 13.3046C6.42984 15.6147 8.39756 17.579 10.7185 19.0513ZM3.8029 4.80975C4.09156 7.49848 5.00463 10.0678 6.4693 12.3248L6.47785 12.3381C7.80609 14.4248 9.58438 16.2003 11.6826 17.5313L11.6967 17.5403C13.9404 18.9928 16.502 19.9043 19.1697 20.1968C19.4518 20.2189 19.7076 20.126 19.8957 19.9537C20.0907 19.7751 20.2005 19.5236 20.1994 19.261L20.1994 19.2537L20.1994 16.5312C20.1994 16.519 20.1996 16.5068 20.1998 16.4946C20.2094 16.0257 19.8674 15.6187 19.3964 15.5495C18.4493 15.424 17.5266 15.1943 16.6377 14.8632L16.6337 14.8616C16.2924 14.7336 15.905 14.815 15.6434 15.0713L14.989 15.7244C14.3924 16.32 13.4623 16.4217 12.751 15.9691C10.8442 14.7558 9.22598 13.1404 8.0102 11.2365C7.55527 10.524 7.65736 9.59101 8.2556 8.99382L8.90634 8.34421C9.16685 8.07921 9.24559 7.69546 9.11833 7.35749L9.1168 7.35342L9.1168 7.35342C8.78592 6.46824 8.55557 5.54667 8.43077 4.60823C8.36106 4.13629 7.95882 3.79543 7.48925 3.80005L7.47153 3.80013L4.74045 3.80009C4.47426 3.80053 4.22244 3.91229 4.04501 4.10632C3.86978 4.29794 3.7826 4.55268 3.8029 4.80975Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Call;
