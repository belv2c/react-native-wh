React Native app with react-navigation

# react-native-wh

## Clone & Install Dependencies

- git clone https://github.com/invertase/react-native-wh.git

- cd react-native-wh (cd into your newly created project directory).

- Install NPM packages - i.e run npm install

- [iOS] cd ios and run pod install - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.

- [Android] No additional steps for android here.

## Starting the simulator
Once you have your React Native project initialized, you can run **react-native run-ios** inside the newly created project directory. If everything is set up correctly, you should see your new app running in the iOS Simulator shortly.

## Specifying a device
You can specify the device the simulator should run with the **--simulator** flag, followed by the device name as a string. The default is "iPhone X". If you wish to run your app on an iPhone 5s, run **react-native run-ios --simulator="iPhone 7s**".

The device names correspond to the list of devices available in Xcode. You can check your available devices by running **xcrun simctl list devices** from the console.
