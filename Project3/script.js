const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


// focus on text area
textarea.focus()

// add event listener on textarea to know , event
textarea.addEventListener('keyup', (e) => {
    // pass in the value typed in textarea
    createTags(e.target.value)

    // on clicking enter in textarea, select a random tag
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '' //clear the textarea
        }, 10)


        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) // trim white spaces and it cannot be an empty string

    // clear already present elements
    tagsEl.innerHTML = ''

    // loop through the tags and display them
    tags.forEach(tag => {
        const tagEl = document.createElement('span') // to create a span element
        tagEl.classList.add('tag') // give class to created span element
        tagEl.innerText = tag // set text of the span element
        tagsEl.appendChild(tagEl) // add the span element as a child to the tags div
    })
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        // picking a random span tag
        const randomTag = pickRandomTag()

        // highlight the picked tag
        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval)


        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag') // returns all spans with the class tag
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}