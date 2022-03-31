    
    

    const keys  = document.querySelectorAll('.key')

    keys.forEach((key)=>{
        key.addEventListener('mouseover',()=>{
            key.style.transform="scale(1.1)";
            key.style.border.color="#ffc600";
            
        })
        key.addEventListener('mouseout',()=>{
            key.style.transform="scale(1.0)";

        key.addEventListener('click',(e)=>{
            const place = document.querySelector(`"${e.target}"`)
            console.log(place)
        })
            
        })
    })  