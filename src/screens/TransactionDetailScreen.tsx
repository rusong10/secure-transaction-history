
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

//third party libraries
import dayjs from 'dayjs';
import { NumericFormat } from 'react-number-format';

//components
import colors from '../config/colors';
import { TransactionCategoryIcons } from '../models/Transaction';
import { PaymentMethodIcons } from '../models/Transaction';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

type Props = StackScreenProps<RootStackParamList, 'TransactionDetail'>;

const TransactionDetailScreen: React.FC<Props> = ({ navigation, route }) => {
    const { transaction } = route.params;

    const insets = useSafeAreaInsets()

    //PaymentMethod and Category icon names
    const paymentIconName = PaymentMethodIcons[transaction.paymentMethod];
    const categoryIconName = TransactionCategoryIcons[transaction.category];

    return (
        <>
            <FocusAwareStatusBar />
            {/* background color to fall behind refresh */}
            <View style={styles.background} />

            {/* extend header */}
            <View style={[{ width: '100%', backgroundColor: colors.blueMain }, Platform.select({ ios: { height: insets.top }, android: { height: StatusBar.currentHeight } })]} />

            <ScrollView contentContainerStyle={styles.container} >
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        hitSlop={20}
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                        <Ionicons name={categoryIconName} size={30} color={'white'} />
                    </View>

                    <NumericFormat
                        prefix="RM"
                        displayType="text"
                        value={transaction.amount}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        renderText={value =>
                            <Text style={styles.amountText}>{`${transaction.type === 'credit' ? '+' : '-'} ${value}`}</Text>
                        }
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.infoTitleText}>Transaction details</Text>

                    <View style={{ marginVertical: 15 }}>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoLeftContainer}>
                                <Text numberOfLines={2} style={styles.infoLeftText}>Transaction no.</Text>
                            </View>
                            <View style={styles.infoRightContainer}>
                                <Text style={styles.infoRightText}>{transaction.transactionNo}</Text>
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoLeftContainer}>
                                <Text numberOfLines={2} style={styles.infoLeftText}>Date</Text>
                            </View>
                            <View style={styles.infoRightContainer}>
                                <Text style={styles.infoRightText}>{dayjs(transaction.datetime).format("D MMM YYYY, hh:mm A")}</Text>
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoLeftContainer}>
                                <Text numberOfLines={2} style={styles.infoLeftText}>Payment method</Text>
                            </View>
                            <View style={{ flex: 1.5, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <Text style={styles.infoRightText}>{transaction.paymentMethod}</Text>
                                <Ionicons name={paymentIconName} size={20} color={colors.blueSecond} style={{ marginLeft: 5 }} />
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoLeftContainer}>
                                <Text style={styles.infoLeftText}>Category</Text>
                            </View>
                            <View style={styles.infoRightContainer}>
                                <Text style={styles.infoRightText}>{transaction.category}</Text>
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoLeftContainer}>
                                <Text numberOfLines={2} style={styles.infoLeftText}>Description</Text>
                            </View>
                            <View style={styles.infoRightContainer}>
                                <Text style={styles.infoRightText}>{transaction.description}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.blueMain,
    },

    background: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        backgroundColor: colors.blueMain
    },

    topContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50
    },

    backButton: {
        padding: 8,
        backgroundColor: '#f6f6f6',
        borderRadius: 50,
        position: 'absolute',
        top: 15,
        left: 15
    },

    iconContainer: {
        height: 70,
        width: 70,
        borderRadius: 70,
        margin: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    amountText: {
        fontSize: 30,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'white'
    },

    bottomContainer: {
        flex: 1,
        padding: 20,
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    infoTitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.header
    },

    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10
    },

    infoLeftContainer: {
        flex: 1,
        marginRight: 5
    },

    infoLeftText: {
        fontSize: 15,
        color: colors.body
    },

    infoRightContainer: {
        flex: 2,
        alignItems: 'flex-end'
    },

    infoRightText: {
        fontSize: 15,
        color: colors.header
    }
});

export default TransactionDetailScreen;
