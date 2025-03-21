
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

//third party libraries
import { NumericFormat } from "react-number-format";

//components
import colors from "../config/colors";
import { Transaction, TransactionCategoryIcons } from "../models/Transaction";
import Animated, { FadeIn, FadeInRight, FadeOut, FadeOutLeft, LinearTransition } from "react-native-reanimated";

interface TransactionItemProps {
    transaction: Transaction;
    masked: boolean;
    onPress: () => void;
}

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, masked, onPress, }) => {
    const categoryIconName = TransactionCategoryIcons[transaction.category]

    return (
        <AnimatedTouchableOpacity
            layout={LinearTransition}
            activeOpacity={0.7}
            style={styles.card}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <Ionicons name={categoryIconName} size={28} color={colors.blueSecond} />

                <View style={[styles.iconSubContainer, { backgroundColor: transaction.type === 'credit' ? '#20B2AA' : '#FF6347' }]}>
                    {
                        transaction.type === 'credit' ?
                            <Feather name="arrow-up" size={15} color="white" />
                            :
                            <Feather name="arrow-down" size={15} color="white" />
                    }
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text numberOfLines={2} style={styles.description}>
                    {transaction.description}
                </Text>
            </View>

            <View style={styles.amountContainer}>
                <NumericFormat
                    prefix="RM"
                    displayType="text"
                    value={transaction.amount}
                    thousandSeparator={true}
                    fixedDecimalScale={true}
                    decimalScale={2}
                    renderText={value =>
                        <Text numberOfLines={1} style={[styles.amount, transaction.type === 'credit' && !masked && { color: '#4caf50' }]}>
                            {masked ? "****" : `${transaction.type === 'credit' ? '+' : '-'} ${value}`}
                        </Text>
                    }
                />
            </View>
        </AnimatedTouchableOpacity >
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 3,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: "center",
    },

    iconContainer: {
        backgroundColor: '#d4e8ff',
        padding: 12,
        borderRadius: 10,
        marginRight: 15,
    },

    iconSubContainer: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 999,
        right: -5,
        bottom: -5
    },

    infoContainer: {
        flex: 1.5,
    },

    description: {
        fontSize: 15,
        fontWeight: "600",
        color: colors.body,
    },

    amountContainer: {
        flex: 1,
        alignItems: "flex-end",
    },

    amount: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.header,
    },
});

export default TransactionItem;
