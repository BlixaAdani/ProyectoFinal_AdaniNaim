document.addEventListener('DOMContentLoaded', () => {
    let tarotCards = [];

    document.getElementById('loadCardsButton').addEventListener('click', () => {
        fetch('tarotCards.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                tarotCards = data;
                document.getElementById('getCardButton').disabled = false;
                console.log('Cards loaded:', tarotCards);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                alert('Unable to load tarot cards. Please try again later.');
            });
    });

    function saveCardToLocalStorage(card) {
        localStorage.setItem('selectedCard', JSON.stringify(card));
    }

    function loadCardFromLocalStorage() {
        return JSON.parse(localStorage.getItem('selectedCard'));
    }

    function displayCard(card) {
        Swal.fire({
            title: 'Card Drawn!',
            text: `You drew the card: ${card.name}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Tarot Card',
        });
    }

document.getElementById('getCardButton').addEventListener('click', () => {
    const card = getRandomCard();
    if (card) {
        saveCardToLocalStorage(card);
        displayCard(card);
    } else {
        alert('No cards available.');
    }
});

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

        const signs = document.querySelectorAll('.sign');
        signs.forEach(sign => {
            sign.style.transform = "";
            sign.style.zIndex = "";
        });

        const zodiacSign = card.zodiac.toLowerCase();
        const signElement = document.getElementById(`sign${zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1)}`);

        if (signElement) {
            signElement.style.transform = "translate(-50%, -50%) scale(1.5)";
            signElement.style.zIndex = "10";
        }
    }

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
        const searchTerm = document.getElementById('searchCardInput').value.trim().toLowerCase();
        const foundCard = tarotCards.find(card => card.name.toLowerCase() === searchTerm);

        if (foundCard) {
            document.getElementById('searchResult').innerText = `${foundCard.name} is in the deck.`;
        } else {
            document.getElementById('searchResult').innerText = `${searchTerm} is not in the deck.`;
        }
    });

    document.getElementById('searchSignButton').addEventListener('click', () => {
        const searchSign = document.getElementById('searchSignInput').value.trim().toLowerCase();
        const foundCard = tarotCards.find(card => card.zodiac.toLowerCase() === searchSign);

        if (foundCard) {
            document.getElementById('searchResult').innerText = `${searchSign.charAt(0).toUpperCase() + searchSign.slice(1)} is associated with ${foundCard.name}.`;
        } else {
            document.getElementById('searchResult').innerText = `${searchSign.charAt(0).toUpperCase() + searchSign.slice(1)} is not associated with any card.`;
        }
    });
});