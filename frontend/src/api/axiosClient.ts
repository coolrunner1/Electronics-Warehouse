import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        /*if (res.status === 401) {
            window.location.href = “/login”;
        }*/
        if (res.status === 400) {
            let errorMsg = "";
            if (res.data.details) {
                res.data.details.forEach((item: any) => {
                    errorMsg += item.message+"\n";
                })
            } else {
                errorMsg = res.data.message;
            }
            alert(errorMsg);
        }
        if (res.status === 409) {
            alert(res.data.message);
        }
        if (res.status === 501) {
            alert('Not implemented');
        }
        console.error("Looks like there was a problem. Status Code: " + res.status);
        console.error(error);
        //alert("Looks like there was a problem. Status Code: " + res.status);
        return Promise.reject(error);
    }
);

export default axiosClient;