import React from 'react';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native';

export default function FocusAwareStatusBar(props: StatusBarProps) {
    const isFocused = useIsFocused();

    return isFocused ? (
        <StatusBar
            backgroundColor="transparent"
            animated
            style="light"
            {...props}
        />
    ) : null;
}