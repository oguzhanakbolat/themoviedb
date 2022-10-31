import Svg, { Path } from 'react-native-svg';

const BackArrow = props => 
    <Svg width={props.size || 128} height={props.size || 128} viewBox="0 0 128 128" fill="none">
        <Path fill={props.color || "#fff"} d="M48.0999 29.1L13.2 64L48.0999 98.9L53.7999 93.2L28.5 68H92V60H28.5L53.7999 34.8L48.0999 29.1Z"/>
        <Path fill={props.color || "#fff"} d="M112 60H104V68H112V60Z"/>
    </Svg>

export default BackArrow;
