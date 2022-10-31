import Svg, { Path } from 'react-native-svg';

const Favorite = props => 
    <Svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none">
        <Path
            fill={props.color || "none"} 
            stroke={props.color || "#01AAE1"}
            strokeWidth="2"
            d="M21.1195 10.8672L21.1195 10.8672L21.1149 10.8715L12.7302 18.7571C12.3093 19.1143 11.5906 19.1143 11.1697 18.7571L2.78952 10.8757C0.453538 8.62237 0.247215 5.07205 2.40151 2.81321C4.94371 0.465629 8.9236 0.422689 11.3058 2.71983L12 3.38918L12.6941 2.71983C15.0867 0.412707 19.0679 0.475761 21.4992 2.81349C23.7482 5.0695 23.5484 8.6118 21.1195 10.8672Z" />
    </Svg>

export default Favorite;
