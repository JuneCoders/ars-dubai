export const COLORS = {
  primary: {
    blue: '#0066CC',
    darkBlue: '#004C99',
    lightBlue: '#3399FF'
  },
  secondary: {
    orange: '#FF6600',
    green: '#00CC66',
    gray: '#666666'
  },
  light: {
    background: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#333333',
    textSecondary: '#666666',
    border: '#E0E0E0'
  },
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#333333'
  }
};

// Unsplash images for logistics services
export const SERVICE_IMAGES = {
  supplyChain: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  warehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  transportation: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  customs: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  delivery: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  consulting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  coldChain: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  reverseLogistics: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
};

export const SERVICES = [
  {
    id: 1,
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain solutions with real-time visibility, predictive analytics, and optimization algorithms. We integrate all aspects of your supply chain for maximum efficiency.',
    icon: '🚚',
    image: SERVICE_IMAGES.supplyChain,
    category: 'supply-chain',
    features: ['Real-time Tracking', 'Inventory Optimization', 'Supplier Integration', 'Demand Forecasting'],
    benefits: [
      'Reduce operational costs by up to 30%',
      'Improve delivery accuracy to 99.7%',
      'Real-time visibility across all channels'
    ],
    stats: { deliveryTime: '24-48h', coverage: 'Global', satisfaction: '98%' }
  },
  {
    id: 2,
    title: 'Warehouse Solutions',
    description: 'Smart warehousing with automated storage, retrieval systems, and IoT-enabled inventory tracking. Our warehouses feature climate control and 24/7 security monitoring.',
    icon: '🏭',
    image: SERVICE_IMAGES.warehouse,
    category: 'warehousing',
    features: ['Automated Storage', 'Climate Control', '24/7 Security', 'Inventory Management'],
    benefits: [
      'Reduce storage costs by 25%',
      'Increase picking accuracy by 99.9%',
      'Automated inventory management'
    ],
    stats: { capacity: 'Unlimited', locations: '50+', automation: '90%' }
  },
  {
    id: 3,
    title: 'Transportation Services',
    description: 'Multimodal transportation network covering air, sea, and ground logistics. Our optimized routing ensures timely deliveries across continents.',
    icon: '✈️',
    image: SERVICE_IMAGES.transportation,
    category: 'transportation',
    features: ['Air Freight', 'Sea Freight', 'Ground Transport', 'Route Optimization'],
    benefits: [
      'Reduce transit times by 40%',
      'Optimize fuel consumption',
      'Real-time shipment tracking'
    ],
    stats: { modes: '3', coverage: '150+ countries', vehicles: '5000+' }
  },
  {
    id: 4,
    title: 'Customs Clearance',
    description: 'Expert customs documentation and clearance services ensuring compliance with international regulations. Fast-track processing for time-sensitive shipments.',
    icon: '📋',
    image: SERVICE_IMAGES.customs,
    category: 'compliance',
    features: ['Documentation', 'Compliance', 'Fast Tracking', 'Duty Management'],
    benefits: [
      'Reduce clearance time by 60%',
      'Ensure 100% compliance',
      'Avoid customs penalties'
    ],
    stats: { clearanceTime: '<24h', accuracy: '100%', countries: '100+' }
  },
  {
    id: 5,
    title: 'Last Mile Delivery',
    description: 'Advanced last-mile solutions for e-commerce and retail with real-time customer notifications, flexible delivery windows, and returns management.',
    icon: '📦',
    image: SERVICE_IMAGES.delivery,
    category: 'delivery',
    features: ['Same Day Delivery', 'Real-time Updates', 'Customer Notifications', 'Returns Management'],
    benefits: [
      'Increase customer satisfaction by 45%',
      'Reduce failed deliveries by 80%',
      'Flexible delivery options'
    ],
    stats: { deliveryTime: '<24h', successRate: '99.5%', cities: '500+' }
  },
  {
    id: 6,
    title: 'Logistics Consulting',
    description: 'Strategic consulting for logistics optimization, process improvement, and digital transformation. Our experts analyze your operations and implement best practices.',
    icon: '💡',
    image: SERVICE_IMAGES.consulting,
    category: 'technology',
    features: ['Process Audit', 'Cost Analysis', 'Strategy Planning', 'Implementation'],
    benefits: [
      'Identify cost-saving opportunities',
      'Implement industry best practices',
      'Digital transformation roadmap'
    ],
    stats: { clients: '500+', savings: '30% avg.', implementation: '90 days' }
  },
  {
    id: 7,
    title: 'Cold Chain Logistics',
    description: 'Temperature-controlled logistics for pharmaceuticals, food, and perishable goods with real-time monitoring and compliance management.',
    icon: '❄️',
    image: SERVICE_IMAGES.coldChain,
    category: 'specialized',
    features: ['Temperature Monitoring', 'Compliance', 'Special Handling', 'Quality Control'],
    benefits: [
      'Maintain product integrity',
      'Ensure regulatory compliance',
      'Reduce spoilage by 95%'
    ],
    stats: { tempRange: '-25°C to +25°C', monitoring: '24/7', compliance: '100%' }
  },
  {
    id: 8,
    title: 'Reverse Logistics',
    description: 'Efficient returns management, product recovery, and recycling services. We handle the entire reverse logistics process from collection to disposal.',
    icon: '🔄',
    image: SERVICE_IMAGES.reverseLogistics,
    category: 'sustainability',
    features: ['Returns Processing', 'Product Recovery', 'Waste Management', 'Recycling'],
    benefits: [
      'Reduce return processing time by 70%',
      'Recover 85% of product value',
      'Sustainable disposal methods'
    ],
    stats: { processingTime: '<48h', recovery: '85%', sustainability: '90%' }
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services', icon: '📊' },
  { id: 'supply-chain', label: 'Supply Chain', icon: '🔗' },
  { id: 'warehousing', label: 'Warehousing', icon: '🏭' },
  { id: 'transportation', label: 'Transportation', icon: '🚚' },
  { id: 'compliance', label: 'Compliance', icon: '📋' },
  { id: 'delivery', label: 'Last Mile', icon: '📦' },
  { id: 'technology', label: 'Technology', icon: '💻' },
  { id: 'specialized', label: 'Specialized', icon: '⭐' },
  { id: 'sustainability', label: 'Sustainability', icon: '🌱' }
];

export const SERVICE_PROCESS = [
  {
    step: 1,
    title: 'Needs Assessment',
    description: 'We analyze your current logistics operations and identify improvement areas.',
    icon: '📋'
  },
  {
    step: 2,
    title: 'Solution Design',
    description: 'Custom logistics solutions tailored to your specific business requirements.',
    icon: '🎨'
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Seamless integration of our solutions with your existing systems.',
    icon: '⚡'
  },
  {
    step: 4,
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring and optimization for peak performance.',
    icon: '📊'
  }
];