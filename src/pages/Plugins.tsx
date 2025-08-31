import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface PluginsProps {
  addToCart: (product: any) => void;
}

const Plugins = ({ addToCart }: PluginsProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const plugins = [
    {
      id: 1,
      name: "JailBreak Plugin Premium",
      price: 299,
      category: "jail",
      description: "Полнофункциональный плагин для Jail серверов с расширенными возможностями",
      image: "🔒",
      rating: 4.9,
      reviews: 127,
      downloads: 456,
      features: ["Система привилегий", "Кастомные игры", "Админ панель", "Статистика игроков"]
    },
    {
      id: 2,
      name: "Zombie Mod Ultimate",
      price: 450,
      category: "zm",
      description: "Продвинутый зомби мод с уникальными возможностями и режимами игры",
      image: "🧟",
      rating: 4.7,
      reviews: 89,
      downloads: 312,
      features: ["10+ режимов игры", "Кастомные зомби", "Система уровней", "Магазин предметов"]
    },
    {
      id: 6,
      name: "Optimization Pack",
      price: 149,
      category: "performance",
      description: "Пакет плагинов для оптимизации производительности сервера",
      image: "⚡",
      rating: 4.8,
      reviews: 45,
      downloads: 234,
      features: ["Оптимизация FPS", "Уменьшение лагов", "Очистка памяти", "Мониторинг нагрузки"]
    },
    {
      id: 7,
      name: "DeathMatch Arena",
      price: 199,
      category: "dm",
      description: "Продвинутый DeathMatch мод с системой респавна и статистикой",
      image: "⚔️",
      rating: 4.6,
      reviews: 78,
      downloads: 189,
      features: ["Быстрый респавн", "Статистика K/D", "Разные арены", "Система рангов"]
    },
    {
      id: 8,
      name: "HideNSeek Pro",
      price: 179,
      category: "fun",
      description: "Мод прятки с множеством карт и уникальными возможностями",
      image: "👻",
      rating: 4.5,
      reviews: 92,
      downloads: 203,
      features: ["20+ карт", "Кастомные модели", "Система подсказок", "Турнирный режим"]
    },
    {
      id: 9,
      name: "Admin Tools Extended",
      price: 259,
      category: "admin",
      description: "Расширенные инструменты администратора для управления сервером",
      image: "⚙️",
      rating: 4.8,
      reviews: 156,
      downloads: 421,
      features: ["Расширенные команды", "Логи действий", "Банлист", "Система предупреждений"]
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'jail', label: 'Jail' },
    { value: 'zm', label: 'Zombie Mod' },
    { value: 'dm', label: 'DeathMatch' },
    { value: 'fun', label: 'Развлекательные' },
    { value: 'admin', label: 'Административные' },
    { value: 'performance', label: 'Оптимизация' }
  ];

  const filteredPlugins = plugins.filter(plugin => {
    const matchesSearch = plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plugin.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || plugin.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const sortedPlugins = [...filteredPlugins].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'downloads': return b.downloads - a.downloads;
      default: return b.downloads - a.downloads;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cs-navy via-cs-blue to-cs-navy py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧩 Плагины для CS 1.6
          </h1>
          <p className="text-cs-gray text-lg">
            Лучшие плагины для создания уникального игрового опыта
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cs-gray" size={20} />
                <Input
                  placeholder="Поиск плагинов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-cs-blue/20 border-cs-gray/30 text-white placeholder:text-cs-gray"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48 bg-cs-blue/20 border-cs-gray/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
            </div>
          </div>
          
          <div className="text-cs-gray">
            Найдено плагинов: <span className="text-white font-semibold">{sortedPlugins.length}</span>
          </div>
        </div>

        {/* Plugins Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPlugins.map((plugin) => (
            <Card key={plugin.id} className="bg-white/10 backdrop-blur-sm border-cs-gray/20 hover:border-cs-orange/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{plugin.image}</div>
                  <Badge variant="secondary" className="bg-cs-orange/20 text-cs-orange capitalize">
                    {categories.find(c => c.value === plugin.category)?.label}
                  </Badge>
                </div>
                <CardTitle className="text-white">{plugin.name}</CardTitle>
                <CardDescription className="text-cs-gray mb-3">
                  {plugin.description}
                </CardDescription>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Основные возможности:</h4>
                  <ul className="text-xs text-cs-gray space-y-1">
                    {plugin.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} className="text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm text-cs-gray pt-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{plugin.rating}</span>
                    <span>({plugin.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Download" size={14} />
                    <span>{plugin.downloads}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cs-orange">{plugin.price}₽</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-cs-orange hover:bg-cs-orange/90"
                    onClick={() => addToCart(plugin)}
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

        {/* Empty State */}
        {sortedPlugins.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Плагины не найдены</h3>
            <p className="text-cs-gray">Попробуйте изменить критерии поиска или фильтры</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plugins;