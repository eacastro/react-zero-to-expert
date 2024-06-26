// ========
// async y await
// ========

// async permite marcar una función como asíncrona, y por lo general se usa con await
const getImage = async () => {
    try {
        const apiKey = 'thuI04lolbKrwMUNIyrgtA6hhQ1nUyPQ';
        // await permite tratar los objetos que contienen 
        // las promesas como código síncrono, esperando a 
        // que se resuelva la promesa para continuar ejecutando
        // el código que suceda al llamado asíncrono
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        console.log('data', data);

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.error(error);
    }



}

getImage();

