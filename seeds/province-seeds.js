const { Province } = require("../models/Location");

const provinceData = [
  {
    province_name: "Alberta",
    country_id: 1,
  },
  {
    province_name: "British Columbia",
    country_id: 1,
  },
  {
    province_name: "Manitoba",
    country_id: 1,
  },
  {
    province_name: "New Brunswick",
    country_id: 1,
  },
  {
    province_name: "Newfoundland and Labrador",
    country_id: 1,
  },
  {
    province_name: "Nova Scotia",
    country_id: 1,
  },
  {
    province_name: "Ontario",
    country_id: 1,
  },
  {
    province_name: "Prince Edward Island",
    country_id: 1,
  },
  {
    province_name: "Quebec",
    country_id: 1,
  },
  {
    province_name: "Saskatchewan",
    country_id: 1,
  },
  {
    province_name: "Yukon",
    country_id: 1,
  },
  {
    province_name: "Nunavut",
    country_id: 1,
  },
  {
    province_name: "Northwest Territory",
    country_id: 1,
  },
  {
    province_name: "Aguascalientes",
    country_id: 2,
  },
  {
    province_name: "Baja California",
    country_id: 2,
  },
  {
    province_name: "Baja California Sur",
    country_id: 2,
  },
  {
    province_name: "Campeche",
    country_id: 2,
  },
  {
    province_name: "Chiapas",
    country_id: 2,
  },
  {
    province_name: "Chihuahua",
    country_id: 2,
  },
  {
    province_name: "Coahuila",
    country_id: 2,
  },
  {
    province_name: "Colima",
    country_id: 2,
  },
  {
    province_name: "Durango",
    country_id: 2,
  },
  {
    province_name: "Guanajuato",
    country_id: 2,
  },
  {
    province_name: "Guerrero",
    country_id: 2,
  },
  {
    province_name: "Hidalgo",
    country_id: 2,
  },
  {
    province_name: "Jalisco",
    country_id: 2,
  },
  {
    province_name: "México",
    country_id: 2,
  },
  {
    province_name: "Mexico City",
    country_id: 2,
  },
  {
    province_name: "Michoacán",
    country_id: 2,
  },
  {
    province_name: "Morelos",
    country_id: 2,
  },
  {
    province_name: "Nayarit",
    country_id: 2,
  },
  {
    province_name: "Nuevo León",
    country_id: 2,
  },
  {
    province_name: "Oaxaca",
    country_id: 2,
  },
  {
    province_name: "Puebla",
    country_id: 2,
  },
  {
    province_name: "Querétaro",
    country_id: 2,
  },
  {
    province_name: "Quintana Roo",
    country_id: 2,
  },
  {
    province_name: "San Luis Potosí",
    country_id: 2,
  },
  {
    province_name: "Sinaloa",
    country_id: 2,
  },
  {
    province_name: "Sonora",
    country_id: 2,
  },
  {
    province_name: "Tabasco",
    country_id: 2,
  },
  {
    province_name: "Tamaulipas",
    country_id: 2,
  },
  {
    province_name: "Tlaxcala",
    country_id: 2,
  },
  {
    province_name: "Veracruz",
    country_id: 2,
  },
  {
    province_name: "Yucatán",
    country_id: 2,
  },
  {
    province_name: "Zacatecas",
    country_id: 2,
  },
    {
    province_name: "Alabama",
    country_id: 3,
  },
  {
    province_name: "Alaska",
    country_id: 3,
  },
  {
    province_name: "Arizona",
    country_id: 3,
  },
  {
    province_name: "Arkansas",
    country_id: 3,
  },
  {
    province_name: "California",
    country_id: 3,
  },
  {
    province_name: "Colorado",
    country_id: 3,
  },
  {
    province_name: "Connecticut",
    country_id: 3,
  },
  {
    province_name: "Delaware",
    country_id: 3,
  },
  {
    province_name: "Florida",
    country_id: 3,
  },
  {
    province_name: "Georgia",
    country_id: 3,
  },
  {
    province_name: "Hawaii",
    country_id: 3,
  },
  {
    province_name: "Idaho",
    country_id: 3,
  },
  {
    province_name: "Illinois",
    country_id: 3,
  },
  {
    province_name: "Indiana",
    country_id: 3,
  },
  {
    province_name: "Iowa",
    country_id: 3,
  },
  {
    province_name: "Kansas",
    country_id: 3,
  },
  {
    province_name: "Kentucky",
    country_id: 3,
  },
  {
    province_name: "Louisiana",
    country_id: 3,
  },
  {
    province_name: "Maine",
    country_id: 3,
  },
  {
    province_name: "Maryland",
    country_id: 3,
  },
  {
    province_name: "Massachusetts",
    country_id: 3,
  },
  {
    province_name: "Michigan",
    country_id: 3,
  },
  {
    province_name: "Minnesota",
    country_id: 3,
  },
  {
    province_name: "Mississippi",
    country_id: 3,
  },
  {
    province_name: "Missouri",
    country_id: 3,
  },
  {
    province_name: "Montana",
    country_id: 3,
  },
  {
    province_name: "Nebraska",
    country_id: 3,
  },
  {
    province_name: "Nevada",
    country_id: 3,
  },
  {
    province_name: "New Hampshire",
    country_id: 3,
  },
  {
    province_name: "New Jersey",
    country_id: 3,
  },
  {
    province_name: "New Mexico",
    country_id: 3,
  },
  {
    province_name: "New York",
    country_id: 3,
  },
  {
    province_name: "North Carolina",
    country_id: 3,
  },
  {
    province_name: "North Dakota",
    country_id: 3,
  },
  {
    province_name: "Ohio",
    country_id: 3,
  },
  {
    province_name: "Oklahoma",
    country_id: 3,
  },
  {
    province_name: "Oregon",
    country_id: 3,
  },
  {
    province_name: "Pennsylvania",
    country_id: 3,
  },
  {
    province_name: "Rhode Island",
    country_id: 3,
  },
  {
    province_name: "South Carolina",
    country_id: 3,
  },
  {
    province_name: "South Dakota",
    country_id: 3,
  },
  {
    province_name: "Tennessee",
    country_id: 3,
  },
  {
    province_name: "Texas",
    country_id: 3,
  },
  {
    province_name: "Utah",
    country_id: 3,
  },
  {
    province_name: "Vermont",
    country_id: 3,
  },
  {
    province_name: "Virginia",
    country_id: 3,
  },
  {
    province_name: "Washington",
    country_id: 3,
  },
  {
    province_name: "West Virginia",
    country_id: 3,
  },
  {
    province_name: "Wisconsin",
    country_id: 3,
  },
  {
    province_name: "Wyoming",
    country_id: 3,
  }
];

const seedProvince = () => Province.bulkCreate(provinceData);

module.exports = seedProvince;