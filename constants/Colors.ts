const tintColorLight = '#6A0DAD'; // Primary purple
const tintColorDark = '#7F39FB'; // Brighter purple for dark mode

export const Colors = {
  light: {
    text: '#333333',
    background: '#F3F1F5',
    tint: tintColorLight,
    icon: tintColorLight,
    tabIconDefault: '#ccc', // A neutral color for inactive tabs if needed later
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
    accent: '#9370DB',
    card: '#FFFFFF',
    buttonText: '#FFFFFF',
    inputBackground: '#EAEAEA',
    statusBar: 'dark',
  },
  dark: { // Define a dark variant as well
    text: '#E0E0E0',
    background: '#121212',
    tint: tintColorDark,
    icon: tintColorDark,
    tabIconDefault: '#555',
    tabIconSelected: tintColorDark,
    primary: tintColorDark,
    accent: '#A475F5',
    card: '#1E1E1E',
    buttonText: '#FFFFFF',
    inputBackground: '#2C2C2C',
    statusBar: 'light',
  },
};
