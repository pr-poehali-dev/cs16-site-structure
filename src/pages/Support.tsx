import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    // Here would be API call to send support request
    alert('Заявка отправлена! Мы ответим в ближайшее время.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqItems = [
    {
      question: "Как происходит оплата товаров?",
      answer: "Мы принимаем оплату через ЮMoney, PayPal, банковские карты Visa/MasterCard и криптовалюты. Все платежи защищены SSL-шифрованием."
    },
    {
      question: "Есть ли гарантия на приобретенные товары?",
      answer: "Да! На все товары предоставляется 30-дневная гарантия возврата средств и пожизненная техническая поддержка."
    },
    {
      question: "Как быстро я получу товар после оплаты?",
      answer: "Цифровые товары (плагины, модели) доставляются мгновенно на вашу электронную почту. Сборки серверов могут занять до 2-4 часов."
    },
    {
      question: "Можно ли заказать индивидуальную разработку?",
      answer: "Конечно! Мы выполняем индивидуальные заказы на разработку плагинов, модификаций и полных сборок серверов."
    },
    {
      question: "Совместимы ли ваши продукты с модифицированными версиями CS 1.6?",
      answer: "Большинство наших продуктов совместимы с популярными модификациями. Подробную информацию смотрите в описании каждого товара."
    },
    {
      question: "Как получить скидку на покупки?",
      answer: "Подпишитесь на наши социальные сети, участвуйте в акциях и используйте промокоды. Постоянным клиентам предоставляются персональные скидки."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cs-navy via-cs-blue to-cs-navy py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🛠️ Техподдержка
          </h1>
          <p className="text-cs-gray text-lg">
            Мы всегда готовы помочь! Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-cs-gray/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="MessageCircle" className="mr-2 text-cs-orange" size={20} />
                  Способы связи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Telegram */}
                <div className="flex items-center justify-between p-3 bg-cs-blue/20 rounded-lg border border-cs-gray/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Telegram</h4>
                      <p className="text-cs-gray text-sm">@cs16_support</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">Онлайн</Badge>
                </div>

                {/* VK */}
                <div className="flex items-center justify-between p-3 bg-cs-blue/20 rounded-lg border border-cs-gray/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">VKontakte</h4>
                      <p className="text-cs-gray text-sm">vk.com/cs16store</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">Онлайн</Badge>
                </div>

                {/* Discord */}
                <div className="flex items-center justify-between p-3 bg-cs-blue/20 rounded-lg border border-cs-gray/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                      <Icon name="Hash" size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Discord</h4>
                      <p className="text-cs-gray text-sm">CS16Store#1337</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">Онлайн</Badge>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 bg-cs-blue/20 rounded-lg border border-cs-gray/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-cs-gray text-sm">support@cs16store.ru</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-cs-gray/20 text-cs-gray">24ч</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-cs-gray/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Clock" className="mr-2 text-cs-orange" size={20} />
                  Время работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-cs-gray">Telegram/Discord:</span>
                    <span className="text-white">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cs-gray">VK:</span>
                    <span className="text-white">9:00 - 22:00 МСК</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cs-gray">Email:</span>
                    <span className="text-white">В течение 24ч</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-cs-gray/20">
              <CardHeader>
                <CardTitle className="text-white">Форма обратной связи</CardTitle>
                <CardDescription className="text-cs-gray">
                  Опишите свою проблему или вопрос, и мы обязательно поможем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Ваше имя *</Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Введите ваше имя"
                        className="bg-cs-blue/20 border-cs-gray/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-white">Email *</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="ваш@email.com"
                        className="bg-cs-blue/20 border-cs-gray/30 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Категория обращения *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)} required>
                        <SelectTrigger className="bg-cs-blue/20 border-cs-gray/30 text-white">
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Техническая поддержка</SelectItem>
                          <SelectItem value="billing">Оплата и биллинг</SelectItem>
                          <SelectItem value="product">Вопросы по товарам</SelectItem>
                          <SelectItem value="custom">Индивидуальная разработка</SelectItem>
                          <SelectItem value="partnership">Сотрудничество</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Тема сообщения *</Label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Кратко опишите проблему"
                        className="bg-cs-blue/20 border-cs-gray/30 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Подробное описание *</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Опишите вашу проблему или вопрос как можно подробнее..."
                      rows={6}
                      className="bg-cs-blue/20 border-cs-gray/30 text-white"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-cs-orange hover:bg-cs-orange/90" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="bg-cs-gray/20 mb-12" />

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">❓ Часто задаваемые вопросы</h2>
            <p className="text-cs-gray">Возможно, ответ на ваш вопрос уже есть здесь</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-cs-gray/20">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cs-gray leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="text-center mt-12 p-6 bg-cs-orange/10 border border-cs-orange/20 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-2">Нужна срочная помощь?</h3>
          <p className="text-cs-gray mb-4">Пишите в Telegram для мгновенной поддержки</p>
          <Button className="bg-cs-orange hover:bg-cs-orange/90">
            <Icon name="MessageCircle" className="mr-2" size={16} />
            Написать в Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;