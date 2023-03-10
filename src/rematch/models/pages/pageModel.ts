import { IComponent } from '@/admin/helpers/interfaces/IComponent'
import { addProps, deleteNestedItem, findNestedItem } from '@/helpers/helpers'
import { createModel } from '@rematch/core'

const initialState: { page: string, content: IComponent } = {
    page: "Index",
    content: {
        type: "",
        id: "",
        category: "CONTAINER",
        childrens: [
           


        ]
    }
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
        newPage(state) {
            return {
                ...state,
                page: "Page",
                title: "untitled-page",
                content: {
                    type: "Div",
                    id: "1",
                    category: "CONTAINER",
                    props: {className: ""},
                    childrens: []
                }
            }
            return state
        },
        addChild(state, payload) {


            findNestedItem(state.content, payload.id, payload.component)

            console.log(state);
            
            return state;

        },
        deleteElement(state, payload) {

            if (state.content.id === payload) {
                state.content.childrens = []
                return state
            } else if (state.content.childrens) {
                deleteNestedItem(state.content.childrens, payload);

            }

            return state
        },

        addProps(state, payload){
            addProps(state.content, payload.id, payload.props)
                        
            return state;

        }

    },

})