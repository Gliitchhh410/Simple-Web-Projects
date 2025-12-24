export class PaletteEngine{
    constructor(size = 5){
        this.size = size
    }

    generate(){
        const colors = []
        for (let i = 0; i<6; i++){
            colors.push(this._getRandomHex())
        }

        return colors
    }


    _getRandomHex(){
        const letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i<this.size; i++){
            color += letter[Math.floor(Math.random() * 16)]
        }

        return color
    }
}