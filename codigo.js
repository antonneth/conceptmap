


// menu interaction



const x = document.querySelector("#x") 
const lacosaesa = document.querySelector(".la-cosa-esa-xd")
const lacosaesamov = document.querySelector(".la-cosa-esa-xd-mov")
const btnmenux = document.querySelector("#x-menu-mov")
const todomov = document.querySelector(".todo-mov")
const menus = document.querySelector(".menu")
const btnmenu = document.querySelector(".btn_menu")
const homejs = document.querySelector("#home-js")
const galleryjs = document.querySelector("#gallery-js")
const roadmapjs = document.querySelector("#roadmap-js")
const thegaragejs = document.querySelector("#thegarage-js")
const shopjs =  document.querySelector("#shop-js")
const logojs =  document.querySelector("#logo-mov")
const xmov = document.querySelector("#x-mov")
const twitterbut = document.querySelector("#twitter")
const discordbut = document.querySelector("#discord")
const instabut = document.querySelector("#instalol")
const logo = document.querySelector(".logo")
const enter = document.querySelector("#discenter") 
const discordia = document.querySelector("body > div.wind")

lacosaesa.remove()
lacosaesamov.remove()
 

xmov.addEventListener("click", (e)=>{
    lacosaesa.remove()
    lacosaesamov.remove()

});

btnmenu.addEventListener("click", (e)=>{
    todomov.style.visibility = "visible"
    menus.style.visibility = "hidden"
    discordia.style.visibility = "visible"

});

btnmenux.addEventListener("click", (e)=>{
    todomov.style.visibility = "hidden"
    menus.style.visibility = "visible"
})

homejs.addEventListener("click",(e)=>{
    window.open("https://www.youtube.com","_self")

});

homejs.addEventListener("mousemove",(e)=>{
    homejs.style.cursor = "pointer"
});



roadmapjs.addEventListener("click",(e)=>{
    window.open("https://www.youtube.com","_self")

});

roadmapjs.addEventListener("mousemove",(e)=>{
    roadmapjs.style.cursor = "pointer"
});


twitterbut.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

twitterbut.addEventListener("mousemove",(e)=>{
    twitterbut.style.cursor = "pointer"
});

instabut.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

instabut.addEventListener("mousemove",(e)=>{
    instabut.style.cursor = "pointer"
});

discordbut.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

discordbut.addEventListener("mousemove",(e)=>{
    discordbut.style.cursor = "pointer"
});

logo.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

logo.addEventListener("mousemove",(e)=>{
    logo.style.cursor = "pointer"
});

logojs.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

logojs.addEventListener("mousemove",(e)=>{
    logojs.style.cursor = "pointer"
});


enter.addEventListener("click",(e)=>{
    window.open("https://discord.com/invite/e2w3txPWrc","_self")
});


// metamask

const ethereumButton = document.querySelector(".btnXD")


const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};
    

function removerCaracter(texto, posicionCaracter) {
  if(texto.length) {
    if (posicionCaracter >= 0 && posicionCaracter < texto.length) {
      let parte1 = texto.substring(0, posicionCaracter);
      let parte2 = texto.substring(posicionCaracter + 41, texto.length);
      return parte1 + parte2
    } else
    return texto
  } else {
  return texto;
  }
}




async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' }).catch((err)=>
    console.log(err.code));
    const arr = accounts;
    let texto = arr.toString();

    let billetera =(removerCaracter(texto, 5));
    const si = billetera + "..."
    ethereumButton.innerHTML = si
    ethereumButton2.innerHTML = si
  }

ethereumButton.addEventListener('click', (e) => {
    
  if(isMetaMaskInstalled() == true) {
      getAccount()
    };
    if(isMetaMaskInstalled() == false) {
      window.open("https://metamask.io", "_self")
    }

  });

  const ethereumButton2 = document.querySelector(".btnmenu")

  ethereumButton2.addEventListener('click', (e) => {
    
    if(isMetaMaskInstalled() == true) {
        getAccount()
      };
      if(isMetaMaskInstalled() == false) {
        window.open("https://metamask.io", "_self")
      }
  
    });




// concept map

const cards = document.querySelectorAll('.card');


const toggleExpansion = (element, to, duration = 350) => {
  return new Promise((res) => {
    element.animate([
      {
  top: to.top,
  left: to.left,
  width: to.width,
  height: to.height
      }
    ], {duration, fill: 'forwards', ease: 'ease-in'})
    setTimeout(res, duration);
  })
}

const fadeContent = (element, opacity, duration = 300) => {
  return new Promise(res => {
    [...element.children].forEach((child) => {
      requestAnimationFrame(() => {
        child.style.transition = `opacity ${duration}ms linear`;
        child.style.opacity = opacity;
      });
    })
    setTimeout(res, duration);
  })
}

const getCardContent1 = () => {
  return `
  <div class="card-content">
  <div class="left-container">
  <h2 class="title-concept">THE COMMUNITY</h2>
  <p class="first-p">
       <span class="question">Do you like <n class="bold">cars</n> an the <n class="bold">blockchain technology</n>?</span><span class="emoji"> 🤔</span><br>If you're answer is <n class="bolding">"Yes"</n> maybe you'll adore this community
      , trust me.</p> 

      <p class="third-p">
      <span class="priorities">Priorities first:</span>  The highest priority of this project is create a strong community which shares a passion for cars and NFT technologies! Remember that a club without people isn't a club.
      </p>
      <p class="four-p">
      <span class="priorities">Community:</span> We have a long-term vision of the project . If you're a "flipper" that only wants a small profit and you do not care the community and the utilites that the club provides you. This is not the project that you are searching.
      </p>
      <p class="five-p">
      <span class="priorities">Help us growing:</span>  Everyone who contributes in the growing of the community, for example beeing active, inviting friends to the community, suggesting good ideas, and make this community a great place will be rewarded with exclusive prizes, like whitelists and NFTs🎁
      </p>
      <p class="six-p">
      <span class="priorities">Future of the community:</span>  In the not too distant future after the mint. The elections of Camber Club will be held. It consists that all holders will vote democratically for a president of Camber Club. We will reveal more information over time.
      </p>

  <p class="second-p">¿What are you waiting to <a href="https://discord.com/invite/e2w3txPWrc">enter</a>?
  </p>

  <p class="seven-p">"If you want to go fast, go alone. If you want to go far, go together."<br>-African Proverb
  </p>
  </div>
  <div class="rigth-container">
  </div>

  </div>
  `;
}

const getCardContent2 = () => {
  return `
  <div class="card-content">
  <div class="left-container">
  <h2 class="title-concept">VISION AND VALUE</h2>
  <p class="first-p">How do you see this project in <n class="bold">5</n> years?<br>We have a long-term vision, the best club of cars,rally,drifting!</p> 

  <p class="third-p">
  <span class="priorities">Our vision:</span>  The highest priority of this project is create a strong community which shares a passion for cars and NFT technologies! Remember that a club without people it isn't a club.
  </p>
  <p class="four-p">
  <span class="priorities">Community:</span> We have a long-term vision of the project . If you're a "flipper" that only wants a small profit and you do not care the community and the utilites that the club provides you. This is not the project that you are searching.
  </p>
  <p class="five-p">
  <span class="priorities">#CAMBER4EVER:</span>  Everyone who will contribute in the growing of the community for example beeing active, inviting friends to the community, suggesting good ideas and make this community a chill place will be rewarded with whitelists🎁
  </p>
  <p class="six-p">
  <span class="priorities">Future of the community:</span>  In the not too distant future after the mint. The elections of Camber Club will be held. It consists that all holders will be vote democratically for a president of Camber Club. We will reveal more information over time.
  </p>

  <p class="second-p">¿What are you waiting to <a href="https://discord.com/invite/e2w3txPWrc">enter</a>?
  </p>

  <p class="seven-p">"If you want to go fast, go alone. If you want to go far, go together."<br>-African Proverb
  </p>
  </div>
  <div class="rigth-container">
  </div>

  </div>
  `;
}

const getCardContent3 = () => {
  return `
  <div class="card-content">
    <div class="left-container">
    <h2 class="title-concept">PHYSICAL WORLD</h2>

    <p class="second-p">
    <span class="priorities">Clothes</span><span class="soon">SOON...</span><br>Camber Club is creative, so we think, only making custom simple clothes with the printed logo is a very simple and a boring idea, we will make high quality clothes. <span>Note: The clothes will be avaible only to holders</span>   
    </p>
    <p class="third-p"><span class="priorities">Physical Events</span><span class="soon">SOON...</span><BR>  The Holders will receive tickets as NFTs for each NFT th We will organize concerts, meet ups and car meets</p>
    </p>
    <p class="four-p">
    <span class="priorities">Expansion of The Team</span><span class="soon">SOON...</span>After the mint we will have all the resources to start organizing events around the world, developing our metaverse, make streetwear clothes and expanding our team.
    </p>
    <p class="seven-p">"If you want to go fast, go alone. If you want to go far, go together."<br>-African Proverb
    </p>
    </div>
    <div class="rigth-container">
    </div>
  
    </div>
  
    </div>
`;
}
const getCardContent4 = () => {
  return `
  <div class="card-content">
    <div class="left-container">
    <h2 class="title-concept">VIRTUAL WORLD</h2>

    <p class="second-p">
    <span class="priorities">Clothes</span><span class="soon">SOON...</span><br>The highest priority of this project is create a strong community which shares a passion for cars and NFT technologies! Remember that a club without people it isn't a club. 
    </p>
    <p class="third-p"><span class="priorities">Physical Events</span><span class="soon">SOON...</span><BR>  The Holders will receive tickets as NFTs for each NFT th We will organize concerts, meet ups and car meets</p>
    </p>
    <p class="four-p">
    <span class="priorities">Expansion of The Team</span><span class="soon">SOON...</span>After the mint we will have all the resources to start organizing events around the world, developing our metaverse, make streetwear clothes and expanding our team.
    </p>
    <p class="seven-p">"If you want to go fast, go alone. If you want to go far, go together."<br>-African Proverb
    </p>
    </div>
    <div class="rigth-container">
    </div>
  
    </div>
  
    </div>
`;
}
const getCardContent5 = () => {
  return `
  <div class="card-content">
    <div class="left-container">
    <h2 class="title-concept">MARKETING</h2>

    <p class="second-p">
    <span class="priorities">Clothes</span><span class="soon">SOON...</span><br>Camber Club is creative, so we think, only making custom simple clothes with the printed logo is a very simple and a boring idea, we will make high quality clothes. <span>Note: The clothes will be avaible only to holders</span>   
    </p>
    <p class="third-p"><span class="priorities">Physical Events</span><span class="soon">SOON...</span><BR>  The Holders will receive tickets as NFTs for each NFT th We will organize concerts, meet ups and car meets</p>
    </p>
    <p class="four-p">
    <span class="priorities">Expansion of The Team</span><span class="soon">SOON...</span>After the mint we will have all the resources to start organizing events around the world, developing our metaverse, make streetwear clothes and expanding our team.
    </p>
    <p class="seven-p">"If you want to go fast, go alone. If you want to go far, go together."<br>-African Proverb
    </p>
    </div>
    <div class="rigth-container">
    </div>
  
    </div>
  
    </div>
`;
}

const getCardContent6 = () => {
  return `
  <div class="card-content">
    <div class="left-container">
    <h2 class="title-concept">???</h2>

    <p class="second-p">
    <span class="priorities">Clothes</span><span class="soon">SOON...</span><br>The highest priority of this project is create a strong community which shares a passion for cars and NFT technologies! Remember that a club without people it isn't a club. 
    </p>
    <p class="third-p"><span class="priorities">Physical Events</span><span class="soon">SOON...</span><BR>  The Holders will receive tickets as NFTs for each NFT th We will organize concerts, meet ups and car meets</p>
    </p>
    <p class="four-p">
    <span class="priorities">Expansion of The Team</span><span class="soon">SOON...</span>After the mint we will have all the resources to start organizing events around the world, developing our metaverse, make streetwear clothes and expanding our team.
    </p>
    <p class="seven-p">"If you want to go fast, go alone. If you want to go far, go together."<br>-African Proverb
    </p>
    </div>
    <div class="rigth-container">
    </div>
  
    </div>
  
    </div>
`;
}

const onCardClick1 = async (e) => {
  const card = e.currentTarget;
  // clone the card
  const cardClone = card.cloneNode(true);
  // get the location of the card in the view
  const {top, left, width, height} = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = 'fixed';
  cardClone.style.top = top + 'px';
  cardClone.style.left = left + 'px';
  cardClone.style.width = width + 'px';
  cardClone.style.height = height + 'px';
  // hide the original card with opacity
  card.style.opacity = '0';
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // create a close button to handle the undo
  const closeButton = document.createElement('img');
  // position the close button top corner
  closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 270px;
    right: 45px;
    heigth: 4px;


  `;
  closeButton.setAttribute('src', 'x.png')

  closeButton.classList.add("btn-concept")
  
  // attach click event to the close button
    let box = document.querySelector(".wrapper")
    let widthsi = box.offsetWidth;
    let heightsi = box.offsetHeight;
    closeButton.addEventListener('click', async () => {
    // remove the button on close
    closeButton.remove();
    // remove the display style so the original content is displayed right
    cardClone.style.removeProperty('display');
    cardClone.style.removeProperty('padding');
    // show original card content
    [...cardClone.children].forEach(child => child.style.removeProperty('display'));
    fadeContent(cardClone, '0');
    // shrink the card back to the original position and size
    await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
    // show the original card again
    card.style.removeProperty('opacity');
    // remove the clone card
    cardClone.remove();
  });
  // fade the content away
  fadeContent(cardClone, '0')
    .then(() => {
      [...cardClone.children].forEach(child => child.style.display = 'none');
    });
  // expand the clone card
  await toggleExpansion(cardClone, {top: `${top}`, left: `${left}`, width: `${widthsi}px`, height: `${heightsi}px`});
  const content = getCardContent1(card.textContent, card.dataset.type)
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = 'block';
  cardClone.style.padding = '0';
  // append the close button after the expansion is done
  cardClone.appendChild(closeButton);
  cardClone.insertAdjacentHTML('afterbegin', content);

};

const onCardClick2 = async (e) => {
    const card = e.currentTarget;
    // clone the card
    const cardClone = card.cloneNode(true);
    // get the location of the card in the view
    const {top, left, width, height, bottom , rigth} = card.getBoundingClientRect();
    // position the clone on top of the original
    cardClone.style.position = 'fixed';
    cardClone.style.top = top + 'px';
    cardClone.style.left = left + 'px';
    cardClone.style.width = width + 'px';
    cardClone.style.height = height + 'px';
    cardClone.style.rigth = rigth + 'px';
    cardClone.style.bottom = bottom + 'px';
    // hide the original card with opacity
    card.style.opacity = '0';
    // add card to the same container
    card.parentNode.appendChild(cardClone);
    // create a close button to handle the undo
    const closeButton = document.createElement('img');
    // position the close button top corner
    closeButton.style = `
      position: fixed;
      z-index: 10000;
      top: 270px;
      right: 45px;
      heigth: 4px;
  
  
    `;
    closeButton.setAttribute('src', 'x.png')
  
    closeButton.classList.add("btn-concept")
    
    // attach click event to the close button
      let box = document.querySelector(".wrapper")
      let widthsi = box.offsetWidth;
      let heightsi = box.offsetHeight;
      let {heightcontainer} = box.getBoundingClientRect();
      cardClone.style.height = heightcontainer + 'px';
      closeButton.addEventListener('click', async () => {
      // remove the button on close
      closeButton.remove();
      // remove the display style so the original content is displayed right
      cardClone.style.removeProperty('display');
      cardClone.style.removeProperty('padding');
      // show original card content
      [...cardClone.children].forEach(child => child.style.removeProperty('display'));
      fadeContent(cardClone, '0');
      // shrink the card back to the original position and size
      await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
      // show the original card again
      card.style.removeProperty('opacity');
      // remove the clone card
      cardClone.remove();
    });
    // fade the content away
    fadeContent(cardClone, '0')
      .then(() => {
        [...cardClone.children].forEach(child => child.style.display = 'none');
      });
    // expand the clone card
    await toggleExpansion(cardClone, {width: `${widthsi}px`, height: `${heightsi}px`, top: "243px"});
    const content = getCardContent2(card.textContent, card.dataset.type)
    // set the display block so the content will follow the normal flow in case the original card is not display block
    cardClone.style.display = 'block';
    cardClone.style.padding = '0';
    // append the close button after the expansion is done
    cardClone.appendChild(closeButton);
    cardClone.insertAdjacentHTML('afterbegin', content);


};

const onCardClick3 = async (e) => {
  const card = e.currentTarget;
  // clone the card
  const cardClone = card.cloneNode(true);
  // get the location of the card in the view
  const {top, left, width, height, bottom , rigth} = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = 'fixed';
  cardClone.style.top = top + 'px';
  cardClone.style.left = left + 'px';
  cardClone.style.width = width + 'px';
  cardClone.style.height = height + 'px';
  cardClone.style.rigth = rigth + 'px';
  cardClone.style.bottom = bottom + 'px';
  // hide the original card with opacity
  card.style.opacity = '0';
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // create a close button to handle the undo
  const closeButton = document.createElement('img');
  // position the close button top corner
  closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 270px;
    right: 45px;
    heigth: 4px;


  `;
  closeButton.setAttribute('src', 'x.png')

  closeButton.classList.add("btn-concept")
  
  // attach click event to the close button
    let box = document.querySelector(".wrapper")
    let widthsi = box.offsetWidth;
    let heightsi = box.offsetHeight;
    let {heightcontainer} = box.getBoundingClientRect();
    cardClone.style.height = heightcontainer + 'px';
    closeButton.addEventListener('click', async () => {
    // remove the button on close
    closeButton.remove();
    // remove the display style so the original content is displayed right
    cardClone.style.removeProperty('display');
    cardClone.style.removeProperty('padding');
    // show original card content
    [...cardClone.children].forEach(child => child.style.removeProperty('display'));
    fadeContent(cardClone, '0');
    // shrink the card back to the original position and size
    await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
    // show the original card again
    card.style.removeProperty('opacity');
    // remove the clone card
    cardClone.remove();
  });
  // fade the content away
  fadeContent(cardClone, '0')
    .then(() => {
      [...cardClone.children].forEach(child => child.style.display = 'none');
    });
  // expand the clone card
  await toggleExpansion(cardClone, {width: `${widthsi}px`, height: `${heightsi}px`, top: "243px", left: "0"});
  document.querySelector("body > div > div:nth-child(7)").style.margin = "0px 20px 0px 20px"
  const content = getCardContent3(card.textContent, card.dataset.type)
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = 'block';
  cardClone.style.padding = '0';
  // append the close button after the expansion is done
  cardClone.appendChild(closeButton);
  cardClone.insertAdjacentHTML('afterbegin', content);


};

const onCardClick4 = async (e) => {
  const card = e.currentTarget;
  // clone the card
  const cardClone = card.cloneNode(true);
  // get the location of the card in the view
  const {top, left, width, height, bottom , rigth} = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = 'fixed';
  cardClone.style.top = top + 'px';
  cardClone.style.left = left + 'px';
  cardClone.style.width = width + 'px';
  cardClone.style.height = height + 'px';
  cardClone.style.rigth = rigth + 'px';
  cardClone.style.bottom = bottom + 'px';
  // hide the original card with opacity
  card.style.opacity = '0';
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // create a close button to handle the undo
  const closeButton = document.createElement('img');
  // position the close button top corner
  closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 270px;
    right: 45px;
    heigth: 4px;


  `;
  closeButton.setAttribute('src', 'x.png')

  closeButton.classList.add("btn-concept")
  
  // attach click event to the close button
    let box = document.querySelector(".wrapper")
    let widthsi = box.offsetWidth;
    let heightsi = box.offsetHeight;
    let {heightcontainer} = box.getBoundingClientRect();
    cardClone.style.height = heightcontainer + 'px';
    closeButton.addEventListener('click', async () => {
    // remove the button on close
    closeButton.remove();
    // remove the display style so the original content is displayed right
    cardClone.style.removeProperty('display');
    cardClone.style.removeProperty('padding');
    // show original card content
    [...cardClone.children].forEach(child => child.style.removeProperty('display'));
    fadeContent(cardClone, '0');
    // shrink the card back to the original position and size
    await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
    // show the original card again
    card.style.removeProperty('opacity');
    // remove the clone card
    cardClone.remove();
  });
  // fade the content away
  fadeContent(cardClone, '0')
    .then(() => {
      [...cardClone.children].forEach(child => child.style.display = 'none');
    });
  // expand the clone card
  await toggleExpansion(cardClone, {width: `${widthsi}px`, height: `${heightsi}px`, top: "243px", left: "0"});
  document.querySelector("body > div > div:nth-child(7)").style.margin = "0px 20px 0px 20px"
  const content = getCardContent4(card.textContent, card.dataset.type)
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = 'block';
  cardClone.style.padding = '0';
  // append the close button after the expansion is done
  cardClone.appendChild(closeButton);
  cardClone.insertAdjacentHTML('afterbegin', content);



};

const onCardClick5 = async (e) => {
  const card = e.currentTarget;
  // clone the card
  const cardClone = card.cloneNode(true);
  // get the location of the card in the view
  const {top, left, width, height, bottom , rigth} = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = 'fixed';
  cardClone.style.top = top + 'px';
  cardClone.style.left = left + 'px';
  cardClone.style.width = width + 'px';
  cardClone.style.height = height + 'px';
  cardClone.style.rigth = rigth + 'px';
  cardClone.style.bottom = bottom + 'px';
  // hide the original card with opacity
  card.style.opacity = '0';
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // create a close button to handle the undo
  const closeButton = document.createElement('img');
  // position the close button top corner
  closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 270px;
    right: 45px;
    heigth: 4px;


  `;
  closeButton.setAttribute('src', 'x.png')

  closeButton.classList.add("btn-concept")
  
  // attach click event to the close button
    let box = document.querySelector(".wrapper")
    let widthsi = box.offsetWidth;
    let heightsi = box.offsetHeight;
    let {heightcontainer} = box.getBoundingClientRect();
    cardClone.style.height = heightcontainer + 'px';
    closeButton.addEventListener('click', async () => {
    // remove the button on close
    closeButton.remove();
    // remove the display style so the original content is displayed right
    cardClone.style.removeProperty('display');
    cardClone.style.removeProperty('padding');
    // show original card content
    [...cardClone.children].forEach(child => child.style.removeProperty('display'));
    fadeContent(cardClone, '0');
    // shrink the card back to the original position and size
    await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
    // show the original card again
    card.style.removeProperty('opacity');
    // remove the clone card
    cardClone.remove();
  });
  // fade the content away
  fadeContent(cardClone, '0')
    .then(() => {
      [...cardClone.children].forEach(child => child.style.display = 'none');
    });
  // expand the clone card
  await toggleExpansion(cardClone, {width: `${widthsi}px`, height: `${heightsi}px`, top: "243px", left: "0"});
  document.querySelector("body > div > div:nth-child(7)").style.margin = "0px 20px 0px 20px"
  const content = getCardContent5(card.textContent, card.dataset.type)
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = 'block';
  cardClone.style.padding = '0';
  // append the close button after the expansion is done
  cardClone.appendChild(closeButton);
  cardClone.insertAdjacentHTML('afterbegin', content);



};

const onCardClick6 = async (e) => {
  const card = e.currentTarget;
  // clone the card
  const cardClone = card.cloneNode(true);
  // get the location of the card in the view
  const {top, left, width, height, bottom , rigth} = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = 'fixed';
  cardClone.style.top = top + 'px';
  cardClone.style.left = left + 'px';
  cardClone.style.width = width + 'px';
  cardClone.style.height = height + 'px';
  cardClone.style.rigth = rigth + 'px';
  cardClone.style.bottom = bottom + 'px';
  // hide the original card with opacity
  card.style.opacity = '0';
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // create a close button to handle the undo
  const closeButton = document.createElement('img');
  // position the close button top corner
  closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 270px;
    right: 45px;
    heigth: 4px;


  `;
  closeButton.setAttribute('src', 'x.png')

  closeButton.classList.add("btn-concept")
  
  // attach click event to the close button
    let box = document.querySelector(".wrapper")
    let widthsi = box.offsetWidth;
    let heightsi = box.offsetHeight;
    let {heightcontainer} = box.getBoundingClientRect();
    cardClone.style.height = heightcontainer + 'px';
    closeButton.addEventListener('click', async () => {
    // remove the button on close
    closeButton.remove();
    // remove the display style so the original content is displayed right
    cardClone.style.removeProperty('display');
    cardClone.style.removeProperty('padding');
    // show original card content
    [...cardClone.children].forEach(child => child.style.removeProperty('display'));
    fadeContent(cardClone, '0');
    // shrink the card back to the original position and size
    await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
    // show the original card again
    card.style.removeProperty('opacity');
    // remove the clone card
    cardClone.remove();
  });
  // fade the content away
  fadeContent(cardClone, '0')
    .then(() => {
      [...cardClone.children].forEach(child => child.style.display = 'none');
    });
  // expand the clone card
  await toggleExpansion(cardClone, {width: `${widthsi}px`, height: `${heightsi}px`, top: "243px", left: "0"});
  document.querySelector("body > div > div:nth-child(7)").style.margin = "0px 20px 0px 20px"
  const content = getCardContent6(card.textContent, card.dataset.type)
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = 'block';
  cardClone.style.padding = '0';
  // append the close button after the expansion is done  
  cardClone.appendChild(closeButton);
  cardClone.insertAdjacentHTML('afterbegin', content);

};



  const img1 = ()=> {
    const photo = document.createElement('img');
    photo.setAttribute('src', 'community.png');
    const imgcontainer = document.querySelector("body > div.wrapper > div:nth-child(7) > div.card-content > div.rigth-container")
    imgcontainer.appendChild(photo); 
  }  
  const img2 = ()=> {
    const photo = document.createElement('img');
    photo.setAttribute('src', 'a.png');
    const imgcontainer = document.querySelector("body > div.wrapper > div:nth-child(7) > div.card-content > div.rigth-container")
    imgcontainer.appendChild(photo); 
  }  
  const img3 = ()=> {
    const photo = document.createElement('img');
    photo.setAttribute('src', 'workshop.png');
    const imgcontainer = document.querySelector("body > div.wrapper > div:nth-child(7) > div.card-content > div.rigth-container")
    imgcontainer.appendChild(photo); 
  }  
  const img4 = ()=> {
    const photo = document.createElement('img');
    photo.setAttribute('src', 'vr-.png');
    const imgcontainer = document.querySelector("body > div.wrapper > div:nth-child(7) > div.card-content > div.rigth-container")
    imgcontainer.appendChild(photo); 
  }  
  const img5 = ()=> {
    const photo = document.createElement('img');
    photo.setAttribute('src', 'megafono.png');
    const imgcontainer = document.querySelector("body > div.wrapper > div:nth-child(7) > div.card-content > div.rigth-container")
    imgcontainer.appendChild(photo); 
  }  
  const img6 = ()=> {
    const photo = document.createElement('img');
    photo.setAttribute('src', '');
    const imgcontainer = document.querySelector("body > div.wrapper > div:nth-child(7) > div.card-content > div.rigth-container")
    imgcontainer.appendChild(photo); 
  }  
  
  
    
const concept1 = document.querySelector("body > div > div:nth-child(1)")
concept1.addEventListener("click", (e)=>{
  onCardClick1(e)
  setTimeout(()=> {
    img1();
  }, 401)
  

  
})
const concept2 = document.querySelector("body > div.wrapper > div:nth-child(2)");
concept2.addEventListener("click", (e)=>{
  onCardClick2(e)
  setTimeout(()=> {
    img2();
  }, 601)

})

const concept3 = document.querySelector("body > div > div:nth-child(3)")
concept3.addEventListener("click", (e)=>{
    onCardClick3(e)
    setTimeout(()=> {
      img3();
    }, 401)
  
})
const concept4 = document.querySelector("body > div > div:nth-child(4)")
concept4.addEventListener("click", (e)=>{
    onCardClick4(e)
    setTimeout(()=> {
      img4();
    }, 401)
  
})
const concept5 = document.querySelector("body > div > div:nth-child(5)")
concept5.addEventListener("click", (e)=>{
    onCardClick5(e)
    setTimeout(()=> {
      img5();
    }, 401)

  
})
const concept6 = document.querySelector("body > div > div:nth-child(6)")
concept6.addEventListener("click", (e)=>{
    onCardClick6(e)
    setTimeout(()=> {
      img6();
    }, 401)
})


// concept map otros

const card1 = document.querySelector("body > div.wrapper > div:nth-child(1)")
const card2 = document.querySelector("body > div.wrapper > div:nth-child(2)")
const card3 = document.querySelector("body > div.wrapper > div:nth-child(3)")
const card4 = document.querySelector("body > div.wrapper > div:nth-child(4)")
const card5 = document.querySelector("body > div.wrapper > div:nth-child(5)")
const card6 = document.querySelector("body > div.wrapper > div:nth-child(6)")

card1.addEventListener("mouseover", (e)=>{
  document.querySelector("#photo1").style.opacity = "1";
  document.querySelector("#photo1").style.transition = "all .2s";
})

card2.addEventListener("mouseover", (e)=>{
  document.querySelector("#photo2").style.opacity = "1";
  document.querySelector("#photo2").style.transition = "all .2s";
})

card3.addEventListener("mouseover", (e)=>{
  document.querySelector("#photo3").style.opacity = "1";
  document.querySelector("#photo3").style.transition = "all .2s";
})

card4.addEventListener("mouseover", (e)=>{
  document.querySelector("#photo4").style.opacity = "1";
  document.querySelector("#photo4").style.transition = "all .2s";
})
card5.addEventListener("mouseover", (e)=>{
  document.querySelector("#photo5").style.opacity = "1";
  document.querySelector("#photo5").style.transition = "all .2s";
})

card6.addEventListener("mouseover", (e)=>{
  document.querySelector("#photo6").style.opacity = "1";
  document.querySelector("#photo6").style.transition = "all .2s";
})


card1.addEventListener("mouseout", (e)=>{
  document.querySelector("#photo1").style.opacity = "0.5";
})

card2.addEventListener("mouseout", (e)=>{
  document.querySelector("#photo2").style.opacity = "0.5";
})

card3.addEventListener("mouseout", (e)=>{
  document.querySelector("#photo3").style.opacity = "0.5";
})

card4.addEventListener("mouseout", (e)=>{
  document.querySelector("#photo4").style.opacity = "0.5";
})
card5.addEventListener("mouseout", (e)=>{
  document.querySelector("#photo5").style.opacity = "0.5";
})

card6.addEventListener("mouseout", (e)=>{
  document.querySelector("#photo6").style.opacity = "0.5";
})

// EXTRA

const discordtable = document.querySelector(".wind")
discordtable.remove()



const screenheight = window.innerHeight


function numberInBetween1(startingNumber, endingNumber, givenNumber){

  if(givenNumber > startingNumber && givenNumber < endingNumber)
    document.body.style.zoom = "95%"
}

numberInBetween1(810,879,screenheight);

function numberInBetween2(startingNumber, endingNumber, givenNumber){

  if(givenNumber > startingNumber && givenNumber < endingNumber)
    document.body.style.zoom = "90%"
}

numberInBetween2(759,809,screenheight);

function numberInBetween3(startingNumber, endingNumber, givenNumber){

  if(givenNumber > startingNumber && givenNumber < endingNumber)
    document.body.style.zoom = "80%"
}

numberInBetween3(719,758,screenheight);


function numberInBetween4(startingNumber, endingNumber, givenNumber){

  if(givenNumber > startingNumber && givenNumber < endingNumber)
    document.body.style.zoom = "80%"
}

numberInBetween4(700,757,screenheight);


function numberInBetween5(startingNumber, endingNumber, givenNumber){

  if(givenNumber > startingNumber && givenNumber < endingNumber)
    document.body.style.zoom = "70%"
}

numberInBetween5(629,699,screenheight);


function numberInBetween6(startingNumber, endingNumber, givenNumber){

  if(givenNumber > startingNumber && givenNumber < endingNumber)
    document.body.style.zoom = "65%"
}

numberInBetween6(500,628,screenheight);

console.log(screenheight)

const isMobile = function() {
  const mactch = window.matchMedia("(pointer:coarse)");
  return (mactch && mactch.matches);
}

if(isMobile() == true) {
  const menudel = document.querySelector("body > nav > ul");
  menudel.remove()
}
