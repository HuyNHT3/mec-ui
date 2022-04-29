import store from 'store2';

export const STORAGE_KEY={
    GOOGLE_AUTHEN_DATA: 'google-authenticate-data'
}

export const { session, local } = store.namespace('ls');
export default session;

export function SaveUserData(userData){
    setStorage(STORAGE_KEY.GOOGLE_AUTHEN_DATA, userData);
}

export function GetGAUserData(){
    return getStorage(STORAGE_KEY.GOOGLE_AUTHEN_DATA);
}

export function ClearGAUserData(){
    removeStorage(STORAGE_KEY.GOOGLE_AUTHEN_DATA);
}

export function getStorage(key){
    return session(key);
}

export function setStorage(key, value){
    session(key, value)
}

export function removeStorage(key){
    session.remove(key);
}