"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LegacyRef, Ref, forwardRef, useEffect, useRef, useState } from "react";

interface SampleCityProps {}

const SampleCity = forwardRef<SVGSVGElement, SampleCityProps>(({}, ref) => {
  return (
    <svg
      ref={ref}
      className="sample-city"
      viewBox="0 0 3075 1546"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M615.57 5.37522C618.544 4.30388 625.161 2.6503 630.275 1.6996C642.335 -0.540124 648.001 -0.558477 660.251 1.59863C686.595 6.23806 710.289 22.4275 726.938 47.1628L733.704 57.2179L740.435 51.3643C755.492 38.2682 776.56 31.9175 794.47 35.0777C813.011 38.3481 832.99 51.953 844.273 68.9909C846.989 73.0927 849.381 76.6634 849.59 76.9257C849.798 77.1893 852.84 76.0091 856.348 74.3031C865.531 69.8407 881.347 69.8957 890.346 74.4223C898.7 78.6251 909.234 89.7582 913.17 98.5426C915.942 104.732 919.179 117.683 919.179 122.586C919.179 124.006 881.942 124.311 709.204 124.311H499.227L500.111 120.049C503.093 105.664 510.955 94.4841 520.212 91.4681C524.402 90.103 536.624 90.2132 541.814 91.6635C543.13 92.032 544.719 88.9215 547.241 81.0379C558.702 45.2116 584.605 16.5279 615.57 5.37522ZM2902.61 109.68C2908.63 103.565 2918.28 98.2279 2926.18 96.6347C2936.19 94.6192 2948.62 97.5316 2958.36 104.169C2962.92 107.275 2971.97 117.482 2973.07 120.764C2973.35 121.575 2976.32 120.241 2979.9 117.702C2985.47 113.756 2987.43 113.145 2995.88 112.724C3007.87 112.127 3013.64 114.698 3022.33 124.503C3028.02 130.924 3028.6 131.248 3031.83 129.794C3042.99 124.778 3056.82 134.13 3058.7 147.952L3059.41 153.16H2962.93C2897.5 153.16 2866.46 152.725 2866.46 151.807C2866.46 151.062 2867.3 148.452 2868.34 146.008C2870.85 140.064 2875.68 137.104 2881.99 137.641C2887.01 138.067 2887.06 138.022 2889.72 130.863C2893.59 120.451 2896.16 116.231 2902.61 109.68ZM37.8391 315.056C42.083 301.039 51.9017 289.036 64.0091 283.064C70.8193 279.703 73.7083 279.046 81.6662 279.046C95.5561 279.046 102.639 281.896 112.364 291.4C116.851 295.784 121.155 300.548 121.928 301.986C123.321 304.573 123.367 304.571 126.44 301.72C134.535 294.213 149.288 292.258 159.828 297.294C165.612 300.059 174.313 308.147 175.599 311.956C176.101 313.442 176.856 313.475 179.819 312.141C187.611 308.637 196.04 310.97 202.355 318.379C205.468 322.031 208.516 329.633 208.534 333.793C208.541 335.09 188.4 335.433 112.241 335.433H15.9395V332.2C15.9395 330.422 17.8297 326.842 20.1383 324.246C23.9345 319.979 24.9108 319.559 30.301 319.887C36.1987 320.245 36.2837 320.191 37.8391 315.056ZM1009.5 510.052C1009.5 458.963 1009.9 392.283 1010.38 361.874C1011.04 320.738 1011.67 306.584 1012.83 306.584C1012.98 306.584 1013.13 306.71 1013.26 306.967C1013.34 306.786 1013.41 306.69 1013.47 306.69C1013.57 306.69 1013.67 307.342 1013.77 308.59C1015.45 316.602 1016.14 349.168 1016.14 416.191C1016.15 506.286 1017.63 602.94 1019.01 602.94C1019.61 602.94 1020.26 572.994 1020.45 536.391L1020.79 469.842L1024.97 469.442C1030.04 468.956 1030.5 469.54 1044.7 494.757C1050.38 504.854 1059.65 521.082 1065.29 530.818C1070.93 540.555 1084 563.36 1094.33 581.495L1113.11 614.471V651.978V689.487H1139.66H1166.22L1166.23 690.958L1166.24 690.959V694.159L1166.56 756.692L1166.91 823.896L1218.71 824.552L1270.51 825.208L1286.11 837.665L1301.71 850.123L1286.38 850.492L1271.06 850.862L1271.45 859.672L1271.84 868.481L1289.11 869.137L1306.38 869.792L1328.81 884.217L1351.24 898.641L1344.42 899.037L1337.59 899.434V996.402V1093.37H1350.87H1364.16V1114.35V1135.33H1370.8H1377.44V936.096V736.861L1373.12 736.449L1368.81 736.038L1368.4 727.559C1367.87 716.417 1370.77 708.852 1377.21 704.532C1381.32 701.77 1383.57 701.289 1392.36 701.289H1402.68V685.66V685.553V669.924V669.817H1540.82H1678.96V685.553V701.289H1683.61H1688.26V943.8V1186.31L1698.89 1210.32L1709.51 1234.33V1262.23V1290.13L1731.1 1289.77L1752.68 1289.41L1753.06 1277.33L1753.45 1265.25L1740.41 1265.11C1734.56 1265.04 1730.16 1264.84 1728.9 1264.6L1724.79 1264.5L1754.68 1254.51L1784.56 1244.53L1784.9 921.766L1785.23 599.006H1847.66H1910.09V542.62V486.233H1939.31H1968.5L1968.53 481.829V439.026C1968.53 392.694 1968.58 391.819 1971.19 391.819C1973.8 391.819 1973.84 392.694 1973.84 439.026V486.233H2002.39H2030.93L2031.28 542.292L2031.63 598.351L2064.5 598.701L2097.38 599.052V849.441V1099.83L2109.66 1100.21L2121.95 1100.58L2121.95 1101.35H2122.61V1174.78V1242.02L2122.64 1246.79H2160.48H2198.33V996.441V995.678V744.669V744.562H2204.3H2210.28V735.475C2210.28 727.048 2210.06 726.356 2207.29 725.968L2204.3 725.548V673.095V620.643L2210.61 620.243C2216.62 619.863 2216.92 619.658 2216.92 615.981C2216.92 612.139 2216.96 612.119 2224.83 612.119C2231.43 612.119 2234.34 612.952 2242.43 617.151C2247.76 619.919 2265.87 629.153 2282.67 637.67C2299.48 646.189 2326.07 659.783 2341.78 667.88C2357.49 675.976 2377.07 685.925 2385.28 689.989L2400.23 697.377V608.191V519.006L2562.61 519.339L2724.99 519.672L2725.33 825.261L2725.66 1130.85L2748.51 1134.49C2761.08 1136.5 2771.99 1138.24 2772.75 1138.37C2773.71 1138.54 2774.24 1071.71 2774.48 921.917L2774.81 710.569V706.791L2774.81 706.791L2774.81 705.223H2780.12H2785.43V629.822V554.422H2789.42H2793.4V540.104V539.342V524.368V524.261H2802.66H2811.91L2812.29 509.509L2812.66 494.757L2818.91 494.36L2825.16 493.962L2825.55 485.18L2825.94 476.399L2833.58 476.005L2841.22 475.612V465.359V464.531V453.557V453.451H2848.53H2855.83V442.96V432.47H2863.8H2871.77V422.086V421.323V411.595V410.177H2876.42H2881.07V403.072V401.545C2881.07 395.258 2881.52 393.059 2882.72 393.454C2883.62 393.752 2885.56 392.497 2887.02 390.666C2889.15 387.993 2889.84 384.482 2890.53 372.859C2891.49 356.841 2893.9 348.556 2898.17 346.596C2901.55 345.046 2901.64 344.187 2898.88 340.029C2892.31 330.126 2908.09 319.619 2914.97 329.318C2917.5 332.883 2917.49 338.593 2914.94 340.678C2912.08 343.021 2912.46 344.293 2916.63 346.425C2921.01 348.662 2923.03 356.348 2924.4 376.083C2925.29 388.783 2927.31 393.786 2931.54 393.786C2933.06 393.786 2933.63 395.744 2933.93 401.982C2934.32 410.07 2934.38 410.177 2938.2 410.177H2942.06L2942.11 411.595H2942.17V413.189L2942.45 420.996L2942.83 431.814L2950.8 432.47L2952.1 432.576H2958.11V433.071L2958.77 433.125L2959.16 443.221L2959.55 453.317L2963.76 453.557H2965.42H2972.72V454.068L2973.39 454.106L2973.77 464.858L2974.15 475.609L2981.08 476.004L2988 476.399L2988.39 485.25L2988.78 494.101H2995.36H3001.94V509.124V524.146L3007.49 524.368H3010.58H3020.54V524.891L3021.2 524.917L3021.58 539.669C3021.95 554.378 3021.97 554.422 3025.23 554.422H3028.51V629.747V705.072L3034.15 705.476L3039.8 705.878L3040.46 969.872L3041.13 1233.87L3053.08 1240.29C3061.24 1244.67 3066.62 1246.73 3070.02 1246.76L3075 1246.79V1248.21V1396.28V1397.05V1545.77V1545.88H1537.5H0V1545.77V1061.42V1060.59V576.958V575.403H6.64147C12.4992 575.403 13.2829 575.079 13.2829 572.654C13.2829 571.142 14.2871 566.57 15.5131 562.491L17.7433 555.077L20.0811 562.29C21.3669 566.256 22.4548 570.83 22.5 572.452C22.5677 574.935 23.3182 575.403 27.23 575.403H31.879V529.74V484.076L36.0778 476.304C39.5853 469.809 40.495 467.942 41.3755 467.956C41.8004 467.963 42.2185 468.407 42.9185 468.981C44.3956 470.191 46.0174 466.277 51.8088 447.531C55.706 434.921 59.2871 424.602 59.7666 424.602C60.2461 424.602 63.8524 434.927 67.7802 447.547C72.5315 462.816 75.3647 470.054 76.2467 469.184C78.5168 466.943 79.3084 467.647 83.5483 475.689L87.6674 483.503V614.688V745.873H149.433H211.199V944.023V1142.17L214.852 1141.27C219.645 1140.07 261.512 1133.22 271.304 1132.03L278.942 1131.1V825.048V518.999L376.239 519.336L473.537 519.672L473.887 561.306L474.238 602.94L519.049 602.941H563.861V643.264V683.586L586.11 683.945L608.359 684.304V839.008V993.711H613.022C616.226 993.711 625.055 990.083 641.248 982.113L664.811 970.514L690.049 982.726C703.929 989.443 717.228 995.318 719.603 995.782C721.978 996.246 723.92 996.948 723.92 997.34C723.92 997.732 722.395 1000.03 720.532 1002.44C718.04 1005.66 716.107 1006.82 713.226 1006.82C709.933 1006.82 709.309 1007.35 709.309 1010.1C709.309 1012.73 708.645 1013.38 705.979 1013.38H702.667V1018.24L702.99 1102.69L703.331 1192L719.935 1199.05C729.067 1202.94 736.688 1206.12 736.871 1206.13C737.054 1206.14 737.203 1155.18 737.203 1092.88V979.619L741.908 964.045C744.495 955.48 748.359 942.57 750.494 935.358C752.628 928.146 757.579 911.623 761.496 898.641L768.618 875.037L814.004 874.693L859.389 874.348L859.729 782.245L860.07 690.142L886.968 689.787L913.866 689.433V651.187V612.942L921.347 599.746C925.462 592.488 934.651 576.517 941.767 564.257C956.896 538.188 980.602 497.031 989.916 480.66C995.211 471.355 997.031 469.186 999.545 469.186C1001.28 469.186 1002.6 468.97 1003.61 469.435C1004.08 469.649 1004.48 470.01 1004.82 470.604H1005.52V472.44C1007.01 478.247 1006.85 494.083 1006.85 536.859C1006.85 574.833 1007.2 597.123 1007.88 601.946C1008.49 599.281 1008.89 591.312 1009.25 573.095C1009.42 557.796 1009.5 536.709 1009.5 510.052ZM1616.1 360.136C1627.17 347.314 1640.34 338.838 1655.42 334.828C1664.63 332.378 1679.27 332.35 1688.66 334.762C1705.95 339.21 1722.93 351.479 1734.26 367.721C1736.96 371.598 1739.44 374.772 1739.76 374.772C1740.08 374.772 1742.52 373.079 1745.19 371.01C1747.85 368.94 1753.31 365.553 1757.33 363.483C1763.95 360.076 1765.89 359.719 1777.92 359.706C1789.59 359.693 1792.13 360.122 1798.85 363.227C1807.67 367.308 1819.88 378.168 1824.61 386.133L1827.87 391.629L1833.45 389.131C1851.32 381.12 1871.74 391.768 1878.21 412.475C1879.67 417.133 1880.86 422.357 1880.86 424.084V427.224H1720.78H1560.69L1561.49 423.618C1565.33 406.25 1578.2 397.145 1591.74 402.225C1594.83 403.385 1595.09 403.111 1596.54 397.308C1598.99 387.494 1609.14 368.201 1616.1 360.136ZM2741.6 1143.43L2735.95 1142.56C2732.85 1142.09 2729.26 1141.41 2727.98 1141.05C2725.8 1140.44 2725.66 1143.56 2725.66 1193.6V1246.79H2733.63H2741.6V1195.11V1143.43ZM251.048 1246.79H276.285V1194.45V1194.34V1141.89L271.968 1142.04C269.594 1142.13 258.236 1143.71 246.731 1145.55L225.81 1148.91V1197.85V1246.79H251.048ZM2773.55 1149.09L2762.85 1146.92C2756.64 1145.66 2750.51 1144.61 2749.24 1144.57C2747.06 1144.52 2746.91 1147.8 2746.91 1195.65V1246.79H2760.87H2774.81V1242.31L2774.49 1198L2774.16 1152.05C2774 1150.59 2773.8 1149.68 2773.55 1149.09ZM220.497 1246.79V1198.28C220.497 1175.21 220.385 1155.81 220.237 1151.01C219.989 1150.58 219.704 1150.29 219.376 1150.11C218.522 1150.36 217.079 1150.78 215.516 1151.22L211.199 1152.45V1199.63V1246.79H215.848H220.497ZM714.622 1207.94L709.928 1205.73C707.346 1204.52 704.656 1203.52 703.951 1203.52C703.183 1203.52 702.675 1211.99 702.667 1224.88C702.667 1225.01 702.667 1225.14 702.667 1225.26V1246.79H708.645H714.622V1227.37V1207.94ZM736.783 1216.94L729.604 1213.93C725.424 1212.17 721.538 1210.54 720.97 1210.3C720.4 1210.06 719.935 1218.17 719.935 1228.33V1246.79H728.569H737.203V1231.96V1217.47C737.074 1217.24 736.934 1217.07 736.783 1216.94ZM275.621 1289.41L276.001 1276.63L276.327 1265.66L276.365 1263.95H256.545H236.727L236.436 1265.98V1268.8C236.436 1273.14 237.472 1274.77 244.832 1281.97L253.227 1290.18L264.425 1289.8L275.621 1289.41ZM714.622 1290.22V1277.03V1263.95H709.309H702.588L702.626 1265.66L702.952 1276.63L703.331 1289.41L708.977 1289.81L714.622 1290.22ZM737.203 1290.07V1276.95V1263.95H728.569H719.935V1276.95V1290.07H728.569H737.203ZM2192.35 1289.41L2192.73 1276.63L2193.05 1265.68L2193.09 1263.95H2157.85H2122.61V1276.98V1281.02V1290.11L2157.48 1289.76L2192.35 1289.41ZM2741.6 1290.07V1276.95V1263.95H2725.66V1276.95V1290.07H2733.63H2741.6ZM2771.92 1287.03C2774.37 1284.46 2774.81 1282.46 2774.81 1273.92V1263.95H2760.19H2746.91V1276.95V1290.07H2757.97C2767.81 1290.07 2769.35 1289.73 2771.92 1287.03ZM3064.37 1275.64C3065.1 1275.64 3065.7 1272.99 3065.7 1269.74V1263.95H3053.08H3040.46V1272.76C3040.46 1281.16 3040.72 1281.92 3044.78 1285.57C3050.51 1290.73 3055.58 1290.79 3056.17 1285.7C3056.45 1283.3 3057.21 1282.22 3058.33 1282.65C3060.56 1283.49 3063.05 1281.04 3063.05 1278C3063.05 1277.59 3063.11 1277.2 3063.21 1276.86C3062.99 1276.07 3063.16 1275.76 3063.83 1275.85C3063.99 1275.72 3064.18 1275.64 3064.37 1275.64ZM220.497 1290.07V1281.54C220.497 1272.07 219.053 1270.84 214.086 1276.06C212.071 1278.17 211.199 1280.75 211.199 1284.58C211.199 1289.98 211.274 1290.07 215.848 1290.07H220.497ZM244.406 1289.12C244.406 1288.6 240.988 1284.77 236.81 1280.6C232.632 1276.43 228.448 1273.02 227.511 1273.02C226.303 1273.02 225.81 1275.49 225.81 1281.54V1290.07H235.108C240.222 1290.07 244.406 1289.64 244.406 1289.12Z"
        fill="black"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2901.24 702.863H2826.61V793.158H2901.24V702.863ZM2996.63 702.863H2922V793.158H2996.63V702.863ZM2996.63 802.085H2922V892.38H2996.63V802.085ZM2901.24 802.086H2826.61V892.38H2901.24V802.086ZM2901.24 898.873H2826.61V989.167H2901.24V898.873ZM2996.63 898.873H2922V989.167H2996.63V898.873ZM2996.63 998.095H2922V1088.39H2996.63V998.095ZM2901.24 998.095H2826.61V1088.39H2901.24V998.095Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2580.06 555.996H2622.46V586.811H2580.06V555.996ZM2519.67 555.996H2477.27V586.811H2519.67V555.996ZM2519.67 706.236H2477.27V737.051H2519.67V706.236ZM2622.46 706.236H2580.06V737.051H2622.46V706.236ZM2477.27 631.116H2519.67V661.931H2477.27V631.116ZM2519.67 781.356H2477.27V812.171H2519.67V781.356ZM2580.06 631.116H2622.46V661.931H2580.06V631.116ZM2622.46 781.356H2580.06V812.171H2622.46V781.356ZM2477.27 593.556H2519.67V624.371H2477.27V593.556ZM2519.67 743.796H2477.27V774.611H2519.67V743.796ZM2580.06 593.556H2622.46V624.371H2580.06V593.556ZM2622.46 743.796H2580.06V774.611H2622.46V743.796ZM2477.27 668.676H2519.67V699.491H2477.27V668.676ZM2519.67 818.916H2477.27V849.73H2519.67V818.916ZM2580.06 668.676H2622.46V699.491H2580.06V668.676ZM2622.46 818.916H2580.06V849.73H2622.46V818.916ZM2528.66 555.996H2571.06V586.811H2528.66V555.996ZM2571.06 706.236H2528.66V737.051H2571.06V706.236ZM2631.46 555.996H2673.86V586.811H2631.46V555.996ZM2673.86 706.236H2631.46V737.051H2673.86V706.236ZM2528.66 631.116H2571.06V661.931H2528.66V631.116ZM2571.06 781.356H2528.66V812.171H2571.06V781.356ZM2631.46 631.116H2673.86V661.931H2631.46V631.116ZM2673.86 781.356H2631.46V812.171H2673.86V781.356ZM2528.66 593.556H2571.06V624.371H2528.66V593.556ZM2571.06 743.796H2528.66V774.611H2571.06V743.796ZM2631.46 593.556H2673.86V624.371H2631.46V593.556ZM2673.86 743.796H2631.46V774.611H2673.86V743.796ZM2528.66 668.676H2571.06V699.491H2528.66V668.676ZM2571.06 818.916H2528.66V849.73H2571.06V818.916ZM2631.46 668.676H2673.86V699.491H2631.46V668.676ZM2673.86 818.916H2631.46V849.73H2673.86V818.916Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1026.86 736.958H956.371V804.824H1026.86V736.958ZM1026.86 823.826H956.371V891.692H1026.86V823.826ZM1046.6 823.826H1117.1V891.692H1046.6V823.826ZM1117.1 736.958H1046.6V804.824H1117.1V736.958Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M407.087 1037.25H321.447V1107.99H407.087V1037.25ZM407.087 1127.8H321.447V1198.54H407.087V1127.8ZM431.066 1127.8H516.706V1198.54H431.066V1127.8ZM516.706 1037.25H431.066V1107.99H516.706V1037.25Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M516.706 656.968H431.066V727.709H516.706V656.968ZM407.087 656.968H321.447V727.709H407.087V656.968ZM407.087 747.517H321.447V818.259H407.087V747.517ZM431.066 747.517H516.706V818.259H431.066V747.517Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M757.127 965.126H871.214V1028.39H757.127V965.126ZM757.127 1046.11H871.214V1109.37H757.127V1046.11ZM1017.24 1046.11H903.158V1109.37H1017.24V1046.11ZM903.158 965.126H1017.24V1028.39H903.158V965.126ZM1054.89 965.126H1168.98V1028.39H1054.89V965.126ZM1054.89 1046.11H1168.98V1109.37H1054.89V1046.11ZM1315.01 1046.11H1200.92V1109.37H1315.01V1046.11ZM1200.92 965.126H1315.01V1028.39H1200.92V965.126Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1437.21 1019.64V912.909H1525.18V1019.64H1437.21ZM1549.82 1019.64V912.909H1637.79V1019.64H1549.82ZM1549.82 776.297V883.025H1637.79V776.297H1549.82ZM1437.21 883.025V776.297H1525.18V883.025H1437.21ZM1437.21 1161.59V1054.86H1525.18V1161.59H1437.21ZM1437.21 1298.2V1191.47H1525.18V1298.2H1437.21ZM1549.82 1298.2V1191.47H1637.79V1298.2H1549.82ZM1549.82 1054.86V1161.59H1637.79V1054.86H1549.82Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        id="path-one"
        d="M2317.87 957.258V1037.97H2383.06V957.258H2317.87ZM2317.87 1060.58V1141.29H2383.06V1060.58H2317.87ZM2401.32 1060.58V1141.29H2466.51V1060.58H2401.32ZM2401.32 1037.97V957.258H2466.51V1037.97H2401.32ZM2317.87 1167.93V1248.65H2383.06V1167.93H2317.87ZM2317.87 1271.25V1351.96H2383.06V1271.25H2317.87ZM2401.32 1271.25V1351.96H2466.51V1271.25H2401.32ZM2401.32 1248.65V1167.93H2466.51V1248.65H2401.32ZM2488.02 1271.25V1351.96H2553.22V1271.25H2488.02ZM2571.47 1271.25V1351.96H2636.66V1271.25H2571.47ZM2571.47 1248.65V1167.93H2636.66V1248.65H2571.47ZM2488.02 1167.93V1248.65H2553.22V1167.93H2488.02ZM2488.02 1060.58V1141.29H2553.22V1060.58H2488.02ZM2571.47 1060.58V1141.29H2636.66V1060.58H2571.47ZM2571.47 1037.97V957.258H2636.66V1037.97H2571.47ZM2488.02 957.258V1037.97H2553.22V957.258H2488.02Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1805.15 662.213H1860.84V730.654H1805.15V662.213ZM1805.15 749.818H1860.84V818.259H1805.15V749.818ZM1932.11 749.818H1876.43V818.259H1932.11V749.818ZM1876.43 662.213H1932.11V730.654H1876.43V662.213ZM2021.77 662.213H2077.45V730.654H2021.77V662.213ZM1950.49 662.213H2006.17V730.654H1950.49V662.213ZM1950.49 749.818H2006.17V818.259H1950.49V749.818ZM2077.45 749.818H2021.77V818.259H2077.45V749.818Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1950.49 849.73H2006.17V918.172H1950.49V849.73ZM1950.49 937.335H2006.17V1005.78H1950.49V937.335ZM2077.45 937.335H2021.77V1005.78H2077.45V937.335ZM2021.77 849.73H2077.45V918.172H2021.77V849.73ZM1876.43 849.73H1932.11V918.172H1876.43V849.73ZM1805.15 849.731H1860.84V918.172H1805.15V849.731ZM1805.15 937.335H1860.84V1005.78H1805.15V937.335ZM1932.11 937.335H1876.43V1005.78H1932.11V937.335Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1805.15 1037.25H1860.84V1105.69H1805.15V1037.25ZM1805.15 1124.85H1860.84V1193.29H1805.15V1124.85ZM1932.11 1124.85H1876.43V1193.29H1932.11V1124.85ZM1876.43 1037.25H1932.11V1105.69H1876.43V1037.25ZM1950.49 1037.25H2006.17V1105.69H1950.49V1037.25ZM1950.49 1124.85H2006.17V1193.29H1950.49V1124.85ZM2077.45 1124.85H2021.77V1193.29H2077.45V1124.85ZM2021.77 1037.25H2077.45V1105.69H2021.77V1037.25Z"
        fill="#D9D9D9"
      />
      <path
        className="city-one"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M154.082 818.259H98.2937V890.223H154.082V818.259ZM154.082 1071.01H98.2937V1142.97H154.082V1071.01ZM98.2937 944.635H154.082V1016.6H98.2937V944.635ZM154.082 1197.39H98.2937V1269.35H154.082V1197.39Z"
        fill="#D9D9D9"
      />
    </svg>
  );
});

SampleCity.displayName = "SampleCity";

export default SampleCity;
