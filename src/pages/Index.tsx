import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAuthModal(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "JailBreak Plugin Premium",
      price: 299,
      category: "plugins",
      type: "Jail",
      description: "Полнофункциональный плагин для Jail серверов с расширенными возможностями",
      image: "🔒",
      rating: 4.9,
      reviews: 127,
      downloads: 456,
      isHit: true,
      isNew: false
    },
    {
      id: 2,
      name: "Zombie Mod Ultimate",
      price: 450,
      category: "plugins", 
      type: "ZM",
      description: "Продвинутый зомби мод с уникальными возможностями и режимами игры",
      image: "🧟",
      rating: 4.7,
      reviews: 89,
      downloads: 312,
      isHit: false,
      isNew: true
    },
    {
      id: 3,
      name: "Elite Player Models",
      price: 199,
      category: "models",
      type: "Players",
      description: "Набор высококачественных моделей игроков для CT и T команд",
      image: "🎭",
      rating: 4.6,
      reviews: 67,
      downloads: 189,
      isHit: false,
      isNew: false
    },
    {
      id: 4,
      name: "AK-47 Redline Skin",
      price: 99,
      category: "models",
      type: "Weapons", 
      description: "Стильная модель AK-47 в стиле Redline с анимацией",
      image: "🔫",
      rating: 4.5,
      reviews: 34,
      downloads: 156,
      isHit: false,
      isNew: true
    },
    {
      id: 5,
      name: "Complete Server Build",
      price: 1299,
      category: "builds",
      type: "Full",
      description: "Полная сборка сервера со всеми необходимыми плагинами",
      image: "🖥️",
      rating: 4.9,
      reviews: 23,
      downloads: 78,
      isHit: true,
      isNew: false
    },
    {
      id: 6,
      name: "Optimization Pack",
      price: 149,
      category: "plugins",
      type: "Performance",
      description: "Пакет плагинов для оптимизации производительности сервера",
      image: "⚡",
      rating: 4.8,
      reviews: 45,
      downloads: 234,
      isHit: true,
      isNew: false
    }
  ];

  const addToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'downloads': return b.downloads - a.downloads;
      default: return b.isHit ? 1 : -1;
    }
  });

  const hitProducts = products.filter(p => p.isHit);
  const newProducts = products.filter(p => p.isNew);

  const handleAuth = () => {
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cs-navy via-cs-blue to-cs-navy">
      {/* Auth Modal */}
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md bg-cs-navy border-cs-orange/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-cs-orange text-center">
              🎮 Добро пожаловать в CS 1.6 STORE!
            </DialogTitle>
            <DialogDescription className="text-cs-gray text-center">
              Регайся и получи доступ к лучшим плагинам, моделям и сборкам для Counter-Strike 1.6!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label className="text-white">Gmail аккаунт</Label>
              <Input
                type="email"
                placeholder="твой@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-cs-blue/20 border-cs-gray/30 text-white"
              />
            </div>
            <div>
              <Label className="text-white">Пароль</Label>
              <Input
                type="password"
                placeholder="Придумай надёжный пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-cs-blue/20 border-cs-gray/30 text-white"
              />
            </div>
            <div className="space-y-3 pt-2">
              <Button
                onClick={handleAuth}
                className="w-full bg-cs-orange hover:bg-cs-orange/90 text-white font-semibold"
                size="lg"
              >
                <Icon name="UserPlus" className="mr-2" size={20} />
                Зарегаться до пизды мира! 🚀
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowAuthModal(false)}
                className="w-full text-cs-gray hover:text-white hover:bg-cs-blue/20"
              >
                Может потом...
              </Button>
            </div>
            <div className="text-center pt-2">
              <p className="text-xs text-cs-gray">
                Регистрируясь, ты получаешь доступ ко всем фишкам магазина и персональным скидкам!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Header */}
      <header className="border-b border-cs-gray/20 bg-cs-navy/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-cs-orange">🎮</div>
              <h1 className="text-2xl font-bold text-white">CS 1.6 STORE</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-cs-orange bg-cs-orange/20 px-4 py-2 rounded-md">Home</a>
              <a href="#shop" className="text-white hover:text-cs-orange transition-colors">Shop</a>
              <a href="#about" className="text-white hover:text-cs-orange transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-cs-orange transition-colors">Contact</a>
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-cs-orange text-white">
                      {cartItems.length}
                    </Badge>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Корзина</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {cartItems.length === 0 ? (
                    <p className="text-muted-foreground">Корзина пуста</p>
                  ) : (
                    <>
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.price}₽</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      ))}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Итого: {getTotalPrice()}₽</span>
                          <Button className="bg-cs-orange hover:bg-cs-orange/90">
                            Оплатить
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              CS 1.6 <span className="text-cs-orange">STORE</span>
            </h1>
            <p className="text-xl text-cs-gray mb-8">
              Лучшие плагины, модели и сборки для Counter-Strike 1.6
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cs-orange hover:bg-cs-orange/90 text-white">
                <Icon name="ShoppingBag" className="mr-2" size={20} />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="border-cs-orange text-cs-orange hover:bg-cs-orange/10">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Техподдержка
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hit Products Section */}
      <section className="py-16 px-4 bg-cs-navy/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🔥 Хиты продаж
            </h2>
            <p className="text-cs-gray">Самые популярные товары среди игроков</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hitProducts.slice(0, 3).map((product) => (
              <Card key={product.id} className="bg-gradient-to-br from-cs-orange/20 to-cs-blue/20 backdrop-blur-sm border-cs-orange/50 hover:border-cs-orange transition-colors relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Badge className="bg-cs-orange text-white">ХИТ</Badge>
                </div>
                <CardHeader>
                  <div className="text-4xl mb-2">{product.image}</div>
                  <CardTitle className="text-white">{product.name}</CardTitle>
                  <CardDescription className="text-cs-gray">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-cs-gray">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    <span>{product.rating}</span>
                    <span>•</span>
                    <Icon name="Download" size={16} />
                    <span>{product.downloads}</span>
                    <span>•</span>
                    <Icon name="MessageSquare" size={16} />
                    <span>{product.reviews}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-cs-orange/20 text-cs-orange">
                      {product.type}
                    </Badge>
                    <span className="text-2xl font-bold text-cs-orange">{product.price}₽</span>
                  </div>
                  <Button 
                    className="w-full bg-cs-orange hover:bg-cs-orange/90"
                    onClick={() => addToCart(product)}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New Products */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ✨ Новинки
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {newProducts.slice(0, 2).map((product) => (
              <Card key={product.id} className="bg-gradient-to-r from-cs-blue/20 to-cs-navy/20 backdrop-blur-sm border-cs-blue/50 hover:border-cs-orange/50 transition-colors relative">
                <div className="absolute top-2 right-2">
                  <Badge className="bg-green-500 text-white">NEW</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{product.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-white mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-cs-gray mb-3">
                        {product.description}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-cs-gray">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Download" size={14} />
                          <span>{product.downloads}</span>
                        </div>
                        <Badge variant="secondary" className="bg-cs-orange/20 text-cs-orange">
                          {product.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-cs-orange">{product.price}₽</span>
                      <Button 
                        className="w-full mt-2 bg-cs-orange hover:bg-cs-orange/90"
                        onClick={() => addToCart(product)}
                        size="sm"
                      >
                        <Icon name="Plus" className="mr-1" size={14} />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Каталог товаров</h2>
            <p className="text-cs-gray">Профессиональные решения для вашего сервера</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cs-gray" size={20} />
                  <Input
                    placeholder="Поиск плагинов, моделей, сборок..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-cs-blue/20 border-cs-gray/30 text-white placeholder:text-cs-gray"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-cs-blue/20 border-cs-gray/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="downloads">По скачиваниям</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-cs-gray/30 text-cs-orange hover:bg-cs-orange/10"
                >
                  <Icon name="Filter" className="mr-2" size={16} />
                  Фильтры
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <Card className="bg-cs-navy/50 border-cs-gray/20 p-4 mb-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <Label className="text-white mb-2 block">Ценовой диапазон</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="От"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="bg-cs-blue/20 border-cs-gray/30 text-white"
                      />
                      <span className="text-cs-gray">-</span>
                      <Input
                        type="number"
                        placeholder="До"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                        className="bg-cs-blue/20 border-cs-gray/30 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Рейтинг от</Label>
                    <div className="flex items-center space-x-1">
                      {[4.0, 4.5, 4.8].map((rating) => (
                        <Button
                          key={rating}
                          variant="outline"
                          size="sm"
                          className="border-cs-gray/30 text-cs-gray hover:text-cs-orange hover:border-cs-orange/50"
                        >
                          <Icon name="Star" className="mr-1" size={12} />
                          {rating}+
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Статус</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-cs-orange/20 text-cs-orange cursor-pointer hover:bg-cs-orange/30">
                        Хиты
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 cursor-pointer hover:bg-green-500/30">
                        Новинки
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 cursor-pointer hover:bg-blue-500/30">
                        Скидки
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            <div className="flex items-center justify-between text-cs-gray">
              <p>Найдено товаров: <span className="text-white font-semibold">{sortedProducts.length}</span></p>
              <div className="flex items-center space-x-2">
                <span>Показать:</span>
                <Button variant="ghost" size="sm" className="text-cs-orange hover:bg-cs-orange/10">
                  <Icon name="Grid3X3" size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="text-cs-gray hover:text-cs-orange hover:bg-cs-orange/10">
                  <Icon name="List" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-cs-navy/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-cs-orange">Все</TabsTrigger>
              <TabsTrigger value="plugins" className="data-[state=active]:bg-cs-orange">Плагины</TabsTrigger>
              <TabsTrigger value="models" className="data-[state=active]:bg-cs-orange">Модели</TabsTrigger>
              <TabsTrigger value="builds" className="data-[state=active]:bg-cs-orange">Сборки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="bg-white/10 backdrop-blur-sm border-cs-gray/20 hover:border-cs-orange/50 transition-colors relative">
                    {(product.isHit || product.isNew) && (
                      <div className="absolute top-2 right-2 z-10">
                        {product.isHit && <Badge className="bg-cs-orange text-white mr-1">ХИТ</Badge>}
                        {product.isNew && <Badge className="bg-green-500 text-white">NEW</Badge>}
                      </div>
                    )}
                    <CardHeader>
                      <div className="text-4xl mb-2">{product.image}</div>
                      <CardTitle className="text-white">{product.name}</CardTitle>
                      <CardDescription className="text-cs-gray mb-3">
                        {product.description}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-cs-gray">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-white">{product.rating}</span>
                          <span>({product.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Download" size={14} />
                          <span>{product.downloads}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-cs-orange/20 text-cs-orange">
                          {product.type}
                        </Badge>
                        <span className="text-2xl font-bold text-cs-orange">{product.price}₽</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-cs-orange hover:bg-cs-orange/90"
                          onClick={() => addToCart(product)}
                        >
                          <Icon name="ShoppingCart" className="mr-2" size={16} />
                          В корзину
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="border-cs-gray/30 text-cs-gray hover:text-cs-orange hover:border-cs-orange/50"
                        >
                          <Icon name="Eye" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {['plugins', 'models', 'builds'].map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.filter(p => p.category === category).map((product) => (
                    <Card key={product.id} className="bg-white/10 backdrop-blur-sm border-cs-gray/20 hover:border-cs-orange/50 transition-colors">
                      <CardHeader>
                        <div className="text-4xl mb-2">{product.image}</div>
                        <CardTitle className="text-white">{product.name}</CardTitle>
                        <CardDescription className="text-cs-gray">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="bg-cs-orange/20 text-cs-orange">
                            {product.type}
                          </Badge>
                          <span className="text-2xl font-bold text-cs-orange">{product.price}₽</span>
                        </div>
                        <Button 
                          className="w-full bg-cs-orange hover:bg-cs-orange/90"
                          onClick={() => addToCart(product)}
                        >
                          <Icon name="ShoppingCart" className="mr-2" size={16} />
                          Добавить в корзину
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Support & Submit Request */}
      <section className="py-20 px-4 bg-cs-navy/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Support */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Техподдержка</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MessageCircle" className="text-cs-orange mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Telegram</h4>
                    <p className="text-cs-gray">@cs16_support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="text-cs-orange mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-cs-gray">support@cs16store.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" className="text-cs-orange mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Время работы</h4>
                    <p className="text-cs-gray">24/7 онлайн поддержка</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Request */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Подать заявку на товар</h3>
              <Card className="bg-white/10 backdrop-blur-sm border-cs-gray/20">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label className="text-white">Тип товара</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plugin">Плагин</SelectItem>
                          <SelectItem value="model">Модель</SelectItem>
                          <SelectItem value="build">Сборка</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Название</Label>
                      <Input placeholder="Название вашего товара" />
                    </div>
                    <div>
                      <Label className="text-white">Описание</Label>
                      <Textarea placeholder="Подробное описание функций и возможностей" />
                    </div>
                    <div>
                      <Label className="text-white">Цена (₽)</Label>
                      <Input type="number" placeholder="Предлагаемая цена" />
                    </div>
                    <Button className="w-full bg-cs-orange hover:bg-cs-orange/90">
                      <Icon name="Send" className="mr-2" size={16} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Частые вопросы</h2>
            <p className="text-cs-gray">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Как происходит оплата?",
                a: "Принимаем оплату через ЮMoney, PayPal, банковские карты и криптовалюты."
              },
              {
                q: "Есть ли гарантия на товары?",
                a: "На все товары предоставляется 30-дневная гарантия и техническая поддержка."
              },
              {
                q: "Можно ли заказать индивидуальную разработку?",
                a: "Да, принимаем заказы на индивидуальную разработку плагинов и модификаций."
              },
              {
                q: "Как быстро происходит доставка?",
                a: "Цифровые товары доставляются мгновенно после подтверждения оплаты."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-cs-gray/20">
                <CardHeader>
                  <CardTitle className="text-white">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cs-gray">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cs-navy/95 border-t border-cs-gray/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cs-orange mb-4">🎮 CS 1.6 STORE</div>
            <p className="text-cs-gray mb-6">Лучший магазин контента для Counter-Strike 1.6</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-cs-gray hover:text-cs-orange transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="text-cs-gray hover:text-cs-orange transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-cs-gray hover:text-cs-orange transition-colors">
                <Icon name="Github" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-cs-gray/20">
              <p className="text-cs-gray text-sm">© 2024 CS 1.6 Store. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;