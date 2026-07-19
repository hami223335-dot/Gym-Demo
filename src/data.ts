import {
  Service,
  Facility,
  Trainer,
  Transformation,
  ClassScheduleItem,
  Testimonial,
  MembershipPlan,
  FAQ,
  BlogPost
} from './types';

export const BRAND_NAME = "PowerCore Fitness";
export const BRAND_SLOGAN = "Train Smarter. Become Stronger.";
export const BRAND_SUBHEADING = "Experience a new echelon of wellness. At PowerCore, physical mastery meets bespoke hospitality in an atmosphere curated for peak human potential.";

export const CONTACT_INFO = {
  phone: "+00 000 0000000",
  email: "demo@gym.com",
  address: "123 Fitness Street, Elite District, London",
  socials: [
    { name: "Facebook", url: "https://facebook.com/powercore" },
    { name: "Instagram", url: "https://instagram.com/powercore" },
    { name: "TikTok", url: "https://tiktok.com/@powercore" },
    { name: "YouTube", url: "https://youtube.com/c/powercore" },
    { name: "LinkedIn", url: "https://linkedin.com/company/powercore" }
  ],
  hours: [
    { days: "Monday - Friday", hours: "05:00 AM - 11:00 PM" },
    { days: "Saturday", hours: "06:00 AM - 09:00 PM" },
    { days: "Sunday", hours: "07:00 AM - 08:00 PM" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Precision Strength Training",
    description: "Form-focused structural training with custom biometrics and state-of-the-art selectorized equipment.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    category: "strength",
    benefits: ["Neuromuscular adaptation", "Maximized muscle recruitment", "Injury mitigation planning", "Individualized load profiles"]
  },
  {
    id: "s2",
    title: "High-Performance Cardio Mechanics",
    description: "Advance your metabolic engine using elite Woodway treadmills, Wattbikes, and personalized heart rate zone monitoring.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    category: "cardio",
    benefits: ["VO2 max expansion", "Lactate threshold enhancement", "Real-time biometric feedback", "Endurance capacity scaling"]
  },
  {
    id: "s3",
    title: "Holistic Yoga & Mobility",
    description: "Improve joint mechanics, mindfulness, and muscular elasticity with expert instructors in a temperature-controlled sanctuary.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    category: "wellness",
    benefits: ["Autonomic nervous recovery", "Myofascial decompression", "Enhanced kinematic alignment", "Active range-of-motion gains"]
  },
  {
    id: "s4",
    title: "Olympic CrossFit & Conditioning",
    description: "High-intensity athletic conditioning incorporating weightlifting, gymnastics, and metabolic power output.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    category: "specialty",
    benefits: ["Explosive power production", "Grip and core synchronization", "Metabolic conditioning", "High-community team environment"]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "f1",
    name: "Free Weights Area",
    description: "Premium hand-crafted custom dumbbells up to 150 lbs, Olympic lifting platforms, and professional Eleiko bars.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    amenities: ["Eleiko Powerlifting Bars", "Custom Dumbbells (5-150 lbs)", "Premium Rubberized Flooring", "Surround Mirrors & Elite Lighting"]
  },
  {
    id: "f2",
    name: "Strength Zone",
    description: "Top-tier selectorized and plate-loaded machines from Keiser, Technogym, and Arsenal Strength.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    amenities: ["Technogym Biocircuit", "Pneumatic Keiser Technology", "Arsenal Strength Hack Squats", "Isolated Muscle Equipment"]
  },
  {
    id: "f3",
    name: "Functional Training Studio",
    description: "Spacious layout equipped with turf lanes, kettlebells, medicine balls, sleds, and high-performance TRX frames.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    amenities: ["30-Meter Sled Turf", "TRX Suspension Framework", "Premium Kettlebells", "Plio Boxes & Battle Ropes"]
  },
  {
    id: "f4",
    name: "CrossFit Arena",
    description: "Dedicated industrial-strength rig for community workouts, weightlifting platforms, and heavy-duty rowing machines.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    amenities: ["Rogue Fitness Custom Rigs", "Concept2 Rowers & SkiErgs", "Bumper Plates & Chalk Stations", "GHD Developers"]
  },
  {
    id: "f5",
    name: "Cardio Zone",
    description: "Integrated luxury cardiovascular suite with high-definition screens, wireless chargers, and full internet connectivity.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    amenities: ["Woodway Curved Treadmills", "StairMaster Gauntlets", "Wattbikes with Biomechanics", "Interactive Display Panels"]
  },
  {
    id: "f6",
    name: "Recovery Area & Spa",
    description: "Post-workout oasis featuring professional-grade compression gear, hyperbaric chambers, and premium massage rollers.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    amenities: ["Normatec Compression Sleeves", "Theragun Percussive Station", "Zero Gravity Massage Chairs", "Hyperbaric Oxygen Chambers"]
  },
  {
    id: "f7",
    name: "Locker Rooms & Lounges",
    description: "Spacious locker suites fully equipped with rainfall showers, digital RFID locks, and premium vanity essentials.",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
    amenities: ["Rainfall Walk-In Showers", "Oribe Hair & Skincare Essentials", "Personal RFID Smart Lockers", "Bespoke Dressing Tables"]
  },
  {
    id: "f8",
    name: "Steam & Finnish Sauna",
    description: "Purify body and mind in our handcrafted eucalyptus-infused steam chamber and authentic dry Finnish sauna.",
    image: "https://images.unsplash.com/photo-154057467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    amenities: ["Eucalyptus Steam Inhalation", "Traditional Dry Finnish Sauna", "Cold Plunge Tub (42°F)", "Heated Relaxation Lounges"]
  },
  {
    id: "f9",
    name: "Nutrition & Fuel Bar",
    description: "Bespoke post-workout menu featuring premium protein isolates, superfood bowls, cold-pressed juices, and fresh wellness shots.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    amenities: ["Organic Meal-Prep Station", "Custom Protein Shakes", "Cold-Pressed Detox Juices", "Premium Specialty Coffee Bar"]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "Director of Athletic Performance",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    specialties: ["Olympic Weightlifting", "Hypertrophy Science", "Elite Biomechanics"],
    bio: "With over 12 years of coaching professional rugby and football athletes, Marcus specializes in high-threshold strength recruitment and kinetic profiling.",
    experience: "12+ Years Coaching Professional Athletes",
    certification: "M.S. Exercise Physiology, CSCS*D"
  },
  {
    id: "t2",
    name: "Aria Thorne",
    role: "Head of Movement & Mobility",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    specialties: ["Holistic Vinyasa", "Myofascial Release", "Postural Restoration"],
    bio: "Aria integrates physical posture with nervous system breathing to maximize range of motion, restore posture, and speed athletic recovery.",
    experience: "9+ Years of Studio & Clinical Practice",
    certification: "RYT-500, Functional Range Conditioning (FRC)"
  },
  {
    id: "t3",
    name: "Darius Sterling",
    role: "Lead Metabolic Coach",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    specialties: ["VO2 Max Enhancement", "CrossFit L3", "High-Intensity Drills"],
    bio: "Former elite decathlete, Darius applies rigorous metabolic tracking to help general fitness clients achieve competitive physical engines.",
    experience: "8+ Years of High-Intensity Mentoring",
    certification: "B.S. Sports Science, CF-L3, NASM-PES"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "tr1",
    name: "Alexander R.",
    beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80", // Using a premium runner for after/before aesthetics
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80",
    duration: "16 Weeks",
    achievement: "Body Fat: 22% → 9.5% | Lean Mass +14 lbs"
  },
  {
    id: "tr2",
    name: "Sarah M.",
    beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
    afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80",
    duration: "12 Weeks",
    achievement: "Squat Depth Max +85 lbs | Structural Back Pain Cured"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "p1",
    name: "Club Access",
    price: 99,
    billing: "monthly",
    features: [
      "Access to premium cardio and selectorized strength zone",
      "Full locker room, towels, and rainfall showers",
      "Complimentary high-speed Wi-Fi & Lounge Access",
      "2 guest passes per month",
      "Basic physical wellness consultation"
    ],
    popular: false,
    color: "from-slate-800 to-slate-900 border-slate-700 text-white"
  },
  {
    id: "p2",
    name: "Elite Performance",
    price: 189,
    billing: "monthly",
    features: [
      "All Club Access features included",
      "Unlimited access to specialized CrossFit & Group Classes",
      "2 personal biometric diagnostic scans (InBody 570) monthly",
      "1 weekly session in our Hydrotherapy Recovery suite",
      "10% discount on Fuel Bar menu items",
      "Access to steam room & Finnish sauna"
    ],
    popular: true,
    color: "from-slate-900/90 via-slate-800/80 to-slate-900/90 border-cyan-500/60 shadow-xl text-white shadow-cyan-950/20"
  },
  {
    id: "p3",
    name: "Ultimate Athlete",
    price: 349,
    billing: "monthly",
    features: [
      "All Elite Performance features included",
      "2 private 1-on-1 personal coaching sessions per week",
      "Custom nutrition mapping with our Director of Performance",
      "Daily access to Recovery Suite (Normatec & Spa treatment)",
      "Complimentary custom pre-workout or smoothie daily at Fuel Bar",
      "Dedicated luxury workout locker and laundry service"
    ],
    popular: false,
    color: "from-slate-950 to-slate-900 border-amber-500/50 text-white"
  }
];

export const CLASS_SCHEDULE: ClassScheduleItem[] = [
  // Monday
  { id: "c1", className: "Olympic Lifters", trainer: "Marcus Vance", time: "07:00 AM", duration: "60 min", room: "CrossFit Arena", intensity: "High", day: "Monday" },
  { id: "c2", className: "Vinyasa flow Yoga", trainer: "Aria Thorne", time: "09:00 AM", duration: "75 min", room: "Mindfulness Room", intensity: "Low", day: "Monday" },
  { id: "c3", className: "Athletic Metabolic Conditioning", trainer: "Darius Sterling", time: "05:30 PM", duration: "45 min", room: "Functional Turf", intensity: "High", day: "Monday" },

  // Tuesday
  { id: "c4", className: "Kettlebell Mechanics", trainer: "Marcus Vance", time: "08:00 AM", duration: "60 min", room: "Functional Turf", intensity: "Medium", day: "Tuesday" },
  { id: "c5", className: "Cardio VO2 Intervals", trainer: "Darius Sterling", time: "10:30 AM", duration: "45 min", room: "Cardio Suite", intensity: "High", day: "Tuesday" },
  { id: "c6", className: "Decompression & Mobility", trainer: "Aria Thorne", time: "06:00 PM", duration: "60 min", room: "Mindfulness Room", intensity: "Low", day: "Tuesday" },

  // Wednesday
  { id: "c7", className: "Olympic Lifters", trainer: "Marcus Vance", time: "07:00 AM", duration: "60 min", room: "CrossFit Arena", intensity: "High", day: "Wednesday" },
  { id: "c8", className: "Spinal Flow Alignment", trainer: "Aria Thorne", time: "10:00 AM", duration: "60 min", room: "Mindfulness Room", intensity: "Low", day: "Wednesday" },
  { id: "c9", className: "High-Intensity Turf Sprints", trainer: "Darius Sterling", time: "05:30 PM", duration: "45 min", room: "Functional Turf", intensity: "High", day: "Wednesday" },

  // Thursday
  { id: "c10", className: "Strength & Power Splits", trainer: "Marcus Vance", time: "08:00 AM", duration: "60 min", room: "Strength Zone", intensity: "High", day: "Thursday" },
  { id: "c11", className: "Slow Burn Power Yoga", trainer: "Aria Thorne", time: "12:00 PM", duration: "60 min", room: "Mindfulness Room", intensity: "Medium", day: "Thursday" },
  { id: "c12", className: "Metabolic Threshold Run", trainer: "Darius Sterling", time: "06:30 PM", duration: "50 min", room: "Cardio Suite", intensity: "High", day: "Thursday" },

  // Friday
  { id: "c13", className: "CrossFit Team Challenge", trainer: "Darius Sterling", time: "07:30 AM", duration: "75 min", room: "CrossFit Arena", intensity: "High", day: "Friday" },
  { id: "c14", className: "Deep Stretch & Foam Roll", trainer: "Aria Thorne", time: "04:30 PM", duration: "60 min", room: "Mindfulness Room", intensity: "Low", day: "Friday" },
  { id: "c15", className: "Hypertrophy Power Block", trainer: "Marcus Vance", time: "06:00 PM", duration: "60 min", room: "Strength Zone", intensity: "Medium", day: "Friday" },

  // Saturday
  { id: "c16", className: "Weekend Warrior Blitz", trainer: "Darius Sterling", time: "09:00 AM", duration: "90 min", room: "CrossFit Arena", intensity: "High", day: "Saturday" },
  { id: "c17", className: "Power Flow Vinyasa", trainer: "Aria Thorne", time: "11:00 AM", duration: "75 min", room: "Mindfulness Room", intensity: "Medium", day: "Saturday" },

  // Sunday
  { id: "c18", className: "Full-Body Kinetic Tuneup", trainer: "Aria Thorne", time: "10:00 AM", duration: "90 min", room: "Mindfulness Room", intensity: "Low", day: "Sunday" }
];

export const FAQS: FAQ[] = [
  {
    id: "q1",
    question: "Can I upgrade or downgrade my membership tier later?",
    answer: "Absolutely. Membership tiers can be adjusted at any time. Downgrades or upgrades can be performed directly through your digital member dashboard or with our guest service reception. Upgrades take effect immediately.",
    category: "Membership"
  },
  {
    id: "q2",
    question: "Are your personal trainers fully certified?",
    answer: "Yes, every member of our personal coaching staff holds an accredited degree in Exercise Physiology or Sports Science, along with top-tier national certifications (such as CSCS, NASM-PES, or FRC). They receive continuous training in advanced sports science, biometric metrics, and injury mitigation.",
    category: "Coaching"
  },
  {
    id: "q3",
    question: "Is there private parking, and does it cost extra?",
    answer: "PowerCore provides secure, private underground parking with license plate recognition for all active members. High-speed EV charging docks are available and complimentary for Elite and Ultimate tiers.",
    category: "Facilities"
  },
  {
    id: "q4",
    question: "How do I book a session in the Recovery Suite & Spa?",
    answer: "Recovery amenities such as Normatec compression gear, zero gravity massage, hyperbaric chambers, and cold plunges can be booked up to 7 days in advance via our custom mobile app. Walk-ins are accommodated on a space-available basis.",
    category: "Recovery"
  },
  {
    id: "q5",
    question: "Do you offer physical day passes or trial options?",
    answer: "We offer local residents a complimentary one-day trial pass (Elite Performance Tier experience) to explore our facility. International travelers can purchase bespoke day passes or multi-day executive access cards directly from reception.",
    category: "Membership"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Julian Brooks",
    role: "Venture Partner",
    content: "PowerCore completely redefines what a high-end health club can be. The equipment is flawless, the recovery suite is better than a medical spa, and the trainers understand biomechanics at a profound level. Worth every dollar.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    achievement: "Member for 3 Years | Ultimate Athlete"
  },
  {
    id: "t2",
    name: "Dr. Elena Rostova",
    role: "Orthopedic Surgeon",
    content: "As a physician, I am extremely particular about mechanical alignment. Aria and the team at PowerCore structured a kinetic restoration plan that healed my years of chronic back compression. High-end, precise, and results-backed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    achievement: "Member for 18 Months | Elite Performance"
  },
  {
    id: "t3",
    name: "Christian Vance",
    role: "Former Collegiate Athlete",
    content: "The CrossFit and athletic turf zones are spectacular. Eleiko bars, Rogue rigs, and Woodway curved runner platforms. It has the professional intensity of an Olympic training center combined with top-tier luxury hospitality.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    achievement: "Member for 2 Years | Ultimate Athlete"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Biomechanics of Hypertrophy: Maximizing Mechanical Tension",
    excerpt: "Explore the critical science behind muscle growth: why controlled eccentric loading and mechanical tension beat simple high-repetition schemes.",
    content: "Maximizing mechanical tension is the primary driver of muscular hypertrophy. In this research-backed overview, we discuss the length-tension relationship, mechanical stimulus of individual sarcomeres, and why slow, controlled eccentric reps are superior to generic tempo styles for maximum tissue recruitment...",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    date: "July 15, 2026",
    category: "Science & Biomechanics",
    readTime: "6 Min Read"
  },
  {
    id: "b2",
    title: "VO2 Max: The Ultimate Metric for Lifespan and Metabolic Agility",
    excerpt: "Understand how VO2 max is calculated, why it acts as a strong biomarker of biological longevity, and the precise interval methods to expand it.",
    content: "Cardiovascular health is deeply correlated with VO2 Max—the maximum volume of oxygen your blood can process during high exertion. We outline how Wattbike interval analytics, Zone 2 base building, and specific 4x4 aerobic splits can drastically improve cardiac stroke volume and metabolic longevity...",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    date: "June 28, 2026",
    category: "Metabolic Health",
    readTime: "8 Min Read"
  },
  {
    id: "b3",
    title: "Post-Workout Autonomic Recovery: Sauna, Cold Plunges, and Biometrics",
    excerpt: "How alternating high-heat dry saunas with premium cold immersion accelerates muscle repair and restores the parasympathetic system.",
    content: "Recovery is where strength is born. By utilizing Finnish sauna thermo-therapy in sequence with a custom 42°F cold plunge, you initiate a rapid vasoconstriction-vasodilation response. This action flushes metabolic residue, reduces systemic inflammation, and balances your heart rate variability (HRV)...",
    image: "https://images.unsplash.com/photo-154057467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    date: "May 19, 2026",
    category: "Active Recovery",
    readTime: "5 Min Read"
  }
];
