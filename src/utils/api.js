import * as apiLink from '../constants/apiType';
import axios from 'axios';

function callAPI(method, endpoint, data){
    return axios({
        method : method,
        url : `${apiLink.getList}/${endpoint}`,
        data : data,
    })
}

export default callAPI;