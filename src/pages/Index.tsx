import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showBrands, setShowBrands] = useState(false);

  const brandsData = {
    "Бытовые кофемашины": {
      "Jura": ["Jura ENA 8", "Jura E8", "Jura Z8", "Jura S8", "Jura D6", "Jura A1", "Jura WE8", "Jura Giga X3 (домашний вариант)"],
      "DeLonghi": ["DeLonghi Magnifica S ECAM 22.110.B", "DeLonghi Dinamica ECAM 350.55.B", "DeLonghi PrimaDonna Elite ECAM 550.75.MS", "DeLonghi Dedica EC680.M", "DeLonghi ECAM 22.110.B", "DeLonghi ECAM 23.420.SB"],
      "Saeco (Philips)": ["Saeco Xelsis SM7684/00", "Saeco PicoBaristo HD8927/01", "Saeco Incanto HD8917/01", "Saeco GranBaristo Avanti / HD8964/47 / HD8967/47"],
      "Bosch": ["Bosch VeroBar TIS30129RW", "Bosch Tassimo (различные модели)"],
      "Krups": ["Krups EA89xx (например, EA89)", "Krups Evidence EA8918"],
      "Melitta": ["Melitta Caffeo Solo & Milk E950-103 / E950-101", "Melitta Caffeo Barista TS"],
      "Philips / Saeco": ["Philips EP2220/10 (Luna)", "Philips EP3246/70 (Luna)", "Philips 2200 Series EP2220/10"],
      "Others": ["Gaggia Brera / Accademia / Naviglio / Anima / Velasca"]
    },
    "Профессиональные кофемашины": {
      "La Marzocco": ["Linea Mini", "Strada AV (Automatic Volumetric)", "Linea PB (Professional Barista)", "GS3 MP (for high-end coffee shops)"],
      "Nuova Simonelli": ["Aurelia II T (Турбо)", "Appia II Compact", "Musica", "Oscar II", "Aurelia Wave"],
      "Victoria Arduino": ["Venus (для профессиональных кофеен)", "Eagle One", "White Eagle IV", "Red Eagle IV"],
      "Faema": ["E61 Classic / E61 X30 / E61 Legend"],
      "Sanremo": ["Opera Mini / Cafe Racer / Verona / Tradizione"],
      "Rancilio": ["Rancilio Classe 11 / Classe 9 / Classe 7"],
      "La Cimbali": ["M39 / M26 / M32 / M34"],
      "Other brands": ["ECM Technika IV Profi", "La Spaziale S1 Vivaldi II", "Astoria Plus 4 You II"]
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center bg-stone-200 gap-4">
          <div className="text-4xl md:text-6xl font-bold text-red-600">МЕГАВОЛЬТ</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-sm md:text-base"
              onClick={() => window.open('https://wa.me/79384413767', '_blank')}
            >
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-sm md:text-base"
              onClick={() => {
                const phoneNumbers = ['+7 (988) 182 59 97', '+7 (938) 441 37 67'];
                const choice = window.confirm(`Выберите номер для звонка:\n\nНомер 1 - ${phoneNumbers[0]}\nНомер 2 - ${phoneNumbers[1]}`);
                const selectedNumber = choice ? phoneNumbers[0] : phoneNumbers[1];
                window.location.href = `tel:${selectedNumber.replace(/[^\d+]/g, '')}`;
              }}
            >
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-52 md:pt-20 pb-4 md:pb-16 animate-fade-in bg-stone-800">
        <div className="container mx-auto px-4 bg-stone-800">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-stone-800">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                Профессиональный <span className="text-red-600">ремонт</span> и <span className="text-red-600">обслуживание</span> кофемашин в Сочи
              </h1>
              <div className="space-y-2 md:space-y-4 text-base md:text-xl text-gray-300">
                <p>Профессиональный ремонт в Сочи.</p>
                <p>Качественный и быстрый ремонт всех брендов.</p>
                <p>Восстановим работу вашей кофемашины быстро и по доступной цене.</p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/24bd0143-c275-42b9-8456-f51fd7e9b3fd.jpg" 
                alt="Ремонт кофемашин" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 w-3/4 md:w-full"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-white p-3 md:p-4 rounded-xl shadow-lg animate-scale-in">
                <div className="text-xl md:text-2xl font-bold">12+</div>
                <div className="text-xs md:text-sm">лет опыта</div>
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
                    description: "Наличный и безналичный расчет, возможность оплаты картой и QR-кодом. Так же работаем с Юр.лицами."
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
                  <p className="text-black">rbt2913767@yandex.ru</p>
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
            
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/b904fcc2-ee85-49b6-b5b2-a433d1f3bec6.jpg" 
                alt="Мастер ремонтирует кофемашину в мастерской"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">МЕГАВОЛЬТ</div>
              <p className="text-gray-400 mb-4">
                Профессиональный сервисный центр по ремонту кофемашин в г.Сочи
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
              <ul className="space-y-2 text-gray-500">
                <li>Ремонт кофемашин</li>
                <li>Чистка от накипи</li>
                <li>Замена деталей</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (988) 182 59 97/ +7 (938) 441 37 67</li>
                <li>rbt2913767@yandex.ru</li>
                <li>г.Сочи, ул. Красноармейская, 9Б</li>
                <li>Пн-Пт: 09:00 - 18:00, Сб-Вс: 10:00 - 18:00</li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>ИП Паклин С.В. ул.Виноградная, д 22/1, ИНН 594200005879</p>
          </div>
        </div>
      </footer>
      
      {/* Brands Button */}
      <Button 
        onClick={() => setShowBrands(!showBrands)}
        className="fixed bottom-4 left-4 z-50 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        <Icon name="Coffee" size={20} />
        Бренды кофемашин
      </Button>

      {/* Brands Modal */}
      {showBrands && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Бренды кофемашин</h2>
                <Button 
                  onClick={() => setShowBrands(false)}
                  variant="ghost"
                  size="sm"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              
              <div className="space-y-6">
                {Object.entries(brandsData).map(([category, brands]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(brands).map(([brand, models]) => (
                        <div key={brand} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-700 mb-2">{brand}:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {models.map((model, index) => (
                              <li key={index}>{model}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;