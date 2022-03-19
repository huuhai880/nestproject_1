import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';

@Controller('account')
export class AccountController {

    @Post() // hàm post
    create(@Body() createCatDto: []) {
        return 'This action adds a new cat';
    }

    @Get() // hàm get 
    findAll(@Query() query: { limit: '10' }) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id') // hàm get detail 
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id') // hàm put
    update(@Param('id') id: string, @Body() updateCatDto: []) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id') // hàm delete
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
