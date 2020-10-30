export const apiService = url => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
}
