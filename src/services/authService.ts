import * as LocalAuthentication from 'expo-local-authentication';

export const authenticateUser = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        try {
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            if (!hasHardware) {
                return reject(new Error('Biometric hardware not available'));
            }

            const isEnrolled = await LocalAuthentication.isEnrolledAsync();
            if (!isEnrolled) {
                return reject(new Error('No biometrics enrolled'));
            }

            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate to access transaction history',
                cancelLabel: 'Cancel',
                disableDeviceFallback: true
            });

            if (!result.success) {
                return reject(new Error('Authentication failed'));
            }

            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
};
