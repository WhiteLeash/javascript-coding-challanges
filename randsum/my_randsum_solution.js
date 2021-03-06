class genSum {
    constructor(n) {
        this.array = []
        if (n > 0) {
            if (n === 1) {
                this.array.push(0)
            } else {
                this.toss(n)
            }
        }
    }
    toss(n) {
        if (n) {
            let arrSum = 1
            while (arrSum != 0) {
                this.array.length = 0

                for (let i = 0; i < n; i++) {
                    let num
                    do {
                        num = this.pickRandNum({
                            min: 0,
                            max: 100,
                            negative: true,
                        })
                    } while (this.array.includes(num))
                    this.array.push(num)
                }
                arrSum = this.sumArray()
            }
        }
    }
    pickRandNum({ min, max, negative = false }) {
        let num = Math.floor(Math.random() * max) + min
        if (negative) num *= Math.random() > 0.5 ? 1 : -1
        return num
    }
    sumArray() {
        if (this.array.length) {
            if (this.array.length == 1) {
                return this.array[0]
            } else {
                return this.array.reduce((a, b) => a + b)
            }
        } else {
            return this.array
        }
    }
}

module.exports = genSum
