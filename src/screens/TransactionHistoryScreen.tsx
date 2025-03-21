import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Ionicons } from "@expo/vector-icons";

//third party libraries
import dayjs from "dayjs";

//components
import colors from "../config/colors";
import { Transaction } from "../models/Transaction";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Section } from "../services/sampleData";
import { fetchTransaction } from "../services/transactionService";
import TransactionItem from "../components/TransactionItem";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";


type Props = StackScreenProps<RootStackParamList, "TransactionHistory">;

const TransactionHistoryScreen: React.FC<Props> = ({ navigation }) => {
    const [data, setData] = useState<Section[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [isMasked, setIsMasked] = useState<boolean>(true);

    const insets = useSafeAreaInsets()

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            readTransactionList(false)
        }

        return () => { isMounted = false }
    }, []);

    const readTransactionList = async (refresh: boolean) => {
        if (refresh) {
            setRefreshing(true)
        }

        try {
            const data = await fetchTransaction();
            setData(data)
        } catch (error) {
            console.log(error)
        }

        if (refresh) {
            setRefreshing(false)
        } else {
            setLoading(false)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setIsMasked(!isMasked)}
                    style={styles.maskedIconContainer}
                >
                    <Ionicons name={isMasked ? "eye-outline" : "eye-off-outline"} size={20} color={colors.blueMain} />
                </TouchableOpacity>
            )
        })
    })

    const renderSectionHeader = ({ section }: { section: Section }) => (
        <View style={styles.header}>
            <Text style={styles.headerText}>{dayjs(section.date).format("D MMM YYYY")}</Text>
            <View style={styles.headerLine} />
        </View>
    )

    const renderItem = ({ item }: { item: Transaction }) => (
        <TransactionItem
            transaction={item}
            masked={isMasked}
            onPress={() =>
                navigation.navigate("TransactionDetail", { transaction: item })
            }
        />
    );

    const renderEmptyList = () => (
        <View style={styles.emptyListContainer}>
            <Text style={{ fontSize: 16 }}>No transactions found</Text>
        </View>
    )

    return (
        <>
            <FocusAwareStatusBar />
            {
                loading ?
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={colors.blueSecond} />
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                    :
                    <SectionList
                        sections={data}
                        keyExtractor={(item) => item.transactionNo}
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                        stickySectionHeadersEnabled
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => readTransactionList(true)} />}
                        ListEmptyComponent={renderEmptyList}
                        contentContainerStyle={{ backgroundColor: 'white', paddingTop: 15, paddingBottom: 10 + insets.bottom }}
                    />
            }
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        paddingTop: 25
    },

    headerLine: {
        backgroundColor: colors.lineGrey,
        width: '100%',
        alignSelf: 'center',
        height: 1,
        marginTop: 10
    },

    headerText: {
        fontSize: 15,
        color: colors.header,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: colors.blueSecond,
    },

    maskedIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 30,
        marginRight: 15
    },

    emptyListContainer: {
        height: '100%',
        paddingVertical: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TransactionHistoryScreen;
