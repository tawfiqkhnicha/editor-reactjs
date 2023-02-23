import { createModel } from '@rematch/core'

const initialState : {page: string} = {
    page: "Index",
}
export const pageModel = createModel()({
    state: { ...initialState },
    reducers: {
            setPage(state, payload) {
                return {
                    ...state,
                    page: payload.page,
                }
        },
    },

})