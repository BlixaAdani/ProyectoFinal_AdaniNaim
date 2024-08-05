let selectedCardNumber = null;

const signs = [
    { name: "Aries", description: "Iniciativa, valentía, y liderazgo. Se asocia con la carta de El Emperador." },
    { name: "Tauro", description: "Estabilidad, sensualidad, y determinación. Se asocia con la carta de El Hierofante." },
    { name: "Géminis", description: "Comunicación, adaptabilidad, y curiosidad. Se asocia con la carta de Los Enamorados." },
    { name: "Cáncer", description: "Emoción, protección, y sensibilidad. Se asocia con la carta de El Carro." },
    { name: "Leo", description: "Creatividad, confianza, y generosidad. Se asocia con la carta de La Fuerza." },
    { name: "Virgo", description: "Análisis, precisión, y servicio. Se asocia con la carta de El Ermitaño." },
    { name: "Libra", description: "Equilibrio, justicia, y sociabilidad. Se asocia con la carta de La Justicia." },
    { name: "Escorpio", description: "Intensidad, transformación, y misterio. Se asocia con la carta de La Muerte." },
    { name: "Sagitario", description: "Aventura, optimismo, y sabiduría. Se asocia con la carta de La Templanza." },
    { name: "Capricornio", description: "Disciplina, responsabilidad, y ambición. Se asocia con la carta de El Diablo." },
    { name: "Acuario", description: "Innovación, independencia, y originalidad. Se asocia con la carta de La Estrella." },
    { name: "Piscis", description: "Intuición, empatía, y espiritualidad. Se asocia con la carta de La Luna." }
];

const majorArcanaCards = [
    "El Loco", "El Mago", "La Sacerdotisa", "La Emperatriz", "El Emperador",
    "El Hierofante", "Los Enamorados", "El Carro", "La Fuerza", "El Ermitaño",
    "La Rueda de la Fortuna", "La Justicia", "El Colgado", "La Muerte", "La Templanza",
    "El Diablo", "La Torre", "La Estrella", "La Luna", "El Sol",
    "El Juicio", "El Mundo"
];

const minorArcana = {
        "Copas": [
            { card: "As de Copas", description: "Emociones nuevas y abundantes. Significa un nuevo comienzo emocional." },
            { card: "Dos de Copas", description: "Unión y asociación. Representa relaciones y armonía." },
            { card: "Tres de Copas", description: "Celebración y comunidad. Se refiere a la alegría compartida." },
            { card: "Cuatro de Copas", description: "Descontento y reflexión. Indica una necesidad de reevaluar tus emociones." },
            { card: "Cinco de Copas", description: "Pérdida y dolor. Representa arrepentimiento y tristeza." },
            { card: "Seis de Copas", description: "Nostalgia y recuerdos. Conecta con el pasado y la inocencia infantil." },
            { card: "Siete de Copas", description: "Opciones y confusión. Sugiere muchas posibilidades y la necesidad de elegir." },
            { card: "Ocho de Copas", description: "Desaparecer y dejar atrás. Indica un cambio o la búsqueda de algo más significativo." },
            { card: "Nueve de Copas", description: "Satisfacción y realización. Representa la obtención de deseos y felicidad." },
            { card: "Diez de Copas", description: "Felicidad y armonía familiar. Simboliza la plenitud emocional y relaciones felices." },
            { card: "Sota de Copas", description: "Mensajes emocionales. Indica la llegada de noticias o propuestas relacionadas con el corazón." },
            { card: "Caballo de Copas", description: "Romanticismo y idealismo. Representa la búsqueda de romance y sueños." },
            { card: "Reina de Copas", description: "Empatía y compasión. Se refiere a la habilidad para cuidar y comprender a los demás." },
            { card: "Rey de Copas", description: "Madurez emocional y equilibrio. Representa la sabiduría y la estabilidad en las emociones." }
        ],
        "Oros": [
            { card: "As de Oros", description: "Nuevas oportunidades financieras y materiales. Indica un nuevo comienzo en la prosperidad." },
            { card: "Dos de Oros", description: "Equilibrio y adaptabilidad. Sugiere la gestión de múltiples prioridades o recursos." },
            { card: "Tres de Oros", description: "Trabajo en equipo y colaboración. Representa el éxito a través de la cooperación." },
            { card: "Cuatro de Oros", description: "Seguridad y estabilidad. Indica la necesidad de mantener el control sobre los recursos." },
            { card: "Cinco de Oros", description: "Dificultades financieras y pérdidas. Señala la falta de seguridad y la necesidad de apoyo." },
            { card: "Seis de Oros", description: "Generosidad y equilibrio. Representa la distribución equitativa de los recursos y la caridad." },
            { card: "Siete de Oros", description: "Paciencia y evaluación. Indica el tiempo de espera y la evaluación del progreso." },
            { card: "Ocho de Oros", description: "Dedicación y habilidad. Sugiere el trabajo duro y el perfeccionamiento de habilidades." },
            { card: "Nueve de Oros", description: "Logro y éxito material. Representa el disfrute de los frutos del esfuerzo." },
            { card: "Diez de Oros", description: "Riqueza y legado. Simboliza la estabilidad financiera y la seguridad a largo plazo." },
            { card: "Sota de Oros", description: "Aprendizaje y nuevas oportunidades. Indica la llegada de nuevas ideas o proyectos." },
            { card: "Caballo de Oros", description: "Responsabilidad y trabajo diligente. Representa el enfoque en los objetivos y la perseverancia." },
            { card: "Reina de Oros", description: "Abundancia y practicidad. Se refiere a la capacidad de cuidar y proporcionar estabilidad material." },
            { card: "Rey de Oros", description: "Éxito y autoridad financiera. Simboliza la capacidad de gestionar y controlar los recursos con habilidad." }
        ],
        "Espadas": [
            { card: "As de Espadas", description: "Claridad mental y verdad. Indica nuevos comienzos en la comprensión y la comunicación." },
            { card: "Dos de Espadas", description: "Conflicto y decisiones. Sugiere la necesidad de tomar decisiones difíciles y enfrentar conflictos." },
            { card: "Tres de Espadas", description: "Dolor y tristeza. Representa el sufrimiento emocional y la separación." },
            { card: "Cuatro de Espadas", description: "Descanso y recuperación. Indica la necesidad de tiempo para sanar y reflexionar." },
            { card: "Cinco de Espadas", description: "Conflicto y derrota. Señala el enfrentamiento y las consecuencias de las disputas." },
            { card: "Seis de Espadas", description: "Transición y cambio. Representa el movimiento hacia una situación más tranquila." },
            { card: "Siete de Espadas", description: "Estrategia y engaño. Sugiere la necesidad de ser astuto y cauteloso en los planes." },
            { card: "Ocho de Espadas", description: "Restricción y miedo. Indica sentimientos de atrapamiento y limitación." },
            { card: "Nueve de Espadas", description: "Ansiedad y preocupación. Representa la angustia mental y la preocupación." },
            { card: "Diez de Espadas", description: "Ruptura y dolor. Simboliza el final doloroso de una situación difícil." },
            { card: "Sota de Espadas", description: "Curiosidad y vigilancia. Sugiere la llegada de noticias y la necesidad de estar alerta." },
            { card: "Caballo de Espadas", description: "Acción y rapidez. Representa la energía y la rapidez en la resolución de problemas." },
            { card: "Reina de Espadas", description: "Claridad y justicia. Se refiere a la habilidad para tomar decisiones objetivas y justas." },
            { card: "Rey de Espadas", description: "Autoridad y poder mental. Simboliza la capacidad de liderar con sabiduría y autoridad." }
        ],
        "Bastos": [
            { card: "As de Bastos", description: "Inspiración y nuevos comienzos. Indica el inicio de un nuevo proyecto o idea." },
            { card: "Dos de Bastos", description: "Planificación y visión. Sugiere la necesidad de planificación y establecer metas." },
            { card: "Tres de Bastos", description: "Expansión y progreso. Representa el avance y la expansión en proyectos." },
            { card: "Cuatro de Bastos", description: "Celebración y estabilidad. Simboliza el éxito y la celebración de los logros." },
            { card: "Cinco de Bastos", description: "Competencia y conflicto. Indica la presencia de desafíos y rivalidades." },
            { card: "Seis de Bastos", description: "Victoria y reconocimiento. Representa el éxito y el reconocimiento por los logros." },
            { card: "Siete de Bastos", description: "Defensa y perseverancia. Sugiere la necesidad de defender tus posiciones y perseverar." },
            { card: "Ocho de Bastos", description: "Velocidad y acción. Indica el movimiento rápido y la acción decisiva." },
            { card: "Nueve de Bastos", description: "Resiliencia y fortaleza. Representa la resistencia y la capacidad para superar obstáculos." },
            { card: "Diez de Bastos", description: "Carga y responsabilidad. Sugiere la necesidad de gestionar cargas y responsabilidades." },
            { card: "Sota de Bastos", description: "Energía y aventura. Indica el inicio de nuevas aventuras y la búsqueda de inspiración." },
            { card: "Caballo de Bastos", description: "Acción y ambición. Representa la energía y el impulso para alcanzar metas." },
            { card: "Reina de Bastos", description: "Creatividad y confianza. Se refiere a la habilidad para inspirar y liderar con pasión." },
            { card: "Rey de Bastos", description: "Liderazgo y visión. Simboliza la habilidad para liderar con visión y determinación." }
        ]
    };

const cardImages = {
    "El Loco": "images/fool.jpg",
    "El Mago": "images/magician.jpg",
    "La Sacerdotisa": "images/high_priestess.jpg",
    "La Emperatriz": "images/empress.jpg",
    "El Emperador": "images/emperor.jpg",
    "El Hierofante": "images/hierophant.jpg",
    "Los Enamorados": "images/lovers.jpg",
    "El Carro": "images/chariot.jpg",
    "La Fuerza": "images/strength.jpg",
    "El Ermitaño": "images/hermit.jpg",
    "La Rueda de la Fortuna": "images/wheel_of_fortune.jpg",
    "La Justicia": "images/justice.jpg",
    "El Colgado": "images/hanged_man.jpg",
    "La Muerte": "images/death.jpg",
    "La Templanza": "images/temperance.jpg",
    "El Diablo": "images/devil.jpg",
    "La Torre": "images/tower.jpg",
    "La Estrella": "images/star.jpg",
    "La Luna": "images/moon.jpg",
    "El Sol": "images/sun.jpg",
    "El Juicio": "images/judgement.jpg",
    "El Mundo": "images/world.jpg"
};

const selectANumber = () => {
    selectedCardNumber = Math.floor(Math.random() * majorArcanaCards.length);
    const selectedCard = majorArcanaCards[selectedCardNumber];
    document.getElementById('cardImage').src = cardImages[selectedCard];
    document.getElementById('cardImage').classList.add('show');
    document.getElementById('cardDisplay').classList.add('show');
    document.getElementById('cardDisplay').classList.remove('hide');
    localStorage.setItem('selectedCardNumber', selectedCardNumber);
    document.getElementById('cardDisplay').innerHTML = `The card you have selected is: ${selectedCard}`;
};

const getZodiacSignForCard = (card) => {
    switch(card) {
        case "El Emperador":
            return "Aries";
        case "El Hierofante":
            return "Tauro";
        case "Los Enamorados":
            return "Géminis";
        case "El Carro":
            return "Cáncer";
        case "La Fuerza":
            return "Leo";
        case "El Ermitaño":
            return "Virgo";
        case "La Justicia":
            return "Libra";
        case "La Muerte":
            return "Escorpio";
        case "La Templanza":
            return "Sagitario";
        case "El Diablo":
            return "Capricornio";
        case "La Estrella":
            return "Acuario";
        case "La Luna":
            return "Piscis";
        default:
            return "Unknown";
    }
};

const signEq = () => {
    if (selectedCardNumber === null) {
        document.getElementById('zodiacSignDisplay').classList.add('show');
        document.getElementById('zodiacSignDisplay').classList.remove('hide');
        document.getElementById('zodiacSign').innerHTML = "Please select a card first.";
        return;
    }
    const selectedCard = majorArcanaCards[selectedCardNumber];
    const zodiacSign = getZodiacSignForCard(selectedCard);
    document.getElementById('zodiacSignDisplay').classList.add('show');
    document.getElementById('zodiacSignDisplay').classList.remove('hide');
    document.getElementById('zodiacSign').innerHTML = `The zodiac sign for the selected card (${selectedCard}) is: ${zodiacSign}`;
    highlightSign(zodiacSign);
};

const highlightSign = (signName) => {
    document.querySelectorAll('.sign').forEach(signElement => {
        signElement.classList.remove('center');
    });
    document.getElementById(`sign${signName}`).classList.add('center');
};

// Retrieve the stored card number and show the image when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const storedCardNumber = localStorage.getItem('selectedCardNumber');
    if (storedCardNumber !== null) {
        selectedCardNumber = parseInt(storedCardNumber);
        const storedCard = majorArcanaCards[selectedCardNumber];
        document.getElementById('cardImage').src = cardImages[storedCard];
        document.getElementById('cardImage').classList.add('show');
        document.getElementById('cardDisplay').classList.add('show');
        document.getElementById('cardDisplay').classList.remove('hide');
        document.getElementById('cardDisplay').innerHTML = `The card you have selected is: ${storedCard}`;
    }
});

// Function to search for a card
const searchCard = (cardName) => {
    if (majorArcanaCards.includes(cardName)) {
        return "Major Arcana";
    } else if (minorArcanaCards.includes(cardName)) {
        return "Minor Arcana";
    } else {
        return "Card not found";
    }
};

// Example of how to use the searchCard function
const findCardType = () => {
    const cardName = prompt("Enter the name of the card to search:");
    const result = searchCard(cardName);
    document.getElementById('cardSearchDisplay').classList.add('show');
    document.getElementById('cardSearchDisplay').classList.remove('hide');
    document.getElementById('cardSearchResult').innerHTML = `The card "${cardName}" is a: ${result}`;
};