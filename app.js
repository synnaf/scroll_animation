window.onload = function() { 

    
    let position = ["right", "down", "left", "up"]; 
    let scrollSmiley = document.getElementById('static-sm');

    scrollSmiley.addEventListener("click", ()=> { 

        var smiley = document.getElementById("smiley");
        for(let i=0; i<3; i++) {
            smiley.className = position[i];
        }
        
    });   
}




// //--------------  scroll smiley on scroll? --------------------// 
//     let scrollSmiley = document.getElementById('static-sm');
//     // let isMouseOverSmiley = false; 
//     // let smileyX, smileyY;

//     // function noScroll() { 
//     //     window.scrollTo(smileyX, smileyY); 
//     // } 
//     // scrollSmiley.addEventListener("mouseenter", ()=>  { 
//     //     smileyX = window.pageXOffset; 
//     //     smileyY = window.pageYOffset; 
//     //     window.addEventListener("scroll", noScroll); 
//     //     isMouseOverSmiley = true; 
//     // }); 
//     // scrollSmiley.addEventListener("mouseleave", ()=> { 
//     //     isMouseOverSmiley = false; 
//     //     window.removeEventListener("scroll", noScroll); 
//     // }); 


//     //jag har samma problem här, jag vill rotera den långsamt, men jag tror det går för fort? 
//     scrollSmiley.addEventListener("click", (e)=> { 
        
//         //det går att omitta statement 1, då använder man bara ; 
//         let smileyImage = document.getElementById('static-sm')
        

//         //DETTA ROTERAR DEN 360 GRADER PÅ EN GÅNG, det går för fort för att se 
//         for(let newdeg=1; newdeg<360; newdeg++) {
//             smileyImage.style = 'transform: rotate(' + newdeg + 'deg)'; 
//             console.log(newdeg); 
//         }

        

//         // if (deg === 360) { deg = 0; }

//         // let deg = scrollPosition? 
//         //öka rotation angle tills den blir 360, sedan nollställ den 

//         // forEach 
//         // for..of 
//         // for..in
//         // do while

//         //lägga in det i en forEach-loop? så att den roterar och ökar värdet på "deg" för varje scroll 



//     }); 





// // //---------------------- Scroll images -----------------------//
// //     // Index of current image 
// //     let imageIndex = 0; 
// //     //kolla hur jag kan destrukturera denna array 
// //     let images = document.getElementsByClassName('test');
// //     let images_s = document.getElementsByClassName('more'); 
      
// //     //We only change image if mouse if over it 
// //     let isMouseOverImage = false; 
// //     // Object of parent element-div containing all images 
// //     let scrollImages = document.getElementById('scroll-image'); 
// //     let scrollImages_s = document.getElementById('scroll-hzl');

// //     //tomma koordinater för scrollposition 
// //     let x, y; 
// //     // This function sets the scroll to x, y 
// //     function noScroll() { 
// //         window.scrollTo(x, y); 
// //     } 

// //     // We hover mouse over the images 
// //     scrollImages.addEventListener("mouseenter", ()=>  { 

// //         // We store the current page offset to x,y 
// //         x = window.pageXOffset; 
// //         y = window.pageYOffset; 
        
// //         //if we scroll down after mouse is over the image we can avoid scrolling the window 
// //         window.addEventListener("scroll", noScroll); 
// //         isMouseOverImage = true; 
// //     }); 

// //     // The following function is fired when mouse is no longer over the images 
// //     scrollImages.addEventListener("mouseleave", ()=> { 
// //         isMouseOverImage = false; 
// //         window.removeEventListener("scroll", noScroll); 
// //     }); 

// //     // The following function is called when we move mouse wheel over the images 
// //     // här behöver vi en timing!/animation 
// //     scrollImages.addEventListener("wheel", (e)=> { 

// //         // We check if we are over image or not 
// //         if (isMouseOverImage) { 
    
// //             let nextImageIndex; 

// //             /* The following condition finds the next imageindex 
// //             depending if we scroll up or scroll down */ 

// //             //detta gör vertikal scroll 
// //             if (e.deltaX > 0) {
// //                 nextImageIndex = (imageIndex + 1) % images.length; 
// //             } else {
// //                 nextImageIndex = (imageIndex - 1 + images.length) % images.length; 
// //             }

// //             //z-index stack order to 0  
// //             images[imageIndex].style.zIndex = "0"; 

// //             //z index stack order of next image is 1 
// //             images[nextImageIndex].style.zIndex = "1"; 

// //             //image index ska tilldelas värdet av nextImageIndex 
// //             imageIndex = nextImageIndex; 
// //         } 
// //     }); 


// //     // We hover mouse over the images 
// //     scrollImages_s.addEventListener("mouseenter", ()=>  { 
// //         x = window.pageXOffset; 
// //         y = window.pageYOffset; 
        
// //         window.addEventListener("scroll", noScroll); 
// //         isMouseOverImage = true; 
// //     }); 

// //     scrollImages_s.addEventListener("mouseleave", ()=> { 
// //         isMouseOverImage = false; 
// //         window.removeEventListener("scroll", noScroll); 
// //     }); 

// //     scrollImages_s.addEventListener("wheel", (e)=> { 

// //         if (isMouseOverImage) { 
// //             let nextImageIndex; 

// //             if (e.deltaY > 0) {
// //                 nextImageIndex = (imageIndex + 1) % images_s.length; 
// //             } else {
// //                 nextImageIndex = (imageIndex - 1 + images_s.length) % images_s.length; 
// //             }

// //             images_s[imageIndex].style.zIndex = "0"; 
// //             images_s[nextImageIndex].style.zIndex = "1"; 
// //             imageIndex = nextImageIndex; 
// //         } 
// //     }); 


// } //stänger window  