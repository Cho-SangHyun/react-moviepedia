export async function getReviews(){
    const response = await fetch('http://learn.codeit.kr/api/film-reviews');
    const body = await response.json();
    return body;
}