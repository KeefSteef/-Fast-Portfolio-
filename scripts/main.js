
function globalOn(){
    
    new fullpage('#fullpage', {

        anchors: ['navigation-container', 'about-container', 'contact-container'],
        scrollingSpeed: 1400,
        // scrollOverflow:true,
        afterLoad:function(destination,origin){


            let nav = document.querySelectorAll('.navigation-container span');
                nv = gsap.timeline();

            // console.log(destination.nextIndex);
                if(origin.index == 0)
                {
                    
                  
                    for(let i = 0;i < nav.length;i++){
                        gsap.set(nav[i],{display:"block"});
                    }
            

                    nv.from(nav[0],2,{top:250, ease: "power4.inOut"});
                    nv.from(nav[1],2,{top:250, ease: "power4.inOut"},`-=1.8`);
                    nv.from(nav[2],2,{top:250, ease: "power4.inOut"},`-=1.7`);
                  
                }

                else
                {
                    for(let i = 0; i < nav.length;i++)
                    {
                        gsap.set(nav[i],{display:'none'});
                       
                    }

                
                }
        }

    });


const 
        tl  = gsap.timeline();
        nav = document.querySelectorAll('.navigation-container span')



 let img = document.querySelector('.img');
 const about_anim = new IntersectionObserver((entries)=>{

    if(entries[0].intersectionRatio > 0)
    {   
            gsap.set('.ab__info div',{display:'block'});
            gsap.set('.img',{delay:.7,ease:Expo.easyInOut,ClipPath: 'inset(0% 0% 0% 0%)',scale:1});
            tl.from(document.querySelectorAll('.ab__title span')[0],1,{delay:.5 ,ease:Expo.easyInOut,top:200,opacity:0});
            tl.from(document.querySelectorAll('.ab__title span')[1],1,{ease:Expo.easyInOut,top:200,opacity:0},`-=0.8`);
            tl.from(document.querySelector('.ab__text'),.8,{y:20,opacity:0});
       
    }
    else
    {
        gsap.set('.ab__info div',{display:'none'});
        gsap.set('.img',{delay:.3,ClipPath: 'inset(0% 99.99% 0% 0%)',scale:0.7});
     
    }

 });
 about_anim.observe(document.querySelector('.ab__info'));


const contact = new IntersectionObserver((entries)=>{


    if(entries[0].intersectionRatio > 0)
    {
     
     
        function contactAnim()
        {
          
                for(let i = 0;i < document.querySelectorAll('.contact_title span').length;i++)
                {
                    gsap.set(document.querySelectorAll('.contact_title span')[i],{display:"inline"});
                    gsap.set(document.querySelectorAll('.get_in_cl div')[i],{display:'block'});
                }

            const cn = gsap.timeline(); 
            
            cn.from(document.querySelectorAll('.contact_title span')[0],.5,{delay:.5,top:250});
            cn.from(document.querySelectorAll('.contact_title span')[1],.5,{top:250},`-=0.3`);
            cn.from(document.querySelectorAll('.contact_title span')[2],.5,{top:250},`-=0.3`);
            cn.from(document.querySelectorAll('.get_in_cl div')[0],{y:50,opacity:0});
            cn.from(document.querySelectorAll('.get_in_cl div')[1],{y:50,opacity:0},`-=0.3`);
            cn.from(document.querySelectorAll('.get_in_cl div')[2],{y:50,opacity:0},`-=0.3`);
        
        }
       
        contactAnim();
    }

    else
    {
        
        for(let i = 0;i < document.querySelectorAll('.contact_title span').length;i++)
        {
            gsap.set(document.querySelectorAll('.contact_title span')[i],{display:"none"});
            gsap.set(document.querySelectorAll('.get_in_cl div')[i],{display:'none'});
        }

    }


});
contact.observe(document.querySelector('.contact_title h1 '));

document.querySelector('.hidertext_second span a').addEventListener('click',function(){
    setTimeout(()=>{
        fullpage_api.destroy();
  
    },1500)
    });



    let ab_button = document.querySelector('.ab-button');
        ab_button.addEventListener('click',()=>{
            fullpage_api.moveTo('about-container', 1);
        })

    let cn_button = document.querySelector('.cn-button');
        cn_button.addEventListener('click',()=>{
            fullpage_api.moveTo('contact-container', 1);
        })
};

globalOn();

