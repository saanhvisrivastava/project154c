AFRAME.registerComponent('turtle',{
    init:function(){
        for(i=1;i<=20;i++){
            var id=`turtle${i}`
        var posX=(Math.random()*3000+(-1000));
        var posY=(Math.random()*2+(-1));
        var posZ=(Math.random()*3000+(-1000));
        var position={x:posX ,y:posY, z:posZ}

        this.createturtles(id,position)
        }

    },

    createbirds:(id,position)=>{
        var turtle1=document.createElement('a-entity');
        var island1=document.querySelector('#island')
        turtle1.setAttribute('id',id)
        turtle1.setAttribute('position',position)
        turtle1.setAttribute('scale',{x:500,y:500,z:500})
        turtle1.setAttribute('animation-mixer',{})
        turtle1.setAttribute('gltf-model','C:\project153\models\turtle\scene.gltf')
        
        island1.appendChild(turtle1)


    }
})