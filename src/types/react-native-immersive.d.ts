declare module 'react-native-immersive' {
  export const Immersive: {
    on: () => void;
    off: () => void;
    setImmersive: (isOn: boolean) => void;
    getImmersive: () => void;
    addImmersiveListener: (listener: () => void) => void;
    removeImmersiveListener: (listener: () => void) => void;
  };
}
