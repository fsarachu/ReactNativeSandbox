import {AsyncStorage} from "react-native";
import {APP_ASYNC_STORAGE_KEY} from "../variables/config";

const STORAGE_KEY = `${APP_ASYNC_STORAGE_KEY}:user`;

class UserService {

    save(user) {
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user)).then(() => user);
    }

    get() {
        return AsyncStorage
            .getItem(STORAGE_KEY)
            .then((data) => data ? JSON.parse(data) : null);
    }

    remove() {
        return AsyncStorage.removeItem(STORAGE_KEY);
    }
}

export default new UserService();