import office from '../assets/Products/Office.jpg';
import office1 from '../assets/Products/office-i1.jpg';
import office2 from '../assets/Products/office-i2.jpg';
import office3 from '../assets/Products/office-i3.jpg';
import office4 from '../assets/Products/office-i4.jpg';
import house from '../assets/Products/House.jpg';
import house1 from '../assets/Products/house1.jpg';
import house2 from '../assets/Products/house2.jpg';
import house3 from '../assets/Products/house3.jpg';
import house4 from '../assets/Products/house4.jpg';
import labour from '../assets/Products/labour.jpg';
import labour1 from '../assets/Products/labour1.jpg';
import labour2 from '../assets/Products/labour2.jpg';
import labour3 from '../assets/Products/labour3.jpg';
import labour4 from '../assets/Products/labour4.jpg';
import double from '../assets/Products/doubled.jpg';
import double1 from '../assets/Products/doubled1.jpg';
import double2 from '../assets/Products/doubled2.jpg';
import double3 from '../assets/Products/doubled3.jpg';
import double4 from '../assets/Products/doubled4.jpg';
import kitchen from '../assets/Products/kitchen.jpg';
import kitchen1 from '../assets/Products/kitchen1.jpg';
import kitchen2 from '../assets/Products/kitchen2.jpg';
import security from '../assets/Products/security.jpg';
import security1 from '../assets/Products/security1.jpg';
import security2 from '../assets/Products/security2.jpg';
import security3 from '../assets/Products/security3.jpg';
import security4 from '../assets/Products/security4.jpg';
import security5 from '../assets/Products/security5.jpg';
import toilet from '../assets/Products/toilet.jpg';
import toilet1 from '../assets/Products/toilet1.jpg';
import toilet2 from '../assets/Products/toilet2.jpg';
import toilet3 from '../assets/Products/toilet3.jpg';
import toilet4 from '../assets/Products/toilet4.jpg';

export const products = [
  {
    id: 1,
    name: "Office Cabin",
    mainImage: office,
    hoverImages: [office,office1, office2, office3, office4],
    description: "Premium portable office cabins designed for professional workspaces...",
    features: [
      "Durable metal framework",
      "Pre-installed electrical fittings",
      "Climate control ready",
      "Custom interior layouts",
      "Easy installation and mobility"
    ],
    specifications: {
      size: "20ft x 10ft (customizable)",
      height: "8.5ft standard height",
      material: "Steel frame with insulated panels",
      windows: "Aluminum sliding windows",
      door: "Steel security door"
    }
  },
    {
        id: 2,
        name: "House Cabin",
        mainImage: house,
        hoverImages: [house,house1, house2, house3, house4],
        description: "Comfortable living spaces for temporary or permanent housing needs...",
        features: [
        "Fully furnished interiors",
        "Plumbing and electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Durable and weatherproof"
        ],
        specifications: {
        size: "40ft x 20ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
        }
    },
    {
        id: 3,
        name: "Labour Quarter",
        mainImage: labour,
        hoverImages: [labour,labour1, labour2, labour3, labour4],
        description: "Cost-effective living spaces for temporary housing or shelter...",
        features: [
        "Basic electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Durable and weatherproof",
        "Easy installation and mobility"
        ],
        specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
        }
    },
    {
        id: 4,
        name: "Double Cabin",
        mainImage: double,
        hoverImages: [double,double1, double2, double3, double4],
        description: "Spacious and versatile cabins for office, living, or storage...",
        features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
        ],
        specifications: {
        size: "40ft x 20ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
        }
    },
    {
        id: 5,
        name: "Kitchen Cabin",
        mainImage: kitchen,
        hoverImages: [kitchen,kitchen1, kitchen2],
        description: "Compact and efficient kitchen spaces for commercial or residential use...",
        features: [
        "Customizable kitchen layouts",
        "Plumbing and electrical fittings",
        "Climate control ready",
        "Durable and weatherproof",
        "Easy installation and mobility"
        ],
        specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
        }
    },
    {
        id: 6,
        name: "Security Cabin",
        mainImage: security,
        hoverImages: [security,security1, security2, security3, security4, security5],
        description: "Secure and comfortable guard cabins for residential or commercial use...",
        features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
        ],
        specifications: {
        size: "10ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
        }
    },
    {
        id: 7,
        name: "Toilet Cabin",
        mainImage: toilet,
        hoverImages: [toilet,toilet1, toilet2, toilet3, toilet4],
        description: "Sanitary and hygienic portable toilets for outdoor events or construction sites...",
        features: [
        "Customizable toilet layouts",
        "Plumbing and electrical fittings",
        "Climate control ready",
        "Durable and weatherproof",
        "Easy installation and mobility"
        ],
        specifications: {
        size: "10ft x 5ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
        }
    }

];