/* ARRAY OF OBJECTS  */
const speakers = [
  {
    image: './assets/images/speaker_01.png',
    fullName: 'Yohai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    image: './assets/images/speaker_02.png',
    fullName: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    bio: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: './assets/images/speaker_03.png',
    fullName: 'Jeon Gilnam',
    title: 'Professor Emeritus, Korea Advanced Institute of Science and Technology (KAIST)',
    bio: 'He developed SDN, the first Internet protocol network in Asia, and led Korea first dedicated line Internet connection in 1990, opening the Internet era in earnest.',
  },
  {
    image: './assets/images/speaker_04.png',
    fullName: 'Julia Reda',
    title: 'Representative of the Young Pirates of Europe',
    bio: 'European integration and youth participation in politics and democracy through online are key concerns, according to a report that could potentially impact changes to the European Union copyright laws in July.',
  },
  {
    image: './assets/images/speaker_05.png',
    fullName: 'Laila Tretikov',
    title: 'Wikimedia Foundation Executive Director',
    bio: 'Laila Tretikow is executive director of the Wikimedia Foundation, the nonprofit that runs Wikipedia. Wikipedia is available for free every month in 290 languages to more than 100 million people, nearly half of the worlds population.',
  },
  {
    image: './assets/images/speaker_06.png',
    fullName: 'Ryan Merkley',
    title: 'CEO of Creative Commons, former COO of the Mozilla Foundation',
    bio: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. Open government, open source, and other open movements have been actively carried out.',
  },
];

const article = document.createElement('article');
article.id = 'featured-speakers';
article.innerHTML = `
  <h2>Featured Speakers</h2>
  <div class="red-line"><img src="./assets/images/red-line.jpg" alt="title underline"></div>

  <section class="speaker-section"></section>

  <button id="more-speakers">MORE&nbsp;&nbsp;<img id="more-speakers-img" src="./assets/icons/arrow_down1.svg" alt="down icon"></button>
`;
const nodes = document.getElementsByTagName('article');
const lastNode = document.getElementsByTagName('article')[nodes.length - 1];
lastNode.parentNode.insertBefore(article, lastNode.nextSibling);


const dynamicSpeakerSection = document.querySelector('.speaker-section');
const createSpeakers = (nbr) => {
  let featuredSpeakersContent = '';
  for (let s = 0; s < nbr; s += 1) { 
    featuredSpeakersContent += `
        <div class="speaker-section-div">
          <div class="speaker-img">
            <div id="speaker-section-img-container">
              <img id="speaker-section-img" src=${speakers[s].image} alt=${speakers[s].fullName}>
            </div>
          </div>
          <div class="speaker-details">
            <h3>${speakers[s].fullName}</h3>
            <h4>${speakers[s].title}</h4>
            <div class="red-line"><img src="./assets/images/red-line.jpg" alt="title underline"></div>
            <p>${speakers[s].bio}</p>
          </div>
        </div>
    `;
  }
  dynamicSpeakerSection.innerHTML = featuredSpeakersContent;
};


const moreBtn = document.getElementById('more-speakers');

const showSpeakers = () => {
  if (window.innerWidth < 768) {
    createSpeakers(2);
  } else {
    createSpeakers(speakers.length);
  }
};

window.addEventListener('load', () => {
  showSpeakers();
});

window.addEventListener('resize', () => {
  showSpeakers();
});

moreBtn.addEventListener('click', () => {
  const speakersItems = document.querySelectorAll('.speaker-section-div');
  if (speakersItems.length === speakers.length) {
    createSpeakers(2);
    moreBtn.innerHTML = 'MORE&nbsp;&nbsp;<img id="more-speakers-img" src="./assets/icons/arrow_down1.svg" alt="down icon">';
  } else {
    createSpeakers(speakers.length);
    moreBtn.innerHTML = 'LESS&nbsp;&nbsp;<img id="more-speakers-img" src="./assets/icons/red_arrow_up.svg" alt="up icon">';
  }
});