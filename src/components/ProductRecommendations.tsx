import productRecommendationsImage from "@/assets/chatbot-product-recommendations.png";

const ProductRecommendations = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary flex items-center gap-2">
              <span className="text-primary">🎯</span> Slimme aanbevelingen
            </span>
          </div>
          
          <h2 className="font-inter text-4xl md:text-5xl font-normal mb-6 leading-tight">
            Perfecte productvoorstellen op het juiste moment
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Onze AI chatbot analyseert klantgedrag en voorkeuren om exact de juiste producten aan te bevelen. Dit resulteert in meer conversies en hogere klanttevredenheid.
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src={productRecommendationsImage} 
            alt="AI chatbot die gepersonaliseerde productaanbevelingen doet met +47% meer conversies" 
            className="w-full max-w-5xl rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-normal text-primary mb-2">+47%</div>
            <p className="text-muted-foreground">Meer conversies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-normal text-primary mb-2">&lt;30s</div>
            <p className="text-muted-foreground">Responstijd</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-normal text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Klanttevredenheid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;
