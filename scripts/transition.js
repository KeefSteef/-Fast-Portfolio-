

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    const tl = gsap.timeline();

    tl.to('.overlay_block', 1, {
        ease: Expo.easeInOut,
        scaleY: 1,
        transformOrigin: 'bottom'
    });
    tl.to('.overlay_block', 1, {
        ease: Expo.easeInOut,
        scaleY: 0,
        transformOrigin: 'top'
    });

}

barba.hooks.afterLeave(() => {
    setTimeout(() => {

             
        
        globalOn();

        function destroy() {
            fullpage_api.destroy('all');
            new fullpage('#fullpage', {
        
                anchors: ['navigation-container', 'about-container', 'contact-container'],
                scrollingSpeed: 1300,
                
                // onLeave:function(distination){
                //     console.log("UFAA");
                // }

                

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
        }
    
        destroy();     
    })
    
});


function contentAnimation() {}

barba.init({
    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1000);
            done();
        },

        async enter(data) {
            contentAnimation();
        },

        async once(data) {
            contentAnimation();
        },
    }, ],
});