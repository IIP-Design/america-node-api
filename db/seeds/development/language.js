exports.seed = function(knex, Promise) {
  return knex('language').del()
    .then(function () {
      return Promise.all([
        knex('language').insert({lang_code: 'aa', title: 'Afar'}),
        knex('language').insert({lang_code: 'ab', title: 'Abkhazian'}),
        knex('language').insert({lang_code: 'ae', title: 'Avestan'}),
        knex('language').insert({lang_code: 'af', title: 'Afrikaans'}),
        knex('language').insert({lang_code: 'ak', title: 'Akan'}),
        knex('language').insert({lang_code: 'am', title: 'Amharic'}),
        knex('language').insert({lang_code: 'an', title: 'Aragonese'}),
        knex('language').insert({lang_code: 'ar', title: 'Arabic'}),
        knex('language').insert({lang_code: 'as', title: 'Assamese'}),
        knex('language').insert({lang_code: 'av', title: 'Avaric'}),
        knex('language').insert({lang_code: 'ay', title: 'Aymara'}),
        knex('language').insert({lang_code: 'az', title: 'Azerbaijani'}),
        knex('language').insert({lang_code: 'ba', title: 'Bashkir'}),
        knex('language').insert({lang_code: 'be', title: 'Belarusian'}),
        knex('language').insert({lang_code: 'bg', title: 'Bulgarian'}),
        knex('language').insert({lang_code: 'bh', title: 'Bihari languages'}),
        knex('language').insert({lang_code: 'bi', title: 'Bislama'}),
        knex('language').insert({lang_code: 'bm', title: 'Bambara'}),
        knex('language').insert({lang_code: 'bn', title: 'Bengali'}),
        knex('language').insert({lang_code: 'bo', title: 'Tibetan'}),
        knex('language').insert({lang_code: 'br', title: 'Breton'}),
        knex('language').insert({lang_code: 'bs', title: 'Bosnian'}),
        knex('language').insert({lang_code: 'ca', title: 'Catalan'}),
        knex('language').insert({lang_code: 'ce', title: 'Chechen'}),
        knex('language').insert({lang_code: 'ch', title: 'Chamorro'}),
        knex('language').insert({lang_code: 'co', title: 'Corsican'}),
        knex('language').insert({lang_code: 'cr', title: 'Cree'}),
        knex('language').insert({lang_code: 'cs', title: 'Czech'}),
        knex('language').insert({lang_code: 'cu', title: 'Old Slavonic'}),
        knex('language').insert({lang_code: 'cv', title: 'Chuvash'}),
        knex('language').insert({lang_code: 'cy', title: 'Welsh'}),
        knex('language').insert({lang_code: 'da', title: 'Danish'}),
        knex('language').insert({lang_code: 'de', title: 'German'}),
        knex('language').insert({lang_code: 'dv', title: 'Divehi'}),
        knex('language').insert({lang_code: 'dz', title: 'Dzongkha'}),
        knex('language').insert({lang_code: 'ee', title: 'Ewe'}),
        knex('language').insert({lang_code: 'el', title: 'Greek'}),
        knex('language').insert({lang_code: 'en', title: 'English'}),
        knex('language').insert({lang_code: 'eo', title: 'Esperanto'}),
        knex('language').insert({lang_code: 'es', title: 'Spanish'}),
        knex('language').insert({lang_code: 'et', title: 'Estonian'}),
        knex('language').insert({lang_code: 'eu', title: 'Basque'}),
        knex('language').insert({lang_code: 'fa', title: 'Persian'}),
        knex('language').insert({lang_code: 'ff', title: 'Fulah'}),
        knex('language').insert({lang_code: 'fi', title: 'Finnish'}),
        knex('language').insert({lang_code: 'fj', title: 'Fijian'}),
        knex('language').insert({lang_code: 'fo', title: 'Faroese'}),
        knex('language').insert({lang_code: 'fr', title: 'French'}),
        knex('language').insert({lang_code: 'fy', title: 'Western Frisian'}),
        knex('language').insert({lang_code: 'ga', title: 'Irish'}),
        knex('language').insert({lang_code: 'gd', title: 'Gaelic'}),
        knex('language').insert({lang_code: 'gl', title: 'Galician'}),
        knex('language').insert({lang_code: 'gn', title: 'Guarani'}),
        knex('language').insert({lang_code: 'gu', title: 'Gujarati'}),
        knex('language').insert({lang_code: 'gv', title: 'Manx'}),
        knex('language').insert({lang_code: 'ha', title: 'Hausa'}),
        knex('language').insert({lang_code: 'he', title: 'Hebrew'}),
        knex('language').insert({lang_code: 'hi', title: 'Hindi'}),
        knex('language').insert({lang_code: 'ho', title: 'Hiri Motu'}),
        knex('language').insert({lang_code: 'hr', title: 'Croatian'}),
        knex('language').insert({lang_code: 'ht', title: 'Haitian'}),
        knex('language').insert({lang_code: 'hu', title: 'Hungarian'}),
        knex('language').insert({lang_code: 'hy', title: 'Armenian'}),
        knex('language').insert({lang_code: 'hz', title: 'Herero'}),
        knex('language').insert({lang_code: 'ia', title: 'Interlingua'}),
        knex('language').insert({lang_code: 'id', title: 'Indonesian'}),
        knex('language').insert({lang_code: 'ie', title: 'Interlingue'}),
        knex('language').insert({lang_code: 'ig', title: 'Igbo'}),
        knex('language').insert({lang_code: 'ii', title: 'Sichuan Yi'}),
        knex('language').insert({lang_code: 'ik', title: 'Inupiaq'}),
        knex('language').insert({lang_code: 'io', title: 'Ido'}),
        knex('language').insert({lang_code: 'is', title: 'Icelandic'}),
        knex('language').insert({lang_code: 'it', title: 'Italian'}),
        knex('language').insert({lang_code: 'iu', title: 'Inuktitut'}),
        knex('language').insert({lang_code: 'ja', title: 'Japanese'}),
        knex('language').insert({lang_code: 'jv', title: 'Javanese'}),
        knex('language').insert({lang_code: 'ka', title: 'Georgian'}),
        knex('language').insert({lang_code: 'kg', title: 'Kongo'}),
        knex('language').insert({lang_code: 'ki', title: 'Kikuyu'}),
        knex('language').insert({lang_code: 'kj', title: 'Kuanyama'}),
        knex('language').insert({lang_code: 'kk', title: 'Kazakh'}),
        knex('language').insert({lang_code: 'kl', title: 'Kalaallisut'}),
        knex('language').insert({lang_code: 'km', title: 'Central Khmer'}),
        knex('language').insert({lang_code: 'kn', title: 'Kannada'}),
        knex('language').insert({lang_code: 'ko', title: 'Korean'}),
        knex('language').insert({lang_code: 'kr', title: 'Kanuri'}),
        knex('language').insert({lang_code: 'ks', title: 'Kashmiri'}),
        knex('language').insert({lang_code: 'ku', title: 'Kurdish'}),
        knex('language').insert({lang_code: 'kv', title: 'Komi'}),
        knex('language').insert({lang_code: 'kw', title: 'Cornish'}),
        knex('language').insert({lang_code: 'ky', title: 'Kirghiz'}),
        knex('language').insert({lang_code: 'la', title: 'Latin'}),
        knex('language').insert({lang_code: 'lb', title: 'Luxembourgish'}),
        knex('language').insert({lang_code: 'lg', title: 'Ganda'}),
        knex('language').insert({lang_code: 'li', title: 'Limburgan'}),
        knex('language').insert({lang_code: 'ln', title: 'Lingala'}),
        knex('language').insert({lang_code: 'lo', title: 'Lao'}),
        knex('language').insert({lang_code: 'lt', title: 'Lithuanian'}),
        knex('language').insert({lang_code: 'lu', title: 'Luba-Katanga'}),
        knex('language').insert({lang_code: 'lv', title: 'Latvian'}),
        knex('language').insert({lang_code: 'mg', title: 'Malagasy'}),
        knex('language').insert({lang_code: 'mh', title: 'Marshallese'}),
        knex('language').insert({lang_code: 'mi', title: 'Maori'}),
        knex('language').insert({lang_code: 'mk', title: 'Macedonian'}),
        knex('language').insert({lang_code: 'ml', title: 'Malayalam'}),
        knex('language').insert({lang_code: 'mn', title: 'Mongolian'}),
        knex('language').insert({lang_code: 'mr', title: 'Marathi'}),
        knex('language').insert({lang_code: 'ms', title: 'Malay'}),
        knex('language').insert({lang_code: 'mt', title: 'Maltese'}),
        knex('language').insert({lang_code: 'my', title: 'Burmese'}),
        knex('language').insert({lang_code: 'na', title: 'Nauru'}),
        knex('language').insert({lang_code: 'nb', title: 'Norwegian'}),
        knex('language').insert({lang_code: 'nd', title: 'Ndebele'}),
        knex('language').insert({lang_code: 'ne', title: 'Nepali'}),
        knex('language').insert({lang_code: 'ng', title: 'Ndonga'}),
        knex('language').insert({lang_code: 'nl', title: 'Dutch'}),
        knex('language').insert({lang_code: 'nn', title: 'Norwegian Nynorsk'}),
        knex('language').insert({lang_code: 'no', title: 'Norwegian'}),
        knex('language').insert({lang_code: 'nr', title: 'Ndebele, South'}),
        knex('language').insert({lang_code: 'nv', title: 'Navajo; Navaho'}),
        knex('language').insert({lang_code: 'ny', title: 'Chichewa'}),
        knex('language').insert({lang_code: 'oc', title: 'Occitan (post 1500)'}),
        knex('language').insert({lang_code: 'oj', title: 'Ojibwa'}),
        knex('language').insert({lang_code: 'om', title: 'Oromo'}),
        knex('language').insert({lang_code: 'or', title: 'Oriya'}),
        knex('language').insert({lang_code: 'os', title: 'Ossetian'}),
        knex('language').insert({lang_code: 'pa', title: 'Panjabi'}),
        knex('language').insert({lang_code: 'pi', title: 'Pali'}),
        knex('language').insert({lang_code: 'pl', title: 'Polish'}),
        knex('language').insert({lang_code: 'ps', title: 'Pushto'}),
        knex('language').insert({lang_code: 'pt', title: 'Portuguese'}),
        knex('language').insert({lang_code: 'qu', title: 'Quechua'}),
        knex('language').insert({lang_code: 'rm', title: 'Romansh'}),
        knex('language').insert({lang_code: 'rn', title: 'Rundi'}),
        knex('language').insert({lang_code: 'ro', title: 'Romanian'}),
        knex('language').insert({lang_code: 'ru', title: 'Russian'}),
        knex('language').insert({lang_code: 'rw', title: 'Kinyarwanda'}),
        knex('language').insert({lang_code: 'sa', title: 'Sanskrit'}),
        knex('language').insert({lang_code: 'sc', title: 'Sardinian'}),
        knex('language').insert({lang_code: 'sd', title: 'Sindhi'}),
        knex('language').insert({lang_code: 'se', title: 'Northern Sami'}),
        knex('language').insert({lang_code: 'sg', title: 'Sango'}),
        knex('language').insert({lang_code: 'si', title: 'Sinhala'}),
        knex('language').insert({lang_code: 'sk', title: 'Slovak'}),
        knex('language').insert({lang_code: 'sl', title: 'Slovenian'}),
        knex('language').insert({lang_code: 'sm', title: 'Samoan'}),
        knex('language').insert({lang_code: 'sn', title: 'Shona'}),
        knex('language').insert({lang_code: 'so', title: 'Somali'}),
        knex('language').insert({lang_code: 'sq', title: 'Albanian'}),
        knex('language').insert({lang_code: 'sr', title: 'Serbian'}),
        knex('language').insert({lang_code: 'ss', title: 'Swati'}),
        knex('language').insert({lang_code: 'st', title: 'Sotho, Southern'}),
        knex('language').insert({lang_code: 'su', title: 'Sundanese'}),
        knex('language').insert({lang_code: 'sv', title: 'Swedish'}),
        knex('language').insert({lang_code: 'sw', title: 'Swahili'}),
        knex('language').insert({lang_code: 'ta', title: 'Tamil'}),
        knex('language').insert({lang_code: 'te', title: 'Telugu'}),
        knex('language').insert({lang_code: 'tg', title: 'Tajik'}),
        knex('language').insert({lang_code: 'th', title: 'Thai'}),
        knex('language').insert({lang_code: 'ti', title: 'Tigrinya'}),
        knex('language').insert({lang_code: 'tk', title: 'Turkmen'}),
        knex('language').insert({lang_code: 'tl', title: 'Tagalog'}),
        knex('language').insert({lang_code: 'tn', title: 'Tswana'}),
        knex('language').insert({lang_code: 'to', title: 'Tonga (Tonga Islands)'}),
        knex('language').insert({lang_code: 'tr', title: 'Turkish'}),
        knex('language').insert({lang_code: 'ts', title: 'Tsonga'}),
        knex('language').insert({lang_code: 'tt', title: 'Tatar'}),
        knex('language').insert({lang_code: 'tw', title: 'Twi'}),
        knex('language').insert({lang_code: 'ty', title: 'Tahitian'}),
        knex('language').insert({lang_code: 'ug', title: 'Uighur'}),
        knex('language').insert({lang_code: 'uk', title: 'Ukrainian'}),
        knex('language').insert({lang_code: 'ur', title: 'Urdu'}),
        knex('language').insert({lang_code: 'uz', title: 'Uzbek'}),
        knex('language').insert({lang_code: 've', title: 'Venda'}),
        knex('language').insert({lang_code: 'vi', title: 'Viettitlese'}),
        knex('language').insert({lang_code: 'vo', title: 'Volapük'}),
        knex('language').insert({lang_code: 'wa', title: 'Walloon'}),
        knex('language').insert({lang_code: 'wo', title: 'Wolof'}),
        knex('language').insert({lang_code: 'xh', title: 'Xhosa'}),
        knex('language').insert({lang_code: 'yi', title: 'Yiddish'}),
        knex('language').insert({lang_code: 'yo', title: 'Yoruba'}),
        knex('language').insert({lang_code: 'za', title: 'Zhuang'}),
        knex('language').insert({lang_code: 'zh', title: 'Chinese'}),
        knex('language').insert({lang_code: 'zu', title: 'Zulu'})
      ]);
    });
};