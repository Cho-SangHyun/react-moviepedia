import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import { getReviews } from "../api";

function App(){
    const [items, setItems] = useState([]);
    // 정렬기준에 대한 state
    const [order, setOrder] = useState('createdAt');
    // 정렬기준을 통해 아이템 정렬
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    // setter함수를 이용해 정렬기준을 바꾸는 메소드들
    const handleNewestClick = () => setOrder('createdAt');
    const handleBestClick = () => setOrder('rating'); 

    const handleDelete = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    }

    const handleLoad = async () => {
        const {reviews} = await getReviews();
        setItems(reviews);
    }
    // 컴포넌트가 '처음' 렌더링될때 수행되는 함수 = useEffect
    useEffect(() => {
        handleLoad();
    }, []);

    return(
        <div>
            <div>
                <button onClick={handleNewestClick}>최신 순으로 보기</button>
                <button onClick={handleBestClick}>평점 순으로 보기</button>
            </div>
            <ReviewList items={sortedItems} onDelete={handleDelete}/>
        </div>
    );
}

export default App;