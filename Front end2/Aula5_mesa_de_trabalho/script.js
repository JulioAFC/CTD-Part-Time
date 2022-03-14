/*document.querySelector('body').style.backgroundColor = 'rgb(39, 39, 39)';

document.querySelector('h1').style.color = 'rgb(170, 170, 170)';
document.querySelector('h1').style.backgroundColor = 'rgb(19, 19, 19)'; 
document.querySelector('h1').style.borderColor = 'black';

/*
document.getElementsByClassName('.item').style.backgroundColor = 'rgb(19, 19, 19)';
for (i=0; i < item.length; i++){
    document.querySelector.style.backgroundColor = 'rgb(19, 19, 19)';
    document.querySelector.style.borderColor = 'black';
};*/
/*let quadro = document.getElementsByClassName('.item');
document.getElementsByClassName('.item').style.backgroundColor = 'red';


document.querySelector('h2').style.color = 'rgb(230, 230, 230)';
document.querySelector('p').style.color = 'rgb(230, 230, 230)';
*/
let bodyColor = document.querySelector('body')
let postContainer = document.querySelector('.container')

function darkMode() {
    bodyColor.classList.toggle('dark')
}

let posts = [

    {
        titulo: "O Guepardo",
        texto: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
        foto: "http://127.0.0.1:5500/dark_mode/imagens/chita.jpg"
    },

    {
        titulo: "O Jaguar",
        texto: "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão(Panthera leo).",
        foto: "http://127.0.0.1:5500/dark_mode/imagens/jaguar.jpg"
    },

    {
        titulo: "A Pantera Negra",
        texto: "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
        foto: "http://127.0.0.1:5500/dark_mode/imagens/pantera-negra.jpg"
    },

    {
        titulo: "O Leopardo",
        texto: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista).",
        foto: "http://127.0.0.1:5500/dark_mode/imagens/leopardo.jpg"
    },

    {   
        titulo:'O leão',
        texto:'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênerogênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na Áfricasubsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
        foto:'http://127.0.0.1:5500/dark_mode/imagens/leon.jpg'
    },

    {
        titulo:'O tigre',
        texto:'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',
        foto:'http://127.0.0.1:5500/dark_mode/imagens/tiger.jpg'

    },

]
let mainContentReference = document.querySelector('#mainContent');

for (let post of posts) {
    mainContentReference.innerHTML += `
    <div class="item">
        <img src="${post.foto}">
        <h2>${post.titulo}</h2>
        <p>${post.texto}</p>
  </div> 
  `};