import { VERBS, NOUNS, CONNECTORS } from './constants';

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

export default () => {
  let hmw = 'How might we ';
  hmw += `${getRandom(VERBS)} `;
  hmw += `${getRandom(NOUNS)} `;

  const connector = getRandom(CONNECTORS);
  hmw += `${Object.keys(connector)[0]} `;
  hmw += `${getRandom(Object.values(connector)[0])} `;

  hmw += `${getRandom(NOUNS)}?`;

  return hmw;
};
