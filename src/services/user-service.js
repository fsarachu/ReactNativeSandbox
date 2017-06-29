import {AsyncStorage} from "react-native";

class UserService {

    setUser(user) {
        return AsyncStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        let getUserJSON = AsyncStorage.getItem('user');
        return getUserJSON.then((json) => json ? JSON.parse(json) : null);
    }

}

export default new UserService();