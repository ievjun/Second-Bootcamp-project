import {useState, useEffect} from 'react';
import axios from 'react';

function useAxiosPost(uri, data) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
    });

    useEffect(() => {

    }, []);
    // const url='http://localhost:3001/tasks'; //adrese UZ kuru suta
    // await axios.post(url, {
    //     title,
    //     description

    // });
}

export default useAxiosPost;