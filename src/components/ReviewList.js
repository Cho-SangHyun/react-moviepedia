import './ReviewList.css';

function formatDate(value){
    const date = new Date(value);
    return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
}

function ReviewListItem({item, onDelete}){
    const handleDeleteClick = () => onDelete(item.id);

    return(
        <div className="ReviewListItem">
            <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
            <div>
                <h1>{item.title}</h1>
                <p>{item.rating}</p>
                <p>{formatDate(item.createdAt)}</p>
                <p>{item.content}</p>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
}

function ReviewList({items, onDelete}){
    return(
        // map 메소드 안에서 JSX요소를 리턴하면 마치 JSX를 여러 개 추가한 것처럼 동작
        <ul>{items.map((item) => {
            return <li><ReviewListItem item={item} onDelete={onDelete}/></li>
        })}</ul>
    );
}

export default ReviewList;