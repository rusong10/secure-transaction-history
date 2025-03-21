import { Transaction } from "../models/Transaction";
import { PaymentMethod } from "../models/Transaction";
import { TransactionCategory } from "../models/Transaction";

export interface Section {
    date: string;
    data: Transaction[];
}

export const sampleData: Section[] = [
    {
        date: "2025-03-20",
        data: [
            {
                id: "1",
                amount: 2100.0,
                datetime: "2025-03-20 09:00:00",
                description: "Salary Deposit",
                type: "credit",
                transactionNo: "TXN001",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Income,
            },
            {
                id: "2",
                amount: 15.0,
                datetime: "2025-03-20 10:30:00",
                description: "Coffee at Starbucks",
                type: "debit",
                transactionNo: "TXN002",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "3",
                amount: 45.0,
                datetime: "2025-03-20 12:15:00",
                description: "Lunch with Friends",
                type: "debit",
                transactionNo: "TXN003",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.FoodAndBeverage,
            },
        ],
    },
    {
        date: "2025-03-19",
        data: [
            {
                id: "4",
                amount: 100.0,
                datetime: "2025-03-19 08:15:00",
                description: "Gift Received",
                type: "credit",
                transactionNo: "TXN004",
                paymentMethod: PaymentMethod.Cash,
                category: TransactionCategory.Gift,
            },
            {
                id: "5",
                amount: 75.0,
                datetime: "2025-03-19 19:45:00",
                description: "Dinner at Italian Bistro",
                type: "debit",
                transactionNo: "TXN005",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "6",
                amount: 50.0,
                datetime: "2025-03-19 21:00:00",
                description: "Taxi Ride Home",
                type: "debit",
                transactionNo: "TXN006",
                paymentMethod: PaymentMethod.Cash,
                category: TransactionCategory.Transport,
            },
        ],
    },
    {
        date: "2025-03-18",
        data: [
            {
                id: "7",
                amount: 500.0,
                datetime: "2025-03-18 15:20:00",
                description: "End of Year Bonus",
                type: "credit",
                transactionNo: "TXN007",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Income,
            },
            {
                id: "8",
                amount: 125.0,
                datetime: "2025-03-18 12:30:00",
                description: "Online Refund",
                type: "credit",
                transactionNo: "TXN008",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Refund,
            },
            {
                id: "9",
                amount: 35.0,
                datetime: "2025-03-18 18:45:00",
                description: "Dinner",
                type: "debit",
                transactionNo: "TXN009",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.FoodAndBeverage,
            },
        ],
    },
    {
        date: "2025-03-17",
        data: [
            {
                id: "10",
                amount: 120.0,
                datetime: "2025-03-17 14:15:00",
                description: "Electricity Bill",
                type: "debit",
                transactionNo: "TXN010",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Bills,
            },
            {
                id: "11",
                amount: 60.0,
                datetime: "2025-03-17 18:00:00",
                description: "Gasoline",
                type: "debit",
                transactionNo: "TXN011",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.Transport,
            },
            {
                id: "12",
                amount: 150.0,
                datetime: "2025-03-17 10:00:00",
                description: "Freelance Payment Received",
                type: "credit",
                transactionNo: "TXN012",
                paymentMethod: PaymentMethod.PayPal,
                category: TransactionCategory.Income,
            },
            {
                id: "13",
                amount: 40.0,
                datetime: "2025-03-17 08:30:00",
                description: "Groceries",
                type: "debit",
                transactionNo: "TXN013",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.Groceries,
            },
        ],
    },
    {
        date: "2025-03-16",
        data: [
            {
                id: "14",
                amount: 450.0,
                datetime: "2025-03-16 15:30:00",
                description: "Rent Payment",
                type: "debit",
                transactionNo: "TXN014",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Bills,
            },
            {
                id: "15",
                amount: 75.0,
                datetime: "2025-03-16 09:15:00",
                description: "Grocery Shopping",
                type: "debit",
                transactionNo: "TXN015",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.Groceries,
            },
            {
                id: "16",
                amount: 50.0,
                datetime: "2025-03-16 16:10:00",
                description: "Movie Tickets",
                type: "debit",
                transactionNo: "TXN016",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.Entertainment,
            },
        ],
    },
    {
        date: "2025-03-15",
        data: [
            {
                id: "17",
                amount: 20.0,
                datetime: "2025-03-15 08:20:00",
                description: "Morning Coffee",
                type: "debit",
                transactionNo: "TXN017",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "18",
                amount: 70.0,
                datetime: "2025-03-15 14:45:00",
                description: "Gym Membership Renewal",
                type: "debit",
                transactionNo: "TXN018",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Fitness,
            },
            {
                id: "19",
                amount: 55.0,
                datetime: "2025-03-15 17:00:00",
                description: "Lunch with Friends",
                type: "debit",
                transactionNo: "TXN019",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "20",
                amount: 200.0,
                datetime: "2025-03-15 11:30:00",
                description: "Bonus Received",
                type: "credit",
                transactionNo: "TXN020",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Income,
            },
        ],
    },
    {
        date: "2025-03-14",
        data: [
            {
                id: "21",
                amount: 200.0,
                datetime: "2025-03-14 10:00:00",
                description: "Freelance Project Payment",
                type: "credit",
                transactionNo: "TXN021",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Income,
            },
            {
                id: "22",
                amount: 45.0,
                datetime: "2025-03-14 15:15:00",
                description: "Dinner with Friends",
                type: "debit",
                transactionNo: "TXN022",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "23",
                amount: 100.0,
                datetime: "2025-03-14 12:00:00",
                description: "Refund from Store",
                type: "credit",
                transactionNo: "TXN023",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Refund,
            },
        ],
    },
    {
        date: "2025-03-13",
        data: [
            {
                id: "24",
                amount: 35.0,
                datetime: "2025-03-13 08:00:00",
                description: "Breakfast",
                type: "debit",
                transactionNo: "TXN024",
                paymentMethod: PaymentMethod.Cash,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "25",
                amount: 90.0,
                datetime: "2025-03-13 06:00:00",
                description: "Dinner at Italian Restaurant",
                type: "debit",
                transactionNo: "TXN025",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "26",
                amount: 125.0,
                datetime: "2025-03-13 11:00:00",
                description: "Freelance Payment Received",
                type: "credit",
                transactionNo: "TXN026",
                paymentMethod: PaymentMethod.PayPal,
                category: TransactionCategory.Income,
            },
            {
                id: "27",
                amount: 50.0,
                datetime: "2025-03-13 13:30:00",
                description: "Shopping at Mall",
                type: "debit",
                transactionNo: "TXN027",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.Shopping,
            },
        ],
    },
    {
        date: "2025-03-12",
        data: [
            {
                id: "28",
                amount: 35.0,
                datetime: "2025-03-12 08:00:00",
                description: "Breakfast at Cafe",
                type: "debit",
                transactionNo: "TXN028",
                paymentMethod: PaymentMethod.Cash,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "29",
                amount: 90.0,
                datetime: "2025-03-12 18:00:00",
                description: "Dinner at Italian Restaurant",
                type: "debit",
                transactionNo: "TXN029",
                paymentMethod: PaymentMethod.DebitCard,
                category: TransactionCategory.FoodAndBeverage,
            },
            {
                id: "30",
                amount: 80.0,
                datetime: "2025-03-12 13:00:00",
                description: "Grocery Shopping",
                type: "debit",
                transactionNo: "TXN030",
                paymentMethod: PaymentMethod.CreditCard,
                category: TransactionCategory.Groceries,
            },
            {
                id: "31",
                amount: 210.0,
                datetime: "2025-03-12 11:30:00",
                description: "Salary Deposit",
                type: "credit",
                transactionNo: "TXN031",
                paymentMethod: PaymentMethod.BankTransfer,
                category: TransactionCategory.Income,
            },
        ],
    },
];
