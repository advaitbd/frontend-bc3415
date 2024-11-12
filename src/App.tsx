import { Layout } from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import { OnboardingProvider } from "./contexts/OnboardingContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppRouter } from "./router";

function App() {
  return (
    <ThemeProvider>
      <OnboardingProvider>
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
      </OnboardingProvider>
    </ThemeProvider>
  );
}

export default App;
