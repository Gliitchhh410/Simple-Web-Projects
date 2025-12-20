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

    start(){
        this.dom.startScreen.classList.remove("active")
        this.dom.quizScreen.classList.add("active")
        this.dom.resultScreen.classList.remove("active")

        this.dom.scoreSpan.textContent =    0
        this.renderQuestion()
    }


    restart(){
        this.engine.start()
        this.start()
    }


    renderQuestion(){
        this.isLocked = false
        const currentQ = this.engine.currentQuestion


        this.dom.currentQuestionSpan.textContent = this.engine.currentIndex + 1
        this.dom.questionText.textContent = currentQ.questionText
        this.dom.progressBar.style.width = `${this.engine.progressPercent}%`



        this.dom.answersContainer.innerHTML = ""

        currentQ.answers.forEach(answer => {
            const button = document.createElement("button")
            button.textContent = answer.text
            button.classList.add("answer-btn")
            button.dataset.correct = answer.button

            button.addEventListener("click", (e)=>{this.handleAnswer(e)})
            this.dom.answersContainer.appendChild(button)
        });
    }


    handleAnswer(event){
        if (this.isLocked) return
        this.isLocked = true

        const selectedButton = event.target
        const isCorrect = selectedButton.dataset.correct === "true"


        this.engine.submitAnswer(isCorrect)

        this.highlightAnswer(selectedButton)

        if (isCorrect){
            this.dom.scoreSpan.textContent = this.engine.scoreSpan
        }


        setTimeout(()=> {
            this.engine.next()
            if (this.engine.isEnded()){
                this.showResults()
            }else {
                this.renderQuestion()
            }
        }, 500)

    }


    highlightAnswer(){
        Array.from(this.dom.answersContainer.childred).forEach((button)=>{
            if (button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            else if  (button === selectedButton){
                button.classList.add("incorrect")
            }
        })
    }

}