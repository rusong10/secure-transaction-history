import { Section } from "./sampleData";
import { sampleData } from "./sampleData";
import toastHelpers from "../utils/toastHelpers"
/**
 * Simulates a network request to fetch transaction data
 * @returns A Promise that resolves to an array of sections
 */

export async function fetchTransaction(): Promise<Section[]> {
    return new Promise((resolve, reject) => {
        // simulate a small delay
        setTimeout(() => {
            // 80% chance of success, 20% chance of error for demonstration
            const isError = Math.random() < 0.2
            if (isError) {
                const errorMsg = "Failed to fetch transactions. Please try again"

                //custom toast message to show errors
                toastHelpers.error(errorMsg)

                reject(new Error(errorMsg));
            } else {
                resolve(sampleData)
            }
        }, 1500);
    })
}