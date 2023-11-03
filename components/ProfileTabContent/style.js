import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  profileTabContentContainer: {
    backgroundColor: '#FFFFFF',
  },
});

export default style;
