import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withRepeat,
} from 'react-native-reanimated';
import {View} from 'react-native';
import React, {useEffect} from 'react';

import Svg, {Text} from 'react-native-svg';

const AnimatedText = Animated.createAnimatedComponent(Text);

export default function AnimatedStyleUpdateExample(props) {
  const animatedStroke = useSharedValue(10);

  const animatedProps = useAnimatedProps(() => ({
    strokeWidth: 3 + 5 * animatedStroke.value,
    strokeOpacity: animatedStroke.value,
  }));

  useEffect(() => {
    animatedStroke.value = withRepeat(withTiming(1, {duration: 500}), -1, true);
  }, [animatedStroke]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Svg width="100%" height="100%">
        <AnimatedText
          x={100}
          y={100}
          animatedProps={animatedProps}
          stroke="red"
          fill="black"
          fontSize={100}>
          hello
        </AnimatedText>
      </Svg>
    </View>
  );
}
