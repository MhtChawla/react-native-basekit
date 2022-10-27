# react-native-basekit

Basic react native project v0.68.0 setup with NativeBase UI library v3.4.x &amp; preset folder structure &amp; other basic necessties

# This repo includes setup of following

- React Native v0.68
- NativeBase (UI library) v3.4.x
- Basic folder structure
- React native reanimated v2.11.0
- React Navigation (stack, tab & drawer) v6.x
- Responsive file added in utils (learn from anirudh)
- MobxStateTree (state management)
- React native permissions v3.6.1 
- Axios (with index.js file setup for post, get, put, delete) (un-done)
- React native vector icons v9.2.0 (un-done)
- React native fast image v8.6.1 (un-done)
- React native webview v11.23.1 (un-done)
- @async-storage v1.17.10, (un-done)
- React native internet connection alert v0.1.9 (un-done)
- React native background timer v2.4.1 (un-done)
- React native image picker v4.10.0 (un-done)
- React native gesture handler (import in app.js) (un-done)

# HELP / INFO

1. NativeBase, sometimes space={2}, space={3} etc.. prop does n't work so there is premade component for that <AddSpace> in src/utils/AddSpace.js - just use as wrapper & it'll add spaces.

2. NativeBase, wrap App.js around <NativeBaseProvider> & to write full code

3. Reanimated, always import this at top of app.js -> import 'react-native-gesture-handler' 

4. Responsive-ui, file added in src/utils/responsive-ui.js use.......

5. MST, just read the doc in src/store/help.txt

6. React-native Permissions, info.plist for ios & androidmanifest.xml for android, uncomment permission you want to use in app & use function 
requestDevicePermission('permission name') from src/utils/request-permissions.js

7. Config.js, please provide APP_NAME of your app here!

8. 