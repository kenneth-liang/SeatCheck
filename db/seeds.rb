# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

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

demo = User.create!(
    first_name: "Demo",
    last_name: "User",
    email: 'demo@aa.io',
    password: 'password'
)