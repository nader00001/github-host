import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { BackgroundService } from 'src/app/background.service';
import { ServiceService } from 'src/app/services/service.service';

interface Option {
  id: number;
  value: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
  answer: number ;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  backgroundImage: string | undefined;
  constructor(private service : ServiceService , private router : Router , private backgroundService : BackgroundService){}

  ngOnInit() {
    this.backgroundImage = this.backgroundService.getNextBackground();
  }
  questions: Question[] = [
    {
      id: 1,
      question: ':	عندما تقدم درسا جديدا فإن التلميذ يفهم ',
      options: [
        { id: 1, value: 'أ‌-	بالصور وكثرة الألوان والأشكال' },
        { id: 2, value: 'ب‌-	بمشاهدة مقاطع فيديو أو عبر سرد حكاية' },
        { id: 3, value: 'ج-	من خلال القيام بألعاب تتطلب الحركة' },
      ],
      answer: 0,
    },
    {
      id: 2,
      question: ':	عندما تقدم محتوى يتطلب التركيز هل أن التلميذ',
      options: [
        { id: 1, value: 'أ‌-	يتأثر بالفوضى من حوله' },
        { id: 2, value: 'ب‌-	يتأثر بالأحاديث الجانبية' },
        { id: 3, value: 'ج-	يواجه صعوبة في الجلوس بثبات حتى لفترة بسيطة' },
      ],
      answer: 0,
    },
    {
      id: 3,
      question: ':	عندما يشارك في القسم',
      options: [
        { id: 1, value: 'أ‌-	يحفظ ولديه قوة ملاحظة' },
        { id: 2, value: 'ب‌-	يجادل كثيرا ويناقش' },
        { id: 3, value: 'ج-	يتواصل معك باللمس أو الحركة' },
      ],
      answer: 0,
    },
    {
      id: 4,
      question: ':	عند العمل في شكل مجموعات هل تلميذك',
      options: [
        { id: 1, value: 'أ‌-	يقود المجموعة ويتخذ القرارات' },
        { id: 2, value: 'ب‌-	يناقش ويحاور لوقت طويل' },
        { id: 3, value: 'ج-	يتواصل بالحركة' },
      ],
      answer: 0,
    },
    {
      id: 5,
      question: ':	عند إعطاء تعليمة هل أن تلميذك يحب أن',
      options: [
        { id: 1, value: 'أ‌-	يقرأها بمفرده' },
        { id: 2, value: 'ب‌-	تقرأها له بصوت عالي' },
        { id: 3, value: 'ج-	تجسدها له ' },
      ],
      answer: 0,
    },
    {
      id: 6,
      question: ':	عندما يقرأ النص',
      options: [
        { id: 1, value: 'أ‌-	يركز في الألوان والصور' },
        { id: 2, value: 'ب‌-	يأنس للقراءة الجهرية' },
        { id: 3, value: 'ج-	لا يفضل القراءة' },
      ],
      answer: 0,
    },
    {
      id: 7,
      question: ':	ما هي المواد التي يفضلها تلميذك',
      options: [
        { id: 1, value: 'أ‌-	الإيقاظ العلمي والرياضيات ' },
        { id: 2, value: 'ب‌-	التواصل الشفوي والقراءة' },
        { id: 3, value: 'ج-	التربية التشكيلية والموسيقية' },
      ],
      answer: 0,
    },
    {
      id: 8,
      question: ':	عندما تطلب منه عملا هل',
      options: [
        { id: 1, value: 'أ‌-	يقوم به بشكل متقن ومنظم' },
        { id: 2, value: 'ب‌-	ينصت للأوامر ويطيع' },
        { id: 3, value: 'ج-	يكون خدوما ومساعدا  ' },
      ],
      answer: 0,
    },
    {
      id: 9,
      question: ':	كيف يتعامل تلميذك مع الفضاء الداخلي للقسم',
      options: [
        { id: 1, value: 'أ‌-	يهتم بالملصقات الحائطية' },
        { id: 2, value: 'ب‌-	يتحدث كثيرا مع الآخرين من حوله' },
        { id: 3, value: 'ج-	ينفر من شكل الطاولات المكتظة والقسم المزدحم  ' },
      ],
      answer: 0,
    },
    {
      id: 10,
      question: ':	هل أن تلميذك',
      options: [
        { id: 1, value: 'أ‌-	يحب السلطة، قائد لغيره' },
        { id: 2, value: 'ب‌-	يحب المدح' },
        { id: 3, value: 'ج-	يحب الحركة واللعب' },
      ],
      answer: 0,
    },
    {
      id: 11,
      question:' ما الذي يزعج تلميذك أثناء الدرس ويشتت انتباهه:',
      options: [
        { id: 1, value: 'أ- الفوضى' },
        { id: 2, value: 'ب- الضوضاء' },
        { id: 3, value: 'ج- البقاء جالسا فترة طويلة' },
      ],
      answer: 0,
    },
  ];

  submitAnswers() {
    let e , j ;
    let nbr =0 ;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    const selectedOptions = this.questions.map((q) => q.answer);
    console.log(selectedOptions);
    
    for (let i = 0; i < selectedOptions.length; i++) {
      

        if (selectedOptions[i] === 1) {
          count1++;
        } else if (selectedOptions[i] === 2) {
          count2++;
        } else if (selectedOptions[i] === 3) {
          count3++;
        }
      }
    
    
    // console.log(`Nombre de options avec 1 réponse: ${count1}`);
    // console.log(`Nombre de options avec 2 réponses: ${count2}`);
    // console.log(`Nombre de options avec 3 réponses: ${count3}`);
    this.service.note=selectedOptions ;
    this.router.navigate(['graphe']);
    
    
  }

  sendFunction(){
    
  }
  functionType(){}
    
}
