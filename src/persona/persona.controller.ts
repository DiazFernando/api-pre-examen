import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('api')
export class PersonaController {
    
    constructor(private readonly personaService : PersonaService){}

    @Get('persona/lista')
    getListaPersonas():any{
        return this.personaService.getListaPersonas();
    }

    //get para buscar por ID
    @Get('persona/:id')
    getPistaByID(@Param('id',ParseIntPipe) id:number):any{
        return this.personaService.getPersonaByID(id);
    
    }

    @Post('persona/agregar')
    agregarPersona(@Body() body:Body):any{
        return this.personaService.agregarPersona(body);
    }

    @Delete('persona/eliminar/:id')
    eliminarPersonaId(@Param('id', ParseIntPipe) id:number):string{
        return this.personaService.eliminarPersonaId(id);      
    }
}
