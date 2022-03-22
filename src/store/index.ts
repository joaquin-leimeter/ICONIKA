import { createStore } from 'vuex'

// not being used for now
export interface State {
  isMobile: boolean
}

const store = createStore<State>({
	state: {
		isMobile: false,
	},
	mutations: {
		// setIsMobile(state: State) {
    //   if(window.innerWidth < 1024) state.isMobile = true;
		// },
	},
  getters: {
  }
})

export default store;
