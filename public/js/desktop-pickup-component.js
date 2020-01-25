'use strict'

AFRAME.registerComponent('desktop-pickup', {
    schema:{},
    init : function(){
        const Context_AF = this; //this refers to "this" component
        let xScale = Context_AF.el.object3D.scale.x;
        let yScale = Context_AF.el.object3D.scale.y;
        let zScale = Context_AF.el.object3D.scale.z;

        Context_AF.el.addEventListener('click', function(event){
            console.log('clicked');
            
            Context_AF.pickup();
                
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
    pickup : function(){
        const Context_AF = this;

        let spawn = document.createElement('a-entity');

        //https://stackoverflow.com/questions/828311/how-to-iterate-through-all-attributes-in-an-html-element
        for (var i = 0; i < Context_AF.el.attributes.length; i++) {
            var attrib = Context_AF.el.attributes[i];
            if (attrib.specified) {
                spawn.setAttribute(attrib.name, attrib.value);
            }
        }

        spawn.setAttribute('position', 0 + ' ' + 0 + ' ' + -2 );
        //spawn.setAttribute()
        spawn.removeAttribute('desktop-pickup');
        document.getElementById('camera').appendChild(spawn);
    }
})