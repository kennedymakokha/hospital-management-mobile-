import messaging from '@react-native-firebase/messaging';
let token;
const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        token = (await messaging().getToken()).toString();
    } else {
        console.log('REQUEST PERMISSION DENIED');
    }
};
const getNewFCMToken = async () => {
    try {
        await requestUserPermission();
        console.log('Token:', token);

    } catch (error) {
        console.error('Error getting new FCM token:', error);
    }
};
export default getNewFCMToken;
