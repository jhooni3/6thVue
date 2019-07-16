import Constant from '../Constant'

export default {
    [Constant.CHANGE_CURRENT_COMPONENT]: (state, payload) => {
        state.currentComponent = payload.currentComponent
    },
    [Constant.SELECT_TS_ID]: (state, payload) => {
        state.selectTsId = payload.selectTsId
    },
    [Constant.SET_TS_LIST]: (state, payload) => {
        state.testScenarioList = payload.tsList
    },
    [Constant.SET_TC_LIST]: (state, payload) => {
        state.testCaseList = payload.tcList
    },
    [Constant.SET_TH_LIST]: (state, payload) => {
        state.testHistoryList = payload.thList
    }
}
