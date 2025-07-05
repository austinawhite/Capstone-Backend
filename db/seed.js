import db from "./client.js";
import { createCity } from "./queries/cities.js";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");



async function seed(){


// seed cities
await createCity({city_name: "New York", city_description: "New York City, often called the City that Never Sleeps, is a vibrant and iconic metropolis known for its diverse culture, bustling streets, and world-renowned landmarks. It's the most populous city in the United States, situated at the meeting point of the Hudson and East Rivers, and is comprised of five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. New York is a global hub for finance, culture, entertainment, and fashion, with a virtually unrivaled collection of museums, theaters, and iconic attractions like the Statue of Liberty, Times Square, and Central Park. ", city_image:  "https://www.travelandleisure.com/thmb/3oPWFmA6fi9sjAyWzigwaUKD8P8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"})

await createCity({city_name: "Los Angeles", city_description: "Los Angeles, often called the City of Angels, is a sprawling metropolis in Southern California known for its diverse culture, entertainment industry, and iconic landmarks. It's the second-largest city in the U.S. and a global center for entertainment, business, and international trade. The city is characterized by its diverse geography, spanning a desert basin surrounded by mountains and divided by the Santa Monica Mountains. ", city_image: "https://www.travelguide.net/media/los-angeles.jpeg"})

await createCity({city_name: "Miami", city_description: "Miami, Florida, is a vibrant coastal metropolis known for its diverse culture, stunning beaches, and lively nightlife. It's a major hub for international trade, finance, and tourism, with a unique blend of Latin American and North American influences. The city's subtropical climate and beautiful natural surroundings, including Biscayne Bay and the Everglades, add to its appeal. ", city_image: "https://www.extraspace.com/blog/wp-content/uploads/2019/04/living-in-miami-fl.jpg"})

await createCity({city_name: "Las Vegas", city_description: "Las Vegas is a world-renowned resort city in Nevada, famous for its vibrant entertainment, including gambling, nightlife, shopping, and fine dining. It's often called the Entertainment Capital of the World and is a major tourist destination. While the famous Las Vegas Strip is technically outside the city limits, it's the area most associated with the city's identity. ", city_image: "https://www.thoughtco.com/thmb/3Olgaxc1_19PzJwB_TorJCHMOMI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535829219-59c5999868e1a20014d27346.jpg"})


// seed experience categories 

await createCategory({categoryName:"Eat"})

await createCategory({categoryName:"Drink"})

await createCategory({categoryName:"Play"})

await createCategory({categoryName:"Explore"})


// seed experiences - New York - Eat (category 1)

await createExperiences({experienceName:"Katz Delicatessen ", experience_description:"Katz is a legendary Jewish deli, famous for towering pastrami sandwiches stacked with tender, hand-carved meat. A classic NYC experience since 1888, its the place to relive a bit of food history. ", experience_picture:"https://lh3.googleusercontent.com/p/AF1QipNUvMzpO28Apt0nlLOde7vLiYZyErPgp0tL0Sr-=s680-w680-h510-rw ", experience_city:"1", experience_category:"1"})

await createExperiences({experienceName:"Carbone", experience_description:"Carbone offers a nostalgic journey through mid-century Italian-American fine dining, with dishes like spicy rigatoni vodka and veal parmesan. The old-school atmosphere paired with exceptional service makes it a must-visit.", experience_picture:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4npWxyzJdOGSJtFdstx0ynGknGHsbD3Hi8H04JGEY2ZSwBiufnrVHL2kzHtdfrGFDpF4AofPFsdmKZOYSMsclbNKw5MMwoiQxfPGuCUafnCT19JnXjLYqtLEvh8MR1AbHOTJiJ_5=s680-w680-h510-rw ", experience_city:"1", experience_category:"1"})

await createExperiences({experienceName:"Russ & Daughters Café ", experience_description:"Renowned for its smoked fish and caviar, this Lower East Side gem brings New Yorks Jewish deli tradition to a cozy café setting. Its the perfect spot for bagels, lox, and a true taste of NYC.", experience_picture:"https://images.squarespace-cdn.com/content/v1/54b5af9ce4b0ad6fb5d06c8a/1438106778525-JFA5SJMRU2X9IQCPN5H8/image-asset.jpeg?format=1500w", experience_city:"1", experience_category:"1"})

// seed experiences - New York - Drink (category 2)

await createExperiences({experienceName:"The Smith", experience_description:"This lively American brasserie serves approachable comfort food with a modern twist, and its famous for a vibrant happy hour featuring drinks and bites. The cozy yet bustling ambiance makes it ideal for unwinding after work.", experience_picture:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nozdQ35HYNrUtGMAhiBTm08YMhFaoEZ4LHYVDQeoQSAGboqKT5DWbUqb4kxUXGqwmJKHCmXKbXoBG8sCBi8hjc-BiBXUQqp2joGZzk4xx4q-BLKaf-CgRbDdwpnVSqJx87LFEan=s680-w680-h510-rw", experience_city:"1", experience_category:"2"})


await createExperiences({experienceName:"The Mermaid Inn", experience_description:" Known for some of the best oyster deals in the city, The Mermaid Inn delivers a quintessential seafood happy hour in a nautical, casual-chic setting. Guests rave about their fresh shellfish and crisp cocktails.", experience_picture:"https://images.getbento.com/accounts/ed7339fabff5bfe766d3ed8cf0a585d2/media/images/35658255941928_1467202203664513_7201512704206452203_n.jpg?w=1800&fit=max&auto=compress,format&cs=origin&h=1800 ", experience_city:"1",experience_category:"2"})


await createExperiences({experienceName:"Refinery Rooftop", experience_description:"Set atop the Refinery Hotel, this rooftop bar offers panoramic views of Manhattans skyline, especially the Empire State Building. Pair craft cocktails with small plates while watching the sunset over the city.", experience_picture:"https://refineryrooftop.com/wp-content/uploads/2019/04/events-rrt-2.jpg ", experience_city:"1",experience_category:"2"})

// seed experiences - New York - Play (category 3)

await createExperiences({experienceName:"Statue of Liberty & Ellis Island", experience_description:" A world-famous symbol of freedom, the Statue of Liberty offers incredible views of Manhattans harbor. Combined with Ellis Islands Immigration Museum, its a powerful way to connect with Americas history.", experience_picture:"https://refineryrooftop.com/wp-content/uploads/2019/04/events-rrt-2.jpg ", experience_city:"1",experience_category:"3"})

await createExperiences({experienceName:"The High Line", experience_description:"This elevated linear park stretches over Manhattan’s West Side, transforming old train tracks into gardens, art installations, and city overlooks. It’s a unique, urban oasis perfect for a leisurely stroll.", experience_picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Factivities%2Fnew-york%2Fthe-high-line-nyc&psig=AOvVaw2XLjc0yg2ghlYLNR7PeV7u&ust=1751505835991000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICRrfCBnY4DFQAAAAAdAAAAABAK", experience_city:"1",experience_category:"3"})

await createExperiences({experienceName:"MoMA (Museum of Modern Art)", experience_description:"Home to masterpieces like Van Gogh’s “Starry Night” and works by Picasso, MoMA is a beacon of modern and contemporary art. It’s a must-see for art lovers exploring the city’s rich cultural scene.", experience_picture:"https://historiadeldisseny.org/web/wp-content/uploads/FHD_Recursos_museu_MoMa.jpg ", experience_city:"1",experience_category:"3"})

// seed experiences - New York - Explore (category 4)

await createExperiences({experienceName:"Broadway Shows", experience_description:"Broadway is the heartbeat of NYCs theater scene, showcasing world-class musicals and plays in the vibrant Times Square district. Seeing a show here is an unforgettable New York experience.", experience_picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.broadway-show-tickets.com%2Fmusical%2Fmj-the-musical-tickets%2F&psig=AOvVaw2kBiJVN9oeW7i2iLigAt2H&ust=1751505924308000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDz25aCnY4DFQAAAAAdAAAAABAE", experience_city:"1",experience_category:"4"})

await createExperiences({experienceName:"Comedy Cellar", experience_description:" Known for surprise sets by top comedians, this intimate Greenwich Village club has launched countless careers. Expect a hilarious night of stand-up in a classic brick-walled basement.", experience_picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qBnCL1ofDfMd_VKyCW5WmGK6Cdcupjpbg&s", experience_city:"1",experience_category:"4"})

await createExperiences({experienceName:"Lincoln Center", experience_description:"This world-renowned complex hosts everything from ballet to jazz, opera to film. Its iconic fountains and grand architecture make it as stunning outside as the performances are inside.", experience_picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6d4g_CeLBvti5-Mr_2xhfd3xfwEJpfhDKg&s", experience_city:"1",experience_category:"4"})


// seed cities - LA 


// seed cities - Miami 


// seed cities - Vegas 




}
