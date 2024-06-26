const apiKey = 'thuI04lolbKrwMUNIyrgtA6hhQ1nUyPQ';
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request.then((response) => response.json()).then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}); // Los objetos promise pueden encadenarse, ya que al ser procesos asíncronos se encolan 