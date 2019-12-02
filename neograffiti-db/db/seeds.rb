# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create({
  username: 'Admin',
  full_name: 'Admin',
  email: 'admin@admin.com',
  password: 'password',
  bio: 'I am the Admin',
  image: 'https://vignette.wikia.nocookie.net/banjokazooie/images/1/16/Banjo_transparent.png/revision/latest/scale-to-width-down/2000?cb=20190620133600'
})

post = Post.create({
  image: 'https://i2.wp.com/madhattersnyc.com/wp-content/uploads/2019/02/Marcelo-Ment-JMZ-Walls-Brooklyn.jpeg?resize=825%2C510&ssl=1',
  content: 'Bro look at this',
  user_id: 1
})

comment = Comment.create({
  content: 'Cool Bro',
  user_id: 1,
  post_id: 1
})