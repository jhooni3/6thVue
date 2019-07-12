import Constant from '../Constant'

export default {
    //changeCurrentComponent : (state, payload) => { 같은의미
    [Constant.CHANGE_CURRENT_COMPONENT]: (state, payload) => {
        state.currentComponent = payload.currentComponent
    },
    [Constant.SELECT_TS_ID]: (state, payload) => {
        state.selectTsId = payload.selectTsId
    },
    [Constant.IS_COLLAPSE]: (state, payload) => {
        state.isCollapse = payload.isCollapse
        state.asideWidth = payload.asideWidth
    },
    [Constant.ASIDE_WIDTH]: (state, payload) => {
        state.asideWidth = payload.asideWidth
    }


}

// 결국 ""를 뺀 문자가 됨.
// var obj = {
//     a: 1
// }
//
//
// obj.a ==  obj["a"]
// a == ["a"]
