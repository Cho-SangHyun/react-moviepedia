import ReviewList from "./ReviewList";
import items from '../mock.json';
import { useState } from "react";

function App(){
    // 정렬기준에 대한 state
    const [order, setOrder] = useState('createdAt');
    // 정렬기준을 통해 아이템 정렬
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    // setter함수를 이용해 정렬기준을 바꾸는 메소드들
    const handleNewestClick = () => setOrder('createdAt');
    const handleBestClick = () => setOrder('rating'); 


    return(
        <div>
            <div>
                <button onClick={handleNewestClick}>최신 순으로 보기</button>
                <button onClick={handleBestClick}>평점 순으로 보기</button>
            </div>
            <ReviewList items={sortedItems}/>
        </div>
    );
}

export default App;