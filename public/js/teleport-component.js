'use strict'

AFRAME.registerComponent('teleport', {
    schema:{},
    init : function(){
        const Context_AF = this; //this refers to "this" component

        Context_AF.el.addEventListener('click', function(event){
            console.log('clicked');
            
            Context_AF.teleport();
                
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
            Context_AF.el.setAttribute('material', 'color:#2222FF');
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
            Context_AF.el.setAttribute('material', 'color:#0000FF');
        });
    }, 
    teleport : function(){
        const Context_AF = this;
        const x = Context_AF.el.object3D.position.x;
        const y = Context_AF.el.object3D.position.y;
        const z = Context_AF.el.object3D.position.z;

        let rig = document.getElementById('rig')
        rig.setAttribute('position', x + ' ' + (y + 1) + ' ' + z )
    }
})