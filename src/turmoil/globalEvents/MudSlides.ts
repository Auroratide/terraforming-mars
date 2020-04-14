import { IGlobalEvent } from './IGlobalEvent';
import { GlobalEventName } from './GlobalEventName';
import { PartyName } from '../parties/PartyName';
import { Game } from '../../Game';
import { Resources } from '../../Resources';
import { Turmoil } from '../Turmoil';
import { SpaceType } from '../../SpaceType';

export class MudSlides implements IGlobalEvent {
    public name = GlobalEventName.MUD_SLIDES;
    public revealedDelegate = PartyName.KELVINISTS;
    public currentDelegate = PartyName.GREENS;
    public resolve(game: Game, turmoil: Turmoil) {
        
        game.getPlayers().forEach(player => {
            const ocean = game.board.spaces.filter((space) => (space.player !== undefined && space.player === player && space.tile !== undefined) 
                               && game.board.getAdjacentSpaces(space)
                               .filter((space) => space.spaceType === SpaceType.OCEAN).length > 0
                               ).length;
            const amount = Math.min(5, ocean) - turmoil.getPlayerInfluence(player);
            if (amount > 0) {
                player.setResource(Resources.MEGACREDITS, -4 * amount, undefined, undefined, true);
            }
        });    
    }
}    