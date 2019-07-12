import { Controller, Get, Post, Body, Res, Response, BadRequestException } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoreCreate } from './models';

@Controller('scores')
export class ScoresController {
    constructor(private data: ScoresService) { }

    @Get()
    getData() {
        return this.data.getAllScores();
    }

    @Post()
    addScore(@Body() score: ScoreCreate) {
        if (score.who === 'Jill') {
            throw new BadRequestException('Jill is a cheater');
        }
        const res = this.data.addScore(score);
        return res;
    }
}
