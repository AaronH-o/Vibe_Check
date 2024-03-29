const { Song } = require("../models");

const songData = [
  {
    song: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    rating: 4,
  },
  {
    song: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    rating: 5,
  },
  {
    song: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    rating: 3,
  },
  {
    song: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    rating: 5,
  },
  {
    song: "Hey Jude",
    artist: "The Beatles",
    album: "Hey Jude",
    rating: 4,
  },
  {
    song: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    rating: 5,
  },
  {
    song: "Thriller",
    artist: "Michael Jackson",
    album: "Thriller",
    rating: 5,
  },
  {
    song: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    rating: 4,
  },
  {
    song: "Like a Rolling Stone",
    artist: "Bob Dylan",
    album: "Highway 61 Revisited",
    rating: 4,
  },
  {
    song: "Sweet Child o' Mine",
    artist: "Guns N' Roses",
    album: "Appetite for Destruction",
    rating: 5,
  },
  {
    song: "Boys Don't Cry",
    artist: "The Cure",
    album: "Boys Don't Cry",
    rating: 3,
  },
  {
    song: "Purple Haze",
    artist: "Jimi Hendrix",
    album: "Are You Experienced",
    rating: 5,
  },
  {
    song: "Hallelujah",
    artist: "Leonard Cohen",
    album: "Various Positions",
    rating: 4,
  },
  {
    song: "Wonderwall",
    artist: "Oasis",
    album: "(What's the Story) Morning Glory?",
    rating: 4,
  },
  {
    song: "Wish You Were Here",
    artist: "Pink Floyd",
    album: "Wish You Were Here",
    rating: 5,
  },
  {
    song: "Like a Prayer",
    artist: "Madonna",
    album: "Like a Prayer",
    rating: 4,
  },
  {
    song: "Livin' on a Prayer",
    artist: "Bon Jovi",
    album: "Slippery When Wet",
    rating: 5,
  },
  {
    song: "Another Brick in the Wall (Part II)",
    artist: "Pink Floyd",
    album: "The Wall",
    rating: 5,
  },
  {
    song: "Crazy",
    artist: "Gnarls Barkley",
    album: "St. Elsewhere",
    rating: 4,
  },
  {
    song: "Lose Yourself",
    artist: "Eminem",
    album: "8 Mile Soundtrack",
    rating: 5,
  },
  {
    song: "Hurt",
    artist: "Johnny Cash",
    album: "American IV: The Man Comes Around",
    rating: 5,
  },
  {
    song: "Yesterday",
    artist: "The Beatles",
    album: "Help!",
    rating: 4,
  },
  {
    song: "Purple Rain",
    artist: "Prince",
    album: "Purple Rain",
    rating: 5,
  },
  {
    song: "I Will Always Love You",
    artist: "Whitney Houston",
    album: "The Bodyguard Soundtrack",
    rating: 5,
  },
  {
    song: "The Sound of Silence",
    artist: "Simon & Garfunkel",
    album: "Wednesday Morning, 3 A.M.",
    rating: 4,
  },
  {
    song: "Wonderful Tonight",
    artist: "Eric Clapton",
    album: "Slowhand",
    rating: 5,
  },
  {
    song: "Under the Bridge",
    artist: "Red Hot Chili Peppers",
    album: "Blood Sugar Sex Magik",
    rating: 5,
  },
  {
    song: "Don't Stop Believin'",
    artist: "Journey",
    album: "Escape",
    rating: 4,
  },
  {
    song: "Every Breath You Take",
    artist: "The Police",
    album: "Synchronicity",
    rating: 4,
  },
  {
    song: "No Woman, No Cry",
    artist: "Bob Marley & The Wailers",
    album: "Natty Dread",
    rating: 5,
  },
  {
    song: "Sweet Caroline",
    artist: "Neil Diamond",
    album: "Brother Love's Travelling Salvation Show",
    rating: 4,
  },
  {
    song: "Hound Dog",
    artist: "Elvis Presley",
    album: "Elvis' Golden Records",
    rating: 5,
  },
  {
    song: "Stand by Me",
    artist: "Ben E. King",
    album: "Don't Play That Song!",
    rating: 4,
  },
  {
    song: "I Want to Hold Your Hand",
    artist: "The Beatles",
    album: "Meet The Beatles!",
    rating: 3,
  },
  {
    song: "Don't Let the Sun Go Down on Me",
    artist: "Elton John",
    album: "Caribou",
    rating: 5,
  },
  {
    song: "Every Rose Has Its Thorn",
    artist: "Poison",
    album: "Open Up and Say... Ahh!",
    rating: 3,
  },
  {
    song: "September",
    artist: "Earth, Wind & Fire",
    album: "The Best of Earth, Wind & Fire, Vol. 1",
    rating: 5,
  },
  {
    song: "Let It Be",
    artist: "The Beatles",
    album: "Let It Be",
    rating: 4,
  },
  {
    song: "I Will Survive",
    artist: "Gloria Gaynor",
    album: "Love Tracks",
    rating: 4,
  },
  {
    song: "Eye of the Tiger",
    artist: "Survivor",
    album: "Eye of the Tiger",
    rating: 4,
  },
  {
    song: "Johnny B. Goode",
    artist: "Chuck Berry",
    album: "Chuck Berry Is on Top",
    rating: 5,
  },
  {
    song: "Imagine",
    artist: "Ariana Grande",
    album: "Imagine - Single",
    rating: 3,
  },
  {
    song: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    album: "United",
    rating: 5,
  },
  {
    song: "Dream On",
    artist: "Aerosmith",
    album: "Aerosmith",
    rating: 4,
  },
  {
    song: "Piano Man",
    artist: "Billy Joel",
    album: "Piano Man",
    rating: 5,
  },
  {
    song: "The Boxer",
    artist: "Simon & Garfunkel",
    album: "Bridge Over Troubled Water",
    rating: 4,
  },
  {
    song: "Let's Get It On",
    artist: "Marvin Gaye",
    album: "Let's Get It On",
    rating: 5,
  },
  {
    song: "With or Without You",
    artist: "U2",
    album: "The Joshua Tree",
    rating: 5,
  },
  {
    song: "Smooth",
    artist: "Santana feat. Rob Thomas",
    album: "Supernatural",
    rating: 4,
  },
];
const seedSong = () => Song.bulkCreate(songData);

module.exports = seedSong;
