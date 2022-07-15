import axios from "axios";

export const getData = async (userId) => {
    let baseURL = "https://jsonplaceholder.typicode.com/users/" + userId
    let baseURL2= "https://jsonplaceholder.typicode.com/posts?id=" + userId
    const getUser = await axios(
        baseURL
    );
    const getPost = await axios(
       baseURL2
    );
    return { getUser, getPost };
};
