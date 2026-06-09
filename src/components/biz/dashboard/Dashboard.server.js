export const deleteBook = (url, onSuccess, onError) => {
     fetch(url, {
            method: "DELETE",
        })
            .then(onSuccess)
            .catch(onError);
}