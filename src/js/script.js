







// SIDBAR

const menuItems = document.querySelectorAll('.menu-item');
  

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
const colorH3 = document.querySelectorAll('.menu-item h3');

console.log(colorH3);


// ============================================================== SIDEBAR ===========================================================

// remove active class from all menu items

const changActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        changActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


 

 

// THEME/DISPLAY CUSTOMIZATION

// opens Modal
const openThemeModal = () =>{

    themeModal.style.display = 'grid'
}
// close Modal

const closeThemeModal = (event)=>{

    if(event.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }

}

// close Modal
themeModal.addEventListener('click',closeThemeModal)

theme.addEventListener('click', openThemeModal);



// ============================== FONTS ==============================

// REMOVE ACTIVE CLASS FROM SPANS OR FONT SIZE SELECTORS

const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active')
    })
}

fontSizes.forEach(size =>{
 

    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');


        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
    
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
    
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
    
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
    
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
    
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})


// remove active class from colors
const changeActiveColorClass = ()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
} 



// change primary colors

colorPalette.forEach(color =>{

    color.addEventListener('click', ()=>{
        let primaryHue;

        // remove active class from colors
         changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);


    })
})







// theme BACKGROUND values

let lightColorLightness;
let WhiteColorLightness;
let darColorLightness;

// CHANGES BACKGROUND COLOR 

const changeBG = ()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}

// change background colors

Bg1.addEventListener('click', (e) =>{
    // add active classe
    e.preventDefault();
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    colorH3.forEach(h3=>{
        h3.style.color ='#000';
    })

    // remove customized changes from local storage
    window.location.reload();

     
  })
 



  Bg2.addEventListener('click', (e) =>{
      e.preventDefault();
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    
    // add active class

    Bg2.classList.add('active');

    // remove active class from the others

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    colorH3.forEach(h3=>{
        h3.style.color ='#fff';
    })


    changeBG();
  })

  Bg3.addEventListener('click', (e) =>{
    e.preventDefault();
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    
    // add active class
    
    Bg3.classList.add('active');
    colorH3.forEach(h3=>{
        h3.style.color ='#fff';
    })

    // remove active class from the others

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBG();
  })



// END