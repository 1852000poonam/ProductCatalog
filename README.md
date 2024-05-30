# Product Listing

## Overview

**Product Listing** is a React Native application designed to provide a seamless user experience for viewing a list of products. The app includes a Welcome Screen, a Login Screen with local validation, and a Home Screen that displays products fetched from an API.

## Features

- **Welcome Screen**: The initial screen that welcomes the user to the app.
- **Login Screen**: Allows users to enter their credentials with local validation before proceeding to the Home Screen.
- **Home Screen**: Displays a list of products retrieved from an external API.

## Tech Stack

- **React Native**: For building the cross-platform mobile application.
- **React Navigation**: For handling navigation between different screens.
- **Axios**: For making HTTP requests to fetch product data from the API.
- **API**: Used for fetching the list of products.

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js
- npm or Yarn
- React Native CLI

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/product-listing.git
    cd product-listing
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Install Pods for iOS:
    ```sh
    cd ios
    pod install
    cd ..
    ```

### Running the App

1. Start the Metro bundler:
    ```sh
    npx react-native start
    ```

2. Run the app on your desired platform:

    For iOS:
    ```sh
    npx react-native run-ios
    ```

    For Android:
    ```sh
    npx react-native run-android
    ```

## Usage

1. **Welcome Screen**: This is the first screen users see when they open the app.
2. **Login Screen**: Users must enter their username and password. Local validation ensures the credentials are correctly formatted.
3. **Home Screen**: After successful login, the Home Screen displays a list of products. The products are fetched from an API using Axios.

## API Integration

The API calls are handled using Axios. All API-related code is located in the `src/services/api.js` file.

```javascript
// src/services/api.js
import axios from 'axios';

const API_URL = 'https://api.example.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};


