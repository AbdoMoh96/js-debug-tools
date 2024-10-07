# js-debugger

**js-debugger** is an awesome JavaScript/TypeScript library that simplifies debugging and logging for your web applications. It currently supports logging to Redux DevTools but will expand to support more debugging tools in the future.

---

## Features

- **Seamless Integration with Redux DevTools**: Connect and log actions, state changes, and events directly to Redux DevTools.
- **TypeScript Support**: Written in TypeScript to ensure strong typing and reliable code.
- **Future-proof Design**: The library is designed to support more debugging tools in the future.

---

## Installation

You can install `js-debugger` via npm:

```bash
npm install js-debugger
```

or via bun:

```bash
bun install js-debugger
```

## Example JS Usage

Below is a practical example of how to integrate `js-debugger` with Redux DevTools.

```JS
import ReduxDevToolsConnection from 'js-debugger';

// Create a connection to Redux DevTools
const reduxDevTools = new ReduxDevToolsConnection('MyApp');

// Log an event to Redux DevTools
reduxDevTools.logToReduxDevTools({ message: 'App Initialized' }, 'AppEvent');

// Log another custom event with data
reduxDevTools.logToReduxDevTools({ status: 'success', data: { id: 1, name: 'Test' } }, 'DataFetchSuccess');

// Listen for state changes from Redux DevTools
reduxDevTools.listenToStateChanges((newState) => {
  console.log('State changed:', newState);
});

```

## Example TS Usage

Below is a practical example of how to integrate `js-debugger` with Redux DevTools.

```ts
import ReduxDevToolsConnection from 'js-debugger';

// Create a connection to Redux DevTools
const reduxDevTools = new ReduxDevToolsConnection('MyApp');

// Log an event to Redux DevTools
reduxDevTools.logToReduxDevTools<{ message: string }>({ message: 'App Initialized' }, 'AppEvent');

// Log another custom event with data
reduxDevTools.logToReduxDevTools<{ status: string; data: { id: number; name: string } }>({
  status: 'success',
  data: { id: 1, name: 'Test' }
}, 'DataFetchSuccess');

// Listen for state changes from Redux DevTools
reduxDevTools.listenToStateChanges<{ id: number; name: string }>((newState) => {
  console.log('State changed:', newState);
});
```
## Credits

Developed by **Abdelrahman Mohammed**.
If you like this project and would like to support, you can [buy me a coffee](https://ko-fi.com/abdomoh96).

