import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {TileType} from '../../../common/TileType';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';

export class SphereHabitats extends Card {
  constructor() {
    super({
      name: CardName.SPHERE_HABITATS,
      cardType: CardType.AUTOMATED,
      tags: [Tag.CITY, Tag.MOON],
      cost: 14,
      reserveUnits: {titanium: 1},

      behavior: {
        moon: {
          colonyTile: {},
        },
      },

      metadata: {
        description: 'Spend 1 titanium. Place a colony tile on The Moon and raise the Colony Rate 1 step.',
        cardNumber: 'M07',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).br;
          b.moonColony({secondaryTag: AltSecondaryTag.MOON_COLONY_RATE});
        }),
      },
      tilesBuilt: [TileType.MOON_COLONY],
    });
  }
}
