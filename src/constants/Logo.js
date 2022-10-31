import Svg, { Path } from 'react-native-svg';

const d = "M245.584 47.2765H327.381C330.351 47.2765 333.293 46.6914 336.037 45.5547C338.781 44.418 341.275 42.7519 343.375 40.6515C345.475 38.5512 347.141 36.0577 348.278 33.3134C349.415 30.5691 350 27.6278 350 24.6574C350.005 21.6838 349.424 18.7384 348.289 15.9897C347.155 13.241 345.489 10.743 343.389 8.63854C341.288 6.53409 338.792 4.86455 336.046 3.72544C333.299 2.58632 330.354 2 327.381 2L245.584 2C242.61 2 239.666 2.58632 236.919 3.72544C234.172 4.86455 231.677 6.53409 229.576 8.63854C227.475 10.743 225.81 13.241 224.675 15.9897C223.541 18.7384 222.96 21.6838 222.965 24.6574C222.965 30.6564 225.348 36.4096 229.59 40.6515C233.831 44.8934 239.585 47.2765 245.584 47.2765ZM12.9288 47.3405H22.9135V10.8582H35.8423V2H0V10.8326H12.9288V47.3405ZM48.8991 47.3405H58.8838V12.5607H59.0118L70.4685 47.3149H78.149L89.9897 12.5607H90.1178V47.3149H100.102V2H85.0614L74.5648 31.5699H74.4368L64.0041 2H48.8991V47.3405ZM114.106 2.15361H129.083C132.57 2.15897 136.044 2.58883 139.426 3.43369C142.507 4.16455 145.41 5.50514 147.965 7.37634C150.435 9.23384 152.424 11.657 153.763 14.4424C155.278 17.7516 156.01 21.3653 155.901 25.0031C155.971 28.3543 155.261 31.6759 153.827 34.7061C152.493 37.4328 150.579 39.8355 148.221 41.7465C145.806 43.6824 143.049 45.1459 140.092 46.0604C136.967 47.0527 133.706 47.5494 130.428 47.5325H114.106V2.15361ZM124.091 38.2519H129.211C131.365 38.2666 133.513 38.0303 135.612 37.5479C137.485 37.1678 139.256 36.3956 140.809 35.2821C142.291 34.1603 143.471 32.6864 144.24 30.9939C145.138 28.9465 145.575 26.7263 145.52 24.491C145.558 22.4882 145.119 20.505 144.24 18.7051C143.441 17.11 142.29 15.7179 140.873 14.6344C139.4 13.5408 137.738 12.7292 135.97 12.2407C134.02 11.6954 132.004 11.424 129.98 11.4342H124.091V38.2519ZM170.366 2.15361H187.263C189.246 2.15458 191.227 2.29574 193.19 2.57604C195.052 2.81728 196.858 3.38036 198.528 4.24014C200.087 5.04933 201.41 6.24895 202.368 7.72197C203.43 9.51946 203.942 11.589 203.84 13.6743C203.928 15.9965 203.168 18.2714 201.702 20.0748C200.207 21.8074 198.235 23.0626 196.032 23.6846V23.7614C197.449 23.9638 198.824 24.3962 200.102 25.0415C201.283 25.6342 202.345 26.4366 203.239 27.4096C204.123 28.384 204.806 29.5238 205.248 30.7634C205.725 32.076 205.963 33.4632 205.952 34.8597C206.029 36.963 205.496 39.0436 204.416 40.8505C203.412 42.4233 202.053 43.7386 200.448 44.6907C198.761 45.7035 196.912 46.418 194.982 46.8029C192.992 47.2295 190.962 47.4441 188.927 47.4429H170.366V2.15361ZM180.351 20.2668H187.583C188.35 20.2709 189.115 20.185 189.862 20.0108C190.576 19.8557 191.257 19.5739 191.871 19.1787C192.471 18.7919 192.968 18.2646 193.318 17.6426C193.693 16.9338 193.878 16.14 193.856 15.3385C193.897 14.5238 193.701 13.7146 193.292 13.0087C192.895 12.4038 192.354 11.9068 191.718 11.5622C191.005 11.2041 190.24 10.958 189.452 10.8326C188.672 10.6817 187.879 10.6045 187.084 10.6021H180.3L180.351 20.2668ZM180.351 39.02H189.311C190.099 39.0221 190.885 38.9362 191.654 38.7639C192.418 38.6076 193.144 38.3032 193.792 37.8679C194.437 37.4417 194.976 36.8722 195.366 36.2038C195.787 35.4406 195.994 34.5785 195.968 33.7076C196.002 32.7888 195.722 31.8859 195.174 31.1475C194.637 30.4831 193.941 29.9638 193.152 29.637C192.331 29.2953 191.471 29.0587 190.591 28.9329C189.722 28.8095 188.845 28.7453 187.967 28.7409H180.415L180.351 39.02Z";

const Logo = props => 
    <Svg width={props.size * 7 || 350} height={props.size || 50} viewBox="0 0 350 50" fill="none">
        <Path fill={props.color || "#fff"} d={d}/>
    </Svg>

export default Logo;