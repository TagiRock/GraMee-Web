import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { AppActions } from "./app/action";
import { AppState} from "./app/state";
import { AppMutations } from "./app/mutations";
import { AppGetters } from "./app/getter";

import Vuex, { createNamespacedHelpers } from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";
const state: AppState = {
};

/*tslint:disable　no-shadowed-variable　arrow-parens*/
const getters: DefineGetters<AppGetters, AppState> = {
};

const mutations: DefineMutations<AppMutations, AppState> = {
};

const actions: DefineActions<AppActions, AppState, AppMutations, AppGetters> = {
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = createNamespacedHelpers<AppState, AppGetters, AppMutations, AppActions>("App");

export const app = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};

export const Getters = {
};
export const Actions = {
};