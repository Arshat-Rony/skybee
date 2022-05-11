const { useState, useEffect } = require("react")

const useData = (url) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(getData => setdata(getData))
    }, [])

    return [data, setdata]
}

export default useData;