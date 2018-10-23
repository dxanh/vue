// emojify returns the corresponding emoji image
function emojify(name) {
    var out = `<img src="emojis/` + name + `.png">`
    return out
};

function cast(emoji) {
    if (!emoji) {
        emoji = "¯\\_(ツ)_/¯"
    }
    return function (wizard) {
        return emoji + wizard + emoji
    }
}

var app = new Vue({
    el: "#app",
    data: {
        wizard: emojify("wizard")
    },
    methods: {
        lumos: cast(emojify("lumos")),
        incendio: cast(emojify("incendio"))
    }
})

// var app = new Vue({
//     el: "#app1",
//     data: {
//         message: "Hello, World! " + emojify("celebration")
//     }
// });

// var app = new Vue({
//     el: "#app",
//     data: {
//         message1: "Hello, World! " + emojify("celebration"),
//         message2: "Vue"
//     }
// });