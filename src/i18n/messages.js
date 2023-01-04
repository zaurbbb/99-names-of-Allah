import { LOCALES } from './locales'
import { kzNames } from './names/kzNames';
import { ruNames } from './names/ruNames';
import { trNames } from './names/trNames';
// w - words, n- names
export const messages = {
    [LOCALES.KAZAKH]: {
        w: {
            "app_name": "Алланың 99 есімі",
            "the_most_beautiful_names_text": "Алланың ең қасиетті есімдері",
            "main_block_title": "Расында, жүзге жетпей, Алланың 99 есімі бар – оларды атағандар жәннатқа кіреді",
            "name": "есім",
            "unavailable_text": "Бұл бет қолжетімсіз.",
            "unavailable_subtext": "Негізгі бетке өту",

            "header_main": "Басты бет",
            "header_test": "Тест",
            "header_about": "Біз туралы",

            "search_button": "Іздеу",
            "search_input": "Алланың ең қасиетті 99 есімі",

            "about_app_title": "Сонымен бірге, есімдерді тікелей ұялы телефоныңыздан жаттаңыз",
            "about_app_subtitle": "Алланың барлық қасиетті есімдері әрқашан қолыңызда болу үшін бұл мобильді қосымшаны жүктеп алыңыз!",
            "about_app_download": "Жүктеп алу",

            "footer_title": "Алланың 99 есімі – Алланың барлық қасиетті есімдерінің жиынтығы. Біліміңізді бекіту үшін есімдерді жаттаңыз, тыңдаңыз және тестілеуден өтіңіз.",
            "footer_subtitle": "Барлық құқықтар сақталған",
            "footer_help": "Көмек",
            "footer_policy": "Құпиялылық саясаты ",
            "footer_contact": "Бізбен байланысыңыз",
            "footer_apps": "Қосымшалар",
            "footer_android": "Android-қа жүктеп алу",
            "footer_ios": "IOS-қа жүктеп алу",

            "bookmarks_page_title": "Бетбелгілер",

            "test_page_title": "Біліміңді тексер",
            "test_page_start_test": "Тістілеуді баста",

            "about_page_title_1": "Біздің команда",
            "about_page_title_2": "Мобильді қосымша туралы",
            "about_page_title_3": "Қайырымдылық",
            "about_page_subtitle_1": "Алланың 99 есімі туралы деректер ",
            "about_page_subtitle_2": " сайтынан және «Алланың қасиеті есімдері» кітабынан алынды (Алматы, «Көкжиек» баспасы, 2019 ж.)",
            "about_page_donation_subtitle": "Садақаларыңыз қайырымдылық жобаларына (мешіт пен медресе құрылысы, қайырымдылық қорлары және т.б.) бағытталады. Жақсылық жасайық. Алла разы болсын!",

            "modal_text": "Алла тағаланың есімдеріне жүгіне отырып дұға ету керектігі аятта нақты айтылған.\n        Ғұламалар мұны жүзеге асырудың түрлі жолдары мен әдіс тәсілдерін жетілдіріп шығарған.\n        Сол әдістердің бірі - әрбір есімді Әбжад есебімен есептеп, қалай қарымталы болатындығын анықтап,\n        сол санның алдына \"Я\" жазып (мысалы, Я, Рахман! Я, Фәттах!),\n        осы есімнің зікір етілуін формулаға салған. Сондықтан, зікір еткенде, осы мысалда көрсетілгендей зікір еткен абзал.",

            "test_title": " есімдері",
            "test_question_number": " / 10 сұрақ",
            "test_ending_mashallah": "Машаллаһ",
            "test_ending_answers_number": "Дұрыс жауап берілген сұрақтар саны - ",
            "test_ending_alhamdulilah": "Әлһамдулилләһ",
            "test_ending_check_answers": "Барлық жауаптарды қарау",
            "test_results_right_answers1": "Сіз 10 сұрақтың ",
            "test_results_right_answers2": " дұрыс жауап бердіңіз",
            "test_button_accept": "Қабылдау",
            "test_button_repeat": "Қайталау",

            "one_name_full_description": "Толық мағынасы",
            "one_name_zikr_text1": "Зікір етудің пайдасы",
            "one_name_zikr_text2": "Тілектер мен барлық дұғалар қабыл болсын.",
            "one_name_zikr_text3": "Айтылу саны: ",
            "one_name_start_zikr": "Зікір ету",
            "one_name_copy_to_clipboard": "Аттың сілтемесі алмасу буферіне сәтті сақталды",

            "meruert_name": "Нұрғазы Меруерт",
            "meruert_description": "Басшы және CEO",

            "kudaibergen_name": "Алимтаев Құдайберген",
            "kudaibergen_description": "Android бағдарламашы",

            "elaman_name": "Елмұратов Еламан",
            "elaman_description": "UX/UI дизайнер",

            "zaur_name": "Бердибеков Заур",
            "zaur_description": "WEB бағдарламашы",
        },
        n: kzNames,
    },
    [LOCALES.RUSSIAN]: {
        w: {
            "app_name": "99 имен Аллаха",
            "the_most_beautiful_names_text": "Прекраснейшие имена Аллаха",
            "main_block_title": "Воистину, у Аллаха есть 99 имён – сто без одного, и тот, кто перечислит их, войдёт в Рай",
            "name": "имя",
            "unavailable_text": "В настоящее время страница недоступна.",
            "unavailable_subtext": "Перейти на главную страницу",

            "header_main": "Главная",
            "header_test": "Тест",
            "header_about": "О нас",

            "search_button": "Поиск",
            "search_input": "99 прекраснейших имен Аллаха...",

            "about_app_title": "Так же учите имена прямо с мобильного телефона",
            "about_app_subtitle": "Скачайте это приложение, чтобы все Прекраснейшие имена Аллаха были всегда под рукой!",
            "about_app_download": "Скачать с",

            "footer_title": "99 имен Аллаха - сборник всех Прекраснейших имен Аллаха. Учите имена, слушайте, а так же проходите тесты, чтобы закрепить свои знания.",
            "footer_subtitle": "Все права защищены",
            "footer_help": "Помощь",
            "footer_policy": "Политика конфиденциальности",
            "footer_contact": "Свяжитесь с нами",
            "footer_apps": "Приложения",
            "footer_android": "Скачать на Android",
            "footer_ios": "Скачать на IOS",

            "bookmarks_page_title": "Закладки",

            "test_page_title": "Проверьте свои знания",
            "test_page_start_test": "Начать тест",

            "about_page_title_1": "Наша команда",
            "about_page_title_2": "О приложении",
            "about_page_title_3": "Пожертвование",
            "about_page_subtitle_1": "Данные о 99 именах Аллаха взято с сайта ",
            "about_page_subtitle_2": " и с книги “Алланың қасиетті есімдері” (Алматы, издательство “Көкжиек”, 2019)",
            "about_page_donation_subtitle": "Ваши пожертвования будут направлены на благотворительные проекты (строительство мечетей и медресе, благотворительные фонды и т.д.). Давайте делать добро. Да будет доволен вами Аллах!",

            "modal_text": "В аяте четко сказано, что нужно молиться, обращаясь к именам Аллаха.\n        Ученые совершенствовали различные способы и способы их осуществления.\n        Один из этих методов-вычислить каждое имя с учетом Абжада, определить, как оно будет выглядеть, и записать \"Я\" перед этим числом (например, Я, Рахман! Я, Фаттах!), в формулу которого было вложено название этого имени. Поэтому, когда вы делаете зикр, лучше сделать зикр, как показано в этом примере.",

            "test_title": " имена Аллаха",
            "test_question_number": " вопрос из 10",
            "test_ending_mashallah": "Машаллах",
            "test_ending_answers_number": "Вы правильно ответили на количество вопросов - ",
            "test_ending_alhamdulilah": "Альхамдулиллах",
            "test_ending_check_answers": "Посмотреть все ответы",
            "test_results_right_answers1": "Вы ответили правильно на ",
            "test_results_right_answers2": " из 10 вопросов",
            "test_button_accept": "Принять",
            "test_button_repeat": "Повторить",

            "one_name_full_description": "Полное описание",
            "one_name_zikr_text1": "Польза произнесения зикра",
            "one_name_zikr_text2": "Желания и все молитвы должны быть приняты.",
            "one_name_zikr_text3": "Количество произношений: ",
            "one_name_start_zikr": "Начать зикр",
            "one_name_copy_to_clipboard": "Ссылка на имя была успешно сохранена в буфер обмена",

            "meruert_name": "Нургазы Меруерт",
            "meruert_description": "Основатель и CEO",

            "kudaibergen_name": "Алимтаев Кудайберген",
            "kudaibergen_description": "Android разработчик",

            "elaman_name": "Елмуратов Еламан",
            "elaman_description": "UX/UI дизайнер",

            "zaur_name": "Бердибеков Заур",
            "zaur_description": "WEB разработчик",
        },
        n: ruNames,
    },
    [LOCALES.TURKISH]: {
        w: {
            "app_name": "Allah'ın 99 ismi",
            "the_most_beautiful_names_text": "Allah'ın en güzel isimleri",
            "main_block_title": "Şüphesiz Allah'ın, biri olmadan yüz tane olmak üzere 99 ismi vardır ve kim onları sayarsa Cennete girecektir",
            "name": "isim",
            "unavailable_text": "Bu sayfa kullanılamaz.",
            "unavailable_subtext": "Ana sayfaya git",

            "header_main": "Ana",
            "header_test": "Test",
            "header_about": "Hakkımızda",

            "search_button": "Arayış",
            "search_input": "Allah'ın en güzel 99 ismi...",

            "about_app_title": "Ayrıca isimleri doğrudan cep telefonunuzdan da öğrenin",
            "about_app_subtitle": "Allah'ın en güzel isimlerinin her zaman elinizin altında olması için bu uygulamayı indirin!",
            "about_app_download": "Ile Indir",

            "footer_title": "Allah'ın 99 ismi, Allah'ın en güzel isimlerinden oluşan bir koleksiyondur. İsimleri öğrenin, dinleyin ve bilginizi pekiştirmek için testlerden geçin.",
            "footer_subtitle": "Tüm hakları saklıdır",
            "footer_help": "Yardım",
            "footer_policy": "Gizlilik Politikası",
            "footer_contact": "Bizimle iletişime geçin",
            "footer_apps": "Uygulamalar",
            "footer_android": "Android'e indir",
            "footer_ios": "İos'a indirin",

            "bookmarks_page_title": "Kartotekler",

            "test_page_title": "Bilginizi sınayın",
            "test_page_start_test": "Testi başlat",

            "about_page_title_1": "Ekibimiz",
            "about_page_title_2": "Uygulama hakkında",
            "about_page_title_3": "Bağış",
            "about_page_subtitle_1": "Allah'ın 99 ismiyle ilgili veriler siteden alınmıştır ",
            "about_page_subtitle_2": " ve \"Allahın kutsal isimleri\" kitabından (Almatı, KoKziek yayınevi, 2019)",
            "about_page_donation_subtitle": "Bağışlarınız hayırsever projelere (cami ve medreselerin inşası, hayır kurumları vb.) yönlendirilecektir. Hadi iyilik yapalım. Evet hepinizden razı olsun, Allah!",

            "modal_text": "Ayette açıkça, Yüce Allah'ın isimlerine atıfta bulunarak dua edilmesi gerektiğini açıkça belirtmektedir. Bilim adamları bunu gerçekleştirmenin çeşitli yollarını ve yöntem yaklaşımlarını geliştirdiler. Bu yöntemlerden biri, her bir ismi Abjad'a göre hesaplamak, neye benzeyeceğini belirlemek ve bu sayıdan önce \"Ben\" i yazmaktır (örn. Ben, Rahman! Ben, Fatah!), bu ismin zikrini formüle koydu. Bu nedenle, zikir yaparken, bu örnekte gösterildiği gibi zikir yapmak daha iyidir.",

            "test_title": " Allah'ın isimleri",
            "test_question_number": " / 10 soru",
            "test_ending_mashallah": "Maşallah",
            "test_ending_answers_number": "Soruların sayısına doğru cevap verdiniz mi - ",
            "test_ending_alhamdulilah": "Elhamdülillah",
            "test_ending_check_answers": "Tüm cevapları görüntüle",
            "test_results_right_answers1": "10 sorudan ",
            "test_results_right_answers2": " doğru cevapladınız",
            "test_button_accept": "Kabul etmek",
            "test_button_repeat": "Tekrarlamak",

            "one_name_full_description": "Tam anlamı",
            "one_name_zikr_text1": "Zikiretmenin faydaları",
            "one_name_zikr_text2": "Dilekler ve tüm dualar kabul edilmelidir.",
            "one_name_zikr_text3": "Telaffuz sayısı: ",
            "one_name_start_zikr": "Zikir etmek",
            "one_name_copy_to_clipboard": "Adın bağlantısı panoya başarıyla kaydedildi",

            "meruert_name": "Nurgazy Meruert",
            "meruert_description": "Kurucu ve CEO",

            "kudaibergen_name": "Alimtayev Kudaibergen",
            "kudaibergen_description": "Android geliştiricisi",

            "elaman_name": "Elmuratov Elaman",
            "elaman_description": "UX/UI tasarımcısı",

            "zaur_name": "Berdibekov Zaur",
            "zaur_description": "WEB geliştiricisi",
        },
        n: trNames,
    },
}
