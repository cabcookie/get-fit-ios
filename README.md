# GetFit iOS App

This repo builds the iOS app for the [GetFit! project](http://getfitr.de).

## How to start

The project uses [Expo](http://expo.io) to build and package the app completly without using Xcode ([Managed Workflow](https://docs.expo.io/introduction/managed-vs-bare/)).
This comes with some [limitations](https://docs.expo.io/introduction/why-not-expo/).

Install the `expo-cli` to manage your app builds:

```ssh
npm install expo-cli -g
```

## How to test your app

With `npm start` you can test your app in a simulator or on your iPhone (if your network allows device to device communication).

## How to build and deploy your app

This documentation explains how to build your standalone app and deploy it using Apple Store Connect: **[Building Standalone Apps](https://docs.expo.io/distribution/building-standalone-apps/)**.
For the most part, when you want to update your app, just Publish again from Expo CLI. Your users will download the new JS the next time they open the app. To ensure your users have a seamless experience downloading JS updates, you may want to enable background JS downloads. The documentation shows a couple of reasons to update the App in the App Store as well.
