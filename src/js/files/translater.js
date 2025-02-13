import { languages, translate } from 'google-translate-api-x';

const res = await translate('Я пишу Привет мир и перевожу', { to: 'be' });
console.log(res.text); //=> I speak English
console.log(languages); //=> nl
