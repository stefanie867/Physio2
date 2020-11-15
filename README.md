Physio

How to run the application
===========================

0. git clone, npm i

1. Start the emulator: C:\Android\emulator>emulator -avd Pixel_API_28_AOSP 

2. To start Metro, run npx react-native start.

3. npx react-native run-android

4. r - Reload d - Debug

How to run unit tests
=====================

npm test

How to run E2E tests
====================

1. detox build --configuration android.emu.debug
2. npx react-native start
3. detox test --configuration android.emu.debug