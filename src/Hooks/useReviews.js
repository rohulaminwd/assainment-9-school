const { useState, useEffect } = require("react")

const useReviews = () => {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch("Reviews.json")
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return [reviews, setReview];
}
export default useReviews