import { Ionicons } from "@expo/vector-icons";

export enum PaymentMethod {
    CreditCard = "Credit Card",
    DebitCard = "Debit Card",
    BankTransfer = "Bank Transfer",
    Cash = "Cash",
    PayPal = "PayPal",
    MetroCard = "Metro Card",
}

export enum TransactionCategory {
    Income = "Income",
    FoodAndBeverage = "Food & Beverage",
    Shopping = "Shopping",
    Transport = "Transport",
    Groceries = "Groceries",
    Entertainment = "Entertainment",
    Fitness = "Fitness",
    Gift = "Gift",
    Bills = "Bills",
    Refund = "Refund"
}

// Mapping Payment Methods to Ionicons
export const PaymentMethodIcons: Record<PaymentMethod, keyof typeof Ionicons.glyphMap> = {
    [PaymentMethod.CreditCard]: "card-outline",
    [PaymentMethod.DebitCard]: "card-outline",
    [PaymentMethod.BankTransfer]: "swap-horizontal-outline",
    [PaymentMethod.Cash]: "cash-outline",
    [PaymentMethod.PayPal]: "logo-paypal",
    [PaymentMethod.MetroCard]: "subway-outline",
};

// Mapping Transaction Categories to Ionicons
export const TransactionCategoryIcons: Record<TransactionCategory, keyof typeof Ionicons.glyphMap> = {
    [TransactionCategory.Income]: "cash-outline",
    [TransactionCategory.FoodAndBeverage]: "fast-food-outline",
    [TransactionCategory.Shopping]: "cart-outline",
    [TransactionCategory.Transport]: "car-outline",
    [TransactionCategory.Groceries]: "basket-outline",
    [TransactionCategory.Entertainment]: "videocam-outline",
    [TransactionCategory.Fitness]: "barbell-outline",
    [TransactionCategory.Gift]: "gift-outline",
    [TransactionCategory.Bills]: "receipt-outline",
    [TransactionCategory.Refund]: "refresh-circle-outline",
};

export interface Transaction {
    id: string;
    amount: number;
    datetime: string;
    description: string;
    type: "debit" | "credit";
    transactionNo: string;
    paymentMethod: PaymentMethod;
    category: TransactionCategory;
}
