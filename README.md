## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
yarn install
```

FOR ANDROID :

```bash
react-native run-android
```

FOR IOS:

```bash
cd ios && pod install
react-native run-ios
```

If you are copying src folder to your directory make sure to fire below commands in your directory to src folder get works!!

```bash
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack
yarn add redux react-redux redux-saga redux-logger redux-persist
yarn add reactotron-react-native reactotron-redux-saga reactotron-apisauce
yarn add @react-native-community/async-storage
 
#for Tabs
yarn add @react-navigation/bottom-tabs

#for Drawer
yarn add @react-navigation/drawer

yarn add rn-placeholder

cd ios && pod install
cd .. && react-native run-ios
```


<!-- ## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
``` -->

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://google.com/)