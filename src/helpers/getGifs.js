
export const getGifs = async (category) => {  // Una vez obtenida la categoria, esta f realiza la peticion de la informacion de la misma

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Dsd9YzQW5JzxubzF4n3pLhsKu8QLzSja&q=${ category }&limit=10`
    const res = await fetch(url)
    const {data} = await res.json()
    const gifs = data.map(img => ({
        title: img.title,
        id: img.id,
        url: img.images.downsized_medium.url
    }))
    
    return gifs
}