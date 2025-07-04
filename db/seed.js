import db from "./client";
import { getCities } from "./queries/cities";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");



async function seed(){


// seed cities
await createCities({city_name: "New York", city_description: "New York City, often called the City that Never Sleeps, is a vibrant and iconic metropolis known for its diverse culture, bustling streets, and world-renowned landmarks. It's the most populous city in the United States, situated at the meeting point of the Hudson and East Rivers, and is comprised of five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. New York is a global hub for finance, culture, entertainment, and fashion, with a virtually unrivaled collection of museums, theaters, and iconic attractions like the Statue of Liberty, Times Square, and Central Park. ", city_image:  "https://www.travelandleisure.com/thmb/3oPWFmA6fi9sjAyWzigwaUKD8P8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"})
await createCities({city_name: "Los Angeles", city_description: "Los Angeles, often called the City of Angels, is a sprawling metropolis in Southern California known for its diverse culture, entertainment industry, and iconic landmarks. It's the second-largest city in the U.S. and a global center for entertainment, business, and international trade. The city is characterized by its diverse geography, spanning a desert basin surrounded by mountains and divided by the Santa Monica Mountains. ", city_image: "https://www.travelguide.net/media/los-angeles.jpeg"})
await createCities({city_name: "Miami", city_description: "Miami, Florida, is a vibrant coastal metropolis known for its diverse culture, stunning beaches, and lively nightlife. It's a major hub for international trade, finance, and tourism, with a unique blend of Latin American and North American influences. The city's subtropical climate and beautiful natural surroundings, including Biscayne Bay and the Everglades, add to its appeal. ", city_image: "https://www.extraspace.com/blog/wp-content/uploads/2019/04/living-in-miami-fl.jpg"})
await createCities({city_name: "Las Vegas", city_description: "Las Vegas is a world-renowned resort city in Nevada, famous for its vibrant entertainment, including gambling, nightlife, shopping, and fine dining. It's often called the Entertainment Capital of the World and is a major tourist destination. While the famous Las Vegas Strip is technically outside the city limits, it's the area most associated with the city's identity. ", city_image: "https://www.thoughtco.com/thmb/3Olgaxc1_19PzJwB_TorJCHMOMI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535829219-59c5999868e1a20014d27346.jpg"})







}
