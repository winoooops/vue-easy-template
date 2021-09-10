
const user = {
    state: {
       /* your states properties */ 
            username: null,
            addRoutes: null,
            id: null,
    }, 
    commits: {
            SET_NAME: () => {}, 
             SET_ID: () => {}, 
             ADD_ROUTES: () => {}, 
    },
    actions: {
            Login: ({ commit },payload) => {
                return new Promise((resolve, reject) => {
                    /* your action behaviors here */
                })
            },
            Logout: ({ commit },payload) => {
                return new Promise((resolve, reject) => {
                    /* your action behaviors here */
                })
            },
            GetUserInfo: ({ commit },payload) => {
                return new Promise((resolve, reject) => {
                    /* your action behaviors here */
                })
            },
            GenerateRoutes: ({ commit },payload) => {
                return new Promise((resolve, reject) => {
                    /* your action behaviors here */
                })
            },
    }
}

export default user