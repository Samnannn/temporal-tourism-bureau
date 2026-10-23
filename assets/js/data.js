/* The Bureau's era catalogue. Shared by the index, dossiers, booking and packing. */
window.TTB = window.TTB || {};

TTB.eras = [
  {
    id: "mughal",
    no: "001",
    name: "The Mughal Court",
    year: "1605",
    yearLong: "1605 CE",
    place: "Agra, Hindustan",
    coords: "27.17° N · 78.04° E",
    epoch: "early-modern",
    epochLabel: "Early modern",
    tagline: "The last good year of a very good empire.",
    desc: "Akbar is dying and no one will say it. The atelier is finishing a manuscript that will outlast everyone in the room. You are invited, briefly, to be one of the people in the room.",
    long: [
      "Akbar is dying and the court has decided not to say so. The imperial atelier is finishing a manuscript that will outlast every person in the room, including the emperor, and the painters have been awake for three days. Outside, on the dry bed of the lake, the polo is still being played.",
      "This is the last good year of the largest, wealthiest, most argumentative empire on earth. Our itinerary keeps you at the edges of power: the late audience, the kitchens, the workshop where thirty-seven painters share a single north-facing lamp. You will not meet the emperor. You will stand close enough to hear him breathe, and you will be asked, politely, to leave before the succession begins."
    ],
    img: "assets/img/era-mughal.jpg",
    alt: "Engraving of a Mughal audience hall at dusk, courtiers seated before a canopied imperial platform.",
    plate: "Plate I",
    climate: "34°C · dry, high sun",
    hazard: "Low",
    hazardKey: "low",
    paradox: "Low",
    paradoxKey: "low",
    language: "Persian · Hindustani",
    duration: "3–9 days",
    guide: "1 : 6",
    price: 1480,
    status: "open",
    sights: [
      { t: "The Diwan-i-Khas, at dusk", d: "Four corners, one pillar, and a conversation that decided a province before dinner." },
      { t: "The imperial atelier", d: "Thirty-seven painters, one lamp, and a manuscript the world will still be arguing about in four hundred years." },
      { t: "Polo on the dry lake", d: "The emperor's ponies, the crowd's noise, the dust. Bring something to cover your face." },
      { t: "The kitchens at four in the morning", d: "Five hundred cooks. One enormous pot. The best meal of your life, served standing up." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive before the evening audience. Your guide will dress you; say yes to the cotton and no to the jewellery." },
      { d: "Day two", t: "Atelier in the morning, kitchens at four. In between, nothing. The heat is the itinerary." },
      { d: "Day three", t: "The polo, then the long drive back through the bazaar. Buy the manuscript, not the sword." }
    ],
    bring: ["Loose cotton layers", "A lined notebook (cameras are not permitted inside)", "Something to cover your face on the lakebed", "A gift of dried fruit for your guide"],
    notPermitted: ["Any camera, including the one in your phone", "Modern lenses or binoculars in the audience hall", "Mentioning 1857"],
    note: {
      text: "I have never been so aware of the exact temperature of a room. Akbar's hall holds the heat of the day like a held breath. Four minutes in, I stopped taking notes and started listening.",
      author: "Priya Ranjan",
      role: "Architectural historian · travelled 2089"
    }
  },
  {
    id: "alexandria",
    no: "002",
    name: "The Great Library",
    year: "250 BCE",
    yearLong: "250 BCE",
    place: "Alexandria, Egypt",
    coords: "31.20° N · 29.92° E",
    epoch: "antiquity",
    epochLabel: "Antiquity",
    tagline: "Every book, before it was lost.",
    desc: "Not the fire. Two centuries before the fire. The Mouseion at its height, when the shelves were still full and the argument in the courtyard was about geometry.",
    long: [
      "The Great Library is not a building in our sense of the word. It is a habit: everyone who arrives is asked what they know, and the answer is written down. On an ordinary morning, Eratosthenes is measuring the earth with a stick and a shadow, a ship's captain is arguing about a copy of Aeschylus, and the catalogue room smells of cedar oil and wet stone.",
      "There is a rule here that the Bureau asks you to take seriously. You may read anything, and you may not tell anyone what you have read in the future. The librarians will not ask where you are from. They will ask what you have brought. Bring an answer."
    ],
    img: "assets/img/era-alexandria.jpg",
    alt: "Engraving of the Great Library of Alexandria: a colonnaded hall of scrolls, scholars at tables, harbour light.",
    plate: "Plate II",
    climate: "26°C · coastal, dry",
    hazard: "Low",
    hazardKey: "low",
    paradox: "Moderate",
    paradoxKey: "moderate",
    language: "Greek",
    duration: "4–10 days",
    guide: "1 : 6",
    price: 2240,
    status: "open",
    sights: [
      { t: "The catalogue room", d: "The Pinakes — the first index in the world — and the only copy. Do not touch the shelves." },
      { t: "A lecture by Eratosthenes", d: "He will be wrong about one thing. Say nothing." },
      { t: "The harbour at dawn", d: "Ships arriving with scrolls they are legally required to surrender for copying." },
      { t: "The acquisition desk", d: "Do not mention the fire. Do not mention the fire." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive by sea, as everyone does. Declare what you know at the gate; your guide will soften the answer." },
      { d: "Day two", t: "The catalogue room in the morning, the courtyard argument in the afternoon. Bring a stylus and no opinions." },
      { d: "Day three", t: "The harbour at dawn, then three days of reading with a librarian who will not leave you alone." }
    ],
    bring: ["Linen tunic and sandals", "A stylus and a wax tablet", "A gift of blank papyrus for the acquisition desk", "One question you are willing to have answered badly"],
    notPermitted: ["Any printed book published after 1440", "Mentioning the fire, or any date that follows it", "Photographing the catalogue — yes, even now"],
    note: {
      text: "A librarian asked me what I had brought. I said 'a camera.' She wrote the word down, looked at it for a long moment, and said: 'We will find a use for it in a hundred years.' I have thought about that sentence for eleven years.",
      author: "Tomás Achebe",
      role: "Translator · travelled 2101"
    }
  },
  {
    id: "cretaceous",
    no: "003",
    name: "The Cretaceous Picnic",
    year: "68,000,000 BCE",
    yearLong: "68 million BCE",
    place: "Hell Creek, Laurentia",
    coords: "47.11° N · 107.03° W",
    epoch: "deep",
    epochLabel: "Deep time",
    tagline: "The most popular extreme package we offer. We wish it weren't.",
    desc: "Sixty-eight million years before anyone has an opinion about you. Ferns to the shoulder. The air tastes of iron. Lunch is served behind a Class IV field screen.",
    long: [
      "The Cretaceous is our largest destination and our least forgiving. The oxygen is thirty per cent richer than you are built for; the light is the same as your garden in June; the ground moves. Our party travels with two guides, a Class IV field screen, and a radio that works because we insist that it does.",
      "Lunch is served behind the screen, at a table, with linen. It is, by consensus, the best meal the Bureau offers, and the reason the package stays sold out. You will not touch anything alive. You will not take anything home, and customs will check. Sixty-eight million years is long enough that nothing you do here has ever mattered, which is the only promise we can make completely."
    ],
    img: "assets/img/era-cretaceous.jpg",
    alt: "Engraving of a Cretaceous floodplain with giant ferns, a still river and a distant herd of hadrosaurs.",
    plate: "Plate III",
    climate: "29°C · humid, rich air",
    hazard: "Extreme",
    hazardKey: "extreme",
    paradox: "None",
    paradoxKey: "none",
    language: "None · full guide escort",
    duration: "3 days (fixed)",
    guide: "1 : 3",
    price: 9600,
    status: "open",
    sights: [
      { t: "The river crossing at midday", d: "Fourteen hadrosaurs. Nobody speaks, including the guides." },
      { t: "The fern canopy at dawn", d: "Warm rain, no sound but dripping, the whole world breathing." },
      { t: "The nest site at dusk", d: "Our guides know the way back. Follow exactly." },
      { t: "The view from the ridge", d: "The continent, before it has a name or a border." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive at first light. Orientation, screen check, and a very serious hour about sound." },
      { d: "Day two", t: "The river crossing at midday, lunch behind the screen, the ridge at four." },
      { d: "Day three", t: "Nest site at dusk, then departure before the light goes. Nobody wants to be here after dark." }
    ],
    bring: ["Nothing. Not a bag, not a lens, not a snack. The Bureau will dress, feed and return you."],
    notPermitted: ["Any organic material, in either direction", "Leaving the field screen without a guide", "Sound of any kind during the river crossing"],
    note: {
      text: "I have never felt less important or more alive. I ate a very good sandwich while a hundred tonnes of animal drank forty metres away. I still dream about the sound the water made.",
      author: "Hessa Marchetti",
      role: "Geologist · travelled 2095"
    }
  },
  {
    id: "vienna",
    no: "004",
    name: "Vienna, in Four Movements",
    year: "1786",
    yearLong: "1786 CE",
    place: "Vienna, Habsburg Empire",
    coords: "48.21° N · 16.37° E",
    epoch: "early-modern",
    epochLabel: "Early modern",
    tagline: "The century's best evening, played four ways.",
    desc: "A Tuesday. Two quartets, one argument, and a man at the back of the room writing something down. The coffee is terrible. The evening is not.",
    long: [
      "Vienna in 1786 is not a city so much as a very long evening. The coffee houses do not close; the salons open after the theatres do; and the music being written in the back rooms is the reason anyone alive in your century has heard of this town.",
      "Your ticket is for a small room, thirty-one chairs, and a quartet that will play four pieces, one of which no one has heard before and no one will hear again in that arrangement. At the back, a small man in a bad wig is writing on the tablecloth. The Bureau's advice, and we cannot stress this enough, is to let him."
    ],
    img: "assets/img/era-vienna.jpg",
    alt: "Engraving of a candlelit Viennese coffeehouse with a string quartet on a small stage and one figure writing.",
    plate: "Plate IV",
    climate: "12°C · cool evenings",
    hazard: "Low",
    hazardKey: "low",
    paradox: "Moderate",
    paradoxKey: "moderate",
    language: "German",
    duration: "2–5 days",
    guide: "1 : 8",
    price: 1120,
    status: "open",
    sights: [
      { t: "The premiere, thirty-one chairs", d: "Do not applaud early; the second movement will earn it." },
      { t: "The back room, after", d: "The tablecloth goes home with the house, not with you." },
      { t: "Demel's at midnight", d: "The pastry is better than the coffee. This is the only review we will give." },
      { t: "The Prater at dawn", d: "The whole city, slightly hungover, in its best coat." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive in the afternoon, collect your coat, walk to the room. Eat something first; the concert runs late." },
      { d: "Day two", t: "A morning of nothing, a salon at four, the back room after midnight." },
      { d: "Day three", t: "The Prater at dawn, then departure before the coffee gets worse." }
    ],
    bring: ["A wool coat — the evenings are colder than the paintings suggest", "Cash in small coin", "A willingness to sit in the second row"],
    notPermitted: ["Any recording device, of any kind, from any century", "Speaking to the composer; he is working", "Correcting the coffee"],
    note: {
      text: "The second movement stopped my breathing for about eleven seconds. I counted later, from memory. I have never got it back, and I have heard it four hundred times since.",
      author: "András Weill",
      role: "Conductor · travelled 2088"
    }
  },
  {
    id: "hagia",
    no: "005",
    name: "The Day the Dome Held",
    year: "537",
    yearLong: "537 CE",
    place: "Constantinople",
    coords: "41.00° N · 28.98° E",
    epoch: "antiquity",
    epochLabel: "Antiquity",
    tagline: "Fourteen years of stone; one afternoon of not falling.",
    desc: "Justinian's architects gambled the empire on a dome that should not stand. It stands. Be in the room for the first hour.",
    long: [
      "The dome is too wide, too shallow and too heavy, and everyone in the room knows it. The architects have been dead or dismissed; the emperor has not slept properly in a year; the workers are still on the scaffolding at the edges. It is the first hour of the first service, and the light through the windows at the base of the dome makes it look as though the roof is floating.",
      "Nobody in 537 uses the word 'magnificent' for another four hundred years, in any language, because this is where it was invented. Our visit is timed to the hour. You will stand with the congregation, at the back, on the right, and you will not speak. The acoustics do the rest."
    ],
    img: "assets/img/era-hagia.jpg",
    alt: "Engraving of the interior of Hagia Sophia with light pouring through the dome's ring of windows.",
    plate: "Plate V",
    climate: "18°C · cool stone",
    hazard: "Moderate",
    hazardKey: "moderate",
    paradox: "Low",
    paradoxKey: "low",
    language: "Greek · Latin",
    duration: "3–6 days",
    guide: "1 : 6",
    price: 1760,
    status: "open",
    sights: [
      { t: "The first liturgy", d: "Two choirs, one dome, and a silence between them you can walk into." },
      { t: "The scaffolding at the north", d: "The workers stopped. Nobody told them to." },
      { t: "The emperor's box", d: "He is not looking at the dome. He is looking at the room looking at the dome." },
      { t: "The bronze doors, afterwards", d: "They predate the building. Nobody explains this." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive before dawn. Soft shoes, covered head, no jewellery. Your guide will place you by rank." },
      { d: "Day two", t: "The first liturgy. Stand at the back, on the right. Do not speak, even to your guide." },
      { d: "Day three", t: "The scaffolding and the doors, then the city walls before departure." }
    ],
    bring: ["Wool cloak, soft shoes, covered head", "A small gift of incense for the verger", "Patience — entry is by rank, and you have none"],
    notPermitted: ["Speaking during the liturgy", "Standing in the nave, for any reason", "Mentioning the year 1453"],
    note: {
      text: "I was at the back, on the right, as instructed. When the light came down I stopped being a tourist and became a witness. Two hours later I was still standing exactly where they left me.",
      author: "Mira Okonjo",
      role: "Structural engineer · travelled 2093"
    }
  },
  {
    id: "quiet",
    no: "006",
    name: "The Last Connected Afternoon",
    year: "2041",
    yearLong: "3 September 2041",
    place: "Lisbon, and everywhere",
    coords: "38.72° N · 9.14° W",
    epoch: "modern",
    epochLabel: "Modern",
    tagline: "The day before the Quiet. Nobody knew.",
    desc: "For one afternoon, everyone is reachable. The networks are still up, the group chats are still moving, and no one is looking at anything but their hands.",
    long: [
      "On 3 September 2041 the networks went out and did not come back on. It is not a disaster story; the world adapted in about a fortnight, and most people will tell you the following decade was better. But everyone remembers the afternoon before, because it was the last time the whole family was reachable at once.",
      "This is our quietest and most requested destination, and the only one where the itinerary is a single instruction: sit down. We will place you at a kitchen table in Lisbon at four in the afternoon. Four people will come in, sit down and look at their phones. One of them will look up, once, at the window. That is the whole event. Travellers describe it as the most expensive hour we sell, and the only one they repeat."
    ],
    img: "assets/img/era-quiet.jpg",
    alt: "Engraving of a family at a kitchen table in 2041, each looking at a small glowing device, late afternoon sun.",
    plate: "Plate VI",
    climate: "21°C · late summer",
    hazard: "Low",
    hazardKey: "low",
    paradox: "None",
    paradoxKey: "none",
    language: "Portuguese · English",
    duration: "1 day (fixed)",
    guide: "Self-guided",
    price: 980,
    status: "open",
    sights: [
      { t: "A kitchen in Lisbon, 4 p.m.", d: "Four people, four screens, one shared silence." },
      { t: "The group chat at 5:14", d: "It is still going. It will go for another nine hours." },
      { t: "The last video call", d: "Nobody says goodbye properly. Nobody ever does." },
      { t: "The corner shop at six", d: "The owner is texting his daughter. She is upstairs." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive at 15:40. The table is booked in your family's name, which is not your name. Sit down. Do not introduce yourself." },
      { d: "Evening", t: "Stay for supper. Nobody will ask who you are; this is the one afternoon in history when nobody looks up." }
    ],
    bring: ["Nothing with a battery — the Bureau is serious about this", "A printed photograph of your own family, if you have one", "A willingness to sit still for an hour"],
    notPermitted: ["Any connected device; corridor staff will hold them", "Telling anyone what happens tomorrow", "Recording — this is an afternoon, not a spectacle"],
    note: {
      text: "We sat in a stranger's kitchen and watched a family ignore each other with enormous love. I have not looked at my phone at dinner since. I am writing this eight years later and it is still true.",
      author: "Nour Haddad",
      role: "Teacher · travelled 2103"
    }
  },
  {
    id: "millennium",
    no: "007",
    name: "The Quiet Millennium",
    year: "3000",
    yearLong: "3000 CE",
    place: "New Sarnath",
    coords: "25.38° N · 83.02° E",
    epoch: "future",
    epochLabel: "Far future",
    tagline: "The future, and it left its phone at home.",
    desc: "A thousand years of getting it right. The rivers run clear, the buildings breathe, and no one has been in a hurry since the 27th century.",
    long: [
      "New Sarnath is what our century looks like when everyone finally agrees to do the boring work. The rivers have been returned to their old courses; the buildings are grown rather than built and are replaced every forty years, by hand; and the city has no traffic because it has no need of it. It is not a utopia. It is a place where the argument has moved on to better questions.",
      "Visitors report a specific side effect, and we mention it in every briefing: you stop checking things. There is nothing to check. Our guides have a standing instruction not to explain the intervening nine centuries unless asked directly, because the answer takes nine days, and your visa is for five."
    ],
    img: "assets/img/era-3000.jpg",
    alt: "Engraving of a future city of terraced gardens, canals and slow airships in the year 3000.",
    plate: "Plate VII",
    climate: "22°C · regulated",
    hazard: "None",
    hazardKey: "none",
    paradox: "Not applicable",
    paradoxKey: "none",
    language: "Ambient translation",
    duration: "5–12 days",
    guide: "1 : 8",
    price: 4800,
    status: "open",
    sights: [
      { t: "The water gardens at first light", d: "Nine hundred years of maintenance, done by people who will never be thanked." },
      { t: "The Council of Repair", d: "A room where the city is argued about, calmly, on a Tuesday." },
      { t: "The orchard terraces", d: "Every tree on this roof was planted by a named person." },
      { t: "The archive of the Quiet", d: "Ask. Do not ask twice." }
    ],
    itinerary: [
      { d: "Day one", t: "Arrive through the north corridor. Surrender your devices; you will not miss them by Thursday." },
      { d: "Day two", t: "Water gardens at first light, Council of Repair after lunch. Sit at the back." },
      { d: "Day three", t: "Orchard terraces, then nothing at all, which is the point." }
    ],
    bring: ["Comfortable shoes, plain clothes, a notebook of paper", "Nothing you intend to give away", "Patience with your own impatience"],
    notPermitted: ["Numeric devices of any kind — held at the corridor", "Offering to 'fix' anything, however kindly", "Asking what happened in the 27th century before day three"],
    note: {
      text: "On the fourth day I realised I had not looked at a clock in seventy-two hours, and that nothing had gone wrong. I cried in a water garden and a stranger sat with me until I stopped. She did not ask why.",
      author: "Elias Vantu",
      role: "Urban planner · travelled 2099"
    }
  },
  {
    id: "firstautumn",
    no: "008",
    name: "The First Autumn",
    year: "9,500 BCE",
    yearLong: "9,500 BCE",
    place: "Anatolia",
    coords: "37.66° N · 32.83° E",
    epoch: "prehistory",
    epochLabel: "Prehistory",
    tagline: "Someone has just decided to stay.",
    desc: "The first harvest that will be stored instead of eaten. Forty people, a wall of mud brick, and the invention of the word 'ours'.",
    long: [
      "This is the first autumn anyone decided to stay put. There are forty-one people here, including you, and enough stored grain to get through a winter that will kill anyone who guesses wrong. The wall is knee-high and too low to stop anything, and it is not for defence. It is for saying: this far is ours.",
      "It is colder than the brochure. There is no medicine beyond a fire and a person who knows what to do with it. The Bureau rates this our only high-paradox destination, which is why the briefing is two hours and the waiver is three pages. What you get in return is a single evening: forty people, a fire, the first harvest, and a song that has no words yet. Our guides have recorded it. We do not play it for anyone who has not been."
    ],
    img: "assets/img/era-firstautumn.jpg",
    alt: "Engraving of a small Neolithic settlement at harvest with mud-brick houses, grain baskets, goats and autumn trees.",
    plate: "Plate VIII",
    climate: "14°C · cold nights",
    hazard: "Moderate",
    hazardKey: "moderate",
    paradox: "High",
    paradoxKey: "high",
    language: "Old Anatolian · guide required",
    duration: "4–7 days",
    guide: "1 : 4",
    price: 1320,
    status: "open",
    sights: [
      { t: "The threshing floor", d: "Baskets, chaff, and the first arithmetic." },
      { t: "The wall, at dusk", d: "Knee-high, and the most consequential structure of the next four thousand years." },
      { t: "The fire, after dark", d: "Forty-one people. No words in the song yet." },
      { t: "The valley at first frost", d: "Everything you can see will still be farmland in twelve thousand years." }
    ],
    itinerary: [
      { d: "Day one", t: "Two-hour briefing, three-page waiver, then arrival at dusk with salt for the household you will stay with." },
      { d: "Day two", t: "Harvest. Work, properly, with your hands. This is not an observation package." },
      { d: "Day three", t: "The wall at dusk, the fire after dark. Nobody sleeps much after the song." }
    ],
    bring: ["The Bureau's full cold-weather kit — yours will not survive", "Nothing metal, nothing dyed, nothing written", "A token for your host household; salt is traditional"],
    notPermitted: ["Introducing metal, writing or a calendar", "Any medical intervention, including for your own party", "Taking anything out of the valley"],
    note: {
      text: "On the last night they sang something with no words and everybody knew it. I have spent my career studying the Neolithic and I understood nothing until that evening. I cried like a child and they let me.",
      author: "Dr Vela Imsirović",
      role: "Archaeologist · travelled 2097"
    }
  }
];

TTB.epochs = [
  { key: "all", label: "All eras" },
  { key: "deep", label: "Deep time" },
  { key: "prehistory", label: "Prehistory" },
  { key: "antiquity", label: "Antiquity" },
  { key: "early-modern", label: "Early modern" },
  { key: "modern", label: "Modern" },
  { key: "future", label: "Far future" }
];

TTB.getEra = function (id) {
  return TTB.eras.find(function (e) { return e.id === id; }) || null;
};

TTB.money = function (n) {
  return "T " + Number(n).toLocaleString("en-IN");
};
