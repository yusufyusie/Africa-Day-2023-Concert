/* ARRAY OF OBJECTS  */

const speakers = [
  {
    image: './assets/images/speaker_01.png',
    fullName: 'Florian Herrmann ',
    title: 'Head of the State Chancellery for  Media',
    bio: 'Benkler studies commons-based peer production, and published his seminal book.',
  },
  {
    image: './assets/images/speaker_02.png',
    fullName: 'SohYeong Noh',
    title: 'Director of Art in Ethipia',
    bio: ' As the main venue for new media art production in ethipia, science technology, humanities, and the arts.',
  },
  {
    image: './assets/images/speaker_03.png',
    fullName: 'Viola Amherd  ',
    title: 'Vice President of Art',
    bio: 'He developed music in the first dedicated in 1990, opening the Art era in earnest.',
  },
  {
    image: './assets/images/speaker_04.png',
    fullName: 'Julia Reda',
    title: 'Representative of the Young Pirates of Europe',
    bio: 'European integration and youth participation to a report that could potentially impact changes to the European Union copyright laws in July.',
  },
  {
    image: './assets/images/speaker_05.png',
    fullName: 'Laila Tretikov',
    title: 'Wikimedia Foundation Executive Director',
    bio: 'Wikipedia is available for free every month in 290 languages to more than 100 million people, nearly half of the worlds population.',
  },
  {
    image: './assets/images/speaker_06.png',
    fullName: 'Joachim Gauck  ',
    title: 'Politics Section Head',
    bio: 'Open government, open source, and other open movements have been actively carried out.',
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
  for (let i = 0; i < nbr; i += 1) {
    featuredSpeakersContent += `
        <div class="speaker-section-div">
          <div class="speaker-img">
            <div id="speaker-section-img-container">
              <img id="speaker-section-img" src=${speakers[i].image} alt=${speakers[i].fullName}>
            </div>
          </div>
          <div class="speaker-details">
            <h3>${speakers[i].fullName}</h3>
            <h4>${speakers[i].title}</h4>
            <div class="red-line"><img src="./assets/images/red-line.jpg" alt="title underline"></div>
            <p>${speakers[i].bio}</p>
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