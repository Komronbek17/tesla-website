    document.addEventListener('keydown', (event) => {
        /* down arrow keyCode = 40 */
        let posDown = window.innerHeight - window.scrollY % window.innerHeight;
        let posUp = window.scrollY % window.innerHeight;
        if (event.key.toLowerCase() === 'arrowdown') {
            window.scrollTo({
                left: 0,
                top: window.scrollY + posDown - 40,
            })
        }

        if (event.key.toLowerCase() === 'arrowup') {
            console.log(event.key, event.key.toLowerCase());
            window.scrollTo({
                left: 0,
                top: window.scrollY - posUp - 40
            })
        }
        // console.log(window.scrollY);
    })

    document.addEventListener('wheel', (event) => {
        console.log(event);
        /* down arrow keyCode = 40 */
        // let posDown = window.innerHeight - window.scrollY % window.innerHeight ;
        // let posUp = window.scrollY % window.innerHeight;
        // if(event.key.toLowerCase() === 'arrowdown' ){
        //   window.scrollTo({
        //     left:0,
        //     top:window.scrollY + posDown - 40,
        //   })
        // }
      
        // if(event.key.toLowerCase() === 'arrowup'){
        //   console.log(event.key,event.key.toLowerCase());
        //   window.scrollTo({
        //     left:0,
        //     top:window.scrollY-posUp-40
        //   })
        // } 
        // console.log(window.scrollY);
    })
