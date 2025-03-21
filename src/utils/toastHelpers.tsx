import Toast from 'react-native-toast-message';

/**
 * 
 * @param title The error title
 * @param message The error message
 */

function success(message: string, title?: string) {
    Toast.show({
        type: 'success',
        position: 'top',
        props: {
            title: title,
            message: message,
        },
        topOffset: 50,
        visibilityTime: 2000,
        autoHide: true
    });
}

function error(message: string, title?: string,) {
    Toast.show({
        type: 'error',
        position: 'bottom',
        props: {
            title: title,
            message: message,
        },
        topOffset: 50,
        visibilityTime: 2000,
        autoHide: true
    });
}

export default {
    success,
    error
}