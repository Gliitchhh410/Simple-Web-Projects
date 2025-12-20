export class QuizEngine {
    constructor(questions){
        this.questions = questions
        this.score = 0
        this.currentIndex = 0
    }

    get currentQuestion(){
        return this.questions[this.currentIndex]
    }


    get isEnded(){
        return this.currentIndex > this.questions.length
    }


    get progressPercent(){
        return (this.currentIndex / this.questions.length) * 100
    }
}