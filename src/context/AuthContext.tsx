import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import { AppState, AppStateStatus } from 'react-native';

//third party libraries
import dayjs from 'dayjs';

interface AuthState {
    isAuthenticated: boolean;
    lastActiveTime: dayjs.Dayjs;
}

type AuthAction =
    | { type: 'LOGIN' }
    | { type: 'LOGOUT' }
    | { type: 'UPDATE_LAST_ACTIVE'; payload: dayjs.Dayjs };

const initialState: AuthState = {
    isAuthenticated: false,
    lastActiveTime: dayjs(),
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, lastActiveTime: dayjs() };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        case 'UPDATE_LAST_ACTIVE':
            return { ...state, lastActiveTime: action.payload };
        default:
            return state;
    }
};

export type AuthContextType = {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType>({
    state: initialState,
    dispatch: () => null,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const handleAppStateChange = (nextAppState: AppStateStatus) => {
            if (nextAppState === 'active') {
                // If app returns to active, check for inactivity (set at 1min)
                if (dayjs().diff(state.lastActiveTime, 'ms') > 60000) {
                    dispatch({ type: 'LOGOUT' });
                }
            } else if (nextAppState === 'background') {
                dispatch({ type: 'UPDATE_LAST_ACTIVE', payload: dayjs() });
            }
        };

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => subscription.remove();
    }, [state.lastActiveTime]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
