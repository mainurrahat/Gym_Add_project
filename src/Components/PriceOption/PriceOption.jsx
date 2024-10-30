// import React from 'react'
import PriceOptio from "../PriceOptio/PriceOptio";
const PriceOption = () => {
  const gymPlans = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      billingCycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "One complimentary fitness assessment",
        "24/7 gym access",
        "Digital workout tracking",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      billingCycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Group fitness classes",
        "One personal training session per month",
        "24/7 gym access",
        "Access to cardio theater",
        "Access to nutrition planning app",
        "Two guest passes per month",
        "Monthly body composition analysis",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79.99,
      billingCycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access with personal lockers",
        "Free Wi-Fi",
        "Group fitness classes",
        "Unlimited personal training sessions",
        "Spa and sauna access",
        "Access to VIP lounge",
        "Unlimited guest passes",
        "One monthly massage therapy session",
        "Access to all gym locations nationwide",
        "Exclusive premium equipment",
        "Advanced workout analytics",
      ],
    },
    {
      id: 4,
      name: "Annual Pass",
      price: 499.99,
      billingCycle: "annually",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Group fitness classes",
        "One personal training session per month",
        "10% discount on in-house services",
        "Priority access to new classes",
        "Access to member-only fitness events",
        "10% discount on gym merchandise",
        "Annual health and fitness consultation",
        "Access to online workout videos and guides",
        "Personalized nutrition and fitness plan",
      ],
    },
  ];

  return (
    <div className="m-12">
      {/* <h2 className="text-5xl">Best Prices In The Town </h2> */}
      <div className="grid md:grid-cols-3 gap-6">
        {gymPlans.map((option) => (
          <PriceOptio key={option.id} option={option}></PriceOptio>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
