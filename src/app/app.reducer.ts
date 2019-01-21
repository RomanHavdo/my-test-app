export interface State {
    users: Array<Object>;
    posts: Array<Object>;
    comments: Array<Object>;
}

const initialState:State = {
    users: [],
    posts: [],
    comments: []
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'DATA_LOADIONG':
            return {
                users:[{'id':'0'}],
                posts:[{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"}],
                comments:[{'id':'2'}]
            };
        default:
            return state
    }

}

