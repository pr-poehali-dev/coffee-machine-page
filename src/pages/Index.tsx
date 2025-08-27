import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-stone-200">
          <div className="text-6xl font-bold text-red-600">МЕГАВОЛЬТ</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} />
            Заказать звонок
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 animate-fade-in bg-stone-800">
        <div className="container mx-auto px-4 bg-stone-800">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-stone-800">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-white leading-tight">
                Профессиональный <span className="text-red-600">ремонт</span> и <span className="text-red-600">обслуживание</span> кофемашин в Сочи
              </h1>
              <div className="space-y-4 text-xl text-gray-300">
                <p>Профессиональный ремонт в Сочи.</p>
                <p>Качественный и быстрый ремонт всех брендов.</p>
                <p>Восстановим работу вашей кофемашины быстро и по доступной цене.</p>
              </div>

            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/24bd0143-c275-42b9-8456-f51fd7e9b3fd.jpg" 
                alt="Ремонт кофемашин" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-xl shadow-lg animate-scale-in">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию кофемашин всех брендов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Stethoscope",
                title: "Диагностика и ремонт",
                description: "Проводим диагностику и устраняем несправности кофемашин за 1-2 дня.",

              },
              {
                icon: "Droplets",
                title: "Чистка и декальцинация",
                description: "Глубокая очистка внутренних систем от накипи и кофейных масел",

              },
              {
                icon: "Thermometer",
                title: "Ремонт нагревательных элементов и термостатов",
                description: "Восстанавливаем работоспособность нагревательных элементов и термостатов.",

              },
              {
                icon: "Filter",
                title: "Замена фильтров и уплотнителей",
                description: "Производим замену фильтров и уплотнителей для поддержания качества работы кофемашины.",

              },
              {
                icon: "Shield",
                title: "Гарантийное обслуживание",
                description: "Гарантия на проверку работоспособности кофемашины 14 дней.",

              },
              {
                icon: "Cog",
                title: "Замена насосов и помп",
                description: "Производим замену насосов и помп для обеспечения бесперебойной работы кофемашины.",

              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "Search",
                    title: "Быстрая диагностика",
                    description: "Диагностика в течение 1-2 дней."
                  },
                  {
                    icon: "Zap",
                    title: "Быстрый сервис",
                    description: "Ремонт в течение 1-3 дней."
                  },
                  {
                    icon: "Shield",
                    title: "Гарантия качества",
                    description: "Гарантия 14 дней на проверку оборудования, если что-то не так, исправим бесплатно."
                  },
                  {
                    icon: "DollarSign",
                    title: "Доступные цены",
                    description: "Прозрачная стоимость без скрытных платежей, выгодные цены на запчасти и работу."
                  },
                  {
                    icon: "CreditCard",
                    title: "Гибкая система оплаты",
                    description: "Наличный и безналичный расчет, возможность оплаты картой и QR-кодом."
                  },
                  {
                    icon: "Coffee",
                    title: "Работа с любыми моделями и брендами",
                    description: "Ремонт как бытовых, так и профессиональных кофемашин."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/3db6cf69-0718-4758-a48a-e443015147ea.jpg" 
                alt="Кофемашина BORK" 
                className="rounded-2xl shadow-2xl"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Оставьте заявку и наш мастер свяжется с вами в течение 15 минут
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#ffffff]">
                  <Icon name="Phone" size={32} className="text-red-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-black">Телефон</h3>
                  <p className="text-black">+7 (988) 182 59 97</p>
                  <p className="text-black">+7 (938) 441 37 67</p>
                </div>
                <div className="p-6 rounded-xl bg-[#ffffff]">
                  <Icon name="Mail" size={32} className="text-red-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-black">Email</h3>
                  <p className="text-black">s4777752@ya.ru</p>
                </div>
                <div className="p-6 rounded-xl bg-[#ffffff]">
                  <Icon name="MapPin" size={32} className="text-red-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-black">Адрес</h3>
                  <p className="text-black">г.Сочи, ул. Красноармейская, 9Б</p>
                </div>
                <div className="p-6 rounded-xl bg-[#ffffff]">
                  <Icon name="Clock" size={32} className="text-red-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-black">График работы</h3>
                  <p className="text-black">Пн-Пт: 09:00 - 18:00</p>
                  <p className="text-black">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Модель кофемашины</label>
                  <Input placeholder="Например: DeLonghi ECAM 350.15.B" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Описание проблемы</label>
                  <Textarea 
                    placeholder="Опишите, что происходит с кофемашиной..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">МЕГАВОЛЬТ</div>
              <p className="text-gray-400 mb-4">
                Профессиональный сервисный центр по ремонту кофемашин в Москве и области
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт кофемашин</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Чистка от накипи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Замена деталей</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Выезд мастера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@megavolt.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
                <li>Пн-Вс: 8:00 - 22:00</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МЕГАВОЛЬТ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;