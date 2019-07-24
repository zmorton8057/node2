var dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        return "The dog goes " + this.noise
    }
}

var cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        return "The cat goes " + this.noise
    }
}

console.log(dog.makeNoise());
console.log(cat.makeNoise());