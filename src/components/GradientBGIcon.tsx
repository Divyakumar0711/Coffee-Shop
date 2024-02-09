import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import CustomeIcon from './CustomeIcon';

interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
}
const GradientBGIcon: React.FC<GradientBGIconProps> = ({name, color, size}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={[COLORS.primaryBlackHex, COLORS.primaryGreyHex]}
        style={styles.LinearGradientBG}
        start={{x: 0, y: 0}} //Position
        end={{x: 1, y: 1}} //Position
      >
        <CustomeIcon name={name} size={size} color={color} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  LinearGradientBG: {
    width: SPACING.space_30,
    height: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientBGIcon;
