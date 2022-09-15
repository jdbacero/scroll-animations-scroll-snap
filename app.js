// Observer checks if element is now on user's screen.
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let children = entry.target.children
        if (entry.isIntersecting) {
            for (let child of children) {
                child.classList.add('show')
                for (let grandchild of child.children) {
                    grandchild.classList.add('show')
                }
            }
        } else {
            for (let child of children) {
                child.classList.remove('show')
            }
        }
    })
})

const sections = document.querySelectorAll('section div')
sections.forEach(el => observer.observe(el))
let play = 0
this.addEventListener('keypress', event => {
    console.log(event.key)
    if (event.key == ' ') {
        if (!play) {
            musicPlay()
            play++
            document.getElementById('start').hidden = true
            document.getElementById('container').hidden = false
        }
    }
})

this.addEventListener('pointerdown', event => {
    console.log(event.key)
    if (!play) {
        musicPlay()
        play++
        document.getElementById('start').hidden = true
        document.getElementById('container').hidden = false
    }
})

function musicPlay() {
    document.getElementById('myAudio').play();
    document.removeEventListener('scroll', musicPlay);
}