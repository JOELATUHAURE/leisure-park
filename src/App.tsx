import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Star, MapPin, ChevronRight, Calendar } from 'lucide-react';
import leisureImage from './images/leisure.jpg';

// Components
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

const ReviewCard = ({ text, author }: { text: string; author: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400" fill="#facc15" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <p className="font-semibold">{author}</p>
  </div>
);

const RoomCard = ({ 
  title, 
  price, 
  image, 
  description 
}: { 
  title: string; 
  price: string; 
  image: string; 
  description: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-primary font-bold">{price}</span>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">
          Book Now <Calendar className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              Leisure Park
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#rooms">Rooms</NavLink>
              <NavLink href="#reviews">Reviews</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col gap-4">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#rooms">Rooms</NavLink>
                <NavLink href="#reviews">Reviews</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
     <section 
  className="pt-24 pb-12 md:pt-32 md:pb-24 bg-cover bg-center" 
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${leisureImage})`
  }}
>
  <div className="container mx-auto px-4 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Welcome to Leisure Park International Hotel
    </h1>
    <p className="text-xl md:text-2xl mb-8">
      Affordable Comfort & Convenience in Mbarara
    </p>
    <button className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors">
      Book Now
    </button>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hotel Lobby" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Your Home Away From Home</h3>
              <p className="text-gray-600 mb-6">
                At Leisure Park International Hotel, we pride ourselves on providing comfortable, 
                well-maintained accommodations with exceptional customer service. Our family-friendly 
                environment and accessible facilities make us the perfect choice for all travelers 
                visiting Mbarara.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  <span>Modern, comfortable rooms with essential amenities</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  <span>Wheelchair-accessible facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  <span>Friendly, professional staff available 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  <span>Prime location near Mbarara's attractions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard 
              title="Standard Room"
              price="From $50/night"
              image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Comfortable room with essential amenities, perfect for solo travelers or couples."
            />
            <RoomCard 
              title="Deluxe Room"
              price="From $75/night"
              image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Spacious room with upgraded amenities and city views."
            />
            <RoomCard 
              title="Family Suite"
              price="From $100/night"
              image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Perfect for families, featuring separate living area and multiple beds."
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Guest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              text="Clean rooms, hot water, and very friendly staff. Great value for money!"
              author="Sarah M."
            />
            <ReviewCard 
              text="Perfect location and excellent service. The rooms are well-maintained."
              author="John D."
            />
            <ReviewCard 
              text="Comfortable stay with all necessary amenities. Will definitely return!"
              author="Michael R."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                  ></textarea>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location & Contact Info</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mbarara, Uganda</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+256123456789" className="hover:text-primary">+256 123 456 789</a>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <a href="https://wa.me/256123456789" className="hover:text-primary">
                    WhatsApp Chat
                  </a>
                </p>
              </div>
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.880772389!2d30.6543!3d-0.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d93b5c7f7c6e6d%3A0x7f6b5c7f6b5c7f6b!2sMbarara%2C%20Uganda!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Leisure Park</h3>
              <p className="text-gray-400">
                Your comfortable and affordable stay in Mbarara.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#rooms" className="text-gray-400 hover:text-white">Rooms</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-white">Reviews</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Leisure Park International Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
