export type ThemeColors = {
    background: string;
    surface: string;
    primary: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
    card: string;
    cardPressed: string;
    divider: string;
  };
  
  export const lightTheme: ThemeColors = {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    primary: '#2196F3',
    text: '#000000',
    textSecondary: '#666666',
    border: '#E0E0E0',
    error: '#FF4444',
    success: '#4CAF50',
    warning: '#FFA000',
    card: '#FFFFFF',
    cardPressed: '#F5F5F5',
    divider: '#EEEEEE',
  };
  
  export const darkTheme: ThemeColors = {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#90CAF9',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#333333',
    error: '#FF6B6B',
    success: '#81C784',
    warning: '#FFB74D',
    card: '#1E1E1E',
    cardPressed: '#2C2C2C',
    divider: '#333333',
  };