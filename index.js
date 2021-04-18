
(async () => {
    const response = await fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json');
    const text = await response.text();
    const data = JSON.parse(text);
    const contaienr = document.getElementById("container")
    for (let index = 0; index < data.elements.length; index++) {
        const element = data.elements[index];

        block = document.createElement('div');
        // block.innerText = element.symbol;
        block.innerHTML = `<h4>${index+1}</h4><h1>${element.symbol}</h1>`;
        block.id = `element${index+1}`;

        if(element.category.split(' ').includes('nonmetal')){
            block.style.backgroundColor = '#00c7ff';
        }
        else if(element.category.split(' ').includes('alkali')){
            block.style.backgroundColor = '#e000a0';
        }
        else if(element.category.split(' ').includes('alkaline')){
            block.style.backgroundColor = '#ff005e';
        }
        else if(element.category.split(' ').includes('transition')){
            block.style.backgroundColor = '#ff7a14';
        }
        else if(element.category.split(' ').includes('post-transition')){
            block.style.backgroundColor = '#00ff6c';
        }
        else if(element.category.split(' ').includes('noble')){
            block.style.backgroundColor = '#004eae';
        }
        else if(element.category.split(' ').includes('lanthanides')){
            block.style.backgroundColor = '#00ffff';
        }
        else if(element.category.split(' ').includes('actinides')){
            block.style.backgroundColor = '#00ffcc';
        }
        else{
            block.style.backgroundColor = '#b8ff57';
        }

        contaienr.appendChild(block);
    }
})()

