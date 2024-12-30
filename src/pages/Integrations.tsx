import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      name: "Salesforce",
      description: "Sync your presales data with Salesforce CRM",
      status: "Coming soon",
    },
    {
      name: "HubSpot",
      description: "Connect your presales workflow with HubSpot",
      status: "Coming soon",
    },
    {
      name: "Slack",
      description: "Get notifications and updates directly in Slack",
      status: "Coming soon",
    },
    {
      name: "Microsoft Teams",
      description: "Collaborate with your team in Microsoft Teams",
      status: "Coming soon",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-secondary md:text-5xl">
            Integrations
          </h1>
          <p className="mt-6 text-xl text-center text-gray-600">
            Connect presalesify.io with your favorite tools
          </p>

          <div className="grid gap-6 mt-12 md:grid-cols-2">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 transition-all bg-white border rounded-xl hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">
                      {integration.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{integration.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
                <span className="inline-block px-3 py-1 mt-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {integration.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Integrations;