const tarotCards = [
    // Major Arcana
    { name: "The Fool", image: "images/fool.jpg", zodiac: "None" },
    { name: "The Magician", image: "images/magician.jpg", zodiac: "None" },
    { name: "The High Priestess", image: "images/high_priestess.jpg", zodiac: "None" },
    { name: "The Empress", image: "images/empress.jpg", zodiac: "None" },
    { name: "The Emperor", image: "images/emperor.jpg", zodiac: "Aries" },
    { name: "The Hierophant", image: "images/hierophant.jpg", zodiac: "Taurus" },
    { name: "The Lovers", image: "images/lovers.jpg", zodiac: "Gemini" },
    { name: "The Chariot", image: "images/chariot.jpg", zodiac: "Cancer" },
    { name: "Strength", image: "images/strength.jpg", zodiac: "Leo" },
    { name: "The Hermit", image: "images/hermit.jpg", zodiac: "Virgo" },
    { name: "Wheel of Fortune", image: "images/wheel_of_fortune.jpg", zodiac: "None" },
    { name: "Justice", image: "images/justice.jpg", zodiac: "Libra" },
    { name: "The Hanged Man", image: "images/hanged_man.jpg", zodiac: "None" },
    { name: "Death", image: "images/death.jpg", zodiac: "Scorpio" },
    { name: "Temperance", image: "images/temperance.jpg", zodiac: "Sagittarius" },
    { name: "The Devil", image: "images/devil.jpg", zodiac: "Capricorn" },
    { name: "The Tower", image: "images/tower.jpg", zodiac: "None" },
    { name: "The Star", image: "images/star.jpg", zodiac: "Aquarius" },
    { name: "The Moon", image: "images/moon.jpg", zodiac: "Pisces" },
    { name: "The Sun", image: "images/sun.jpg", zodiac: "None" },
    { name: "Judgement", image: "images/judgement.jpg", zodiac: "None" },
    { name: "The World", image: "images/world.jpg", zodiac: "None" },
    // Minor Arcana - Wands
    { name: "Ace of Wands", image: "images/Wands01.jpg", zodiac: "None" },
    { name: "Two of Wands", image: "images/Wands02.jpg", zodiac: "None" },
    { name: "Three of Wands", image: "images/Wands03.jpg", zodiac: "None" },
    { name: "Four of Wands", image: "images/Wands04.jpg", zodiac: "None" },
    { name: "Five of Wands", image: "images/Wands05.jpg", zodiac: "None" },
    { name: "Six of Wands", image: "images/Wands06.jpg", zodiac: "None" },
    { name: "Seven of Wands", image: "images/Wands07.jpg", zodiac: "None" },
    { name: "Eight of Wands", image: "images/Wands08.jpg", zodiac: "None" },
    { name: "Nine of Wands", image: "images/Wands09.jpg", zodiac: "None" },
    { name: "Ten of Wands", image: "images/Wands10.jpg", zodiac: "None" },
    { name: "Page of Wands", image: "images/Wands11.jpg", zodiac: "None" },
    { name: "Knight of Wands", image: "images/Wands12.jpg", zodiac: "None" },
    { name: "Queen of Wands", image: "images/Wands13.jpg", zodiac: "None" },
    { name: "King of Wands", image: "images/Wands14.jpg", zodiac: "None" },
    // Minor Arcana - Cups
    { name: "Ace of Cups", image: "images/Cups01.jpg", zodiac: "None" },
    { name: "Two of Cups", image: "images/Cups02.jpg", zodiac: "None" },
    { name: "Three of Cups", image: "images/Cups03.jpg", zodiac: "None" },
    { name: "Four of Cups", image: "images/Cups04.jpg", zodiac: "None" },
    { name: "Five of Cups", image: "images/Cups05.jpg", zodiac: "None" },
    { name: "Six of Cups", image: "images/Cups06.jpg", zodiac: "None" },
    { name: "Seven of Cups", image: "images/Cups07.jpg", zodiac: "None" },
    { name: "Eight of Cups", image: "images/Cups08.jpg", zodiac: "None" },
    { name: "Nine of Cups", image: "images/Cups09.jpg", zodiac: "None" },
    { name: "Ten of Cups", image: "images/Cups10.jpg", zodiac: "None" },
    { name: "Page of Cups", image: "images/Cups11.jpg", zodiac: "None" },
    { name: "Knight of Cups", image: "images/Cups12.jpg", zodiac: "None" },
    { name: "Queen of Cups", image: "images/Cups13.jpg", zodiac: "None" },
    { name: "King of Cups", image: "images/Cups14.jpg", zodiac: "None" },
    // Minor Arcana - Swords
    { name: "Ace of Swords", image: "images/Swords01.jpg", zodiac: "None" },
    { name: "Two of Swords", image: "images/Swords02.jpg", zodiac: "None" },
    { name: "Three of Swords", image: "images/Swords03.jpg", zodiac: "None" },
    { name: "Four of Swords", image: "images/Swords04.jpg", zodiac: "None" },
    { name: "Five of Swords", image: "images/Swords05.jpg", zodiac: "None" },
    { name: "Six of Swords", image: "images/Swords06.jpg", zodiac: "None" },
    { name: "Seven of Swords", image: "images/Swords07.jpg", zodiac: "None" },
    { name: "Eight of Swords", image: "images/Swords08.jpg", zodiac: "None" },
    { name: "Nine of Swords", image: "images/Swords09.jpg", zodiac: "None" },
    { name: "Ten of Swords", image: "images/Swords10.jpg", zodiac: "None" },
    { name: "Page of Swords", image: "images/Swords11.jpg", zodiac: "None" },
    { name: "Knight of Swords", image: "images/Swords12.jpg", zodiac: "None" },
    { name: "Queen of Swords", image: "images/Swords13.jpg", zodiac: "None" },
    { name: "King of Swords", image: "images/Swords14.jpg", zodiac: "None" },
    // Minor Arcana - Pentacles
    { name: "Ace of Pentacles", image: "images/Pentacles01.jpg", zodiac: "None" },
    { name: "Two of Pentacles", image: "images/Pentacles02.jpg", zodiac: "None" },
    { name: "Three of Pentacles", image: "images/Pentacles03.jpg", zodiac: "None" },
    { name: "Four of Pentacles", image: "images/Pentacles04.jpg", zodiac: "None" },
    { name: "Five of Pentacles", image: "images/Pentacles05.jpg", zodiac: "None" },
    { name: "Six of Pentacles", image: "images/Pentacles06.jpg", zodiac: "None" },
    { name: "Seven of Pentacles", image: "images/Pentacles07.jpg", zodiac: "None" },
    { name: "Eight of Pentacles", image: "images/Pentacles08.jpg", zodiac: "None" },
    { name: "Nine of Pentacles", image: "images/Pentacles09.jpg", zodiac: "None" },
    { name: "Ten of Pentacles", image: "images/Pentacles10.jpg", zodiac: "None" },
    { name: "Page of Pentacles", image: "images/Pentacles11.jpg", zodiac: "None" },
    { name: "Knight of Pentacles", image: "images/Pentacles12.jpg", zodiac: "None" },
    { name: "Queen of Pentacles", image: "images/Pentacles13.jpg", zodiac: "None" },
    { name: "King of Pentacles", image: "images/Pentacles14.jpg", zodiac: "None" }
];

const signEquivalencies = {
    "0": "The Fool, the beginning of a journey, the leap of faith",
    "1": "The Magician, the mastery of skills, the creative power",
    "2": "The High Priestess, the intuition and inner wisdom, the mysteries",
    "3": "The Empress, the nurturing and abundance, the creation",
    "4": "The Emperor, the authority and structure, the leadership",
    "5": "The Hierophant, the tradition and spiritual guidance, the teacher",
    "6": "The Lovers, the choice and harmony, the union",
    "7": "The Chariot, the determination and willpower, the victory",
    "8": "Strength, the courage and patience, the inner strength",
    "9": "The Hermit, the introspection and solitude, the search for truth",
    "10": "Wheel of Fortune, the cycles of life, the destiny and luck",
    "11": "Justice, the balance of truth, the scales of karma",
    "12": "The Hanged Man, the sacrifice for insight, the pause in action",
    "13": "Death, the end of a cycle, the transformation through letting go",
    "14": "Temperance, the blending of opposites, the path of moderation",
    "15": "The Devil, the bondage of materialism, the challenge of freedom",
    "16": "The Tower, the sudden upheaval, the destruction of falsehoods",
    "17": "The Star, the hope and inspiration, the guidance from above",
    "18": "The Moon, the realm of dreams, the illusion and intuition",
    "19": "The Sun, the clarity and vitality, the joy of life",
    "20": "Judgement, the awakening and renewal, the call to higher purpose",
    "21": "The World, the completion of a journey, the integration of experience",

    // Minor Arcana - Wands
    "22": "Ace of Wands, the spark of inspiration, the new beginnings",
    "23": "Two of Wands, the planning and decision-making, the future possibilities",
    "24": "Three of Wands, the expansion and foresight, the long-term vision",
    "25": "Four of Wands, the celebration and harmony, the foundation of success",
    "26": "Five of Wands, the conflict and competition, the struggle for dominance",
    "27": "Six of Wands, the victory and recognition, the public acclaim",
    "28": "Seven of Wands, the defense and perseverance, the standing firm",
    "29": "Eight of Wands, the rapid movement, the swift action",
    "30": "Nine of Wands, the resilience and courage, the final challenge",
    "31": "Ten of Wands, the burden and responsibility, the hard work",
    "32": "Page of Wands, the enthusiasm and exploration, the adventurous spirit",
    "33": "Knight of Wands, the passion and energy, the pursuit of goals",
    "34": "Queen of Wands, the confidence and determination, the charismatic leader",
    "35": "King of Wands, the vision and leadership, the entrepreneurial spirit",

    // Minor Arcana - Cups
    "36": "Ace of Cups, the emotional beginning, the new love or friendship",
    "37": "Two of Cups, the partnership and unity, the connection",
    "38": "Three of Cups, the celebration and friendship, the community",
    "39": "Four of Cups, the contemplation and reevaluation, the emotional stagnation",
    "40": "Five of Cups, the loss and regret, the emotional disappointment",
    "41": "Six of Cups, the nostalgia and childhood memories, the innocence",
    "42": "Seven of Cups, the choices and fantasies, the illusion",
    "43": "Eight of Cups, the abandonment and withdrawal, the search for deeper meaning",
    "44": "Nine of Cups, the wish fulfillment, the contentment",
    "45": "Ten of Cups, the emotional fulfillment, the family harmony",
    "46": "Page of Cups, the creativity and emotional growth, the youthful spirit",
    "47": "Knight of Cups, the romance and charm, the pursuit of dreams",
    "48": "Queen of Cups, the compassion and nurturing, the emotional depth",
    "49": "King of Cups, the emotional balance and control, the wise leader",

    // Minor Arcana - Swords
    "50": "Ace of Swords, the clarity and breakthrough, the new idea",
    "51": "Two of Swords, the indecision and stalemate, the difficult choices",
    "52": "Three of Swords, the heartbreak and sorrow, the emotional pain",
    "53": "Four of Swords, the rest and recovery, the meditation",
    "54": "Five of Swords, the conflict and defeat, the hollow victory",
    "55": "Six of Swords, the transition and moving on, the recovery",
    "56": "Seven of Swords, the deception and strategy, the cunning",
    "57": "Eight of Swords, the restriction and isolation, the feeling of being trapped",
    "58": "Nine of Swords, the anxiety and worry, the nightmares",
    "59": "Ten of Swords, the betrayal and ending, the rock bottom",
    "60": "Page of Swords, the curiosity and mental agility, the quick thinker",
    "61": "Knight of Swords, the ambition and drive, the focused action",
    "62": "Queen of Swords, the intellect and independence, the sharp mind",
    "63": "King of Swords, the authority and truth, the fair judgment",

    // Minor Arcana - Pentacles
    "64": "Ace of Pentacles, the material beginning, the new financial opportunity",
    "65": "Two of Pentacles, the balance and adaptability, the juggling of resources",
    "66": "Three of Pentacles, the teamwork and collaboration, the skill development",
    "67": "Four of Pentacles, the control and stability, the material security",
    "68": "Five of Pentacles, the financial loss and poverty, the hardship",
    "69": "Six of Pentacles, the generosity and sharing, the charity",
    "70": "Seven of Pentacles, the assessment and patience, the long-term investment",
    "71": "Eight of Pentacles, the diligence and craftsmanship, the hard work",
    "72": "Nine of Pentacles, the luxury and self-sufficiency, the financial independence",
    "73": "Ten of Pentacles, the legacy and inheritance, the family wealth",
    "74": "Page of Pentacles, the ambition and new opportunities, the student",
    "75": "Knight of Pentacles, the hard work and responsibility, the reliable worker",
    "76": "Queen of Pentacles, the practicality and nurturing, the provider",
    "77": "King of Pentacles, the wealth and security, the successful leader"
};

const relateSign = {
    "aries": "Aries: The Ram, representing leadership, courage, and determination.",
    "taurus": "Taurus: The Bull, symbolizing reliability, patience, and a love for beauty.",
    "gemini": "Gemini: The Twins, embodying versatility, curiosity, and adaptability.",
    "cancer": "Cancer: The Crab, representing emotional depth, intuition, and nurturing.",
    "leo": "Leo: The Lion, symbolizing confidence, creativity, and passion.",
    "virgo": "Virgo: The Maiden, embodying practicality, attention to detail, and a love for order.",
    "libra": "Libra: The Scales, representing balance, fairness, and a love for harmony.",
    "scorpio": "Scorpio: The Scorpion, symbolizing intensity, transformation, and passion.",
    "sagittarius": "Sagittarius: The Archer, embodying adventure, optimism, and a quest for knowledge.",
    "capricorn": "Capricorn: The Goat, representing discipline, ambition, and perseverance.",
    "aquarius": "Aquarius: The Water Bearer, symbolizing innovation, independence, and humanitarianism.",
    "pisces": "Pisces: The Fish, embodying compassion, creativity, and a deep connection to emotions."
};


function saveCardToLocalStorage(card) {
    localStorage.setItem('selectedCard', JSON.stringify(card));
}

function loadCardFromLocalStorage() {
    return JSON.parse(localStorage.getItem('selectedCard'));
}

function displayCard(card) {
    const cardImage = document.getElementById('cardImage');
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardImage.classList.add('show');
}

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    return tarotCards[randomIndex];
}

function displayZodiac(card) {
    const zodiacMessage = `The zodiac sign associated with ${card.name} is ${card.zodiac}.`;
    document.getElementById('zodiacSign').innerText = zodiacMessage;
}

document.getElementById('checkSignButton').addEventListener('click', () => {
    const card = loadCardFromLocalStorage();
    if (card) {
        displayZodiac(card);

        const signs = document.querySelectorAll('.sign');
        signs.forEach(sign => {
            sign.style.transform = "";
            sign.style.zIndex = "";
        });

        const zodiacSign = card.zodiac.toLowerCase();
        const signElement = document.getElementById(`sign${zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1)}`);

        if (signElement) {
            signElement.style.transform = "translate(-50%, -50%)";
            signElement.style.left = "50%";
            signElement.style.top = "50%";
            signElement.style.zIndex = "10";
        }
    } else {
        alert('Please draw a card first.');
    }
});

document.getElementById('getCardButton').addEventListener('click', () => {
    const card = getRandomCard();
    saveCardToLocalStorage(card);
    displayCard(card);
});

document.getElementById('checkSignButton').addEventListener('click', () => {
    const card = loadCardFromLocalStorage();
    if (card) {
        displayZodiac(card);
    } else {
        alert('Please draw a card first.');
    }
});

document.getElementById('searchCardButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchCardInput').value;
    let found = false;

    tarotCards.forEach((card, index) => {
        if (card.name.toLowerCase() === searchTerm.toLowerCase()) {
            document.getElementById('searchResult').innerText = `${card.name} is card number ${index}. ${signEquivalencies[index]}`;
            found = true;
        }
    });

    if (!found) {
        document.getElementById('searchResult').innerText = `${searchTerm} is not in the deck.`;
    }
});

document.getElementById('searchSignButton').addEventListener('click', () => {
    const searchSign = document.getElementById('searchSignInput').value.toLowerCase();
    let found = false;

    tarotCards.forEach((card) => {
        if (card.zodiac.toLowerCase() === searchSign) {
            document.getElementById('searchResult').innerText = `${searchSign.charAt(0).toUpperCase() + searchSign.slice(1)} is associated with ${card.name}. ${relateSign[searchSign]}`;
            found = true;
        }
    });

    if (!found) {
        document.getElementById('searchResult').innerText = `${searchSign.charAt(0).toUpperCase() + searchSign.slice(1)} is not associated with any card.`;
    }
});