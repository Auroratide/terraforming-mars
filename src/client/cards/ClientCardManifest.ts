import {CardName} from '@/common/cards/CardName';
import {CardType} from '@/common/cards/CardType';
import {GameModule} from '@/common/cards/GameModule';
import {ClientCard} from '@/common/cards/ClientCard';
// @ts-ignore cards.json doesn't exist during npm run build
import * as cardJson from '@/genfiles/cards.json' assert {type: 'json'};

const cards: Map<CardName, ClientCard> = new Map();
const cardArray: Array<ClientCard> = [];

export function getCard(cardName: CardName): ClientCard | undefined {
  return cards.get(cardName);
}

export function getCardOrThrow(cardName: CardName): ClientCard {
  const card = getCard(cardName);
  if (card === undefined) {
    throw new Error(`card not found ${cardName}`);
  }
  return card;
}

export function getCards(filter: (card: ClientCard) => boolean): Array<ClientCard> {
  return cardArray.filter(filter);
}

export function byType(cardType: CardType): (card: ClientCard) => boolean {
  return (card) => card.cardType === cardType;
}

export function byModule(module: GameModule): (card: ClientCard) => boolean {
  return (card) => card.module === module;
}

export const toName = (card: ClientCard) => card.name;

function addMoreMergerCards(n: number): Array<ClientCard> {
  const allCards = cardJson as any as Array<ClientCard>;
  const mergerTemplate = allCards.find((it) => it.name === 'Merger');
  for (let i = 2; i <= n; ++i) {
    const mergerClone = structuredClone(mergerTemplate);
    const newName = `Merger ${i}`;
    allCards.push({
      ...mergerClone,
      name: newName,
    });
  }

  return allCards;
}

function initialize() {
  const allCards = addMoreMergerCards(30);

  allCards.forEach((card) => {
    cards.set(card.name, card);
    cardArray.push(card);
  });
}

initialize();
