const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Happiness depends upon ourselves. - Aristotle",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The future depends on what you do today. - Mahatma Gandhi",
  "The secret of getting ahead is getting started. - Mark Twain",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "Dream big and dare to fail. - Norman Vaughan",
  "Life isn’t about finding yourself. Life is about creating yourself. - George Bernard Shaw",
  "Success is how high you bounce when you hit bottom. - George S. Patton",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Difficulties in life are intended to make us better, not bitter. - Dan Reeves",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "I never dreamed about success, I worked for it. - Estée Lauder",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "It is never too late to be what you might have been. - George Eliot",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The mind is everything. What you think you become. - Buddha",
  "Do what you love and the money will follow. - Marsha Sinetar",
  "Everything you can imagine is real. - Pablo Picasso",
  "Turn your wounds into wisdom. - Oprah Winfrey",
  "Act without expectation. - Lao Tzu",
  "Limitations live only in our minds. - Jamie Paolinetti",
  "Fall seven times, stand up eight. - Japanese Proverb",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "There is no way to happiness—happiness is the way. - Thich Nhat Hanh",
  "Courage is resistance to fear, mastery of fear—not absence of fear. - Mark Twain",
  "To be the best, you must be able to handle the worst. - Wilson Kanadi",
  "The harder the conflict, the greater the triumph. - George Washington",
  "Doubt kills more dreams than failure ever will. - Suzy Kassem",
  "A goal is a dream with a deadline. - Napoleon Hill",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "Life begins at the end of your comfort zone. - Neale Donald Walsch",
  "If you can dream it, you can do it. - Walt Disney",
  "If opportunity doesn’t knock, build a door. - Milton Berle",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
  "I have not failed. I’ve just found 10,000 ways that won’t work. - Thomas Edison",
  "Make each day your masterpiece. - John Wooden",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Courage starts with showing up and letting ourselves be seen. - Brené Brown",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "There is no substitute for hard work. - Thomas Edison",
  "Failure is the opportunity to begin again, only this time more wisely. - Henry Ford",
  "Push yourself, because no one else is going to do it for you. - Anonymous",
  "Do what you have to do until you can do what you want to do. - Oprah Winfrey",
  "Difficulties strengthen the mind, as labor does the body. - Seneca",
  "Do what you love, and you'll never work a day in your life. - Confucius",
  "Success doesn’t just find you. You have to go out and get it. - Anonymous",
  "Don't wait for opportunity. Create it. - Anonymous",
  "The only person you should try to be better than is the person you were yesterday. - Anonymous",
  "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
  "A year from now you may wish you had started today. - Karen Lamb",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "Quality means doing it right when no one is looking. - Henry Ford",
  "Fear regret more than failure. - Taryn Rose",
  "Happiness is not by chance, but by choice. - Jim Rohn",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "A year from now you may wish you had started today. - Karen Lamb",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "The best revenge is massive success. - Frank Sinatra",
  "Courage is not the absence of fear but the triumph over it. - Nelson Mandela",,
  "Don’t count the days, make the days count. - Muhammad Ali",
  "Work hard in silence, let success make the noise. - Frank Ocean",
  "Your limitation—it’s only your imagination. - Anonymous",
  "Great things never come from comfort zones. - Anonymous",
  "Dream it. Wish it. Do it. - Anonymous",
  "Success doesn’t just find you. You have to go out and get it. - Anonymous",
  "Dream bigger. Do bigger. - Anonymous",
  "Don’t stop when you’re tired. Stop when you’re done. - Anonymous",
  "Wake up with determination. Go to bed with satisfaction. - Anonymous",
  "A goal is a dream with a deadline. - Napoleon Hill",
  "Hustle until your haters ask if you're hiring. - Anonymous",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "Do something today that your future self will thank you for. - Anonymous",
  "An unexamined life is not worth living. - Socrates",
  "Every moment is a fresh beginning. - T.S. Eliot",
  "Keep going. Everything you need will come to you at the perfect time. - Anonymous",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
];

let button = document.getElementById("btn");
button.addEventListener("click", getQuote);

function getQuote(){
  let quoteText = document.getElementById("quote");
  let random = Math.floor(Math.random()*100);
  console.log(random);
  quoteText.innerHTML = quotes[random];
  quoteText.classList.remove("hide");
}