# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Game.destroy_all

bob = User.create(username: "bob3000")
ej = User.create(username: "EJcoder")
tyler = User.create(username: "tylercats")

bob.games.create(score: 20)
bob.games.create(score: 2)
ej.games.create(score: 55)
ej.games.create(score: 10)
tyler.games.create(score: 100)
tyler.games.create(score: 0)

