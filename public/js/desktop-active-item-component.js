'use strict'

AFRAME.registerComponent('desktop-active', {
    schema:{},
    init : function(){
        const Context_AF = this; //this refers to "this" component

        Context_AF.el.addEventListener('click', function(event){
            
            Context_AF.destroy();
                
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
        });
    }, 
    destroy : function(){
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
})