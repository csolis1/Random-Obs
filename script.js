//color generator
let html = '';
let red;
let green;
let blue;
let randomRGB; 


for ( let i = 1; i <= 5; i++ ) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;

}

document.querySelector('main').innerHTML = html;

for ( let i = 1; i <= 5; i++ ) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html = `<div style="background-color: ${randomRGB}">${i}</div>`;

}

document.querySelector('section').innerHTML = html;



//genres
//genre[1] = "fantasy";
//genre[2] = "retro";
//genre[3]= "sci-fi";
//genre[4] = "abstract";
//genre[5] = "pop art";
//genre[6]= "minimalist";
//genre[7] = "floral";
//genre[8]= "portrait";
//genre[9] = "landscape";
//genre[10] = "psychedelic"
//genre[11] = "graffiti";
//genre[12] = "surrealism";
//genre[13] = "cubism";
//genre[14] = "impressionism"
//genre[15] = "pop art";
//genre[16] = "disney";
//genre[17] = "anime";
//genre[18] = "comic book";
//genre[19] = "still life";
//genre[20] = "horror";
//genre[21] = "mythology";
//genre[22] = "landmark";
//

