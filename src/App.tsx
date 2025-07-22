import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Camera, 
  CheckCircle,
  Calendar,
  DollarSign,
  Stethoscope,
  Home,
  Scissors,
  Play
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
}

interface Staff {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  image: string;
}

interface Testimonial {
  name: string;
  petName: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

function App() {
  const [selectedService, setSelectedService] = useState<string>('boarding');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const services: Service[] = [
    {
      id: 'boarding',
      name: 'Luxury Boarding',
      description: 'Premium accommodations with spacious suites, climate control, and 24/7 supervision.',
      price: 'From $65/night',
      duration: 'Overnight stays',
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 'daycare',
      name: 'Daycare & Socialization',
      description: 'Interactive play sessions, socialization with other pets, and supervised activities.',
      price: 'From $45/day',
      duration: '6-10 hours',
      icon: <Play className="w-6 h-6" />
    },
    {
      id: 'grooming',
      name: 'Professional Grooming',
      description: 'Full-service grooming including bath, cut, nail trimming, and ear cleaning.',
      price: 'From $80/session',
      duration: '2-3 hours',
      icon: <Scissors className="w-6 h-6" />
    },
    {
      id: 'medical',
      name: 'Medical Care',
      description: 'On-site veterinary care, medication administration, and health monitoring.',
      price: 'From $25/visit',
      duration: 'As needed',
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  const staff: Staff[] = [
    {
      name: 'Dr. Sarah Martinez',
      role: 'Head Veterinarian',
      credentials: 'DVM, ABVP Certified',
      experience: '12 years experience',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Mike Johnson',
      role: 'Pet Care Manager',
      credentials: 'Certified Pet Care Professional',
      experience: '8 years experience',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Lisa Chen',
      role: 'Grooming Specialist',
      credentials: 'Master Pet Stylist Certified',
      experience: '10 years experience',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Jennifer Williams',
      petName: 'Whiskers (Maine Coon)',
      rating: 5,
      comment: 'Paws Paradise exceeded all expectations! Whiskers came home happy and relaxed. The daily photo updates gave me such peace of mind.',
      image: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
      date: '2 weeks ago'
    },
    {
      name: 'Robert Davis',
      petName: 'Luna (Persian Cat)',
      rating: 5,
      comment: 'The luxury suites are amazing! Luna received excellent care and the staff truly loves what they do. Highly recommend!',
      image: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
      date: '1 month ago'
    },
    {
      name: 'Maria Rodriguez',
      petName: 'Mittens (Tabby Cat)',
      rating: 5,
      comment: 'Professional, caring, and trustworthy. Mittens has been coming here for 2 years and always gets excited when we arrive!',
      image: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif',
      date: '3 weeks ago'
    }
  ];

  const facilities = [
    {
      name: 'Luxury Suites',
      image: 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif'
    },
    {
      name: 'Play Areas',
      image: 'https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif'
    },
    {
      name: 'Grooming Salon',
      image: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'
    },
    {
      name: 'Medical Center',
      image: 'https://media.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif'
    }
  ];

  const BookingForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Book Your Stay</h3>
          <button 
            onClick={() => setShowBookingForm(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your pet's name" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>Dog</option>
              <option>Cat</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>Luxury Boarding</option>
              <option>Daycare</option>
              <option>Grooming Package</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" rows={3} placeholder="Any special care instructions..."></textarea>
          </div>
          
          <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            Request Booking
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-800">Paws Paradise</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Book Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-6 h-6 text-teal-600" />
                <span className="text-teal-600 font-semibold">Licensed & Insured</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                Your Pet's Home Away From <span className="text-teal-600">Home</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Premium pet boarding with 24/7 care, luxury accommodations, and peace of mind for pet parents. 
                Over 15 years of trusted service in the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Stay</span>
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors">
                  Take Virtual Tour
                </button>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-gray-600">Best Pet Hotel 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-gray-600">5000+ Happy Pets</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
                alt="Cute cat in luxury suite"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Daily Photo Updates</p>
                    <p className="text-sm text-gray-600">Stay connected with your pet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Pet Care Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury boarding to professional grooming, we provide everything your pet needs for a comfortable and enjoyable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-teal-600">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Credibility Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">15 Years of Trusted Pet Care</h2>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2009, Paws Paradise has been the premier destination for pet boarding and care. 
                Our state-of-the-art facility combines luxury amenities with professional veterinary oversight 
                to ensure your pet receives the highest standard of care.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">5000+</div>
                  <p className="text-gray-600">Happy Pets Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                  <p className="text-gray-600">On-site Supervision</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">15</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700">Licensed veterinary facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700">Fully insured and bonded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700">Climate-controlled environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700">Emergency veterinary partnerships</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" 
                alt="Happy cat with care professional"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Award Winning</p>
                    <p className="text-sm text-gray-600">Best Pet Hotel 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Our certified professionals are passionate about providing exceptional care for your beloved pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-1">{member.credentials}</p>
                <p className="text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tour Our Premium Facilities</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art amenities designed for your pet's comfort and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">{facility.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied customers who trust us with their beloved companions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.petName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.petName}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              No hidden fees. Premium care at competitive rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Standard Boarding</h3>
              <div className="text-4xl font-bold text-teal-600 mb-6">$45<span className="text-lg text-gray-500">/night</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Comfortable kennel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>3 meals & 2 walks daily</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Basic grooming</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Daily photo updates</span>
                </li>
              </ul>
              <button className="w-full border-2 border-teal-600 text-teal-600 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                Select Package
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-teal-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Luxury Suite</h3>
              <div className="text-4xl font-bold text-teal-600 mb-6">$65<span className="text-lg text-gray-500">/night</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Spacious private suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Premium meals & treats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Extended playtime</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Spa grooming session</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>24/7 vet on-call</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Select Package
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">VIP Experience</h3>
              <div className="text-4xl font-bold text-teal-600 mb-6">$95<span className="text-lg text-gray-500">/night</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Luxury penthouse suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Gourmet meal service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Personal care attendant</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Full spa treatment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>Live video check-ins</span>
                </li>
              </ul>
              <button className="w-full border-2 border-teal-600 text-teal-600 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                Select Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Visit Us Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Schedule a tour of our facility or give us a call. We'd love to meet you and your furry family member!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">123 Pet Paradise Lane, Happy Valley, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">(555) 123-PAWS (7297)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">hello@pawsparadise.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 7AM-7PM<br />Sat-Sun: 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  />
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>I'm interested in...</option>
                  <option>Boarding Services</option>
                  <option>Daycare</option>
                  <option>Grooming</option>
                  <option>General Information</option>
                </select>
                <textarea 
                  placeholder="Tell us about your pet and your needs..." 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6" />
                <h3 className="text-xl font-bold">Paws Paradise</h3>
              </div>
              <p className="text-gray-400">
                Premium pet boarding and care services since 2009. Your pet's happiness is our priority.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Luxury Boarding</li>
                <li>Pet Daycare</li>
                <li>Professional Grooming</li>
                <li>Veterinary Care</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Reviews</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency</h4>
              <p className="text-gray-400 mb-2">24/7 Emergency Line:</p>
              <p className="text-lg font-semibold">(555) 911-PETS</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Paws Paradise. All rights reserved. Licensed Pet Care Facility #12345</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingForm && <BookingForm />}
    </div>
  );
}

export default App;