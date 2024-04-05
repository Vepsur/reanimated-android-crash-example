PROJECT_NAME := AndroidCrashExample

# simulator name for iOs
SIMULATOR := iPhone 15

bundle-js:
	arch -x86_64 npx react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'

pod-install:
	pod install --project-directory='./ios/'

reset:
	watchman watch-del-all
	rm -rf ./node_modules
	yarn
	rm -rf ./ios/Pods
	rm -f ./ios/Podfile.lock
	make pod-install
	make bundle-js
	bundle install

setup:
	yarn
	make pod-install
	make bundle-js
	bundle install

start-bundler:
	watchman watch-del-all
	yarn start --reset-cache

start-ios:
	yarn ios

adb-remove-app:
	adb -s emulator-5554 uninstall "com.androidcrashexample"

start-android:
	make adb-remove-app || true
	yarn android
