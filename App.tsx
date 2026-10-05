// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import { NewAppScreen } from '@react-native/new-app-screen';
// import {
//   StatusBar,
//   StyleSheet,
//   useColorScheme,
//   View,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';
// import { BleManager } from 'react-native-ble-plx';

// export const manager = new BleManager();

// function scanAndConnect() {
//   manager.startDeviceScan(null, null, (error, device) => {
//     console.log(JSON.stringify(device?.name))

//     if (error) {
//       // Handle error (scanning will be stopped automatically)
//       return;
//     }

//     // Check if it is a device you are looking for based on advertisement data
//     // or other criteria.
//     if (device?.name === 'TI BLE Sensor Tag' || device?.name === 'SensorTag') {
//       // Stop scanning as it's not necessary if you are scanning for one device.
//       manager.stopDeviceScan();

//       // Proceed with connection.
//     }
//   });
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   React.useEffect(() => {
//     requestBluetoothPermission();
//     scanAndConnect();
//     const subscription = manager.onStateChange(state => {
//       console.log('Bluetooth state:', state);
//       if (state === 'PoweredOn') {
//         scanAndConnect();
//         subscription.remove();
//       }
//     }, true);
//     return () => subscription.remove();
//   }, [manager]);

//   const requestBluetoothPermission = async () => {
//     console.log('Requesting Bluetooth permissions...');
//     if (Platform.OS === 'ios') {
//       return true;
//     }
//     if (
//       Platform.OS === 'android' &&
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     ) {
//       const apiLevel = parseInt(Platform.Version.toString(), 10);

//       if (apiLevel < 31) {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       }
//       if (
//         PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN &&
//         PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
//       ) {
//         const result = await PermissionsAndroid.requestMultiple([
//           PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//           PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         ]);

//         return (
//           result['android.permission.BLUETOOTH_CONNECT'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           result['android.permission.BLUETOOTH_SCAN'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           result['android.permission.ACCESS_FINE_LOCATION'] ===
//             PermissionsAndroid.RESULTS.GRANTED
//         );
//       }
//     }
//   };

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;


import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { BeaconWebView } from "@dotexecutable/mobile-webview-sdk/react-native";

const App = () => {
  return (
    <BeaconWebView
      uri="https://2381-2405-201-d044-b842-ad79-9e43-57d-89b8.ngrok-free.app"
    />
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={styles.heartRateTitleWrapper}>
  //       {connectedDevice ? (
  //         <>
  //           <PulseIndicator />
  //           <Text style={styles.heartRateTitleText}>Your Heart Rate Is:</Text>
  //           <Text style={styles.heartRateText}>{heartRate} bpm</Text>
  //         </>
  //       ) : (
  //         <Text style={styles.heartRateTitleText}>
  //           Please click on Connect to find bluetooth devices
  //         </Text>
  //       )}
  //     </View>
  //     <TouchableOpacity
  //       onPress={connectedDevice ? disconnectFromDevice : openModal}
  //       style={styles.ctaButton}>
  //       <Text style={styles.ctaButtonText}>
  //         {connectedDevice ? 'Disconnect' : 'Connect'}
  //       </Text>
  //     </TouchableOpacity>
  //     {console.log('all devices', JSON.stringify(allDevices))}
  //     <DeviceModal
  //       closeModal={hideModal}
  //       visible={isModalVisible}
  //       connectToPeripheral={connectToDevice}
  //       devices={allDevices}
  //     />
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'black',
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;