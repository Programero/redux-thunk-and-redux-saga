const unsplashKey =
    '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

async function fetchImages(perPage, pageNum) {
    const res = await fetch(
        `https://api.unsplash.com/photos/?client_id=${unsplashKey}&per_page=${perPage}&page=${pageNum}`,
    );
    const images = await res.json();

    if (res.status >= 400) {
        throw new Error(images.errors);
    }
    return images;
}

export { fetchImages };
