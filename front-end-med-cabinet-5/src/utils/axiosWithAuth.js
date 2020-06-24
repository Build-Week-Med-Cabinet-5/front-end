import Axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return Axios.create({
        baseURL: "https://med-cab-pg-db.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;