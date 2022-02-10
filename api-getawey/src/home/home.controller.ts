import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('home')
@Controller('')
export class HomeController {
    @Get()
    findAll() {
        return "Welcome";
    }
}
