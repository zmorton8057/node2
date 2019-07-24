function Character (name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp  = hp;
    this.printStats = function (){
        console.log("\nName: " + this.name, "\nProfession: " + this.profession, "\nGender: " + this.gender, "\nAge: " + this.age, "\nStrength: " + this.strength, "\nHP: "  + this.hp)
    }
    this.isAlive = function () {
        if (this.strength > 0) {
            console.log('Alive')
        } else {
            console.log('Dead')
        }
    }
    this.attack = function (oppStrength) {
        var oppNewHealth = oppStrength - this.hp
        zac.strength = oppNewHealth

    }

    this.levelUp = function () {
        this.age++
        this.strength = this.strength + 5;
        this.hp = this.hp + 25;
    }

}



var zac = new Character ('Zac', 'Developer', 'M', 31, 100 , 100)

var eric = new Character ('Eric', 'Developer', 'M', 24, 1000, 1)

eric.attack(zac.strength)

zac.levelUp()

zac.printStats()

eric.printStats()

zac.isAlive()