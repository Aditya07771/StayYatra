// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

// Sample listing data for each category
const listingsData = [
  // Beach Properties
  {
    title: "Luxury Beachfront Villa",
    description: "Wake up to the sound of waves in this stunning beachfront property. Features direct beach access, infinity pool, and panoramic ocean views.",
    imageSrc: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    category: "Beach",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "MV",
    price: 450
  },
  {
    title: "Coastal Beach House",
    description: "Charming beach house perfect for family vacations. Walking distance to the beach with beautiful sunset views.",
    imageSrc: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
    category: "Beach",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "US",
    price: 280
  },
  
  // Windmills
  {
    title: "Converted Windmill Retreat",
    description: "Unique stay in a beautifully restored historic windmill. Experience rural charm with modern amenities.",
    imageSrc: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    category: "Windmills",
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "NL",
    price: 195
  },
  {
    title: "Traditional Dutch Windmill",
    description: "Experience authentic Dutch countryside living in this working windmill conversion with stunning canal views.",
    imageSrc: "https://images.unsplash.com/photo-1605367331033-3c807b1ea0c5?w=800",
    category: "Windmills",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 5,
    locationValue: "NL",
    price: 225
  },

  // Modern
  {
    title: "Ultra-Modern City Loft",
    description: "Sleek contemporary loft with floor-to-ceiling windows, smart home technology, and designer furnishings.",
    imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    category: "Modern",
    roomCount: 2,
    bathroomCount: 2,
    guestCount: 4,
    locationValue: "US",
    price: 320
  },
  {
    title: "Minimalist Modern Villa",
    description: "Award-winning architecture featuring clean lines, open spaces, and cutting-edge design.",
    imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    category: "Modern",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "JP",
    price: 495
  },

  // Countryside
  {
    title: "Rustic Countryside Cottage",
    description: "Peaceful retreat surrounded by rolling hills and meadows. Perfect for escaping the city.",
    imageSrc: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800",
    category: "Countryside",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "GB",
    price: 175
  },
  {
    title: "Tuscany Farmhouse",
    description: "Authentic Italian countryside experience with vineyard views, olive groves, and traditional architecture.",
    imageSrc: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
    category: "Countryside",
    roomCount: 5,
    bathroomCount: 3,
    guestCount: 10,
    locationValue: "IT",
    price: 380
  },

  // Pools
  {
    title: "Villa with Infinity Pool",
    description: "Luxurious villa featuring a stunning infinity pool overlooking the valley. Perfect for relaxation.",
    imageSrc: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
    category: "Pools",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "ES",
    price: 425
  },
  {
    title: "Modern Pool House",
    description: "Contemporary design with a large heated pool, poolside cabana, and outdoor entertainment area.",
    imageSrc: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    category: "Pools",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "US",
    price: 340
  },

  // Islands
  {
    title: "Private Island Bungalow",
    description: "Exclusive island retreat accessible by boat. Complete privacy with pristine beaches.",
    imageSrc: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800",
    category: "Islands",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "FJ",
    price: 650
  },
  {
    title: "Tropical Island Villa",
    description: "Luxurious island living with overwater bungalow features and coral reef access.",
    imageSrc: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    category: "Islands",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "MV",
    price: 780
  },

  // Lake
  {
    title: "Lakefront Cabin Retreat",
    description: "Cozy lakefront cabin with private dock, kayaks, and fishing equipment included.",
    imageSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    category: "Lake",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "CA",
    price: 210
  },
  {
    title: "Mountain Lake House",
    description: "Stunning lake house nestled in the mountains with panoramic water views and sunset deck.",
    imageSrc: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800",
    category: "Lake",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "CH",
    price: 395
  },

  // Skiing
  {
    title: "Ski-In Ski-Out Chalet",
    description: "Ultimate ski vacation home with direct slope access, hot tub, and mountain views.",
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "Skiing",
    roomCount: 5,
    bathroomCount: 4,
    guestCount: 10,
    locationValue: "CH",
    price: 550
  },
  {
    title: "Alpine Ski Lodge",
    description: "Traditional alpine lodge near world-class ski resorts. Fireplace, sauna, and stunning peaks.",
    imageSrc: "https://images.unsplash.com/photo-1483381719261-1d20937d1c93?w=800",
    category: "Skiing",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "AT",
    price: 480
  },

  // Castles
  {
    title: "Medieval Castle Stay",
    description: "Experience royalty in this authentic medieval castle with towers, great hall, and period furnishings.",
    imageSrc: "https://images.unsplash.com/photo-1585604698150-f2b8f82b2112?w=800",
    category: "Castles",
    roomCount: 8,
    bathroomCount: 5,
    guestCount: 16,
    locationValue: "FR",
    price: 890
  },
  {
    title: "Scottish Highland Castle",
    description: "Historic castle in the Scottish Highlands with turrets, grand ballroom, and acres of grounds.",
    imageSrc: "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=800",
    category: "Castles",
    roomCount: 10,
    bathroomCount: 6,
    guestCount: 20,
    locationValue: "GB",
    price: 1200
  },

  // Caves
  {
    title: "Luxury Cave House",
    description: "Unique underground dwelling carved into hillside. Natural temperature control and historic charm.",
    imageSrc: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=800",
    category: "Caves",
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "TR",
    price: 165
  },
  {
    title: "Modern Cave Dwelling",
    description: "Contemporary cave home blending ancient architecture with modern luxury amenities.",
    imageSrc: "https://images.unsplash.com/photo-1600298882525-f5ffe67e66f7?w=800",
    category: "Caves",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "ES",
    price: 215
  },

  // Camping
  {
    title: "Glamping Safari Tent",
    description: "Luxury camping experience with comfortable beds, private bathroom, and wildlife viewing.",
    imageSrc: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
    category: "Camping",
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    locationValue: "KE",
    price: 285
  },
  {
    title: "Forest Camping Dome",
    description: "Geodesic dome in pristine forest setting. Stargazing window and nature immersion.",
    imageSrc: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
    category: "Camping",
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "CA",
    price: 145
  },

  // Arctic
  {
    title: "Northern Lights Glass Igloo",
    description: "Heated glass igloo for viewing aurora borealis in comfort. Includes breakfast and guide.",
    imageSrc: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800",
    category: "Arctic",
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    locationValue: "FI",
    price: 425
  },
  {
    title: "Arctic Wildlife Lodge",
    description: "Remote arctic lodge with polar bear viewing, northern lights tours, and authentic cuisine.",
    imageSrc: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800",
    category: "Arctic",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "NO",
    price: 520
  },

  // Desert
  {
    title: "Luxury Desert Camp",
    description: "Bedouin-style luxury tents in the desert. Camel rides, stargazing, and traditional meals.",
    imageSrc: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
    category: "Desert",
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "AE",
    price: 380
  },
  {
    title: "Modern Desert Villa",
    description: "Contemporary architecture in desert landscape. Infinity pool and sunset terrace.",
    imageSrc: "https://images.unsplash.com/photo-1610530531783-56a4e92a3305?w=800",
    category: "Desert",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "US",
    price: 445
  },

  // Barns
  {
    title: "Converted Barn Loft",
    description: "Beautifully restored barn with exposed beams, modern kitchen, and country views.",
    imageSrc: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=800",
    category: "Barns",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "US",
    price: 195
  },
  {
    title: "Rustic Barn Estate",
    description: "Spacious barn conversion on working farm. Farm-to-table breakfast and animal interactions.",
    imageSrc: "https://images.unsplash.com/photo-1542370285-b8eb8317691c?w=800",
    category: "Barns",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "GB",
    price: 245
  },

  // Lux (Luxury)
  {
    title: "Penthouse Suite Paradise",
    description: "Ultimate luxury penthouse with butler service, private elevator, and rooftop infinity pool.",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    category: "Lux",
    roomCount: 5,
    bathroomCount: 4,
    guestCount: 10,
    locationValue: "AE",
    price: 1500
  },
  {
    title: "Exclusive Private Estate",
    description: "Opulent estate with helipad, wine cellar, home theater, and 24/7 concierge service.",
    imageSrc: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    category: "Lux",
    roomCount: 8,
    bathroomCount: 6,
    guestCount: 16,
    locationValue: "FR",
    price: 2200
  }
];

async function main() {
  console.log('🌱 Starting seed...');

  try {
    // Create a demo user first
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    const user = await prisma.user.upsert({
      where: { email: 'demo@stayyatra.com' },
      update: {},
      create: {
        email: 'demo@stayyatra.com',
        name: 'Demo User',
        hashedPassword,
      },
    });

    console.log('✅ Created demo user:', user.email);

    // Delete existing listings to avoid duplicates
    await prisma.listing.deleteMany({});
    console.log('🗑️  Cleared existing listings');

    // Create listings
    let count = 0;
    for (const listing of listingsData) {
      const created = await prisma.listing.create({
        data: {
          ...listing,
          userId: user.id,
        },
      });
      count++;
      console.log(`✅ [${count}/${listingsData.length}] Created: ${created.title} (${created.category})`);
    }

    console.log('\n🎉 Seed completed successfully!');
    console.log(`📊 Total listings created: ${count}`);
    console.log('\n🔐 Login credentials:');
    console.log('   Email: demo@stayyatra.com');
    console.log('   Password: password123');
    
  } catch (error) {
    console.error('❌ Error during seed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });