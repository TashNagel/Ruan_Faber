import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Waves, Award, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import midmarImage from "@/assets/gallery-midmar-2024.jpeg";
import schoolsImage from "@/assets/ruan_faber_011.jpeg";

const charityActivities = [
  {
    title: "Midmar Mile",
    icon: Waves,
    description: "Successfully completed the iconic Midmar Mile open water swimming event, the world's largest open water swimming event held annually in KwaZulu-Natal.",
    date: "Annual Event",
    location: "Midmar Dam, KZN",
    image: midmarImage,
  },
  {
    title: "School Swimming Programs",
    icon: Users,
    description: "Visiting local schools to teach children essential swimming skills and water safety. Helping young learners gain confidence in the water while promoting the importance of learning to swim.",
    date: "Ongoing",
    location: "Various Schools",
    image: schoolsImage,
  },
];

const Charity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Giving Back
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Charity Work
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Using swimming to make a difference in the community. From completing charity swims to teaching kids essential water safety skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {charityActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row">
                  {activity.image && (
                    <div className="lg:w-1/3 flex-shrink-0">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-48 lg:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{activity.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="inline-flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {activity.date}
                      </div>
                      <div className="inline-flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {activity.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Making Waves
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              The Impact
            </h2>
            <p className="text-muted-foreground">
              Every lesson taught and every mile swum contributes to a greater cause - making swimming accessible and teaching life-saving skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1.6km</h3>
              <p className="text-muted-foreground text-sm">Midmar Mile Distance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground text-sm">Kids Taught to Swim</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">∞</h3>
              <p className="text-muted-foreground text-sm">Lives Impacted</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Support the Cause?
            </h3>
            <p className="text-muted-foreground mb-6">
              Your contribution helps continue these community initiatives and supports the journey to international competitions.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Charity;
