import {AsyncStorage} from "react-native";
import {APP_ASYNC_STORAGE_KEY} from "../variables/variables";

const STORAGE_KEY = `${APP_ASYNC_STORAGE_KEY}:user`;

class UserService {

    save(user) {
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }

    get() {
        let getUserJSON = AsyncStorage.getItem(STORAGE_KEY);
        return getUserJSON.then((json) => json ? JSON.parse(json) : null);
    }

    login(name) {
        return this.save({name});
    }

    logout() {
        return AsyncStorage.removeItem(STORAGE_KEY);
    }

}

export default new UserService();