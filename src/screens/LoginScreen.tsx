import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//third party libraries
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';

//components
import colors from "../config/colors"
import toastHelpers from '../utils/toastHelpers';
import { AuthContext } from '../context/AuthContext';
import { authenticateUser } from '../services/authService';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen: React.FC = () => {
    const { dispatch } = useContext(AuthContext);

    const insets = useSafeAreaInsets()

    const [pin, setPin] = useState<string[]>([]);

    //animation values
    const transform = useSharedValue(0);
    const style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: transform.value }],
        };
    });

    useEffect(() => {
        setTimeout(() => {
            biometricsAuth()
        }, 500);
    }, [])

    useEffect(() => {
        var isMounted = true;
        if (isMounted) {
            if (pin.length === 6) {
                handleSubmit(pin);
            }
        }
        return () => { isMounted = false }
    }, [pin])

    const triggerShakeAnimation = () => {
        Vibration.vibrate(100);
        transform.value = withSequence(
            withTiming(-15, {
                duration: 50,
            }),
            withTiming(12, {
                duration: 50,
            }),
            withTiming(-8, {
                duration: 50,
            }),
            withTiming(4, {
                duration: 50,
            }),
            withTiming(-1, {
                duration: 50,
            }),
            withTiming(0, {
                duration: 50,
            }),
        )
    }

    const handleNumber = (num: string) => {
        if (Platform.OS === 'android') {
            // Vibration.vibrate(15);
        }
        setPin(prevState => [...prevState, num]);
    }

    const biometricsAuth = async () => {
        try {
            const success = await authenticateUser();

            if (success) {
                dispatch({ type: 'LOGIN' });
            }

        } catch (error) {
            toastHelpers.error((error as Error).message)
        }
    };

    const handleSubmit = async (pin: string[]) => {
        //set default password as 147369 
        const temp = pin.join().replace(/,/g, '')

        if (temp === '147369') {
            dispatch({ type: "LOGIN" });
        } else if (temp !== '147369') {
            setPin([])
            triggerShakeAnimation()
            toastHelpers.error('Wrong PIN. Please try again.')
        }
    }

    return (
        <View style={[pinCodeStyles.container, Platform.OS === 'ios' ?
            { paddingTop: insets.top, paddingBottom: insets.bottom } :
            { paddingTop: StatusBar.currentHeight, paddingBottom: insets.bottom }]}>
            <View style={pinCodeStyles.firstContainer}>
                <Ionicons
                    name='lock-closed'
                    size={50}
                    color={colors.blueMain}
                />
                <Text style={pinCodeStyles.titleText} adjustsFontSizeToFit>Enter your PIN</Text>

                <Animated.View style={[pinCodeStyles.pinContainer, style]}>
                    <View style={[pinCodeStyles.pinShape, pin[0] ? { backgroundColor: colors.blueMain } : null]}></View>
                    <View style={[pinCodeStyles.pinShape, pin[1] ? { backgroundColor: colors.blueMain } : null]}></View>
                    <View style={[pinCodeStyles.pinShape, pin[2] ? { backgroundColor: colors.blueMain } : null]}></View>
                    <View style={[pinCodeStyles.pinShape, pin[3] ? { backgroundColor: colors.blueMain } : null]}></View>
                    <View style={[pinCodeStyles.pinShape, pin[4] ? { backgroundColor: colors.blueMain } : null]}></View>
                    <View style={[pinCodeStyles.pinShape, pin[5] ? { backgroundColor: colors.blueMain } : null]}></View>
                </Animated.View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                    onPress={() => { }}
                    style={pinCodeStyles.forgotContainer}>
                    <Text style={pinCodeStyles.forgotText} adjustsFontSizeToFit>Forgot your PIN?</Text>
                </TouchableOpacity>
            </View>

            <View style={pinCodeStyles.secondContainer}>
                {/* first row */}
                <View style={pinCodeStyles.numberPadContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('1');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('2');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('3');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>3</Text>
                    </TouchableOpacity>
                </View>

                {/* second row */}
                <View style={pinCodeStyles.numberPadContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('4');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('5');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('6');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>6</Text>
                    </TouchableOpacity>
                </View>

                {/* third row */}
                <View style={pinCodeStyles.numberPadContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('7');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('8');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('9');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>9</Text>
                    </TouchableOpacity>
                </View>

                {/* forth row */}
                <View style={pinCodeStyles.numberPadContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            biometricsAuth()
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Ionicons
                            name='finger-print'
                            size={32}
                            color={colors.blueMain}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            handleNumber('0');
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Text style={pinCodeStyles.numberPadText} adjustsFontSizeToFit>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            setPin(prevState => {
                                var temp = prevState;
                                temp.pop();

                                if (prevState.length > 0) {
                                    return [...temp];
                                } else {
                                    return [];
                                }
                            })
                        }}
                        style={pinCodeStyles.numberPadShape}>
                        <Ionicons
                            name='backspace-outline'
                            size={40}
                            color={colors.blueMain}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={pinCodeStyles.thirdContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                    onPress={() => { }}
                    style={pinCodeStyles.logoutContainer}>
                    <Text style={pinCodeStyles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const pinCodeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    firstContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.header,
        marginVertical: '5%',
    },

    pinContainer: {
        flexDirection: 'row',
        marginVertical: '2%',
    },

    pinShape: {
        marginHorizontal: 12,
        width: 15,
        height: 15,
        borderRadius: 100 / 2,
        backgroundColor: '#dcdcdc'
    },

    forgotContainer: {
        marginTop: '7%',
    },

    forgotText: {
        fontSize: 14,
        color: '#9c9c9c'
    },

    secondContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '52%',
        paddingTop: '2%'
    },

    numberPadContainer: {
        flexDirection: 'row',
        flex: 1,
    },

    numberPadShape: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    numberPadText: {
        fontSize: 32,
        color: colors.blueMain,
    },

    thirdContainer: {
        alignItems: 'flex-start',
        paddingTop: '1%',
        height: '8%',
    },

    logoutContainer: {
        paddingHorizontal: '10%'
    },

    logoutText: {
        color: colors.header,
        fontSize: 15,
    }
})

export default LoginScreen;
