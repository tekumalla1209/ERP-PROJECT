# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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


## Overview
This web application is built using React.js and provides functionalities for managing products, orders, and schedules. It includes components for a dashboard, orders management, products management, scheduler, header, and sidebar.

## Folder Structure
- Components: Contains React components for different sections of the application.
- CSS: Includes CSS files for styling components and layout.

## Components
- **Dashboard:** Displays summary cards for products, orders, and a link to the calendar view.
- **OrdersView:** Shows a table of orders with details like order ID, customer name, order date, and status.
- **Products:** Manages products including adding, editing, and deleting products. Displays products in a table format.
- **Scheduler:** Utilizes the `react-big-calendar` library to display a calendar view of orders with the ability to click on events for more details.
- **Header:** Provides navigation icons like search, notifications, and user profile.
- **Sidebar:** Contains links for navigation to different sections of the application.

## Technical Aspects
- **React.js:** Frontend built using React.js library.
- **React Router:** Used for client-side routing.
- **useState and useEffect Hooks:** For managing state and performing side effects.
- **CSS:** Styled using CSS for layout, colors, and responsiveness.
- **Local Storage:** Data storage using the browser's local storage API.
- **Icons:** Utilizes icons from the `react-icons` library.
- **Responsive Design:** CSS media queries for responsiveness.
- **Testing:** Basic setup using Jest and React Testing Library.

## Usage
1. Clone the repository locally.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the development server with `npm start` or `yarn start`.
4. Open the application in a web browser and navigate through different views using the links in the sidebar or header.
5. Interact with the dashboard, orders view, products management, and scheduler to view and manage data.

## Additional Notes
- Ensure Node.js and npm or yarn are installed on your system.
- Check `package.json` for any additional dependencies or scripts.
- Adjust code or configurations based on specific requirements or environment.
