# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Restaurant.delete_all 
Reservation.delete_all
Rating.delete_all
Favorite.delete_all

demo = User.create!(
    first_name: "Demo",
    last_name: "User",
    email: 'demo@aa.io',
    password: 'password'
)
user1 = User.create!(
    first_name: "Bobby",
    last_name: "Lee",
    email: "bobbyl@aa.io",
    password: "password"
)
user2 = User.create!(
    first_name: "Theo",
    last_name: "Ron",
    email: "theor@aa.io",
    password: "password"
)
user3 = User.create!(
    first_name: "Andrew",
    last_name: "Bantino",
    email: "andrewb@aa.io",
    password: "password"
)
user4 = User.create!(
    first_name: "Joe",
    last_name: "Pogan",
    email: "joer@aa.io",
    password: "password"
)
user5 = User.create!(
    first_name: "Nikki",
    last_name: "Tazer",
    email: "nikkit@aa.io",
    password: "password"
)
user6 = User.create!(
    first_name: "Mark",
    last_name: "Spormand",
    email: "marks@aa.io",
    password: "password"
)
user7 = User.create!(
    first_name: "Jessica",
    last_name: "Pirson",
    email: "jessicanP@aa.io",
    password: "password"
)


restaurant1 = Restaurant.create!(
    name: "House of Prime Rib",
    address: "1906 Van Ness Ave",
    city: "San Francisco",
    state: "California",
    zip: "94109",
    price: 40,
    cuisine: 'Steak',
    open_time: DateTime.parse("14:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(415) 885-4605",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/houseofprimerib.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/hopr-back.jpg',
    description: "62 years of loyal customers can't be wrong. We are grateful to all our customers, employees, and critics (...though we may not always agree!). The only way to find out the truth is with a visit. Often imitated, never duplicated. Thank you in advance."     
)

# pic1 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/houseofprimerib.jpg')
# restaurant1.photo.attach(io: pic1, filename: 'houseofprimerib.jpg')
# pic1back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/hopr-back.jpg')
# restaurant1.bphoto.attach(io: pic1back, filename: 'hopr-back.jpg')

restaurant2 = Restaurant.create!(
    name: "Providence",
    address: "5955 Melrose Ave",
    city: "Los Angeles",
    state: "California",
    zip: "90038",
    price: 55,
    cuisine: 'Seafood',
    open_time: DateTime.parse("18:00:00"),
    close_time: DateTime.parse("21:00:00"),
    phone_number: "(323) 460-4170",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/providence.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/providence-back.jpg',
    description: "Two Michelin Stars; 2019 Best Chef: West-Michael Cimarusti, 2013, 2014, 2015, 2016, 2017 Best Restaurant, LA Times; 2010 Chef of the Year, Angeleno Magazine; 2014, 2012, 2011 and 2010 Best Chef Nominee, James Beard Foundation; Best New Restaurants, Esquire Magazine; Best New Restaurant nominee, James Beard Foundation; Best Chef Pacific nominee, James Beard Foundation; Best Seafood Restaurant, Los Angeles Magazine; Top 40 Restaurants in the United States, Gayot.com; Top 50 Restaurants in the United States, Gourmet Magazine."     
)

# pic2 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/providence.jpg')
# restaurant2.photo.attach(io: pic2, filename: 'providence.jpg')
# pic2back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/providence-back.jpg')
# restaurant2.bphoto.attach(io: pic2back, filename: 'providence-back.jpg')


restaurant3 = Restaurant.create!(
    name: "Bouchon at The Venetian",
    address: "3355 Las Vegas Blvd South",
    city: "Las Vegas",
    state: "Nevada",
    zip: "89109",
    price: 45,
    cuisine: 'French',
    open_time: DateTime.parse("15:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(702) 414-6200",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/bouchon.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/bouchon-back.jpg',
    description: "Thomas Keller's Bouchon is located in the Venetian Resort-Hotel-Casino, Venezia Tower. Renowned designer Adam D. Tihany has masterfully created a beautiful interior that features a magnificent French pewter bar, a vibrant mosaic floor, deep blue velvet banquettes, antique light fixtures and an expansive hand-painted mural by noted French artist Paulin Paris. The exquisite décor is the perfect setting for Bouchon’s culinary delights. Chef Crain rediscovers the classics, using historical reference points and classic French techniques, combined with a modern approach. The menu offers classic bistro dishes including steak frites, roasted chicken, quiche, boudin noir, pot de crème and profiteroles. The selection of fruits de mer is celebrated as one of the finest in Las Vegas. The seasonal menu changes throughout the year and is enhanced by a blackboard menu featuring the best products available each day. Flawlessly executed in every aspect, Bouchon delights both the palate and the eye"     
)

# pic3 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/bouchon.jpg')
# restaurant3.photo.attach(io: pic3, filename: 'bouchon.jpg')
# pic3back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/bouchon-back.jpg')
# restaurant3.bphoto.attach(io: pic3back, filename: 'bouchon-back.jpg')


restaurant4 = Restaurant.create!(
    name: "Koi",
    address: "40 West 40th Street",
    city: "New York",
    state: "New York",
    zip: "10018",
    price: 45,
    cuisine: 'Japanese',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("23:00:00"),
    phone_number: "(212) 921-3330",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/koi.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/koi-back.jpg',
    description: "Rich earth tones of orange, red and brown impart warmth to the cool and tranquil space. Thin tapestries of translucent rose fabric are embellished with flame motifs and suspended from the ceiling, creating a separate seating area perfect for a light bite near the large front windows. Famous for its unique and mouth-watering interpretation of Japanese cuisine. Upscale Japanese fare is given a jolt of new life through an innovative use of ingredients, resulting in refreshing and exciting flavor combinations. Crispy Rice with Spice Tuna, an addictive version of the classic spicy tuna roll, featuring warm grilled rice topped with a thick layer of cool, savory tuna. Baked Crab Roll, for which succulent fresh crabmeat is wrapped in a thin rice crepe paper dotted with sesame seeds and baked to perfection. Hamachi Fusion with Soy-Citrus and Truffle Essence all artfully plated by Koi’s skilled culinary team."     
)

# pic4 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/koi.jpg')
# restaurant4.photo.attach(io: pic4, filename: 'koi.jpg')
# pic4back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/koi-back.jpg')
# restaurant4.bphoto.attach(io: pic4back, filename: 'koi-back.jpg')

restaurant5 = Restaurant.create!(
    name: "Amber India",
    address: "25 Yerba Buena",
    city: "San Francisco",
    state: "California",
    zip: "94103",
    price: 30,
    cuisine: 'Indian',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(415) 777-0500",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/amberindia.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/amberindaback.jpg',
    description: "Amber India Restaurant embodies the spirit and essence of fine Indian cuisine. Located in the heart of downtown San Francisco, Amber India Restaurant takes Indian cuisine to a new culinary level, while still holding true to its traditional nuances. Much like the ambiance within the restaurant, Amber India’s cuisine is a mix of modern style with traditional roots. The delectable cuisine, the well paired wines, and the exotic cocktails are sure to indulge anyone’s senses. The split-level three-story restaurant can easily accommodate 140 people, with a private dining room in the back for up to 25 people. With its vaulted ceilings, stylish décor, and a constant LED light show behind the bar, Amber India Restaurant is truly a feast for both the mouth as well as the eyes."
)

# pic5 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/amberindia.jpg')
# restaurant5.photo.attach(io: pic5, filename: 'amberindia.jpg')
# pic5back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/amberindaback.jpg')
# restaurant5.bphoto.attach(io: pic5back, filename: 'amberindia-back.jpg')

restaurant6 = Restaurant.create!(
    name: "Bestia",
    address: "2121 E. 7th",
    city: "Los Angeles",
    state: "California",
    zip: "90021",
    price: 45,
    cuisine: 'Italian',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(213) 514-5724",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/bestia.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/bestiaback.jpg',
    description: "A multi-regional Italian restaurant in the Arts District of downtown Los Angeles."
)

# pic6 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/bestia.jpg')
# restaurant6.photo.attach(io: pic6, filename: 'bestia.jpg')
# pic6back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/bestiaback.jpg')
# restaurant6.bphoto.attach(io: pic6back, filename: 'bestia-back.jpg')


restaurant7 = Restaurant.create!(
    name: "Lexington Brass",
    address: "517 Lexington Ave",
    city: "New York",
    state: "New York",
    zip: "10017",
    price: 25,
    cuisine: 'American',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("23:00:00"),
    phone_number: "(212) 392-5976",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/lexingtonbrass.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/lexingtonback.jpg',
    description: "Located adjacent to the Hotel 48 Lex in midtown Manhattan, Lexington Brass is a new age American Brasserie focused on bringing high quality dishes to diners in search of an authentic New York experience. Using only the finest, locally sourced ingredients from some of the region’s most trusted purveyors, the bustling, 100 seat restaurant combines organic, nutrient-rich proteins and fresh, seasonal produce to create a menu of hearty, tasty dishes including the Organic Pennsylvania Dutch Crispy Chicken Salad, Brass Health Bowl, vegetarian Mushroom Pasta and Herb-Roasted Branzino with many gluten free, dairy free and vegan options to boot. Offering reasonable price points and reliable quality in a relaxed upscale environment, Lexington Brass stands beside the business backdrop of modern midtown and sets itself apart with elevated brasserie favorites and a top notch team of hospitality professionals at your service breakfast, lunch, dinner and into the late evening hours."
)

# pic7 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/lexingtonbrass.jpg')
# restaurant7.photo.attach(io: pic7, filename: 'lexington.jpg')
# pic7back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/lexingtonback.jpg')
# restaurant7.bphoto.attach(io: pic7back, filename: 'lexington-back.jpg')


restaurant8 = Restaurant.create!(
    name: "Nacho Daddy",
    address: "3663 Las Vegas Blvd",
    city: "Las Vegas",
    state: "Nevada",
    zip: "89109",
    price: 20,
    cuisine: 'Mexican',
    open_time: DateTime.parse("15:00:00"),
    close_time: DateTime.parse("18:00:00"),
    phone_number: "(213) 514-5724",
    photo: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/nachodaddy.jpg',
    bphoto: 'https://seat-check-seeds.s3-us-west-1.amazonaws.com/nachodaddyback.jpeg',
    description: "A multi-regional Italian restaurant in the Arts District of downtown Los Angeles."
)

# pic8 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/nachodaddy.jpg')
# restaurant8.photo.attach(io: pic8, filename: 'nacho.jpg')
# pic8back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/nachodaddyback.jpeg')
# restaurant8.bphoto.attach(io: pic8back, filename: 'nacho-back.jpg')

restaurant9 = Restaurant.create!(
    name: "The Publican",
    address: "837 W Fulton Market",
    city: "Chicago",
    state: "Illinois",
    zip: "60607",
    price: 25,
    cuisine: 'American',
    open_time: DateTime.parse("16:00:00"),
    close_time: DateTime.parse("20:00:00"),
    phone_number: "(312) 733-9555",
    photo: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/publican.jpg",
    bphoto: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/publican-back.jpg",
    description: "From the team behind Blackbird and avec comes this homage to beer, pork, and fish. Executive Chef Paul Kahan and Chef de Cuisine Dennis Bernard have developed a network of purveyors to supply the restaurant with hand-selected, sustainably-harvested fish and seafood as well as sustainably-raised heirloom pork to anchor a rustic menu of simple, eclectic fare. The extensive international beer list, developed by partners Eduard Seitan and Terry Alexander and now Beer Director Adam Vavrick, features 100 or so ales, lagers, stouts and ciders by the bottle, 12 of those available on tap. Like Blackbird and avec, The Publican is a design partnership from the James Beard Award-winning team of Thomas Schlesser and partner Donnie Madia."
)


reservation1 = Reservation.create!(
    restaurant_id: 6,
    user_id: 1,
    party: 2,
    time: "17",
    date: "2020-07-04"
)

reservation2 = Reservation.create!(
    restaurant_id: 3,
    user_id: 1,
    party: 5,
    time: "18",
    date: "2020-10-05"
)
reservation3 = Reservation.create!(
    restaurant_id: 2,
    user_id: 2,
    party: 3,
    time: "19",
    date: "2020-08-24"
)
reservation4 = Reservation.create!(
    restaurant_id: 4,
    user_id: 2,
    party: 7,
    time: "20",
    date: "2020-12-18"
)
reservation5 = Reservation.create!(
    restaurant_id: 7,
    user_id: 3,
    party: 4,
    time: "20",
    date: "2020-12-18"
)

reviewDataGood = [
    "Absolutely magnificent",
    "I did not know this awesome place was here!",
    "My partner and I had our first date here. We loved it!",
    "Hands down the best service in the city!",
    "Can't wait to come back!",
    "Be sure the try the drinks here too",
    "Wowerz Bowsers",
    "Wauuuuuuuu AMAZING!",
    "I wish I knew about this earlier",
    "Told the chef to pack his bags and things, because he should be working in the finest restaurant in the world! Love the food",
    "Totally worth the price",
    "I saw Steph Curry eat here!",
    "Only thing bad about this place is that parking, there is a garage/lot 2 blocks away for $10 though.",
    "What ever you do, don't try the steak. It is so good you will come back everyday. This place ruined my social life.",
    "I upgrade this score because the wait staff was spectacular.",
    "Sat down for lunch for 3 hours, stayed for dinner too.",
    "My Lover Karen and I adore this place so much we're considering holding our ceremony here. Hope they do weddings!"

]
reviewDataBad = [
    "I was petrified by the food here, would not recommend",
    "Not the best in the city, but it was okay to my standard",
    "Place was slow, but could be because I went on a Friday night.",
    "My friend showed my this place, worst friend ever...",
    "If my meat were Gordan Ramsey it would say IT WAS RAW, maybe try the fish next time.",
    "I wish I knew about this eariler! so I would know how good of place this was and thats bad.",
    "Same-Same but Different but still Same to the place across the street",
    "Food was great, but the music they played was too loud",
    "The entire kitchen and wait staff saw an ice cream truck and ran outside. I sat in the restaurant alone for 10 minutes. I can't believe this happened."
]

Rating.create(
    user_id: 1,
    restaurant_id:1,
    overall_score: 5,
    review: "Make no mistake. This is the best steakhouse in the town. Be sure the get the cream spinach. It's bomb diggity"
)

10.times do 
    Rating.create(
        user_id: (2..8).to_a.sample,
        restaurant_id: (1..8).to_a.sample,
        overall_score: (3..5).to_a.sample,
        review: reviewDataGood.sample
    )
end

10.times do 
    Rating.create(
        user_id: (2..8).to_a.sample,
        restaurant_id: (1..8).to_a.sample,
        overall_score: (1..2).to_a.sample,
        review: reviewDataBad.sample
    )
end

Favorite1 = Favorite.create(
    user_id: 1,
    restaurant_id: 1
)
Favorite2 = Favorite.create(
    user_id: 1,
    restaurant_id: 4
)