import 'dotenv/config';
import db from "./client.js";
import { createCity } from "./queries/cities.js";
import { createCategory } from "./queries/categories.js";
import { createExperiences } from "./queries/experiences.js";
import { createUser } from './queries/users.js';
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");



async function seed(){
   
//seed Users
await createUser({email: "MisterUser@gmail.com", password: "pleaseletmepass"})
await createUser({email: "Tourist1@gmail.com", password: "password"})



// seed cities
await createCity({city_name: "New York", city_description: "New York City, often called the City that Never Sleeps, is a vibrant and iconic metropolis known for its diverse culture, bustling streets, and world-renowned landmarks. It's the most populous city in the United States, situated at the meeting point of the Hudson and East Rivers, and is comprised of five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. New York is a global hub for finance, culture, entertainment, and fashion, with a virtually unrivaled collection of museums, theaters, and iconic attractions like the Statue of Liberty, Times Square, and Central Park. ", city_image:  "https://www.travelandleisure.com/thmb/3oPWFmA6fi9sjAyWzigwaUKD8P8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"})

await createCity({city_name: "Los Angeles", city_description: "Los Angeles, often called the City of Angels, is a sprawling metropolis in Southern California known for its diverse culture, entertainment industry, and iconic landmarks. It's the second-largest city in the U.S. and a global center for entertainment, business, and international trade. The city is characterized by its diverse geography, spanning a desert basin surrounded by mountains and divided by the Santa Monica Mountains. ", city_image: "https://www.travelguide.net/media/los-angeles.jpeg"})

await createCity({city_name: "Miami", city_description: "Miami, Florida, is a vibrant coastal metropolis known for its diverse culture, stunning beaches, and lively nightlife. It's a major hub for international trade, finance, and tourism, with a unique blend of Latin American and North American influences. The city's subtropical climate and beautiful natural surroundings, including Biscayne Bay and the Everglades, add to its appeal. ", city_image: "https://www.extraspace.com/blog/wp-content/uploads/2019/04/living-in-miami-fl.jpg"})

await createCity({city_name: "Las Vegas", city_description: "Las Vegas is a world-renowned resort city in Nevada, famous for its vibrant entertainment, including gambling, nightlife, shopping, and fine dining. It's often called the Entertainment Capital of the World and is a major tourist destination. While the famous Las Vegas Strip is technically outside the city limits, it's the area most associated with the city's identity. ", city_image: "https://www.thoughtco.com/thmb/3Olgaxc1_19PzJwB_TorJCHMOMI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535829219-59c5999868e1a20014d27346.jpg"})


// seed experience categories 

await createCategory({category_name:"Eat"})

await createCategory({category_name:"Drink"})

await createCategory({category_name:"Play"})

await createCategory({category_name:"Explore"})


// seed experiences - New York - Eat (category 1)

await createExperiences({experience_name:"Katz Delicatessen ", experience_description:"Katz is a legendary Jewish deli, famous for towering pastrami sandwiches stacked with tender, hand-carved meat. A classic NYC experience since 1888, its the place to relive a bit of food history. ", experience_picture:"https://lh3.googleusercontent.com/p/AF1QipNUvMzpO28Apt0nlLOde7vLiYZyErPgp0tL0Sr-=s680-w680-h510-rw ", experience_city:"1", experience_category:"1"})

await createExperiences({experience_name:"Carbone", experience_description:"Carbone offers a nostalgic journey through mid-century Italian-American fine dining, with dishes like spicy rigatoni vodka and veal parmesan. The old-school atmosphere paired with exceptional service makes it a must-visit.", experience_picture:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4npWxyzJdOGSJtFdstx0ynGknGHsbD3Hi8H04JGEY2ZSwBiufnrVHL2kzHtdfrGFDpF4AofPFsdmKZOYSMsclbNKw5MMwoiQxfPGuCUafnCT19JnXjLYqtLEvh8MR1AbHOTJiJ_5=s680-w680-h510-rw ", experience_city:"1", experience_category:"1"})

await createExperiences({experience_name:"Russ & Daughters Café ", experience_description:"Renowned for its smoked fish and caviar, this Lower East Side gem brings New Yorks Jewish deli tradition to a cozy café setting. Its the perfect spot for bagels, lox, and a true taste of NYC.", experience_picture:"https://images.squarespace-cdn.com/content/v1/54b5af9ce4b0ad6fb5d06c8a/1438106778525-JFA5SJMRU2X9IQCPN5H8/image-asset.jpeg?format=1500w", experience_city:"1", experience_category:"1"})

// seed experiences - New York - Drink (category 2)

await createExperiences({experience_name:"The Smith", experience_description:"This lively American brasserie serves approachable comfort food with a modern twist, and its famous for a vibrant happy hour featuring drinks and bites. The cozy yet bustling ambiance makes it ideal for unwinding after work.", experience_picture:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nozdQ35HYNrUtGMAhiBTm08YMhFaoEZ4LHYVDQeoQSAGboqKT5DWbUqb4kxUXGqwmJKHCmXKbXoBG8sCBi8hjc-BiBXUQqp2joGZzk4xx4q-BLKaf-CgRbDdwpnVSqJx87LFEan=s680-w680-h510-rw", experience_city:"1", experience_category:"2"})


await createExperiences({experience_name:"The Mermaid Inn", experience_description:" Known for some of the best oyster deals in the city, The Mermaid Inn delivers a quintessential seafood happy hour in a nautical, casual-chic setting. Guests rave about their fresh shellfish and crisp cocktails.", experience_picture:"https://images.getbento.com/accounts/ed7339fabff5bfe766d3ed8cf0a585d2/media/images/35658255941928_1467202203664513_7201512704206452203_n.jpg?w=1800&fit=max&auto=compress,format&cs=origin&h=1800 ", experience_city:"1",experience_category:"2"})


await createExperiences({experience_name:"Refinery Rooftop", experience_description:"Set atop the Refinery Hotel, this rooftop bar offers panoramic views of Manhattans skyline, especially the Empire State Building. Pair craft cocktails with small plates while watching the sunset over the city.", experience_picture:"https://refineryrooftop.com/wp-content/uploads/2019/04/events-rrt-2.jpg ", experience_city:"1",experience_category:"2"})

// seed experiences - New York - Play (category 3)

await createExperiences({experience_name:"Statue of Liberty & Ellis Island", experience_description:" A world-famous symbol of freedom, the Statue of Liberty offers incredible views of Manhattans harbor. Combined with Ellis Islands Immigration Museum, its a powerful way to connect with Americas history.", experience_picture:"https://refineryrooftop.com/wp-content/uploads/2019/04/events-rrt-2.jpg ", experience_city:"1",experience_category:"3"})

await createExperiences({experience_name:"The High Line", experience_description:"This elevated linear park stretches over Manhattan’s West Side, transforming old train tracks into gardens, art installations, and city overlooks. It’s a unique, urban oasis perfect for a leisurely stroll.", experience_picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Factivities%2Fnew-york%2Fthe-high-line-nyc&psig=AOvVaw2XLjc0yg2ghlYLNR7PeV7u&ust=1751505835991000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICRrfCBnY4DFQAAAAAdAAAAABAK", experience_city:"1",experience_category:"3"})

await createExperiences({experience_name:"MoMA (Museum of Modern Art)", experience_description:"Home to masterpieces like Van Gogh’s “Starry Night” and works by Picasso, MoMA is a beacon of modern and contemporary art. It’s a must-see for art lovers exploring the city’s rich cultural scene.", experience_picture:"https://historiadeldisseny.org/web/wp-content/uploads/FHD_Recursos_museu_MoMa.jpg ", experience_city:"1",experience_category:"3"})

// seed experiences - New York - Explore (category 4)

await createExperiences({experience_name:"Broadway Shows", experience_description:"Broadway is the heartbeat of NYCs theater scene, showcasing world-class musicals and plays in the vibrant Times Square district. Seeing a show here is an unforgettable New York experience.", experience_picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.broadway-show-tickets.com%2Fmusical%2Fmj-the-musical-tickets%2F&psig=AOvVaw2kBiJVN9oeW7i2iLigAt2H&ust=1751505924308000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDz25aCnY4DFQAAAAAdAAAAABAE", experience_city:"1",experience_category:"4"})

await createExperiences({experience_name:"Comedy Cellar", experience_description:" Known for surprise sets by top comedians, this intimate Greenwich Village club has launched countless careers. Expect a hilarious night of stand-up in a classic brick-walled basement.", experience_picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qBnCL1ofDfMd_VKyCW5WmGK6Cdcupjpbg&s", experience_city:"1",experience_category:"4"})

await createExperiences({experience_name:"Lincoln Center", experience_description:"This world-renowned complex hosts everything from ballet to jazz, opera to film. Its iconic fountains and grand architecture make it as stunning outside as the performances are inside.", experience_picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6d4g_CeLBvti5-Mr_2xhfd3xfwEJpfhDKg&s", experience_city:"1",experience_category:"4"})



// seed experiences - LA- Eat (category 1)

await createExperiences({experience_name:"Perch ", experience_description:"Glamorous rooftop setting with French small plates, handcrafted cocktails & grand views of the city. ", experience_picture:"https://lh3.googleusercontent.com/p/AF1QipOJgg8xaY2kZEijEGYGCRnSFYGjpD2IQjXzubD7=s1360-w1360-h1020-rw", experience_city:"2", experience_category:"1"})

await createExperiences({experience_name:"Bottega Louie ", experience_description:"Pizzas, pastas & small plates in a bright, bustling space, plus weekend brunch & macarons to-go. ", experience_picture:"https://lh3.googleusercontent.com/p/AF1QipOm7AXEylldsIfJtyBrn4JfdwzKraA0x1tlibSO=s1360-w1360-h1020-rw", experience_city:"2", experience_category:"1"})

await createExperiences({experience_name:"The Little Door ", experience_description:"French Mediterranean restaurant since 1996 serving rustic meals, farm-to-table cocktails & wines.", experience_picture:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJCIHJXYeyOIdcUFM7xXOKM-XA9-pke5xNtwI33fl1HZteSF_ZMrO1IVUqUSfaKZLuT2Xsi5lI9-lYcMSdlERdudoYQ_fiyJW1wErR1zRYQ_00VPfj-Jv3LuqqbVCHRv19VqSESg=s1360-w1360-h1020-rw", experience_city:"2", experience_category:"1"})


// seed experiences - LA - Drinks (category 2)

await createExperiences({experience_name:"Thunderbolt", experience_description:"They're known for their innovative cocktails and delicious Southern-inspired food menu. Their cocktail program utilizes technology and innovation for efficiency and flavor. ", experience_picture:"https://res.cloudinary.com/the-infatuation/image/upload/v1657764266/cms/guides/where-to-eat-drinking-when-youre-feeling-hot/Krystal_Thompson_LA_Bar_Updates_Bar_Flores-1.jpg", experience_city:"2", experience_category:"2"})

await createExperiences({experience_name:"Spring St Bar ", experience_description:"Spring Street Bar is a popular spot located in the historic core of Downtown Los Angeles at 626 S Spring St B, Los Angeles, CA 90014. It's known for its blend of classic cocktails, craft beers, and gourmet sandwiches in an industrial-chic setting with a dog-friendly patio. ", experience_picture:"https://static.wixstatic.com/media/057c85_13f76d3837964ac6ac1aaf67f3317ca3~mv2.jpg/v1/fill/w_640,h_426,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/057c85_13f76d3837964ac6ac1aaf67f3317ca3~mv2.jpg", experience_city:"2", experience_category:"2"})

await createExperiences({experience_name:"Flamingo Bar ", experience_description:"Known for beer, wine, and cocktails in a trendy hangout with an '80s vibe and Instagrammable decor. They are open every day from 4 PM to 2 AM, and are known for book clubs. They have food, great drinks, and a photo booth. ", experience_picture:"https://gastronomicslc.com/wp-content/uploads/2024/04/Flanker-Tipsy-Flamingo-room-Gastronomic-SLC.jpg", experience_city:"2", experience_category:"2"})

// seed experiences - LA - Play (category 3)

await createExperiences({experience_name:"Universal Studios Hollywood ", experience_description:"Universal Studios Hollywood is a renowned theme park and film studio located in Universal City, California, near Los Angeles. It's celebrated for its immersive entertainment experiences, featuring thrilling rides, entertaining shows, a world-famous studio tour, and various themed lands. The park has a cinema theme, reflecting its deep connection to the Hollywood film industry. ", experience_picture:"https://cdn2.nbcuni.com/NBCUniversal/styles/newsroom_stories_16_9_image_style/s3/2023-08/Universal-Studio-Homepage.png?VersionId=xHPemJHZWrirMKmbW2OytQvreV35oy0p&itok=3gnKluzC", experience_city:"2", experience_category:"3"})

await createExperiences({experience_name:"Santa Monica Pier ", experience_description:"The Santa Monica Pier is a historic landmark located at the end of Colorado Avenue in Santa Monica, California. It is a popular destination featuring a variety of attractions, dining options, and stunning ocean views. ", experience_picture:"https://www.hellomondo.com/wp-content/uploads/santa-monica-pier.jpg", experience_city:"2", experience_category:"3"})

await createExperiences({experience_name:"Hollywood Walk of Fame ", experience_description:"The Hollywood Walk of Fame is a renowned landmark in Los Angeles, California, known for its embedded stars honoring celebrities in the entertainment industry. Located on Hollywood Boulevard, it offers a glimpse into Hollywood's history and iconic figures. ", experience_picture:"https://variety.com/wp-content/uploads/2020/09/hollywood-walk-of-fame.jpg", experience_city:"2", experience_category:"3"})


// seed experiences - LA- Explore (category 4)

await createExperiences({experience_name:"Griffith Observatory ", experience_description:"Griffith Observatory is an observatory in Los Angeles, California, on the south-facing slope of Mount Hollywood in Griffith Park. It commands a view of the Los Angeles Basin including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest. ", experience_picture:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nob5jLbiJaX_A2D9HFyyT_EUGzJaVpjWvPVUJh2DpT37pR8TgVqhdyZCF-quvX04W8VK3JVZtEpeiTUlB8YHmH4GASvcVOm9alBcX5tT_HdBztyovNjmRqHpefj0oMgAfL1yG5L=s1360-w1360-h1020-rw", experience_city:"2", experience_category:"4"})

await createExperiences({experience_name:"La Brea Tar Pits", experience_description:"La Brea Tar Pits comprise an active paleontological research site in urban Los Angeles. Hancock Park was formed around a group of tar pits where natural asphalt has seeped up from the ground for tens of thousands of years. Over many centuries, the bones of trapped animals have been preserved", experience_picture:"https://nhm.org/sites/default/files/styles/fwc_full_small/public/2019-08/nhm_la_1104.jpg?h=2aebd59a ", experience_city:"2", experience_category:"4"})

await createExperiences({experience_name:"Hollywood Bowl", experience_description:"The Hollywood Bowl is an iconic outdoor amphitheater located in the Hollywood Hills of Los Angeles, California. It is renowned for hosting a wide variety of musical events, including classical, jazz, pop, rock, and more.", experience_picture:"https://images.squarespace-cdn.com/content/v1/54b5af9ce4b0ad6fb5d06c8a/1438106778525-JFA5SJMRU2X9IQCPN5H8/image-asset.jpeg?format=1500w", experience_city:"2", experience_category:"4"})


// seed cities - Miami 


// seed cities - Vegas 




}

