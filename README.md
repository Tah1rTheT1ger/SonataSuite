# Sonata Suite 🎹

Welcome to Sonata Suite, my first journey into the world of React Native! This application is a multi-instrument simulation app that allows you to play a variety of virtual instruments right from your device.

![](https://github.com/Tah1rTheT1ger/SonataSuite/SonataV1.gif)

## 🚀 About This Project

This project was born out of a desire to learn and explore React Native. As my first project, it has been a fantastic learning experience, covering everything from basic components and styling to more advanced concepts like native modules and multithreading.

The app features a collection of instruments, including:

*   **Grand Piano** 🎹
*   **Drum Pad Kit** 🥁
*   **Acoustic Guitar** 🎸
*   **Concert Violin** 🎻
*   **Pan Flute** 🎶

## Multithreading for a Seamless Audio Experience

To ensure a smooth and responsive user experience, especially when dealing with audio playback, Sonata Suite leverages multithreading in several key areas:

### 1. Audio Processing with `react-native-sound`

The `react-native-sound` library is used to handle all audio playback within the app. When you tap an instrument, the sound is played on a separate native thread. This is crucial for performance because it prevents the UI (JavaScript thread) from becoming blocked while the audio is loading or playing. By offloading the audio processing to a native thread, we ensure that the app remains responsive and the UI stays smooth, even during rapid instrument playing.

### 2. Haptic Feedback with `react-native-haptic-feedback`

To enhance the tactile experience of playing the instruments, haptic feedback is triggered on each touch. Similar to the audio playback, the `react-native-haptic-feedback` library utilizes a separate native thread to generate the vibrations. This prevents any delay or stutter in the UI, providing immediate physical feedback to the user without impacting the performance of the JavaScript thread.

### 3. Multi-touch Functionality in the Drum Pad Kit

The Drum Pad Kit supports multi-touch, allowing you to play multiple drum sounds simultaneously. This is achieved by using `TouchableWithoutFeedback` and managing the state of active pads independently. Each touch event is handled as a separate interaction, and the corresponding sound is played on its own native thread. This implementation ensures that multiple, overlapping sounds can be played without any performance degradation, providing a realistic and immersive drumming experience.

## 🛠️ Getting Started

To get started with the project, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/SonataSuite.git
    ```
2.  **Install the dependencies:**
    ```sh
    cd SonataSuite
    npm install
    ```
3.  **Run the app:**
    ```sh
    # For Android
    npm run android

    # For iOS
    npm run ios
    ```

## 🙏 Acknowledgements

A big thank you to the React Native community and the developers behind the amazing libraries that made this project possible. This has been an incredible learning journey, and I'm excited to continue exploring the possibilities of mobile app development with React Native!
