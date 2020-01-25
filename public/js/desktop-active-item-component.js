'use strict'

AFRAME.registerComponent('desktop-active', {
    schema:{},
    init : function(){
        const Context_AF = this; //this refers to "this" component
        let xScale = Context_AF.el.object3D.scale.x;
        let yScale = Context_AF.el.object3D.scale.y;
        let zScale = Context_AF.el.object3D.scale.z;

        Context_AF.el.addEventListener('click', function(event){
            console.log('clicked');
            
            Context_AF.destroy();
                
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(xScale * 1.1, yScale * 1.1, zScale * 1.1);
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(xScale, yScale, zScale);
        });
    }, 
    destroy : function(){
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
})