import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Rocket, BookOpen, Users, CheckCircle, Star } from 'lucide-react';

// Components
import TestimonialCard from '../components/home/TestimonialCard';
import PartnerLogo from '../components/home/PartnerLogo';
import FeatureCard from '../components/home/FeatureCard';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-hero-pattern bg-cover bg-center relative">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">
                Build Your <span className="gradient-text">Future</span> in the Digital City
              </h1>
              <p className="text-neutral-200 text-xl mb-8">
                Velora connects entrepreneurs with the resources, tools, and community needed to transform ideas into thriving businesses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/startup-builder" className="btn-primary">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/knowledge-center" className="btn-outline border-white text-white hover:bg-white/10">
                  Explore Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">How Velora Works</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Three simple steps to transform your idea into a thriving business
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Define Your Vision</h3>
              <p className="text-neutral-600">
                Use our Startup Builder to refine your idea, validate market fit, and create a solid foundation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Learn & Build</h3>
              <p className="text-neutral-600">
                Access our Knowledge Center and connect with vetted service providers to build your MVP.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Grow & Scale</h3>
              <p className="text-neutral-600">
                Connect with funding opportunities, join our community, and scale your business.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="mb-4">Everything You Need to Succeed</h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                All-in-one platform with tools and resources designed specifically for modern entrepreneurs
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/startup-builder" className="btn-primary">
                Explore All Tools
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket />}
              title="Startup Builder"
              description="Step-by-step guidance to develop and validate your business idea"
              href="/startup-builder"
            />
            <FeatureCard
              icon={<BookOpen />}
              title="Knowledge Center"
              description="Curated learning resources on funding, marketing, tech, and more"
              href="/knowledge-center"
            />
            <FeatureCard
              icon={<Users />}
              title="Expert Marketplace"
              description="Connect with vetted service providers to help build your startup"
              href="/marketplace"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Trusted by Entrepreneurs</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Join thousands of founders who've built successful businesses with Velora
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Velora's Startup Builder helped me validate my idea and find the right partners. Six months later, we secured our seed round."
              author="Sarah Johnson"
              role="Founder, TechFlow"
              rating={5}
            />
            <TestimonialCard
              quote="The Knowledge Center saved me countless hours of research. The step-by-step guides made complex topics easy to understand."
              author="Michael Chen"
              role="CEO, DataSync"
              rating={5}
            />
            <TestimonialCard
              quote="Finding the right service providers was a game-changer. Velora's marketplace connected us with top talent that fit our budget."
              author="Elena Rodriguez"
              role="Founder, GreenTech Solutions"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <p className="text-center text-neutral-500 mb-8">Trusted by leading companies and investors</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            <PartnerLogo name="TechStars" />
            <PartnerLogo name="Y Combinator" />
            <PartnerLogo name="Sequoia" />
            <PartnerLogo name="Andreessen Horowitz" />
            <PartnerLogo name="Google for Startups" />
            <PartnerLogo name="AWS Activate" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Build Your Future?</h2>
            <p className="text-primary-100 text-xl mb-8">
              Join thousands of entrepreneurs already building in Velora's digital city.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/startup-builder" className="btn-accent">
                Start Building Now
              </Link>
              <Link to="/knowledge-center" className="btn bg-white text-primary-900 hover:bg-neutral-100">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;