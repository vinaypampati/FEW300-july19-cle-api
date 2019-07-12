import { Injectable } from '@nestjs/common';
import { ScoresResponse } from './models';
import { ScoreCreate } from './models/score-create';

@Injectable()
export class ScoresService {
    private currentId = 2;
    data: ScoresResponse = new ScoresResponse();
    constructor() {

        this.data.scores = [
            {
                id: 1, who: 'Jeff', when: new Date().toISOString(),
                right: 10, wrong: 0,
            },

        ];
    }

    getAllScores() {
        return this.data;
    }

    addScore(score: ScoreCreate) {
        const newScore = { id: this.currentId++, who: score.who, right: score.right, wrong: score.wrong, when: new Date().toISOString() };
        this.data.scores.push(newScore);
        return newScore;
    }
}
