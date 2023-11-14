const urlGatinhos = 'https://api.thecatapi.com/v1/images/search?limit=10';

const buscarGatinhos = (e) => {
    e.preventDefault();
    fetch(urlGatinhos, {
        method: 'get'
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Ocorreu um erro: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        data.forEach(cat => {
            const img = document.createElement('img');
            const label = document.createElement('span');
            const section = document.createElement('section');

            section.className = 'box';
            section.id = cat.id;

            img.src = cat.url;
            label.innerHTML = 
            `<b>Id:</b> ${cat.id},<br>
             <b>width</b>: ${cat.width}px,<br>
             <b>height</b>: ${cat.height}px`;

            section.appendChild(img);
            section.appendChild(label);
            document.querySelector('#gatinhos').appendChild(section);
        });
    })
    .catch((error) => {
        console.error('Ocorreu um erro:', error);
    });
};

const btnShow = document.querySelector("#mostrar-gatinhos");
btnShow.addEventListener("click", buscarGatinhos);


const urlMarcas = 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json';

const buscarMarcas = (e) => {
    e.preventDefault();
    fetch(urlMarcas, {
        method: 'get'
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Ocorreu um erro: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        data.forEach(marca => {
            const img = document.createElement('img');
            const label = document.createElement('span');
            const section = document.createElement('section');

            section.className = 'boxMarcas';
            section.id = marca.slug;

            img.src = marca.image.optimized;
            label.innerHTML = 
            `<b>Name</b>: ${marca.name},<br>
             <b>Slug</b>: ${marca.slug}px,<br>
             <b>Link</b>: ${marca.image.source}px`;

            section.appendChild(img);
            section.appendChild(label);
            document.querySelector('#marcas').appendChild(section);
        });
    })
    .catch((error) => {
        console.error('Ocorreu um erro:', error);
    });
};

const btnShowCars = document.querySelector("#mostrar-marcas");
btnShowCars.addEventListener("click", buscarMarcas);
