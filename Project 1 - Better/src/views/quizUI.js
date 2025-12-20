export class QuizUI{
    constructor(engine, domElements){
        this.engine = engine
        this.dom = domElements
        this.isLocked = false


        this.dom.totalQuestionsSpan.textContent = this.engine.totalQuestions
        this.dom.maxScoreSpan.textContent = this.engine.totalQuestions


        this.bindEvents()
    }


    bindEvents(){
        this.dom.startButton.addEventListener("click", ()=> this.start())
        this.dom.restartButton.addEventListener("click", ()=> this.restart())
    }

}