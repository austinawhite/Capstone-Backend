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

await createExperiences({experience_name:"The High Line", experience_description:"This elevated linear park stretches over Manhattan’s West Side, transforming old train tracks into gardens, art installations, and city overlooks. It’s a unique, urban oasis perfect for a leisurely stroll.", experience_picture:"https://cdn.vox-cdn.com/thumbor/QVqgIdW5Ka_OCv_lyRCX9aRD2Cw=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16205140/Highline_Guide_Max_Touhey_20190416_0082.jpg", experience_city:"1",experience_category:"3"})

await createExperiences({experience_name:"MoMA (Museum of Modern Art)", experience_description:"Home to masterpieces like Van Gogh’s “Starry Night” and works by Picasso, MoMA is a beacon of modern and contemporary art. It’s a must-see for art lovers exploring the city’s rich cultural scene.", experience_picture:"https://historiadeldisseny.org/web/wp-content/uploads/FHD_Recursos_museu_MoMa.jpg ", experience_city:"1",experience_category:"3"})

// seed experiences - New York - Explore (category 4)

await createExperiences({experience_name:"Broadway Shows", experience_description:"Broadway is the heartbeat of NYCs theater scene, showcasing world-class musicals and plays in the vibrant Times Square district. Seeing a show here is an unforgettable New York experience.", experience_picture:"https://www.hollywoodreporter.com/wp-content/uploads/2023/07/newyorknewyork.jpg?w=1296&h=730&crop=1", experience_city:"1",experience_category:"4"})

await createExperiences({experience_name:"Comedy Cellar", experience_description:" Known for surprise sets by top comedians, this intimate Greenwich Village club has launched countless careers. Expect a hilarious night of stand-up in a classic brick-walled basement.", experience_picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qBnCL1ofDfMd_VKyCW5WmGK6Cdcupjpbg&s", experience_city:"1",experience_category:"4"})

await createExperiences({experience_name:"Lincoln Center", experience_description:"This world-renowned complex hosts everything from ballet to jazz, opera to film. Its iconic fountains and grand architecture make it as stunning outside as the performances are inside.", experience_picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6d4g_CeLBvti5-Mr_2xhfd3xfwEJpfhDKg&s", experience_city:"1",experience_category:"4"})



// seed experiences - LA- Eat (category 1)

await createExperiences({experience_name:"Perch ", experience_description:"Glamorous rooftop setting with French small plates, handcrafted cocktails & grand views of the city. ", experience_picture:"https://images.squarespace-cdn.com/content/v1/5c4511380dbda3abea27229a/dbf8e365-f741-4b14-8648-8ff41f173885/B-15%2BMain%2B15%2BPatio.jpg", experience_city:"2", experience_category:"1"})

await createExperiences({experience_name:"Bottega Louie ", experience_description:"Pizzas, pastas & small plates in a bright, bustling space, plus weekend brunch & macarons to-go. ", experience_picture:"https://cdn.shopify.com/s/files/1/0011/1050/7556/files/2024_CATERING_SANDWICH_Website_Banner.png?v=1730400976", experience_city:"2", experience_category:"1"})

await createExperiences({experience_name:"The Little Door ", experience_description:"French Mediterranean restaurant since 1996 serving rustic meals, farm-to-table cocktails & wines.", experience_picture:"https://images.squarespace-cdn.com/content/v1/6030205cc3fdbc3f3fd6896a/3494d32a-39fc-403c-aeed-d1c5b5787269/TLD+Site+Promo+-+24.jpg", experience_city:"2", experience_category:"1"})


// seed experiences - LA - Drinks (category 2)

await createExperiences({experience_name:"Thunderbolt", experience_description:"They're known for their innovative cocktails and delicious Southern-inspired food menu. Their cocktail program utilizes technology and innovation for efficiency and flavor. ", experience_picture:"https://res.cloudinary.com/the-infatuation/image/upload/v1657764266/cms/guides/where-to-eat-drinking-when-youre-feeling-hot/Krystal_Thompson_LA_Bar_Updates_Bar_Flores-1.jpg", experience_city:"2", experience_category:"2"})

await createExperiences({experience_name:"Spring St Bar ", experience_description:"Spring Street Bar is a popular spot located in the historic core of Downtown Los Angeles at 626 S Spring St B, Los Angeles, CA 90014. It's known for its blend of classic cocktails, craft beers, and gourmet sandwiches in an industrial-chic setting with a dog-friendly patio. ", experience_picture:"https://static.wixstatic.com/media/057c85_13f76d3837964ac6ac1aaf67f3317ca3~mv2.jpg/v1/fill/w_640,h_426,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/057c85_13f76d3837964ac6ac1aaf67f3317ca3~mv2.jpg", experience_city:"2", experience_category:"2"})

await createExperiences({experience_name:"Flamingo Bar ", experience_description:"Known for beer, wine, and cocktails in a trendy hangout with an '80s vibe and Instagrammable decor. They are open every day from 4 PM to 2 AM, and are known for book clubs. They have food, great drinks, and a photo booth. ", experience_picture:"https://gastronomicslc.com/wp-content/uploads/2024/04/Flanker-Tipsy-Flamingo-room-Gastronomic-SLC.jpg", experience_city:"2", experience_category:"2"})

// seed experiences - LA - Play (category 3)

await createExperiences({experience_name:"Universal Studios Hollywood ", experience_description:"Universal Studios Hollywood is a renowned theme park and film studio located in Universal City, California, near Los Angeles. It's celebrated for its immersive entertainment experiences, featuring thrilling rides, entertaining shows, a world-famous studio tour, and various themed lands. The park has a cinema theme, reflecting its deep connection to the Hollywood film industry. ", experience_picture:"https://cdn2.nbcuni.com/NBCUniversal/styles/newsroom_stories_16_9_image_style/s3/2023-08/Universal-Studio-Homepage.png?VersionId=xHPemJHZWrirMKmbW2OytQvreV35oy0p&itok=3gnKluzC", experience_city:"2", experience_category:"3"})

await createExperiences({experience_name:"Santa Monica Pier ", experience_description:"The Santa Monica Pier is a historic landmark located at the end of Colorado Avenue in Santa Monica, California. It is a popular destination featuring a variety of attractions, dining options, and stunning ocean views. ", experience_picture:"https://www.hellomondo.com/wp-content/uploads/santa-monica-pier.jpg", experience_city:"2", experience_category:"3"})

await createExperiences({experience_name:"Hollywood Walk of Fame ", experience_description:"The Hollywood Walk of Fame is a renowned landmark in Los Angeles, California, known for its embedded stars honoring celebrities in the entertainment industry. Located on Hollywood Boulevard, it offers a glimpse into Hollywood's history and iconic figures. ", experience_picture:"https://variety.com/wp-content/uploads/2020/09/hollywood-walk-of-fame.jpg", experience_city:"2", experience_category:"3"})


// seed experiences - LA- Explore (category 4)

await createExperiences({experience_name:"Griffith Observatory ", experience_description:"Griffith Observatory is an observatory in Los Angeles, California, on the south-facing slope of Mount Hollywood in Griffith Park. It commands a view of the Los Angeles Basin including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest. ", experience_picture:"https://griffithobservatory.org/wp-content/uploads/2021/03/cameron-venti-c5GkEd-j5vI-unsplash_noCautionTape.jpg", experience_city:"2", experience_category:"4"})

await createExperiences({experience_name:"La Brea Tar Pits", experience_description:"La Brea Tar Pits comprise an active paleontological research site in urban Los Angeles. Hancock Park was formed around a group of tar pits where natural asphalt has seeped up from the ground for tens of thousands of years. Over many centuries, the bones of trapped animals have been preserved", experience_picture:"https://nhm.org/sites/default/files/styles/fwc_full_small/public/2019-08/nhm_la_1104.jpg?h=2aebd59a ", experience_city:"2", experience_category:"4"})

await createExperiences({experience_name:"Hollywood Bowl", experience_description:"The Hollywood Bowl is an iconic outdoor amphitheater located in the Hollywood Hills of Los Angeles, California. It is renowned for hosting a wide variety of musical events, including classical, jazz, pop, rock, and more.", experience_picture:"https://images.squarespace-cdn.com/content/v1/54b5af9ce4b0ad6fb5d06c8a/1438106778525-JFA5SJMRU2X9IQCPN5H8/image-asset.jpeg?format=1500w", experience_city:"2", experience_category:"4"})


// seed experiences - Miami - Eat (category 1) 

await createExperiences({experience_name:"Joe’s Stone Crab", experience_description:"Since 1913, Joe’s has been an institution for fresh stone crabs and seafood classics in a lively, old-school dining room. This iconic spot embodies Miami Beach’s history and flavor.", experience_picture:"https://blog.resy.com/wp-content/uploads/2023/05/joesroom.jpeg ", experience_city:"3", experience_category:"1"})

await createExperiences({experience_name:"Versailles Restaurant", experience_description:"Known as the world’s most famous Cuban restaurant, Versailles serves classic dishes like ropa vieja in a bright, bustling dining hall. It’s a cultural landmark in Little Havana.", experience_picture:"https://www.orlandosentinel.com/wp-content/uploads/migration/2021/11/11/2W2DFZTQUWW2D4G7274FFXEADY.jpg?w=1600&resize=1600,900  ", experience_city:"3", experience_category:"1"})

await createExperiences({experience_name:"Mandolin Aegean Bistro", experience_description:"Tucked into a charming 1940s bungalow, Mandolin transports guests to the Greek isles with its fresh seafood and vibrant mezze plates. Its cozy garden patio is perfect for a leisurely meal.", experience_picture:"https://images.getbento.com/accounts/46c3628b83ff859c5f0fcb6aad5825ea/media/images/48793_DSC6619.png?w=1200&fit=crop&auto=compress,format&cs=origin&h=600  ", experience_city:"3", experience_category:"1"})

// seed experiences - Miami - Drinks (category 2) 

await createExperiences({experience_name:"Sugar at EAST Miami", experience_description:"Perched 40 stories above Brickell, Sugar offers Asian-inspired cocktails and tapas with breathtaking 360-degree views. It’s a chic, tropical rooftop escape for sunset happy hours.", experience_picture:"https://media.cntraveler.com/photos/5a8dcf2c873a2240b39fff03/master/pass/Sugar_3.jpg ", experience_city:"3", experience_category:"2"})

await createExperiences({experience_name:"Bodega Taqueria y Tequila", experience_description:"By day, it’s a funky taco joint; by night, a hidden speakeasy bar serving tequila cocktails and live DJ sets. Bodega’s playful vibe makes it a favorite for late-night happy hour.", experience_picture:"https://images.getbento.com/accounts/33df34d609a7630609ad327639457292/media/images/92072MS_075_v2_1800_x_1200.jpg?w=1800&fit=max&auto=compress,format&cs=origin&h=1800 ", experience_city:"3", experience_category:"2"})

await createExperiences({experience_name:"The Broken Shaker", experience_description:"Located in a lush backyard at the Freehand Hotel, The Broken Shaker crafts innovative cocktails with fresh, local ingredients. It’s a laid-back oasis perfect for relaxing after the beach.", experience_picture:"https://media.cntraveler.com/photos/5a8dc9aa0e2cf839e9dbf872/master/pass/Broken-Shaker_2018_Freehand-Broken-Shaker-patio-2-Adrian-Gaut.jpg  ", experience_city:"3", experience_category:"2"})

// seed experiences - Miami - Play (category 3) 

await createExperiences({experience_name:"LIV Nightclub", experience_description:"Experience Miami’s legendary nightlife at LIV, an opulent club known for celebrity DJs, high-energy dance floors, and extravagant bottle service. Located inside the iconic Fontainebleau.", experience_picture:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/12/96/60/liv.jpg?w=1200&h=-1&s=1 ", experience_city:"3", experience_category:"3"})

await createExperiences({experience_name:"New World Symphony Wallcast", experience_description:"Enjoy free outdoor concerts projected live on a giant wall at SoundScape Park, blending classical music with a modern experience. It’s perfect for a cultural night under the stars.", experience_picture:"https://www.nws.edu/media/202987/_inline-wide-wallcast-new.jpg ", experience_city:"3", experience_category:"3"})

await createExperiences({experience_name:"Magic City Casino", experience_description:"Beyond gaming, this Miami staple hosts comedy shows, concerts, and special events year-round. It’s a vibrant destination for entertainment and nightlife.", experience_picture:" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/de/39/f2/magic-city-casino.jpg?w=1200&h=-1&s=1 ", experience_city:"3", experience_category:"3"})

// seed experiences - Miami - Explore (category 4) 

await createExperiences({experience_name:"Wynwood Walls", experience_description:"A dynamic outdoor museum featuring ever-changing, large-scale murals from world-renowned street artists. This vibrant district is a must-see for art lovers and Instagrammers alike.", experience_picture:"https://thewynwoodwalls.com/wp-content/uploads/2022/05/DJI_0491-copy-1.png  ", experience_city:"3", experience_category:"4"})

await createExperiences({experience_name:"Vizcaya Museum & Gardens", experience_description:"Step back into the Gilded Age at this stunning waterfront mansion with lush European-style gardens. Vizcaya’s architecture and decor transport visitors to another era of luxury.", experience_picture:"https://vizcaya.org/wp-content/uploads/2024/08/vizcaya-video-home-1-copy-1400x747.jpg ", experience_city:"3", experience_category:"4"})

await createExperiences({experience_name:"Little Havana (Calle Ocho)", experience_description:"This bustling neighborhood is alive with Latin music, colorful murals, and the aroma of fresh Cuban coffee. Walking Calle Ocho lets you immerse yourself in Miami’s Cuban heritage.", experience_picture:"https://upload.wikimedia.org/wikipedia/commons/2/25/Villa_Vizcaya_20110228.jpg  ", experience_city:"3", experience_category:"4"})


// seed Experiences - Vegas - Eat (category 1) 

await createExperiences({experience_name:"é by José Andrés", experience_description:"An exclusive, intimate dining experience tucked inside Jaleo, offering avant-garde tasting menus inspired by Spanish cuisine. Each multi-course meal is a theatrical culinary performance.", experience_picture:"https://www.ebyjoseandres.com/images/2022/e-08.jpg  ", experience_city:"4", experience_category:"1"})

await createExperiences({experience_name:"Lotus of Siam", experience_description:"Widely recognized as one of the best Thai restaurants in the U.S., Lotus of Siam serves Northern Thai specialties bursting with authentic flavors. Dishes like crispy garlic prawns and khao soi are must-tries.", experience_picture:"https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_Lotus-Entry_971443D9-060B-0B33-5EEADBEB252ADC4C-97143e30afce270.jpg  ", experience_city:"4", experience_category:"1"})

await createExperiences({experience_name:"Gordon Ramsay Hell’s Kitchen", experience_description:"Inspired by the hit TV show, Hell’s Kitchen offers modern takes on Ramsay’s signature dishes like Beef Wellington in a sleek, fiery setting. Guests can enjoy dinner with views of the Strip.", experience_picture:"https://usmenuguide.com/wp-content/uploads/2021/02/hellskitchenlasvegas2.jpg ", experience_city:"4", experience_category:"1"})

// seed Experiences - Vegas - Drinks (category 2) 

await createExperiences({experience_name:"SkyBar at Waldorf Astoria", experience_description:"Soaring high above the Strip, SkyBar offers handcrafted cocktails and breathtaking sunset views. Their happy hour includes creative drinks and small plates in a chic setting.", experience_picture:"https://resizer.otstatic.com/v3/photos/26042618-1?width=1280&height=720&webp=true ", experience_city:"4", experience_category:"2"})

await createExperiences({experience_name:"Therapy", experience_description:"Located in Downtown Vegas, Therapy is a stylish lounge known for playful cocktails and innovative American bites. Their happy hour is perfect before exploring Fremont Street.", experience_picture:"https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_therapy_FC79BAAE-CC40-2399-FEF1A4B44721FB00-fc79b9cb00fbae3.jpg  ", experience_city:"4", experience_category:"2"})

await createExperiences({experience_name:"Yardbird Southern Table & Bar", experience_description:"This award-winning restaurant celebrates Southern comfort with bourbon cocktails and fried chicken. Their happy hour features classic drinks and tasty small plates with a southern twist.", experience_picture:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/2d/1f/0f/yardbird-las-vegas.jpg?w=900&h=500&s=1  ", experience_city:"4", experience_category:"2"})

// seed Experiences - Vegas - Play (category 3) 

await createExperiences({experience_name:"Cirque du Soleil Shows", experience_description:"Vegas is home to stunning Cirque du Soleil productions like “O” and “Mystère,” which combine acrobatics, storytelling, and breathtaking visuals. A quintessential Vegas night out.", experience_picture:"https://images.squarespace-cdn.com/content/v1/5e0e65adcd39ed279a0402fd/68e2712a-75d4-4a59-bbdb-bf2c70a6d487/21_Finale_5270.jpeg ", experience_city:"4", experience_category:"3"})

await createExperiences({experience_name:"Absinthe at Caesars Palace", experience_description:"A raucous adults-only variety show combining burlesque, circus acts, and outrageous comedy in an intimate spiegeltent. It’s wild, irreverent, and uniquely Vegas.", experience_picture:"https://spiegelworld.com/wp-content/uploads/2023/06/Absinthe-theater-web.jpg ", experience_city:"4", experience_category:"3"})

await createExperiences({experience_name:"Fremont Street Experience", experience_description:"Covered by the world’s largest LED canopy, Fremont Street hosts dazzling light shows and live music stages. It’s the vibrant, retro heart of Downtown Las Vegas.", experience_picture:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/db/6f/80/see-the-world-s-biggest.jpg?w=1200&h=1200&s=1 ", experience_city:"4", experience_category:"3"})

// seed Experiences - Vegas - Explore (category 4) 

await createExperiences({experience_name:"Grand Canyon Helicopter Tour", experience_description:"Departing from Vegas, helicopter tours offer jaw-dropping views of the Grand Canyon, Hoover Dam, and Lake Mead. Many tours include champagne landings at the canyon floor.", experience_picture:"https://www.canyontours.com/wp-content/uploads/2024/09/Grand-Canyon-Exclusive-Floor-Landing-Helicopter-Tour-03.jpg  ", experience_city:"4", experience_category:"4"})

await createExperiences({experience_name:"Mojave Desert ATV Tours", experience_description:"Ride across rugged desert trails on guided ATV adventures through sand dunes and arid landscapes. A thrilling way to experience the raw beauty of Nevada’s desert.", experience_picture:"https://bestatvtourslv.com/wp-content/uploads/2022/03/IMG_ATV_8.jpg", experience_city:"4", experience_category:"4"})

await createExperiences({experience_name:"Valley of Fire State Park", experience_description:" Nevada’s oldest state park is famous for fiery red sandstone formations, petroglyphs, and sweeping vistas. Short hikes offer incredible photo opportunities.", experience_picture:"https://travelnevada.com/wp-content/uploads/2020/04/lass-id-original-1517256395-5a6f7ecb0efe5-768x432.jpg", experience_city:"4", experience_category:"4"})

}

