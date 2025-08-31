
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Plugins from "./pages/Plugins";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header 
            cartItems={cartItems} 
            onRemoveFromCart={removeFromCart}
            getTotalPrice={getTotalPrice}
          />
          <Routes>
            <Route path="/" element={<Index addToCart={addToCart} />} />
            <Route path="/plugins" element={<Plugins addToCart={addToCart} />} />
            <Route path="/player-models" element={<div className="min-h-screen bg-gradient-to-br from-cs-navy via-cs-blue to-cs-navy flex items-center justify-center"><h1 className="text-white text-4xl">🎭 Модели игроков - скоро!</h1></div>} />}
            <Route path="/weapon-models" element={<div className="min-h-screen bg-gradient-to-br from-cs-navy via-cs-blue to-cs-navy flex items-center justify-center"><h1 className="text-white text-4xl">🔫 Модели оружия - скоро!</h1></div>} />}
            <Route path="/builds" element={<div className="min-h-screen bg-gradient-to-br from-cs-navy via-cs-blue to-cs-navy flex items-center justify-center"><h1 className="text-white text-4xl">🖥️ Сборки - скоро!</h1></div>} />}
            <Route path="/support" element={<Support />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;