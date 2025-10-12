import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Inloggen - Glimps AI | Toegang tot je account"
        description="Log in op je Glimps AI account om je chatbot te beheren en statistieken te bekijken."
        path="/login"
        canonical="https://glimps.be/login"
        keywords="inloggen, login, account toegang, Glimps dashboard"
        type="website"
      />
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img src={logoIcon} alt="glimps" className="h-16 w-16" />
            </div>
            
            <h1 className="font-inter text-3xl font-semibold mb-3">
              Welkom terug
            </h1>
            
            <p className="text-muted-foreground">
              Log in om verder te gaan met glimps
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email adres
                </label>
                <input
                  type="email"
                  placeholder="je@bedrijf.nl"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>Onthoud mij</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Wachtwoord vergeten?
                </a>
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Inloggen
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">Of</span>
              </div>
            </div>

            {/* Social Login */}
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-xl hover:bg-muted/50 transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Doorgaan met Google
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Nog geen account?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Gratis aanmelden
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
