import {AsyncStorage} from "react-native";

class UserService {

    setUser(user) {
        return AsyncStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        let getUserJSON = AsyncStorage.getItem('user');
        return getUserJSON.then((json) => json ? JSON.parse(json) : null);
    }

    login(name) {
        return this.setUser({name});
    }

    logout() {
        return AsyncStorage.removeItem('user');
    }

}

export default new UserService();