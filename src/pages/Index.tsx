import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabaseClient";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { email: email }
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="px-4 py-2 text-sm font-medium text-primary-dark bg-primary/10 rounded-full">
            Coming Soon
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-secondary md:text-6xl">
            Bridge the gap between
            <span className="text-primary"> presales and sales</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Streamline your technical sales process and close deals faster with our intelligent presales automation platform.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="w-full px-6 py-4 text-lg bg-white border rounded-xl sm:w-96 focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-4 text-lg font-medium text-white transition-all rounded-xl sm:w-auto bg-primary hover:bg-primary-light focus:ring-2 focus:ring-primary/50"
            >
              Join Waitlist
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </button>
          </form>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-secondary md:text-4xl">
              Revolutionizing Technical Sales
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Transform your presales process with powerful automation and insights
            </p>
          </motion.div>

          <div className="grid gap-8 mt-16 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 transition-all bg-white border rounded-2xl hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-primary">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-secondary">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to transform your sales process?
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              Join the waitlist today and be among the first to experience the future of technical sales.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 mt-10 text-lg font-medium text-secondary transition-all bg-white rounded-xl hover:bg-gray-100"
            >
              Join Waitlist
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Automated Technical Discovery",
    description: "Streamline the discovery process with AI-powered questionnaires and requirement gathering.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Smart Deal Qualification",
    description: "Qualify opportunities faster with intelligent scoring and predictive analytics.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Seamless Collaboration",
    description: "Bridge the gap between presales and sales teams with real-time communication tools.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

export default Index;
