const puppeteer = require('puppeteer');

( async() => {
    console.log('Lanzamos navegador!!');
    const browser =  await puppeteer.launch( {headless: false});

    const page = await browser.newPage();
    await page.goto('https://www.carlosramirezflores.com/');

    var titulo = await page.evaluate( () => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    })
    console.log(titulo);
    console.log('cerramos navegador!!');
    browser.close();
    console.log('Navegador cerrado!!');
})();