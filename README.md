This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Tools Versions
- node v16.3.0
- npm 7.5.2

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Serve the app on a local server:**
```bash
serve -s build
```

### Firebase Deployment

```bash
firebase login
firebase init
firebase serve # Start the local server, use this before deploy
firebase deploy
```

### Setting Up a CI/CD Pipeline for Automated Integration and Deployment

We'll use GitHub Actions for our CI/CD pipeline since it integrates seamlessly with GitHub. Here's how you can set it up:

##### Steps to Create a CI/CD Pipeline

1. **Create GitHub Workflows**:
   - Define your CI/CD jobs in a GitHub Actions workflow file. Typically, this file is named `deployment.yml` and placed in the `.github/workflows` directory in your repository.

2. **Firebase Deployment with CI Tokens**:
   - Firebase requires a CI token for deployment in a CI/CD environment. Generate a token using the Firebase CLI:
    ```bash
    firebase login:ci # to get CI token and store token into your CI environment
    firebase deploy --token "$FIREBASE_TOKEN"
    ```
3. **Configure GitHub Environments and Secrets:**
  - In your repository's settings, create an environment (e.g., "production").
  - Add your CI/CD secrets to this environment, such as FIREBASE_TOKEN.
4. **Specify Branch and Environment in Workflow:**
   - In `deployment.yml`, specify which branch should trigger the deployment and which environment to use. This helps control which code gets deployed and where.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
