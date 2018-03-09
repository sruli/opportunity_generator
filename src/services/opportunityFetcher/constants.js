export const VERBS = [
  'develop',
  'encourage',
  'naturalize',
  'increase',
  'experience',
  'release',
  'build',
  'improve',
  'utilize',
  'simplify',
];

const pluralize = (verbs) => {
  const arr = [];

  for (let i = 0; i < verbs.length; i += 1) {
    const verb = VERBS[i];
    const pluralized = verb === 'simplify' ? 'simplifies' : `${verb}s`;
    arr.push(pluralized);
  }

  return arr;
};

const ingerize = (verbs) => {
  const arr = [];

  for (let i = 0; i < verbs.length; i += 1) {
    const verb = VERBS[i];
    const lastLetter = verb[verb.length - 1];
    const ingerized = lastLetter === 'e' ? `${verb.substring(0, verb.length - 1)}ing` : `${verb}ing`;
    arr.push(ingerized);
  }

  return arr;
};

const VERBS_PLURAL = pluralize(VERBS);
const VERBSING = ingerize(VERBS);

export const CONNECTORS = [
  { 'in order to': VERBS },
  { 'in a way that': VERBS_PLURAL },
  { while: VERBSING },
];


export const NOUNS = [
  'social opportunities',
  'touch points',
  'documentation',
  'information availability',
  'hidden information',
  'remote communication',
  'trust',
  'freedom',
  'working environment',
  'non-physical space',
  'standup benefits',
  'agile',
  'user experience',
  'human reactions',
  'democracy',
];
