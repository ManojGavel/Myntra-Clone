export const initialState = {
    isHamburgerOpen: false,
};
export const reducer = (state, action) => {
    switch (action.type){
        case "isHamburgerOpen":
            return {
                ...state,
                isHamburgerOpen: !state.isHamburgerOpen,
            }
        default:
            return state;
    }
}