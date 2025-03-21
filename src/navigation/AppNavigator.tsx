import React, { useContext } from 'react';
import { Transaction } from "../models/Transaction";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

//components
import colors from '../config/colors';
import { AuthContext } from '../context/AuthContext';

//screns
import LoginScreen from '../screens/LoginScreen';
import TransactionHistoryScreen from "../screens/TransactionHistoryScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    TransactionHistory: undefined;
    TransactionDetail: { transaction: Transaction };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    const { state } = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            {
                state.isAuthenticated ? (
                    <>
                        <Stack.Screen
                            name="TransactionHistory"
                            component={TransactionHistoryScreen}
                            options={{
                                ...TransitionPresets.ModalFadeTransition,
                                headerTitle: 'Transactions',
                                headerTitleStyle: {
                                    color: 'white',
                                    fontSize: 20
                                },
                                headerStyle: {
                                    backgroundColor: colors.blueMain,
                                },
                                headerTitleAlign: 'left',
                            }}
                        />
                        <Stack.Screen
                            name="TransactionDetail"
                            component={TransactionDetailScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                )
            }
        </Stack.Navigator>
    );
};

export default AppNavigator;


