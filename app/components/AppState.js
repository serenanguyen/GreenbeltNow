import { observable, action } from 'mobx';

class AppState {
    @observable isLoading = false;

}

export default new AppState();