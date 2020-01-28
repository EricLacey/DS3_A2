'use strict'

AFRAME.registerComponent('desktop-pickup', {
    schema:{
    },
    init : function(){
        const Context_AF = this; //this refers to "this" component

        //collect the original scale of the object
        let xScale = Context_AF.el.object3D.scale.x;
        let yScale = Context_AF.el.object3D.scale.y;
        let zScale = Context_AF.el.object3D.scale.z;

        //pickup the object if clicked on
        Context_AF.el.addEventListener('click', function(event){
            Context_AF.pickup();
        });

        // UX Effect - scale the object if moused over
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

    //"pickup" the object, rotate it, play the audio
    pickup : function(data){
        const Context_AF = this;

        //create a new entity
        let spawn = document.createElement('a-entity');

        //duplicate the original object by looping through every attribute and copying it
        //https://stackoverflow.com/questions/828311/how-to-iterate-through-all-attributes-in-an-html-element
        for (var i = 0; i < Context_AF.el.attributes.length; i++) {
            var attrib = Context_AF.el.attributes[i];
            if (attrib.specified) {
                spawn.setAttribute(attrib.name, attrib.value);
            }
        }

        //set the new objects properties then spawn it in front of the player's camera
        spawn.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear');
        spawn.setAttribute('rotation', '0 0 0')
        spawn.setAttribute('desktop-active','');
        spawn.removeAttribute('desktop-pickup');
        spawn.setAttribute("sound" , "src:" + spawn.getAttribute("data-sound-attb") + "; autoplay: true")
        spawn.setAttribute('position', 0 + ' ' + 0 + ' ' + -1 );
        //t-rex spawns a little high, have to fix it
        if(spawn.id == "t-rex"){
            spawn.setAttribute('position', 0 + ' ' + (-0.5) + ' ' + -1 );
        }
        document.getElementById('camera').appendChild(spawn);
        
    }
})