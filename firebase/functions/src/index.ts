import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { config } from "firebase-functions";
import { UserRecord } from "./model/User";
import { userDao } from "./database/user";

const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
}
export const firestore = admin.firestore();

export const createUser = functions.auth.user().onCreate(event => {
    const user: UserRecord = {
        id: event.data.uid,
        email: event.data.email,
        name: event.data.displayName || "",
        create_at: event.timestamp
    };
    return userDao.createUser(user.id, user);
});

export const deleteUser = functions.auth.user().onDelete(event => {
    return userDao.deleteUser(event.data.uid);
});