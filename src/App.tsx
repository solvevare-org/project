"use client";

import React, { useEffect, useState } from "react";
// URGENT VET White Background.png
import URGENTVETWhiteBackground from "../public/URGENT_VET_White_Background.png";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Heart,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  MessageCircle,
  Search,
  TrendingUp,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

// Utility function for className merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

interface Testimonial {
  id: string;
  name: string;
  petName: string;
  rating: number;
  comment: string;
  image: string;
}

// Navigation Component
const VetNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Case Studies", href: "#case-studies" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <img src={URGENTVETWhiteBackground} alt="URGENT VET White Background" className="ml-4 w-[250px] h-[70px]" />
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
             <Button
               className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-lg ml-4 flex items-center justify-center"
               onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
             >
               Get Free Audit
             </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            {/* Mobile Menu Overlay */}
            {isOpen && (
              <AnimatePresence mode="wait">
              <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
                className="fixed inset-0 z-50 bg-white shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img src={URGENTVETWhiteBackground} alt="URGENT VET White Background" className="w-[250px] h-[70px]" />
                    
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                {/* Menu Items */}
                <div className="flex flex-col space-y-4 p-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="text-xl font-semibold text-slate-800 hover:text-blue-600 transition-colors block py-3 border-b border-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                   <Button
                     className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white mt-6 py-4 text-lg font-semibold flex items-center justify-center"
                     onClick={() => {
                       setIsOpen(false);
                       document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
                     }}
                   >
                     <Award className="w-5 h-5 mr-2" />
                     Get Free Audit
                   </Button>
                </div>
              </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
    
  );
};

// Hero Section Component
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Happy pets"
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
             <motion.h1
               className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               Pet owners don't scroll{" "}
               <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                 during an emergency
               </span>
             </motion.h1>

             <motion.p
               className="text-xl text-slate-600 mb-8 max-w-lg"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               If you're not in the top 3 on Google Maps, you don't get the call.
               We help veterinary practices dominate local search during emergencies.
             </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
               <Button
                 size="lg"
                 className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 text-lg font-semibold flex items-center"
                 onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
               >
                 <Award className="w-5 h-5 mr-3" />
                 <div className="flex flex-col items-start">
                   <span>Get Free Audit</span>
                 </div>
               </Button>
               <Button
                 size="lg"
                 variant="outline"
                 className="bg-white border-2 border-red-500 text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl px-8 py-3 text-lg font-semibold flex items-center justify-center"
                 onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
               >
                   <span>View Case</span>
                   <span>Studies</span>
                 
               </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional veterinarian examining a happy golden retriever dog in a modern veterinary clinic"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">24/7 Care</p>
                    <p className="text-sm text-slate-600">Always here for you</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Trust Badges Section
const TrustBadges = () => {
  const badges = [
    {
      icon: <Award className="w-8 h-8 text-[#888888]" />,
      title: "  Google Certified",
      
    },
    {
      icon: <Shield className="w-8 h-8 text-[#888888]" />,
      title: "Vet Industry",
      
    },
    {
      icon: <Star className="w-8 h-8 text-[#888888]" />,
      title: "  Proven Results",
      
    },
    {
      icon: <Clock className="w-8 h-8 text-[#888888]" />,
      title: "  24/7 Support",
      
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Trusted by Veterinary Practices Nationwide
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our proven marketing strategies have helped hundreds of veterinary practices
            dominate local search and grow their emergency patient base.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl transition-all duration-300"
            >
              <div className="flex justify-center mx-4 mb-0">{badge.icon} <span className=" mx-2 text-lg font-extrabold text-[#888888]">{badge.title}</span></div>
              
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services: Service[] = [
    {
      id: "1",
      title: "Google Maps Optimization",
      description: "Finding The Best Marketing Solution For Your Business.",
      icon: <MapPin className="w-8 h-8" />,
      price: "From $2,500/month",
    },
    {
      id: "2",
      title: "Local SEO for Vets",
      description: "Finding The Best Marketing Solution For Your Business.",
      icon: <Search className="w-8 h-8" />,
      price: "From $3,200/month",
    },
    {
      id: "3",
      title: "Practice Growth",
      description: "Finding The Best Marketing Solution For Your Business.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $4,500/month",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-[45px] font-semibold text-gray-900">
            We Offer A Wide Range Of
          </h2>
          <h2 className="text-[45px] font-semibold text-gray-900">
            Marketing Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="p-0.5 rounded-[40px] group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 transition-all duration-100">
                <Card className={`p-6 text-center h-full bg-white border-0 shadow-md group-hover:shadow-2xl group-hover:shadow-red-500/20 transition-all duration-300 rounded-[40px]`}>
                <div className="flex items-center justify-center mx-auto w-14 h-14 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-4 text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-[22px] font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-black mb-4 text-sm w-60 mx-auto">
                  {service.description}
                </p>
                <div className="text-xl font-bold text-red-600 mb-4">
                  {service.price}
                </div>
                <a href="#" className="inline-flex items-center justify-center text-blue-600 hover:text-red-600 font-medium">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [currentExpert, setCurrentExpert] = useState(0);
  
  const staff: StaffMember[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Chief Marketing Strategist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Google Ads", "Local SEO"],
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Emergency Marketing Expert",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Crisis Marketing", "Emergency Response"],
    },
    {
      id: "3",
      name: "John Doe",
      role: "Vet Industry Specialist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Practice Growth", "Client Acquisition"],
    },
  ];

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % staff.length);
  };

  const prevExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + staff.length) % staff.length);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Meet Our Marketing Experts
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our experienced marketing professionals specialize in helping veterinary
            practices dominate local search and grow their emergency patient base
          </p>
        </motion.div>

        {/* Expert Carousel */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExpert}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-4xl mx-auto"
            >
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center p-8">
                {/* Expert Photo */}
                <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
                  <div className="relative">
                    <img
                      src={staff[currentExpert].image}
                      alt={staff[currentExpert].name}
                      className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-xl mx-auto"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
                  </div>
                </div>

                {/* Expert Info */}
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">
                    {staff[currentExpert].name}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    {staff[currentExpert].role}
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    {staff[currentExpert].specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 px-3 py-1"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                   <blockquote className="text-lg text-slate-600 italic leading-relaxed mb-6">
                     "Outstanding marketing expertise and proven results. {staff[currentExpert].name.split(' ')[1]} is dedicated to helping veterinary practices dominate local search and grow their emergency patient base."
                   </blockquote>

                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          </AnimatePresence>

           {/* Navigation Controls */}
           <div className="flex justify-center items-center space-x-4 mt-8">
             <Button
               variant="outline"
               size="icon"
               onClick={prevExpert}
               className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-white shadow-sm flex items-center justify-center"
               aria-label="Previous expert"
             >
               <ChevronRight className="w-5 h-5 rotate-180" />
             </Button>
             
             {/* Dots Indicator */}
             <div className="flex space-x-2">
               {staff.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentExpert(index)}
                   className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                     index === currentExpert 
                       ? 'bg-blue-500' 
                       : 'bg-slate-300 hover:bg-slate-400'
                   }`}
                   aria-label={`Go to expert ${index + 1}`}
                 />
               ))}
             </div>

             <Button
               variant="outline"
               size="icon"
               onClick={nextExpert}
               className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-white shadow-sm flex items-center justify-center"
               aria-label="Next expert"
             >
               <ChevronRight className="w-5 h-5" />
             </Button>
           </div>
        </div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl p-8 text-white text-center"
         >
           <h3 className="text-2xl font-bold mb-4">Why Choose Urgent Vet Marketing?</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="flex items-center justify-center space-x-3">
               <CheckCircle className="w-6 h-6" />
               <span>500+ Vet Practices Helped</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
               <CheckCircle className="w-6 h-6" />
               <span>Proven Emergency Marketing</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
               <CheckCircle className="w-6 h-6" />
               <span>24/7 Marketing Support</span>
             </div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      petName: "Owner, Westside Animal Hospital",
      rating: 5,
      comment: "Urgent Vet Marketing transformed our practice! We went from 3rd page on Google to #1 for emergency vet services. Our emergency cases increased by 300% in just 6 months.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      petName: "Owner, Emergency Pet Care Center",
      rating: 5,
      comment: "Their crisis marketing strategies are incredible. When we had a major emergency situation, they helped us dominate local search and we got 15 new emergency clients in one weekend.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      petName: "Owner, 24/7 Vet Emergency Clinic",
      rating: 5,
      comment: "The Google Maps optimization was a game-changer. We're now the first practice pet owners see when they search for emergency vet care. Our revenue increased by 250%.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "4",
      name: "Dr. David Wilson",
      petName: "Owner, Metro Animal Emergency",
      rating: 5,
      comment: "Outstanding marketing expertise and 24/7 support. They helped us dominate local search during a major pet emergency in our area. We got 40+ new clients in one week!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-8 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Vet Practice Clients Say
          </h2>
          <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the veterinary practice owners who trust us with their marketing
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-6xl mx-4 md:mx-28 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="group"
            >
            <Card className="bg-gradient-to-r from-red-500 to-blue-500 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-8">
                {/* Quote and Text Content */}
                <div className="flex-1 text-white ml-0 md:ml-24">
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="text-3xl md:text-6xl text-blue-200 font-bold leading-none">"</div>
                    <div className="flex-1">
                      <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6 w-full md:w-96">
                        {testimonials[currentTestimonial].comment}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm md:text-lg font-semibold w-full md:w-96">{testimonials[currentTestimonial].name + " | " + testimonials[currentTestimonial].petName}</p>
                      
                      </div>
                    </div>
                  </div>
                </div>

                {/* Circular Portrait */}
                <div className="flex-shrink-0 gap-4">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-52 md:h-52 mr-0 md:mr-24 border-4 border-white rounded-full">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-6 md:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-sm flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-3 h-3 md:w-5 md:h-5 rotate-180" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-1 md:space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-sm flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-3 h-3 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Case Studies Section


const caseStudies = [
  {
    company: "TechTrendz Inc",
    description:
      "Optimizing downstream operations, enabling real-time 360-degree view of operations.",
    testimonial:
      "It was a game-changer for us. They took our vague ideas and transformed them into a sleek, user-friendly interface that our customers love. Their attention to detail and understanding of user experience truly sets them apart. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    company: "DDR Dynamics",
    description:
      "The end result is a platform that not only looks stunning but also performs exceptionally well.",
    testimonial:
      "They not only modernized our website but ensured every interaction was intuitive. From research and design strategy to execution, they were always responsive and professional.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    company: "Visionary Labs",
    description:
      "Revolutionizing the way companies manage data and customer interactions globally.",
    testimonial:
      "Their innovative approach to design and tech was exactly what we needed. They understood our vision and delivered beyond expectations. Truly a partner, not just a vendor.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
  },
];

const caseStudiesSection = [
  {
    title: "TechTrendz Inc",
    description:
      "Optimizing downstream operations, enabling real-time 360-degree view of operations.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    testimonial:
      "It was a game-changer for us. They took our vague ideas and transformed them into a sleek, user-friendly interface that our customers love. Their attention to detail and understanding of user experience truly sets them apart. Highly recommend!",
  },
  {
    title: "DDR Dynamics",
    description:
      "Building scalable cloud solutions tailored to enterprise growth and automation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    testimonial:
      "Not only did they modernize our system, but they also helped us align strategy with execution. Truly professional and innovative.",
  },
  {
    title: "Alpha Systems",
    description:
      "Leveraging AI to provide predictive insights that improve efficiency and reduce costs.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    testimonial:
      "Their AI-driven solutions helped us cut costs by 20% and improved decision-making across teams.",
  },
]
const CaseStudiesSection = () => {
  const [current, setCurrent] = useState(0);

  const prevIndex = (current - 1 + caseStudies.length) % caseStudies.length;
  const nextIndex = (current + 1) % caseStudies.length;

  return (
    <section id="case-studies" className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
          Case Studies
        </h2>

        {/* Carousel */}
        <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Mobile: Show only center card */}
          <div className="md:hidden w-full max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
              <Card className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-900 text-white h-64">
                <img
                   src={caseStudiesSection[current].image}
                   alt={caseStudiesSection[current].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 flex flex-col justify-end p-6 h-full text-left">
                  <h3 className="text-lg font-semibold mb-2">
                    {caseStudiesSection[current].title}
                  </h3>
                  <p className="text-xs mb-4">{caseStudiesSection[current].description}</p>
                  <Button className="w-fit bg-white text-gray-900 font-semibold px-4 py-2 rounded-full text-sm">
                    View
                  </Button>
                </div>
              </Card>

              {/* Testimonial Floating Box */}
              <motion.div
                key={`testimonial-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative -mt-6 mx-auto max-w-sm"
              >
                <Card className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-gray-600 italic text-xs leading-relaxed">
                    "{caseStudies[current].testimonial}"
                  </p>
                </Card>
              </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: Show carousel with side cards */}
          <div className="hidden md:flex items-center justify-center space-x-6 w-full">
            {/* Left Navigation Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrent((prev) => (prev === 0 ? caseStudiesSection.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-lg flex items-center justify-center z-10"
              aria-label="Previous case study"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </Button>

            {/* Left Card */}
            <div className="w-1/4 opacity-40 scale-90">
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={caseStudiesSection[prevIndex].image}
                  alt={caseStudiesSection[prevIndex].title}
                  className="w-full h-48 object-cover"
                />
              </Card>
            </div>

            {/* Center Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-1/2"
              >
              <Card className="relative overflow-hidden rounded-3xl shadow-xl bg-gray-900 text-white h-80">
                <img
                   src={caseStudiesSection[current].image}
                   alt={caseStudiesSection[current].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 flex flex-col justify-end p-32 pl-14 h-full text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    {caseStudiesSection[current].title}
                  </h3>
                  <p className="text-sm mb-4">{caseStudiesSection[current].description}</p>
                  <Button className="w-fit bg-white text-gray-900 font-semibold px-5 py-2 rounded-full">
                    View
                  </Button>
                </div>
              </Card>

              {/* Testimonial Floating Box */}
              <motion.div
                key={`testimonial-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative -mt-10 mx-auto max-w-lg"
              >
                <Card className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    "{caseStudies[current].testimonial}"
                  </p>
                </Card>
              </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right Card */}
            <div className="w-1/4 opacity-70 scale-90">
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={caseStudiesSection[nextIndex].image}
                  alt={caseStudiesSection[nextIndex].title}
                  className="w-full h-48 object-cover"
                />
              </Card>
            </div>

            {/* Right Navigation Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrent((prev) => (prev === caseStudiesSection.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-lg flex items-center justify-center z-10"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Controls for Mobile */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrent((prev) => (prev === 0 ? caseStudiesSection.length - 1 : prev - 1))}
            className="w-8 h-8 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-sm flex items-center justify-center"
            aria-label="Previous case study"
          >
            <ChevronRight className="w-3 h-3 rotate-180" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrent((prev) => (prev === caseStudiesSection.length - 1 ? 0 : prev + 1))}
            className="w-8 h-8 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-sm flex items-center justify-center"
            aria-label="Next case study"
          >
            <ChevronRight className="w-3 h-3" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6 md:mt-8">
          {caseStudiesSection.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
                i === current ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


// Lead Magnet Section
const LeadMagnetSection = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormValidation({
    name: '',
    email: '',
    phone: '',
    practice: ''
  });

  const onSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    alert('Thank you! Your free checklist will be sent to your email shortly.');
  };

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-br from-red-500 to-blue-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
           <h2 className="text-4xl font-bold text-white mb-4">
             Get Your Free Google Maps Audit
           </h2>
           <p className="text-xl text-red-100 max-w-3xl mx-auto">
             Discover why you're not ranking #1 for emergency vet services in your area. Get our comprehensive audit and dominate local search.
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
            <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Practice Name
                  </label>
                  <input
                    type="text"
                    name="practice"
                    value={values.practice}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your veterinary practice"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                 className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                 <Award className="w-5 h-5 mr-2" />
                 {isSubmitting ? 'Submitting...' : 'Get My Free Google Maps Audit'}
              </Button>
              
              <p className="text-sm text-slate-600 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
               {/* <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                 <PawPrint className="w-6 h-6 text-white" />
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-bold text-blue-400">URGENT VET</span>
                 <span className="text-xl font-bold text-red-400 -mt-1">MARKETING</span>
               </div> */}
               <img src={URGENTVETWhiteBackground} alt="URGENT VET White Background" className="w-[250px] h-[70px]" />
             </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted partner in veterinary practice marketing. We're committed to helping veterinary practices dominate local search and grow their emergency patient base.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <span className="text-sm font-bold">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a></li>
               <li><a href="#case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="tel:+1234567890" className="text-slate-300 hover:text-white transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h3 className="text-lg font-semibold mb-4">Our Services</h3>
             <ul className="space-y-2">
               <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Google Maps Optimization</a></li>
               <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Emergency Vet Marketing</a></li>
               <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Local SEO for Vets</a></li>
               <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Crisis Marketing</a></li>
               <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Practice Growth</a></li>
             </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
               <div className="flex items-center space-x-3">
                 <Phone className="w-5 h-5 text-blue-400" />
                 <span className="text-slate-300">(555) 123-4567</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Mail className="w-5 h-5 text-blue-400" />
                 <span className="text-slate-300">info@urgentvetmarketing.com</span>
               </div>
               <div className="flex items-center space-x-3">
                 <MapPin className="w-5 h-5 text-blue-400" />
                 <span className="text-slate-300">Nationwide Service</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Clock className="w-5 h-5 text-blue-400" />
                 <span className="text-slate-300">24/7 Marketing Support</span>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
             <p className="text-slate-400 text-sm">
               © {currentYear} Urgent Vet Marketing. All rights reserved.
             </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


// Contact Section
const ContactSection = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormValidation({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  });

  const onSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]"
        >
          {/* Left Side - Dark Background */}
          <div className="bg-gradient-to-br from-red-600 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">URGENT VET</span>
                  <span className="text-xl font-bold text-white -mt-1">MARKETING</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                LETS GROW{" "}
                <span className="text-white">TOGETHER</span>
              </h2>
              
              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed max-w-md">
                Our team commits to delivering unparalleled veterinary marketing services. We will navigate you through all your digital marketing concerns and help you dominate local search.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                We've helped over 500+ veterinary practices dominate local search and grow their emergency patient base.
              </p>

              <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      className={`w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                      placeholder="Phone"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Mail"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent text-gray-700">
                      <option value="">Where did you hear about us</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Referral</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <select className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent text-gray-700">
                      <option value="">Select Service</option>
                      <option value="maps">Google Maps Optimization</option>
                      <option value="seo">Local SEO</option>
                      <option value="growth">Practice Growth</option>
                      <option value="audit">Free Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent resize-none"
                    placeholder="Message"
                    rows={3}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                  >
                    <span>Send</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Pop-up Lead Magnet Component
const PopupLeadMagnet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 3000); // Show after 5 seconds

    // Listen for custom event to trigger popup
    const handleTriggerPopup = () => {
      setIsVisible(true);
      setHasShown(true);
    };

    window.addEventListener('triggerPopup', handleTriggerPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('triggerPopup', handleTriggerPopup);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Popup form submitted:', formData);
    alert('Thank you! Your free guide will be sent to your email shortly.');
    setIsVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative"
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-2">
               Get Your Free Google Maps Audit!
             </h3>
             <p className="text-slate-600">
               "Why You're Not Ranking #1 for Emergency Vet Services" - A comprehensive audit every veterinary practice needs.
             </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
             <Button
               type="submit"
               className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white"
             >
               Get My Free Google Maps Audit
             </Button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Form Validation Hook
const useFormValidation = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values: any) => {
    const newErrors: any = {};

    if (!values.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!values.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (values.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(values.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent, onSubmit: (values: any) => Promise<void>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newErrors = validate(values);
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
        setValues(initialValues);
        setErrors({});
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};

// Sticky CTA Buttons Component
const StickyCTAButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3"
    >
      {/* Desktop CTA */}
       <Button
         size="lg"
         className="CTA mx-auto bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hidden md:flex items-center justify-center"
         onClick={() => {
           // Trigger the popup by setting the state
           const event = new CustomEvent('triggerPopup');
           window.dispatchEvent(event);
         }}
       >
         <Award className="w-5 h-5 mr-2" />
         Get Free Audit
       </Button>
      
      {/* Mobile CTA */}
      <Button
        size="lg"
        className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 md:hidden rounded-full w-16 h-16"
        onClick={() => {
          // Trigger the popup by setting the state
          const event = new CustomEvent('triggerPopup');
          window.dispatchEvent(event);
        }}
      >
        <Award className="w-6 h-6" />
      </Button>
    </motion.div>
  );
};

// Floating Chat Widget Component
const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Chat Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
         <Button
           onClick={() => setIsOpen(!isOpen)}
           className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300"
         >
           <MessageCircle className="w-6 h-6" />
         </Button>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
          1
        </div>
      </motion.div>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="absolute bottom-20 left-0 w-80 bg-white rounded-lg shadow-2xl border border-slate-200"
        >
           <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white p-4 rounded-t-lg">
             <div className="flex items-center justify-between">
               <div className="flex items-center space-x-2">
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                   <MessageCircle className="w-4 h-4" />
                 </div>
                 <div>
                   <h3 className="font-semibold">Urgent Vet Marketing</h3>
                   <p className="text-sm text-blue-100">We're online now</p>
                 </div>
               </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-4 max-h-80 overflow-y-auto">
             <div className="space-y-4">
               <div className="bg-slate-100 rounded-lg p-3">
                 <p className="text-sm text-slate-700">
                   Hi! 👋 How can we help grow your veterinary practice today?
                 </p>
               </div>
               
               <div className="space-y-2">
                 <Button
                   variant="outline"
                   size="sm"
                   className="w-full justify-start text-left"
                   onClick={() => {
                     setIsOpen(false);
                     document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                   <Award className="w-4 h-4 mr-2" />
                   Get Free Google Maps Audit
                 </Button>
                 <Button
                   variant="outline"
                   size="sm"
                   className="w-full justify-start text-left"
                   onClick={() => window.open("mailto:info@urgentvetmarketing.com", "_self")}
                 >
                   <Mail className="w-4 h-4 mr-2" />
                   Ask About Our Services
                 </Button>
                 <Button
                   variant="outline"
                   size="sm"
                   className="w-full justify-start text-left"
                   onClick={() => {
                     setIsOpen(false);
                     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                   <Clock className="w-4 h-4 mr-2" />
                   Emergency Marketing Support
                 </Button>
               </div>
             </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <VetNavigation />
      <main id="main-content">
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <AboutSection />
        <LeadMagnetSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTAButtons />
      <FloatingChatWidget />
      <PopupLeadMagnet />
    </div>
  );
}

export default App;