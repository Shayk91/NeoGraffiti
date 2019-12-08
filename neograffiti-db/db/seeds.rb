# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create({
  username: 'GiveMeYourCookies',
  full_name: 'Cookie Monster',
  email: 'cookiem@sesamestreet.com',
  password: 'password',
  bio: "They can't stop me from eating all these cookies.",
  image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-ses-cookie.jpg'
})

post1 = Post.create({
  image: 'https://i.pinimg.com/originals/03/40/8c/03408cd26abc577a2f2e61e1ad9f46e4.jpg',
  content: 'They are trying to frame me!',
  user_id: 1
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 1,
  post_id: 1
})

user2 = User.create({
  username: 'TheOneAndOnly',
  full_name: 'The Count',
  email: 'count@sesamestreet.com',
  password: 'password',
  bio: 'Always counting these stacks.',
  image: 'https://vignette.wikia.nocookie.net/muppet/images/2/24/The_Count_cape_cover.jpg/revision/latest?cb=20181016201309'
})

post2 = Post.create({
  image: 'https://i1.trekearth.com/photos/25270/_brk3398.jpg',
  content: 'My cousin is out here acting wild.',
  user_id: 2
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 1,
  post_id: 2
})

user3 = User.create({
  username: 'Mr.Red',
  full_name: 'Elmo',
  email: 'elmo@sesamestreet.com',
  password: 'password',
  bio: 'Tickle me and see what happens...',
  image: 'https://www.hbo.com/content/dam/hbodata/series/sesame-street/elmo-collection-band/sesame-street-elmo-collection-band-1x1.jpg/_jcr_content/renditions/original'
})

post3 = Post.create({
  image: 'https://pbs.twimg.com/media/C6dAK9VXMAEiZsF.jpg',
  content: "I don't like the way he is looking at me.",
  user_id: 3
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 2,
  post_id: 3
})

user4 = User.create({
  username: 'TrashcanLord',
  full_name: 'Oscar The Grouch',
  email: 'oscar@sesamestreet.com',
  password: 'password',
  bio: "One man's trash is always my treasure.",
  image: 'https://i.kym-cdn.com/photos/images/original/001/065/957/dca.jpg'
})

post4 = Post.create({
  image: 'https://i2.wp.com/madhattersnyc.com/wp-content/uploads/2019/02/Marcelo-Ment-JMZ-Walls-Brooklyn.jpeg?resize=825%2C510&ssl=1',
  content: 'I can look at this all day.',
  user_id: 4
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 3,
  post_id: 4
})

user5 = User.create({
  username: 'IRunThis',
  full_name: 'Big Bird',
  email: 'bigbird@sesamestreet.com',
  password: 'password',
  bio: 'This is my street.',
  image: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/lqfwtk3yum7ekbgtdwoz.jpg'
})

post5 = Post.create({
  image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/03-Lee-Quinones.jpg',
  content: 'Bro look at this',
  user_id: 5
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 4,
  post_id: 5
})

user6 = User.create({
  username: 'SnuffTheFluff',
  full_name: 'Snuffleupagus',
  email: 'snuff@sesamestreet.com',
  password: 'password',
  bio: "I'm just so huggable",
  image: 'https://vignette.wikia.nocookie.net/muppet/images/0/03/ClassicMrSnuffleupagus.jpg/revision/latest?cb=20120122051029'
})

post6 = Post.create({
  image: 'https://wp.zillowstatic.com/streeteasy/2/Dumbo-3-b1b88d.jpg',
  content: "This is why I'm scared of the ocean",
  user_id: 6
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 5,
  post_id: 6
})

user7 = User.create({
  username: 'BertErnie4Ever',
  full_name: 'Bert and Ernie',
  email: 'bert@sesame.com',
  password: 'password',
  bio: 'Ernie made me make this joint account...',
  image: 'https://static01.nyt.com/images/2018/09/20/arts/television/20arts2/19xp-sesame-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
})

post7 = Post.create({
  image: 'https://wp.zillowstatic.com/streeteasy/2/42120048085_46a4eaa3f9_k-328ea5.jpg',
  content: 'Till death do us part...',
  user_id: 7
})

comment1 = Comment.create({
  content: 'Cool Bro',
  user_id: 6,
  post_id: 7
})