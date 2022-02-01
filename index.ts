
import { NativeModules } from 'react-native';

const { RNDisableBatteryOptimizationsAndroid } = NativeModules;

export default RNDisableBatteryOptimizationsAndroid as IRNDisableBatteryOptimizations;

interface IRNDisableBatteryOptimizations {
  isBatteryOptimizationEnabled(): Promise<boolean>;
  openBatteryModal(): void;
  enableBackgroundServicesDialogue(): void;
}
