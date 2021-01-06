// Grad some DOM components
const body = document.querySelector("body");
const figureParts = document.querySelectorAll(".container__figure--part");
const wrongLetters = document.querySelector("#wrongletters");
const word = document.querySelector("#word");
const popup = document.querySelector(".popup-container");
const finalMsg = document.querySelector("#popup__final-message");
const finalMsgRevealWord = document.querySelector("#popup__final-message--reveal-word");
const playAgainBtn = document.querySelector("#popup__play-button");
const notification = document.querySelector("#container__notification");

let letters = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();
document.querySelector('.keyboard').innerHTML = letters.map(letter => `<li class="key">${letter}</li>`).join('');

Math.random() > .5 ? body.style.background = '#010502 url("./img/hangman2.jpg") no-repeat center center / cover' : body.style.background = '#020202 url("./img/hangman1.jpg") no-repeat center center / cover';

const words = [
	"according",
	"accurate",
	"accurately",
	"acquire",
	"acquisition",
	"ancient",
	"arithmetic",
	"assignment",
	"attacker",
	"attendance",
	"authority",
	"average",
	"misbehave",
	"bilingual",
	"bilingualism",
	"breathe",
	"calculate",
	"calculated",
	"calendar",
	"century",
	"coherent",
	"coherence",
	"compare",
	"comparison",
	"complete",
	"incomplete",
	"complicated",
	"complication",
	"conclude",
	"conclusion",
	"connected",
	"connection",
	"contain",
	"container",
	"containment",
	"convince",
	"cursive",
	"decision",
	"dependable",
	"dependence",
	"discover",
	"discovery",
	"drawing",
	"enjoyment",
	"entirety",
	"contains",
	"vocabulary",
	"probably",
	"student",
	"proficiency",
	"vocabulary",
	"alphabetically",
	"lessons",
	"injured",
	"communication",
	"frequent",
	"usage",
	"individual",
	"differences",
	"vocabulary",
	"knowledge",
	"cognate",
	"recognition",
	"depending",
	"learner",
	"language",
	"vocabulary",
	"student",
	"considerably",
	"important",
	"research",
	"knowing",
	"indicate",
	"students",
	"words",
	"similar",
	"important",
	"learners",
	"practice",
	"different",
	"forms",
	"envelope",
	"equipment",
	"equivalent",
	"equivalence",
	"extreme",
	"extremely",
	"famously",
	"favorite",
	"favoritism",
	"fearful",
	"gallery",
	"gathering",
	"however",
	"addition",
	"include",
	"inclusion",
	"injured",
	"instead",
	"known",
	"unknown",
	"knowledge",
	"illegal",
	"legible",
	"illegible",
	"literate",
	"literature",
	"mannerism",
	"mention",
	"message",
	"messenger",
	"mystery",
	"mysterious",
	"occasion",
	"occasionally",
	"opposite",
	"orderly",
	"original",
	"originality",
	"patient",
	"patience",
	"perhaps",
	"place",
	"placement",
	"impolite",
	"populate",
	"population",
	"postage",
	"rapidly",
	"request",
	"responsible",
	"responsive",
	"schedule",
	"serious",
	"seriously",
	"seriousness",
	"similar",
	"similarity",
	"solution",
	"sufficient",
	"insufficient",
	"translate",
	"translator",
	"translation",
	"absence",
	"accident",
	"addition",
	"adultery",
	"alligator",
	"although",
	"anybody",
	"appliance",
	"approximately",
	"approximate",
	"argument",
	"argumentation",
	"arrange",
	"arranged",
	"assassinate",
	"assassination",
	"available",
	"unavailable",
	"awareness",
	"because",
	"belonging",
	"blender",
	"blindness",
	"bleed",
	"boneless",
	"butterfly",
	"capital",
	"capitalize",
	"capitalization",
	"careful",
	"carefully",
	"careless",
	"caterpillar",
	"chose",
	"circular",
	"classify",
	"classification",
	"climate",
	"climbing",
	"continent",
	"continental",
	"controversial",
	"counterfeit",
	"current",
	"currency",
	"defense",
	"delicate",
	"dessert",
	"distance",
	"distinguish",
	"distinguishable",
	"economy",
	"economic",
	"economics",
	"embarrass",
	"embarrassment",
	"especially",
	"geography",
	"giraffe",
	"gorilla",
	"government",
	"governmental",
	"grateful",
	"healthy",
	"imagine",
	"insurance",
	"largest",
	"laughter",
	"lightning",
	"unloaded",
	"unlocked",
	"maturity",
	"measure",
	"measurement",
	"methodology",
	"mixer",
	"mixture",
	"mosquito",
	"needlelike",
	"nesting",
	"occurrence",
	"percent",
	"percentile",
	"percentage",
	"pleasant",
	"unpleasant",
	"precious",
	"prevalent",
	"prevalence",
	"prevent",
	"prevention",
	"previous",
	"previously",
	"property",
	"protect",
	"protection",
	"protected",
	"unprotected",
	"puzzling",
	"reptile",
	"reserve",
	"restrict",
	"restriction",
	"restrictive",
	"resulting",
	"resultant",
	"routine",
	"routinely",
	"scissors",
	"seedless",
	"shapely",
	"shapeless",
	"sheepish",
	"skilled",
	"skillful",
	"skinless",
	"somebody",
	"resourceful",
	"specific",
	"specifically",
	"texture",
	"textured",
	"thunder",
	"thundering",
	"tornado",
	"violent",
	"violence",
	"watermelon",
	"wingless",
	"ability",
	"inability",
	"achieve",
	"achievement",
	"actually",
	"adaptation",
	"adhesive",
	"advantage",
	"allowance",
	"automatic",
	"automatically",
	"battery",
	"biography",
	"biographical",
	"biology",
	"biological",
	"bizarre",
	"bothersome",
	"capital",
	"catalog",
	"certain",
	"certainly",
	"childhood",
	"commitment",
	"compress",
	"compression",
	"condition",
	"conditionally",
	"consist",
	"creation",
	"creative",
	"creatively",
	"criminal",
	"demonstrate",
	"demonstration",
	"desirable",
	"detailed",
	"develop",
	"development",
	"diligent",
	"diligence",
	"distant",
	"distance",
	"document",
	"documentary",
	"documentation",
	"emotion",
	"emotional",
	"encyclopedia",
	"encyclopedic",
	"engineer",
	"engineering",
	"establish",
	"establishment",
	"exception",
	"exceptional",
	"excessive",
	"execute",
	"execution",
	"existence",
	"experiment",
	"experimental",
	"explode",
	"explosion",
	"failure",
	"flavorful",
	"forceful",
	"fortunately",
	"unfortunately",
	"gainful",
	"government",
	"increase",
	"industry",
	"industrious",
	"install",
	"installation",
	"invention",
	"inventor",
	"lantern",
	"magnetic",
	"minimize",
	"motivate",
	"motivation",
	"nickname",
	"obstacle",
	"odorless",
	"operate",
	"operator",
	"operation",
	"opinion",
	"orchestra",
	"partially",
	"pedestrian",
	"permanent",
	"permanence",
	"perspiration",
	"physical",
	"preceding",
	"primary",
	"primitive",
	"process",
	"produce",
	"production",
	"productive",
	"promise",
	"punishment",
	"quotation",
	"relationship",
	"relative",
	"relative",
	"relatively",
	"removal",
	"revelation",
	"rewarding",
	"scratch",
	"selection",
	"semester",
	"society",
	"societal",
	"storage",
	"succeed",
	"success",
	"successful",
	"terrible",
	"therefore",
	"thought",
	"thoughtful",
	"through",
	"thorough",
	"throughout",
	"transmit",
	"transmitter",
	"transmission",
	"transport",
	"transportation",
	"valuable",
	"variety",
	"wholesome",
	"acceptance",
	"achieve",
	"achievement",
	"adjacent",
	"adjustment",
	"advertise",
	"advertisement",
	"agreement",
	"alarming",
	"allowance",
	"amendment",
	"annoying",
	"annoyance",
	"appoint",
	"architecture",
	"architect",
	"argument",
	"ashamed",
	"assessment",
	"astonish",
	"astonishment",
	"attract",
	"attraction",
	"bordered",
	"capable",
	"characteristic",
	"coastal",
	"coastline",
	"colonial",
	"colonize",
	"condition",
	"conditional",
	"confession",
	"convince",
	"convincing",
	"corresponding",
	"correspondent",
	"correspondence",
	"correspond",
	"defendant",
	"develop",
	"developed",
	"undeveloped",
	"development",
	"destination",
	"diamond",
	"disconnect",
	"displace",
	"displacement",
	"distinct",
	"distinctive",
	"enforce",
	"enforcement",
	"enhance",
	"enhancement",
	"entertain",
	"entertainment",
	"extension",
	"foreign",
	"foreigner",
	"forthcoming",
	"further",
	"generate",
	"generation",
	"government",
	"governor",
	"hasty",
	"hastily",
	"dishonest",
	"humidity",
	"improve",
	"improvement",
	"investment",
	"involve",
	"involvement",
	"magnificent",
	"magnificence",
	"management",
	"measure",
	"measurement",
	"movement",
	"movement",
	"multiple",
	"ongoing",
	"plateau",
	"powerful",
	"prepayment",
	"profitable",
	"purpose",
	"purposeful",
	"reference",
	"referent",
	"refundable",
	"scenery",
	"settlement",
	"solutions",
	"somewhat",
	"sophisticated",
	"statement",
	"stately",
	"statistics",
	"surround",
	"temperature",
	"temperate",
	"treatment",
	"tropical",
	"unbeatable",
	"wealthy",
	"agriculture",
	"agricultural",
	"approve",
	"approval",
	"artificial",
	"artificiality",
	"assassin",
	"assassinate",
	"assassination",
	"attachment",
	"attempt",
	"attraction",
	"avoidance",
	"battlefield",
	"bitterly",
	"blockade",
	"candidate",
	"candidacy",
	"censorship",
	"consensus",
	"characteristic",
	"characteristically",
	"citizen",
	"citizenship",
	"command",
	"commanding",
	"companion",
	"companionship",
	"compose",
	"composer",
	"conflict",
	"conflicting",
	"constitution",
	"constitute",
	"construction",
	"dampness",
	"destroy",
	"district",
	"division",
	"drought",
	"earthquake",
	"election",
	"elevator",
	"emotion",
	"emotional",
	"encourage",
	"encouragement",
	"envelope",
	"expanding",
	"expansion",
	"floatation",
	"general",
	"generality",
	"generalize",
	"hindrance",
	"honorable",
	"inspire",
	"inspiration",
	"invasion",
	"lasting",
	"membership",
	"missile",
	"mission",
	"missionary",
	"multiple",
	"national",
	"nationalize",
	"nationally",
	"neglect",
	"neglectful",
	"neutral",
	"neutrality",
	"nowadays",
	"obvious",
	"obviously",
	"official",
	"officially",
	"original",
	"originally",
	"passage",
	"passageway",
	"passages",
	"periodic",
	"periodically",
	"persuade",
	"persuasion",
	"prejudice",
	"prejudicial",
	"prescribe",
	"prescription",
	"prisoner",
	"propose",
	"proposal",
	"provide",
	"provision",
	"province",
	"provincial",
	"reaction",
	"reactive",
	"reelect",
	"refusal",
	"regardless",
	"resident",
	"respiration",
	"shallow",
	"shocked",
	"slavery",
	"slightly",
	"sponsor",
	"sponsorship",
	"statistics",
	"statistical",
	"striped",
	"stunned",
	"surveyor",
	"toughness",
	"tradition",
	"traditional",
	"traditionally",
	"turbulent",
	"turbulence",
	"violent",
	"violence",
	"abbreviated",
	"abbreviation",
	"adequately",
	"administer",
	"administration",
	"annually",
	"application",
	"approaching",
	"confident",
	"confidence",
	"creative",
	"creation",
	"crowded",
	"deceive",
	"deceptive",
	"deceitful",
	"deficient",
	"deficiency",
	"dependent",
	"independent",
	"difference",
	"different",
	"differently",
	"disease",
	"disrupt",
	"disruption",
	"acquire",
	"acquisition",
	"anniversary",
	"beneath",
	"beneficial",
	"collapsed",
	"college",
	"consequently",
	"consequence",
	"considerably",
	"constantly",
	"corporation",
	"crowded",
	"crucial",
	"curious",
	"curiosity",
	"current",
	"currency",
	"definite",
	"definitely",
	"definitive",
	"despite",
	"devised",
	"diagram",
	"distraught",
	"drowning",
	"effective",
	"effectively",
	"efficient",
	"efficiently",
	"emergency",
	"equivalent",
	"equivalence",
	"especially",
	"estimate",
	"estimation",
	"evident",
	"evidence",
	"evidently",
	"excellence",
	"excellent",
	"expendable",
	"experience",
	"experiential",
	"explain",
	"explanation",
	"explosive",
	"extremely",
	"factors",
	"forbidden",
	"forecast",
	"forecaster",
	"ignorance",
	"illustrate",
	"illustration",
	"innovate",
	"innovative",
	"innovation",
	"liberal",
	"liberalism",
	"location",
	"majority",
	"material",
	"materialistic",
	"missing",
	"negation",
	"normally",
	"obedience",
	"obedient",
	"objective",
	"outcome",
	"passenger",
	"patience",
	"payment",
	"perceive",
	"perception",
	"pertain",
	"pertinent",
	"potential",
	"predict",
	"prediction",
	"presence",
	"profession",
	"professional",
	"proficient",
	"proficiency",
	"receipt",
	"resurgent",
	"resurgence",
	"resuscitate",
	"resuscitation",
	"section",
	"selection",
	"selective",
	"selectively",
	"sequence",
	"sequential",
	"shelter",
	"spinach",
	"sufficient",
	"sufficience",
	"suitable",
	"suppress",
	"survive",
	"survival",
	"thunderstorm",
	"tornado",
	"unaided",
	"unaware",
	"underestimate",
	"unpredictability",
	"vehicle",
	"vehicular",
	"victimize",
	"weakness",
	"ancestor",
	"announcement",
	"autograph",
	"basically",
	"calories",
	"childish",
	"childishness",
	"comprehend",
	"comprehension",
	"concerned",
	"conscious",
	"decrease",
	"digestion",
	"edition",
	"erosion",
	"exactly",
	"express",
	"expression",
	"familiar",
	"familiarity",
	"figurative",
	"forecaster",
	"forming",
	"freedom",
	"frequent",
	"frequently",
	"function",
	"functional",
	"headquarters",
	"honeymoon",
	"implication",
	"invisible",
	"isolated",
	"isolation",
	"loneliness",
	"majority",
	"marginal",
	"maximum",
	"national",
	"nationalize",
	"nationality",
	"naughty",
	"optional",
	"organization",
	"otherwise",
	"overall",
	"portion",
	"portrait",
	"purchase",
	"purchased",
	"pyramid",
	"quality",
	"quarreled",
	"recognizable",
	"recognize",
	"recognize",
	"replace",
	"replacement",
	"require",
	"requirement",
	"revolve",
	"revolution",
	"riddance",
	"sculptor",
	"several",
	"significant",
	"significance",
	"slender",
	"speeding",
	"straight",
	"stressful",
	"structure",
	"structural",
	"stylish",
	"subtitle",
	"summary",
	"summarize",
	"support",
	"supportive",
	"symbolize",
	"systematize",
	"thereby",
	"triangle",
	"typical",
	"version",
	"enables",
	"enlarge",
	"equally",
	"essential",
	"explain",
	"extended",
	"flexible",
	"foolishly",
	"indispensable",
	"ingredients",
	"inhabit",
	"inhabitants",
	"inherited",
	"interact",
	"interrupted",
	"layered",
	"memorize",
	"opportunity",
	"originated",
	"pattern",
	"unpeeled",
	"perform",
	"persuasion",
	"political",
	"politician",
	"precisely",
	"pressure",
	"promote",
	"recipient",
	"recommend",
	"recover",
	"regulate",
	"relaxation",
	"respond",
	"response",
	"robbery",
	"selfish",
	"separate",
	"shatter",
	"shattered",
	"skeleton",
	"squeezes",
	"substance",
	"superior",
	"sweeten",
	"syllable",
	"theories",
	"transfuse",
	"transfusion",
	"undercook",
	"universal",
	"useless",
	"various",
	"vegetarian",
	"vision"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let canPlay = true;

const correctLetters = [];
const wrongLettersArray = [];

// Display the hidden word
function displayWord() {
	word.innerHTML = `
		${selectedWord.split('').map(letter => `
			<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>
		`).join('')}
	`;

	const innerWord = word.innerText.replace(/[ \n]/g, '');
	console.log(innerWord);
	if (innerWord.toLowerCase() === selectedWord.toLowerCase()) {
		finalMsg.innerHTML = `Congratulations! You Won ${Math.random() > .5 ? '<img src="./img/laughing.png" class="popup__emoji"></img>' : '<img src="./img/nerd.png" class="popup__emoji"></img>'}`;
		finalMsgRevealWord.innerHTML = `Word: <span>${selectedWord}</span>`;
		popup.style.display = 'flex';

		canPlay = false;
	}
}

// Update the wrong letters array
function updateWrongLettersArray() {
	// Display the letters
	wrongLetters.innerHTML = `
		${wrongLettersArray.length > 0 ? '<h3>Wrong</h3>': ''}
		${wrongLettersArray.map(letter => `<span class="wrongletter">${letter}</span>`).join(' | ')}
	`;

	// Display the hangman parts
	figureParts.forEach((part, partIndex) => {
		const errors = wrongLettersArray.length;

		if (partIndex < errors) {
			part.style.display = 'flex';
		} else {
			part.style.display = 'none';
		}
	});

	// If the user is chances are over
	if (wrongLettersArray.length === figureParts.length) {
		// Display the popup
		finalMsg.innerHTML = `Sorry! You failed ${Math.random > .5 ? '<img src="./img/weary.png" class="popup__emoji"></img>' : '<img src="./img/frowning.png" class="popup__emoji"></img>'}`
		finalMsgRevealWord.innerHTML = `Word: <span>${selectedWord}</span>`;
		popup.style.display = 'flex';

		canPlay = false;
	}
}


// Show notification
function showNotification() {
	notification.classList.add("show");

	setTimeout(() => {
		notification.classList.remove("show");
	}, 2000);
}

// Detect the touch keyboard
let keys = document.querySelectorAll(".key");

keys.forEach(key => {
	if(canPlay) {
	    key.addEventListener('click', () => {
		    const letter = key.textContent.toLowerCase();

			if (selectedWord.includes(letter)) {
				// If the char is not in the correctLetters
				if(!correctLetters.includes(letter)) {
					correctLetters.push(letter);
					displayWord();
				} else {
					showNotification();
				}
			} else {
				if(!wrongLettersArray.includes(letter)) {
					wrongLettersArray.push(letter);
					updateWrongLettersArray();
				} else {
					showNotification();
				}
			}
	    });
	}
});

// Detect the letter keydown presses
window.addEventListener('keydown', (e) => {
	if(canPlay) {
		// This is the valid range of characters
		if(e.keyCode >= 65 && e.keyCode <= 90) {
			const letter = e.key.toLowerCase();

			if (selectedWord.includes(letter)) {
				// If the char is not in the correctLetters
				if(!correctLetters.includes(letter)) {
					correctLetters.push(letter);
					displayWord();
				} else {
					showNotification();
				}
			} else {
				if(!wrongLettersArray.includes(letter)) {
					wrongLettersArray.push(letter);
					updateWrongLettersArray();
				} else {
					showNotification();
				}
			}
		}
	}
});


// Restart the game
playAgainBtn.addEventListener('click', () => {
	canPlay = true;

	// Make all the array empty
	correctLetters.splice(0);
	wrongLettersArray.splice(0);
	selectedWord = words[Math.floor(Math.random() * words.length)];
	displayWord();
	updateWrongLettersArray();
	popup.style.display = "none";
});

displayWord();
