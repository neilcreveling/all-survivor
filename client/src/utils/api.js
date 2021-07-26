import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    updateUser: function(id, userData) {
        return axios.put("api/user/"+id, userData);
     },
};