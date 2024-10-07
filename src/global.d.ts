interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: {
    connect: (options: { name: string }) => {
      send: (action: string, state: any) => void;
      subscribe: (listener: (message: { type: string; state: any }) => void) => void;
    };
  };
}