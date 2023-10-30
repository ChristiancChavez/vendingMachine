# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## project locale
`cd vending-machine-app`

## clone this project from:
`https://github.com/ChristiancChavez/vendingMachine`

### Description
## Vending Machine App
The Vending Machine App is a web-based application that simulates the operation of a real-world vending machine. This interactive and user-friendly application allows users to select various products, insert coins, and receive their chosen products.

## Key Features
Product Selection: Users can browse through available products displayed on the vending machine interface. Each product provides information about its name, price, and the number of units left in stock.

Coin Insertion: To purchase a product, users can insert coins of different denominations. The vending machine accepts coins of $0.05, $0.10, $0.25, and $1.00. Users can click on the coin buttons to insert specific coin values.

Change Handling: The application manages the user's inserted money and provides real-time updates on the total amount. Users can also return their inserted money if they change their minds or decide not to make a purchase.

Product Dispensing: When a user selects a product and has sufficient credit, the application dispenses the chosen product and updates the stock count.

User Feedback: Users receive feedback on their actions, such as product selection success and remaining balance.

## Components
The Vending Machine App is composed of several components:

VendingMachine: The main component that displays the vending machine interface.
Product: Represents a product available in the machine.
CoinMethods: Represents the coin insertion buttons.
ProductSelected: Displays a success message when a product is selected.
You can find these components in the src/components directory.

## Technologies Used
React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.

Material-UI: Material-UI is used for designing and styling the components, providing a modern and responsive user interface.

React Testing Library: Unit tests for the application are conducted using React Testing Library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
