import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartItems: any[];
  onRemoveFromCart: (id: number) => void;
  getTotalPrice: () => number;
}

const Header = ({ cartItems, onRemoveFromCart, getTotalPrice }: HeaderProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Главная', path: '/', icon: 'Home' },
    { name: 'Плагины', path: '/plugins', icon: 'Puzzle' },
    { name: 'Модели игроков', path: '/player-models', icon: 'Users' },
    { name: 'Модели оружия', path: '/weapon-models', icon: 'Zap' },
    { name: 'Сборки', path: '/builds', icon: 'Package' },
    { name: 'Техподдержка', path: '/support', icon: 'MessageCircle' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-cs-gray/20 bg-cs-navy/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold text-cs-orange">🎮</div>
            <h1 className="text-2xl font-bold text-white hidden sm:block">CS 1.6 STORE</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                  isActive(item.path)
                    ? 'text-cs-orange bg-cs-orange/20'
                    : 'text-white hover:text-cs-orange hover:bg-cs-orange/10'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Cart */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="relative border-cs-gray/30 text-white hover:text-cs-orange hover:border-cs-orange/50">
                  <Icon name="ShoppingCart" size={20} />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-cs-orange text-white h-5 w-5 text-xs p-0 flex items-center justify-center">
                      {cartItems.length}
                    </Badge>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-cs-navy border-cs-orange/50">
                <DialogHeader>
                  <DialogTitle className="text-white">Корзина</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {cartItems.length === 0 ? (
                    <p className="text-cs-gray text-center py-8">Корзина пуста</p>
                  ) : (
                    <>
                      <div className="max-h-60 overflow-y-auto space-y-3">
                        {cartItems.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-cs-blue/20 rounded border border-cs-gray/20">
                            <div className="flex items-center space-x-3">
                              <div className="text-xl">{item.image}</div>
                              <div>
                                <h4 className="font-medium text-white text-sm">{item.name}</h4>
                                <p className="text-cs-orange text-sm font-semibold">{item.price}₽</p>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => onRemoveFromCart(item.id)}
                              className="text-cs-gray hover:text-red-400 hover:bg-red-400/10"
                            >
                              <Icon name="X" size={14} />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-cs-gray/20 pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold text-white">Итого: {getTotalPrice()}₽</span>
                        </div>
                        <Button className="w-full bg-cs-orange hover:bg-cs-orange/90 text-white">
                          <Icon name="CreditCard" className="mr-2" size={16} />
                          Оплатить
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-cs-orange">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-cs-navy border-cs-gray/20 w-80">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="text-xl text-cs-orange">🎮</div>
                  <h2 className="text-lg font-bold text-white">CS 1.6 STORE</h2>
                </div>
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-md transition-colors ${
                        isActive(item.path)
                          ? 'text-cs-orange bg-cs-orange/20'
                          : 'text-white hover:text-cs-orange hover:bg-cs-orange/10'
                      }`}
                    >
                      <Icon name={item.icon as any} size={18} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;