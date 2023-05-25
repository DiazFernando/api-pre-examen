import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonaService {

    // lista de personas

    listaPersonas=[
       {
            "id":1,
            "nombre": "Fernando",
            "apellido": "Diaz",
            "dni": 36605873 
        },
        {
            "id":2,
            "nombre": "Guillermo",
            "apellido": "Perez",
            "dni": 37952333 
        },
        {
            "id":3,
            "nombre": "Bernardo",
            "apellido": "Fiori",
            "dni": 33976644 
        }
    ];

    //get lista de personas    
    getListaPersonas():any{
        return this.listaPersonas;
    }

    // get para buscar por ID
    public getPersonaByID(id:number):any{
        let persona= this.listaPersonas.find(p => p.id === id);
        return persona;
    }

    public agregarPersona(body:any):string{
        let persona = {
            "id":parseInt(body.id),
            "nombre": body.nombre,
            "apellido": body.apellido,
            "dni": parseInt(body.dni)
        }
        this.listaPersonas.push(persona);
        return "ok"
    }

    //eliminar persona por id
    public eliminarPersonaId(id:number):any{
        let existe = false;
        let pos = 0;
        for(let i=0; i<this.listaPersonas.length;i++){
            if(id===this.listaPersonas[i].id){
                existe=true;
                pos=i;
            }
        }
        if(existe){
            this.listaPersonas.splice(pos,1)
            return {"msj" : `Persona ${id} eliminada`}
        } else{
            return {"msj" : `Persona ${id} no encontrada`}
        }

    }

}
