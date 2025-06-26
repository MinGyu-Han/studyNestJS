import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('/')
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post('')
    @UsePipes(ValidationPipe) // Handler level Pipe
    createBoard(
        @Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardsById(
        @Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Get('/delete/:id')
    deleteBoard(
        @Param('id') id: string): void {
        this.boardsService.deleteBoard(id); 
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string, 
        @Body('status') status: BoardStatus): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }

    

}
