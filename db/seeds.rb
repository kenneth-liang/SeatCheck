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
    last_name: "Von",
    email: "theov@aa.io",
    password: "password"
)
user3 = User.create!(
    first_name: "Andrew",
    last_name: "Santino",
    email: "andrews@aa.io",
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
    description: "62 years of loyal customers can't be wrong. We are grateful to all our customers, employees, and critics (...though we may not always agree!). The only way to find out the truth is with a visit. Oft imitated, never duplicated. Thank you in advance."     
)
pic1 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/houseofprimerib.jpg')
restaurant1.photo.attach(io: pic1, filename: 'houseofprimerib.jpg')
pic1back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/hopr-back.jpg')
restaurant1.bphoto.attach(io: pic1back, filename: 'hopr-back.jpg')

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
    description: "Two Michelin Stars; 2019 Best Chef: West-Michael Cimarusti, 2013, 2014, 2015, 2016, 2017 Best Restaurant, LA Times; 2010 Chef of the Year, Angeleno Magazine; 2014, 2012, 2011 and 2010 Best Chef Nominee, James Beard Foundation; Best New Restaurants, Esquire Magazine; Best New Restaurant nominee, James Beard Foundation; Best Chef Pacific nominee, James Beard Foundation; Best Seafood Restaurant, Los Angeles Magazine; Top 40 Restaurants in the United States, Gayot.com; Top 50 Restaurants in the United States, Gourmet Magazine."     
)
pic2 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/providence.jpg')
restaurant2.photo.attach(io: pic2, filename: 'providence.jpg')
pic2back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/providence-back.jpg')
restaurant2.bphoto.attach(io: pic2back, filename: 'providence-back.jpg')


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
    description: "Thomas Keller's Bouchon is located in the Venetian Resort-Hotel-Casino, Venezia Tower. Renowned designer Adam D. Tihany has masterfully created a beautiful interior that features a magnificent French pewter bar, a vibrant mosaic floor, deep blue velvet banquettes, antique light fixtures and an expansive hand-painted mural by noted French artist Paulin Paris. The exquisite décor is the perfect setting for Bouchon’s culinary delights. Chef Crain rediscovers the classics, using historical reference points and classic French techniques, combined with a modern approach. The menu offers classic bistro dishes including steak frites, roasted chicken, quiche, boudin noir, pot de crème and profiteroles. The selection of fruits de mer is celebrated as one of the finest in Las Vegas. The seasonal menu changes throughout the year and is enhanced by a blackboard menu featuring the best products available each day. Flawlessly executed in every aspect, Bouchon delights both the palate and the eye"     
)

pic3 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/bouchon.jpg')
restaurant3.photo.attach(io: pic3, filename: 'bouchon.jpg')
pic3back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/bouchon-back.jpg')
restaurant3.bphoto.attach(io: pic3back, filename: 'bouchon-back.jpg')


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
    description: "Rich earth tones of orange, red and brown impart warmth to the cool and tranquil space. Thin tapestries of translucent rose fabric are embellished with flame motifs and suspended from the ceiling, creating a separate seating area perfect for a light bite near the large front windows. Famous for its unique and mouth-watering interpretation of Japanese cuisine. Upscale Japanese fare is given a jolt of new life through an innovative use of ingredients, resulting in refreshing and exciting flavor combinations. Crispy Rice with Spice Tuna, an addictive version of the classic spicy tuna roll, featuring warm grilled rice topped with a thick layer of cool, savory tuna. Baked Crab Roll, for which succulent fresh crabmeat is wrapped in a thin rice crepe paper dotted with sesame seeds and baked to perfection. Hamachi Fusion with Soy-Citrus and Truffle Essence all artfully plated by Koi’s skilled culinary team."     
)

pic4 = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/koi.jpg')
restaurant4.photo.attach(io: pic4, filename: 'koi.jpg')
pic4back = open('https://seat-check-seeds.s3-us-west-1.amazonaws.com/koi-back.jpg')
restaurant4.bphoto.attach(io: pic4back, filename: 'koi-back.jpg')



restaurant5 = Restaurant.create!(
    name: "Amber India",
    address: "40 West 40th Street",
    city: "San Francisco",
    state: "California",
    zip: "94103",
    price: 30,
    cuisine: 'Indian',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(415) 777-0500",
    description: "Amber India Restaurant embodies the spirit and essence of fine Indian cuisine. Located in the heart of downtown San Francisco, Amber India Restaurant takes Indian cuisine to a new culinary level, while still holding true to its traditional nuances. Much like the ambiance within the restaurant, Amber India’s cuisine is a mix of modern style with traditional roots. The delectable cuisine, the well paired wines, and the exotic cocktails are sure to indulge anyone’s senses. The split-level three-story restaurant can easily accommodate 140 people, with a private dining room in the back for up to 25 people. With its vaulted ceilings, stylish décor, and a constant LED light show behind the bar, Amber India Restaurant is truly a feast for both the mouth as well as the eyes."
)

restaurant6 = Restaurant.create!(
    name: "Amber India",
    address: "40 West 40th Street",
    city: "San Francisco",
    state: "California",
    zip: "94103",
    price: 30,
    cuisine: 'Indian',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(415) 777-0500",
    description: "Amber India Restaurant embodies the spirit and essence of fine Indian cuisine. Located in the heart of downtown San Francisco, Amber India Restaurant takes Indian cuisine to a new culinary level, while still holding true to its traditional nuances. Much like the ambiance within the restaurant, Amber India’s cuisine is a mix of modern style with traditional roots. The delectable cuisine, the well paired wines, and the exotic cocktails are sure to indulge anyone’s senses. The split-level three-story restaurant can easily accommodate 140 people, with a private dining room in the back for up to 25 people. With its vaulted ceilings, stylish décor, and a constant LED light show behind the bar, Amber India Restaurant is truly a feast for both the mouth as well as the eyes."
)

reservation1 = Reservation.create!(
    restaurant_id: 1,
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