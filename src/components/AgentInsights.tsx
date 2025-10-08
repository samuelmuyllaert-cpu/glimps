import aiAgentImage from "@/assets/ai-agent.png";

const AgentInsights = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary flex items-center gap-2">
              <span className="text-primary">🤖</span> AI Agent
            </span>
          </div>
          
          <h2 className="font-inter text-4xl md:text-5xl font-normal mb-6 leading-tight">
            Vraag Jouw In-House Agent<br />Wat Er Speelt Bij De Klanten
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Krijg directe inzichten in klantvragen, trends en voorkeuren. Jouw AI agent analyseert alle gesprekken en geeft je waardevolle feedback om je business te verbeteren.
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src={aiAgentImage} 
            alt="AI Inbox Agent interface toont klantvragen en trends" 
            className="w-full max-w-2xl rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-normal text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Inzichten beschikbaar</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-normal text-primary mb-2">Real-time</div>
            <p className="text-muted-foreground">Trend analyse</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-normal text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Data gedreven</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentInsights;
