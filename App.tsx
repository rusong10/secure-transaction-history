import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//third party libraries
import Toast from 'react-native-toast-message';

//commponents
import { toastConfig } from './src/config/toastConfig';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppNavigator />
                <Toast config={toastConfig} />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;

