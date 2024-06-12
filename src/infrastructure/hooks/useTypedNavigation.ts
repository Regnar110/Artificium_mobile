import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useTypedNavigation = () => useNavigation<NativeStackNavigationProp<ParamListBase>>();