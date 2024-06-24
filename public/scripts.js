const bookContent = [
    { text: ""},
    { text: "Принцесса и Бабайка: Мир Теней"},
    { text: "В великолепном королевстве, где царили свет и радость, готовился грандиозный бал. Среди гостей была принцесса, известная своей красотой и добротой. Однако на этом балу присутствовало таинственное существо из теней — Бабайка. Принцесса и Бабайка не пересекались, пока принцесса не потеряла волшебный ключ к своим вещам. Бабайка, заметив это, решил помочь ей найти его.", image: "images/DALL·E 2024-06-24 18.17.07 - A dark creature from the shadows meeting a beautiful princess at a grand ball. The creature, known as Babayka, helps the princess find her lost magica.webp" },
    { text: "Прошло два месяца. Принцесса случайно услышала, как Бабайка слушает музыку. Это была песня All Nightmare Long группы Metallica. Для Принцессы, это была первая песня этой группы. Она была удивлена этому совпадению и решила заговорить с Бабайкой, несмотря на его темную сущность. Так начались их ночные беседы.", image: "images/DALL·E 2024-06-24 18.18.05 - A beautiful princess hearing a dark creature from the shadows, known as Babayka, listening to Metallica's 'All Nightmare Long' for the first time. The.webp" },
    { text: "Каждую ночь принцесса и Бабайка разговаривали до самого утра. Их беседы были настолько увлекательными, что они забывали о времени. Поскольку принцесса жила в замке, их общение происходило через письма. Однажды они решили встретиться в мире теней.", image: "images/DALL·E 2024-06-24 19.25.27 - A beautiful princess and a dark creature from the shadows, known as Babayka, talking through letters late at night. The scene shows the princess in he.webp" },
    { text: "В мире теней Бабайка показал принцессе множество удивительных мест. Но больше всего ей понравилось кататься на коньках по ледяным озерам. Бабайка научил её этому искусству, и они проводили множество часов, скользя по льду.", image: "images/DALL·E 2024-06-24 18.26.26 - In the shadow world, a dark, tall, thin creature with horns, known as Babayka, teaches a beautiful princess how to ice skate on a frozen lake. The sce.webp" },
    { text: "Их дружба становилась все крепче. Принцесса поняла, что за темной оболочкой Бабайки скрывается добрая душа. Они мечтали о новых приключениях, ведь впереди их ждали еще многие увлекательные истории. Продолжение следует...", image: "images/DALL·E 2024-06-24 19.30.54 - A dark, tall, thin creature resembling a demon holding a beautiful princess by the hand. The scene is whimsical and sketchy, similar to the provided i.webp" }
];

let currentPage = 0;

function updatePages() {
    const leftPageContent = document.getElementById('left-page-content');
    const rightPageContent = document.getElementById('right-page-content');
    const leftPageImage = document.getElementById('left-page-image');
    const rightPageImage = document.getElementById('right-page-image');

    // Reset styles
    leftPageContent.classList.remove('title');
    rightPageContent.classList.remove('title');
    leftPageContent.style.textAlign = 'left';
    rightPageContent.style.textAlign = 'left';

    // Update content
    leftPageContent.textContent = bookContent[currentPage].text;
    rightPageContent.textContent = bookContent[currentPage + 1]?.text || '';

    // Apply title style if needed
    if (currentPage === 1) {
        leftPageContent.classList.add('title');
        leftPageContent.style.textAlign = 'center';
    }
    if (currentPage + 1 === 1) {
        rightPageContent.classList.add('title');
        rightPageContent.style.textAlign = 'center';
    }

    // Update images
    if (bookContent[currentPage].image) {
        leftPageImage.src = bookContent[currentPage].image;
        leftPageImage.style.display = 'block';
    } else {
        leftPageImage.style.display = 'none';
    }

    if (bookContent[currentPage + 1]?.image) {
        rightPageImage.src = bookContent[currentPage + 1].image;
        rightPageImage.style.display = 'block';
    } else {
        rightPageImage.style.display = 'none';
    }
}

function nextPage() {
    if (currentPage < bookContent.length - 2) {
        document.querySelector('.right-page').classList.add('flipped-right');
        setTimeout(() => {
            currentPage += 2;
            updatePages();
            document.querySelector('.right-page').classList.remove('flipped-right');
            document.querySelector('.left-page').classList.add('flipped-left');
        }, 600);
        setTimeout(() => {
            document.querySelector('.left-page').classList.remove('flipped-left');
        }, 1200);
    }
}

function prevPage() {
    if (currentPage > 0) {
        document.querySelector('.left-page').classList.add('flipped-left');
        setTimeout(() => {
            currentPage -= 2;
            updatePages();
            document.querySelector('.left-page').classList.remove('flipped-right');
            document.querySelector('.right-page').classList.add('flipped-left');
        }, 600);
        setTimeout(() => {
            document.querySelector('.right-page').classList.remove('flipped-left');
        }, 1200);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    updatePages();
});
