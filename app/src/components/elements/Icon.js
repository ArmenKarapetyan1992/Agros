import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default props => (
    <FontAwesome5
        name={props.name}
        size={props.size}
        color={props.color}
        solid={props.solid}
        style={props.style}
        onPress={props.action}
    />
);