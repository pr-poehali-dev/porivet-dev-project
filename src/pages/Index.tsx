import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [task, setTask] = useState('');

  const subjects = [
    {
      icon: 'Calculator',
      title: 'Математика',
      gradient: 'from-purple-500 to-pink-500',
      examples: [
        { problem: 'Решить уравнение: 2x + 5 = 13', solution: 'x = 4' },
        { problem: 'Найти площадь круга с радиусом 5 см', solution: 'S = πr² = 78.54 см²' }
      ]
    },
    {
      icon: 'Atom',
      title: 'Физика',
      gradient: 'from-blue-500 to-purple-500',
      examples: [
        { problem: 'Найти силу тока при U=12В, R=4Ом', solution: 'I = U/R = 3A' },
        { problem: 'Скорость при равноускоренном движении за 5с с a=2м/с²', solution: 'v = at = 10 м/с' }
      ]
    },
    {
      icon: 'FlaskConical',
      title: 'Химия',
      gradient: 'from-emerald-500 to-cyan-500',
      examples: [
        { problem: 'Молярная масса H₂O', solution: 'M = 18 г/моль' },
        { problem: 'Баланс: H₂ + O₂ → H₂O', solution: '2H₂ + O₂ → 2H₂O' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse-slow">
              <Icon name="GraduationCap" className="text-white" size={40} />
            </div>
          </div>
          
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Домашка? Решено! 🚀
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Мгновенное решение задач по математике, физике, химии и другим предметам. 
            Просто введи задание и получи подробное решение!
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <Textarea
              placeholder="Введи свою задачу, например: Решить уравнение 3x - 7 = 14"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="min-h-[120px] mb-4 text-lg border-2 border-purple-200 focus:border-purple-500 transition-colors"
            />
            <Button 
              size="lg" 
              className="w-full text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Решить задачу
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Примеры решённых задач
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden border-2 border-transparent hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader className={`bg-gradient-to-br ${subject.gradient} text-white pb-6`}>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Icon name={subject.icon as any} size={28} />
                    </div>
                    <CardTitle className="text-2xl font-black">{subject.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {subject.examples.map((example, exIdx) => (
                    <div key={exIdx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl hover:shadow-md transition-shadow">
                      <p className="font-semibold text-gray-700 mb-2 flex items-start gap-2">
                        <Icon name="HelpCircle" size={18} className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>{example.problem}</span>
                      </p>
                      <p className="text-purple-700 font-bold flex items-start gap-2 ml-6">
                        <Icon name="CheckCircle2" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{example.solution}</span>
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-2xl animate-float">
            <CardHeader>
              <CardTitle className="text-3xl font-black flex items-center gap-3">
                <Icon name="Zap" size={32} />
                Почему выбирают нас?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Rocket" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Мгновенно</h3>
                  <p className="text-sm text-purple-100">Решение за секунды</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="BookOpen" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Подробно</h3>
                  <p className="text-sm text-purple-100">С пояснениями</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Target" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Точно</h3>
                  <p className="text-sm text-purple-100">Проверенные решения</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
