import Constant from '../Constant'
import Config from '../Config'
import axios from 'axios'

export default {
    //tsList : [GET] /simple/ts/List
    [Constant.API_CALL_TS_LIST]: (store, payload) => {
      axios.get(Config.LOCAL_SERVER_BASE_URL + "/simple/ts/list")
           .then((response) => {
               console.log(response)
               store.commit(Constant.SET_TS_LIST, {
                   tsList: response.data.grid01
               })
           })
           .catch((error) => {
               console.log(error)
           })
    },

    //tcList : [GET] /simple/tc/List
    [Constant.API_CALL_TC_LIST]: (store, payload) => {
        axios.get(Config.LOCAL_SERVER_BASE_URL + "/simple/tc/list")
            .then((response) =>{
                console.log(response)
                store.commit(Constant.SET_TC_LIST, {
                    tcList: response.data.grid01
                })
            })
            .catch((error)=>{
                console.log(error)
            })

    },

    //thList : [GET] /simple/th/List
    [Constant.API_CALL_TH_LIST]: (store, payload) => {
        axios.get(Config.LOCAL_SERVER_BASE_URL + "/simple/th/list")
            .then((response) =>{
                console.log(response)
                store.commit(Constant.SET_TH_LIST, {
                    thList: response.data.grid01
                })
            })
            .catch((error)=>{
                console.log(error)
            })

    }
}
