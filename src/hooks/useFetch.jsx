import React,{ useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState(null)
    const [loading, isLoading] = useState(true)

    useEffect( async () => {
        const response = await fetch(url);
        const res = await response.json();
        setData(res);
        isLoading(false)
    }, [url]);

    return { data, loading }

}

export default useFetch;