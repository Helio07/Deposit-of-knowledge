import Vue from 'vue'

export const userKey = '_knowledge_user'
export const baseApiUrl = 'http://localhost:3000'

export function ShowError(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, ShowError, userKey }