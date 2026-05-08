import { motion } from "motion/react";
import { MapPin, Phone, Clock, Star, ChefHat, Utensils, Navigation, CheckCircle2 } from "lucide-react";

export default function App() {
  const images = {
    hero: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1920&auto=format&fit=crop",
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipO3FbbFgSYhiVRQxRONS6a8Zs89f2_FtHfrO79B=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-Mro9bdPW9i2SDj5AmlkhBhf7c7YAlg8EhlMY1HgGcZ4-wSDGjSB5R_vNEHGk0AIyna88ohk-J4d0dGieOI7JhIwEc-7za1wHFibH9GyCwNU8j-mDYfoVNf7nvtwvru7yv1Y=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEwchMxHvfOcHZ9bbohvme8DPFOWBz1329N9NBgk8t5VDVAGjmj0sNkLCp4Jt-uvyjzrE6b9-8Kd6TNBMSFCUs2XZhQ26HmgJfjCqPS0_bJhCtQE_yAb4ghaspSm6zzpd83JdGp05-aL1aY=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH-veGmQN3nI_Aal-HyF3CtAQ_JVukPUkLiURVCGtT7hcYAO1NC5kSE2KtbmFpGcZIkMu538K8-DSBEbPn9lkq-krKxZp4lq59OJazdI0O3uIoYnLYQB1ri4WVhC2fFDWga-dO5=s1360-w1360-h1020-rw"
    ]
  };

  const menuHighlights = [
    { title: "Lomo Saltado", img: images.gallery[0] },
    { title: "Bistec a Lo Pobre", img: images.gallery[1] },
    { title: "Arroz con Pollo", img: images.gallery[2] },
    { title: "Causa Rellena", img: images.gallery[3] },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-rose-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tight text-rose-700">
                Rubi's<span className="text-stone-800"> Peruvian Taste</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#menu" className="text-stone-600 hover:text-rose-700 font-medium transition-colors">Menu</a>
              <a href="#reviews" className="text-stone-600 hover:text-rose-700 font-medium transition-colors">Reviews</a>
              <a href="#location" className="text-stone-600 hover:text-rose-700 font-medium transition-colors">Location</a>
              <a 
                href="tel:801-899-7507" 
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                (801) 899-7507
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero} 
            alt="Cinematic Machu Picchu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-rose-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-white" />
              <span>4.5 Star Rating (1,000+ Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 mt-4">
              Authentic Peruvian Flavors in Salt Lake City.
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-xl">
              Experience the vibrant taste of Peru. From classic Lomo Saltado to fresh Ceviche, we bring tradition to every plate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#location"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-stone-900 bg-white hover:bg-stone-100 transition-colors shadow-lg"
              >
                <MapPin className="w-5 h-5 mr-2 text-rose-600" />
                Get Directions
              </a>
              <a 
                href="https://www.grubhub.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-stone-900 transition-colors"
              >
                <Utensils className="w-5 h-5 mr-2" />
                Order Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <div className="p-3 bg-rose-100 rounded-full text-rose-600 mb-4">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">Dining Options</h3>
              <p className="text-stone-600 mt-2">Dine-in · Takeout · Delivery</p>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <div className="p-3 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">Hours</h3>
              <p className="text-stone-600 mt-2">Open Daily<br/>Closes at 9:00 PM</p>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <div className="p-3 bg-rose-100 rounded-full text-rose-600 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">Location</h3>
              <p className="text-stone-600 mt-2 text-center max-w-[200px]">970 E 3300 S<br/>Salt Lake City, UT 84106</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Highlights Gallery */}
      <section id="menu" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 tracking-tight sm:text-4xl mb-4">
              Menu Highlights
            </h2>
            <p className="text-lg text-stone-600">
              A glimpse into our kitchen. We serve generous portions of traditional favorites, crafted with authentic ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] shadow-md cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 mb-8 text-stone-600">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-stone-200">Papa a la Huancaina</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-stone-200">Aji de Gallina</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-stone-200">Paella</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-stone-200">Ceviche</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-stone-200">Jalea</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
             <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                 <Star key={i} className={`w-6 h-6 ${i < 4 || i === 4 ? 'fill-rose-500 text-rose-500' : 'fill-stone-300 text-stone-300'}`} />
              ))}
            </div>
            <h2 className="text-3xl font-bold text-stone-900 tracking-tight sm:text-4xl mb-4">
              Loved by Salt Lake City
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl">
              Don't just take our word for it. Here is what our 1,000+ happy customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100 shadow-sm relative"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-bold text-lg">
                  EB
                </div>
                <div className="ml-4">
                  <h4 className="text-stone-900 font-bold">Eliza Beal</h4>
                  <div className="flex text-rose-500">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed">
                "The service was great and the food was delicious! I went with a group of three and we split three dishes between us. The portion sizes were large, we had to take home several to go boxes. Our server made good recommendations of food to try since it was our first time having Peruvian food, and everything we got was excellent!"
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100 shadow-sm relative"
            >
               <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="text-stone-900 font-bold">Customer verified review</h4>
                  <div className="flex text-rose-500">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg font-medium italic">
                "Excelente comida la atención A1 por el señor Emilio."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location / CTA */}
      <section id="location" className="py-24 bg-rose-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 text-rose-100">
           <MapPin className="w-96 h-96 opacity-50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rose-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Visit Us Today</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-1 mr-3" />
                  <span className="text-stone-600 text-lg">970 E 3300 S<br/>Salt Lake City, UT 84106</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-rose-600 shrink-0 mr-3" />
                  <span className="text-stone-600 text-lg">(801) 899-7507</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-rose-600 shrink-0 mr-3" />
                  <span className="text-stone-600 text-lg">Open Daily until 9:00 PM</span>
                </li>
              </ul>

              <a 
                href="https://maps.google.com/?q=970+E+3300+S,+Salt+Lake+City,+UT+84106"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-md w-full sm:w-auto"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>

            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden bg-stone-200 aspect-video md:aspect-square relative border border-stone-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2678007629237!2d-111.86532452391244!3d40.69018447139634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528a2da4d6a8dd%3A0xe54c41460c5a2c27!2sRubi&#39;s%20Peruvian%20Taste!5e0!3m2!1sen!2sus!4v1709664539655!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                className="absolute inset-0 border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location Map"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold tracking-tight text-white mb-6">
            Rubi's<span className="text-stone-400"> Peruvian Taste</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-stone-400 mb-8">
            <span>Dine-in</span>
            <span>·</span>
            <span>Takeout</span>
            <span>·</span>
             <span>Delivery</span>
          </div>
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Rubi's Peruvian Taste. Demo preview created for presentation purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
