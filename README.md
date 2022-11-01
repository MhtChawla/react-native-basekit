# react-native-basekit

Basic react native project v0.68.0 (openjdk64-18) setup with NativeBase UI library v3.4.x &amp; preset folder structure &amp; other basic necessties

# This repo includes setup of following

- React Native v0.68
- NativeBase (UI library) v3.4.x
- Basic folder structure
- React native reanimated v2.11.0
- React Navigation (stack, tab & drawer) v6.x
- Responsive file added in utils (learn from anirudh)
- MobxStateTree or MST (state management)
- React native permissions v3.6.1
- Axios v1.1.3 (with index.js file setup for post, get, put, delete)
- React native toast message v2.1.5
- React native vector icons v9.2.0
- React native fast image v8.6.1
- React native webview v11.23.1
- @react-native-async-storage/async-storage
- React native internet connection alert v0.1.9 (un-done)
- React native background timer v2.4.1 (un-done)
- React native image picker v4.10.0 (un-done)
- yup, form filling etc. (from anirudh) & ask app.js file structure from anirudh, also ask other nativebase doubts

# HELP / INFO

1. NativeBase, sometimes space={2}, space={3} etc.. prop does n't work so there is premade component for that <AddSpace> in src/utils/AddSpace.js - just use as wrapper & it'll add spaces.

2. NativeBase, wrap App.js around <NativeBaseProvider> & to write full code

3. Reanimated, always import this at top of app.js -> import 'react-native-gesture-handler'

4. Responsive-ui, file added in src/utils/responsive-ui.js use.......

5. MST, just read the doc in src/store/help.txt

6. React-native Permissions, info.plist for ios & androidmanifest.xml for android, uncomment permission you want to use in app & use function
   requestDevicePermission('permission name') from src/utils/request-permissions.js

7. Config.js, please provide APP_NAME, BASE_URL of your app here and other config details (if any)!

8. axios.js, easily send post & get calls on api using functions at src/utils/axios.js. USE LIKE THIS IN APP -->

   const xyz = async() => {
   var response = await getData('endpoint','body')
   }

   where xyz is any function like pressHandler etc..

9. Toast, always import & add <Toast /> at end of innercode in App.js

10. Vector-Icons, Use with <Icon /> from 'native-base' & find the icon names here -> https://oblador.github.io/react-native-vector-icons/ (try avoiding fontAwesome5 icons, they might break code)

11. Fast Image, always use <FastImage /> component rather than <Image>.

12. Async storage, library added but basic use is here ->

    const xyz = async(value) => {
    await AsyncStorage.setItem('key name', value)
    }

    where xyz is any function to store value here & we can get the same item using AsyncStorage.getItem('key name')

13. 
