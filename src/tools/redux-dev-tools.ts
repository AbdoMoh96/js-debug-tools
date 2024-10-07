class ReduxDevToolsConnection {
    private devTools;

    constructor(instanceName: string) {
      // Connect to Redux DevTools and set instance name
      if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
        this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
          name: instanceName, // Set the instance name here
        });
      } else {
        console.log("Redux DevTools are not available.");
      }
    }

    logToReduxDevTools<T>(data: T, eventName = "event!!") {
      // Check if Redux DevTools connection exists
      if (this.devTools) {
        // Log the object using the connected instance of Redux DevTools
        this.devTools.send(eventName, data);
      } else {
        console.log("Redux DevTools are not available.");
      }
    }

    listenToStateChanges<T>(callback = (state: T) => {}) {
      // Check if Redux DevTools connection exists
      if (this.devTools) {
        // Subscribe to state changes in Redux DevTools
        this.devTools.subscribe((message) => {
          if (message.type === "DISPATCH" && message.state) {
            // Log the state data from Redux DevTools
            callback(JSON.parse(message.state));
          }
        });
      } else {
        console.log("Redux DevTools are not available.");
      }
    }
  }

  export default ReduxDevToolsConnection;