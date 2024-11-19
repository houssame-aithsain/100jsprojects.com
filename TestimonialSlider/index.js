const nameText = document.getElementById('name');
const resumeText = document.getElementById('resume');
const Gimg = document.querySelector('img');

const names = [
    'Houssame',
    'ali',
    'alexa'
]

const resumes = [
    'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
    'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
    'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.'
]

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function profileChanger(name, resume, imgUrl) {
    nameText.innerText = name;
    resumeText.innerText = resume;
    Gimg.src = imgUrl;
}

async function main() {
    for(let i = 0; true; i++) {
        if (i === 3) {
            i = 0;
        }
        console.log('inside while loop');
        profileChanger(names[i], resumes[i], `src/profile${i + 1}.jpg`);
        await sleep(6000);
    }
}

main();
