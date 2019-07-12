export class ScoresResponse {
    scores: Array<{
        id: number,
        who: string,
        right: number,
        wrong: number,
        when: string,
    }>;
}
