import {CardName} from '../../../common/cards/CardName';
import {Player} from '../../Player';
import {IAward} from '../IAward';

export class Engineer implements IAward {
  public readonly name = 'Engineer';
  public readonly description = 'Most cards that directly alter your own production';

  public getScore(player: Player): number {
    // TODO(kberg): should Engineer include events?
    const score = player.tableau.filter((card) => {
      if (Engineer.productionCards.includes(card.name)) return true;

      if (card.produce !== undefined) return true;
      const production = card.behavior?.production;
      if (production !== undefined) {
        // TODO(kberg): this is mildly unsafe because it doesn't take into account when
        // production[key] = undefined (e.g. {megacredits: undefined}).
        return Object.keys(production).length > 0;
      }
      return false;
    }).length;

    return score;
  }


  // TODO(kberg)
  private static productionCards = [
    // Base + Corp Era
    CardName.ACQUIRED_COMPANY,
    CardName.ADAPTED_LICHEN,
    CardName.AEROBRAKED_AMMONIA_ASTEROID,
    CardName.ALGAE,
    CardName.ARCHAEBACTERIA,
    CardName.ARTIFICIAL_PHOTOSYNTHESIS,
    CardName.ASTEROID_MINING,
    CardName.ASTEROID_MINING_CONSORTIUM,
    CardName.BEAM_FROM_A_THORIUM_ASTEROID,
    CardName.BLACK_POLAR_DUST,
    CardName.BUSHES,
    CardName.BUSINESS_NETWORK,
    CardName.CALLISTO_PENAL_MINES,
    CardName.CARTEL,
    CardName.CLOUD_SEEDING,
    CardName.DESIGNED_MICRO_ORGANISMS,
    CardName.ENERGY_SAVING,
    CardName.ENERGY_TAPPING,
    CardName.FARMING,
    CardName.GIANT_SPACE_MIRROR,
    CardName.GRASS,
    CardName.GREAT_ESCARPMENT_CONSORTIUM,
    CardName.HACKERS,
    CardName.HEATHER,
    CardName.IMMIGRATION_SHUTTLES,
    CardName.IMPORTED_GHG,
    CardName.IMPORT_OF_ADVANCED_GHG,
    CardName.INSECTS,
    CardName.INSULATION,
    CardName.IO_MINING_INDUSTRIES,
    CardName.KELP_FARMING,
    CardName.LICHEN,
    CardName.LIGHTNING_HARVEST,
    CardName.LIVESTOCK,
    CardName.LUNAR_BEAM,
    CardName.MASS_CONVERTER,
    CardName.METHANE_FROM_TITAN,
    CardName.MICRO_MILLS,
    CardName.MIRANDA_RESORT,
    CardName.MOSS,
    CardName.NITROGEN_RICH_ASTEROID,
    CardName.NITROPHILIC_MOSS,
    CardName.PHOBOS_SPACE_HAVEN,
    CardName.POWER_GRID,
    CardName.POWER_SUPPLY_CONSORTIUM,
    CardName.QUANTUM_EXTRACTOR,
    CardName.RAD_SUITS,
    CardName.SATELLITES,
    CardName.SHUTTLES,
    CardName.SOLAR_WIND_POWER,
    CardName.SOLETTA,
    CardName.SPONSORS,
    CardName.TOLL_STATION,
    CardName.TUNDRA_FARMING,
    CardName.TREES,
    CardName.VESTA_SHIPYARD,
    CardName.WAVE_POWER,
    CardName.WORMS,
    CardName.ZEPPELINS,
    CardName.ECOLINE,
    CardName.HELION,
    CardName.THORGATE,
    CardName.SATURN_SYSTEMS,
    // Venus
    CardName.CORRODER_SUITS,
    CardName.DAWN_CITY,
    CardName.FREYJA_BIODOMES,
    CardName.GHG_IMPORT_FROM_VENUS,
    CardName.ISHTAR_MINING,
    CardName.LUNA_METROPOLIS,
    CardName.MAXWELL_BASE,
    CardName.ORBITAL_REFLECTORS,
    CardName.SISTER_PLANET_SUPPORT,
    CardName.STRATOPOLIS,
    CardName.SULPHUR_EXPORTS,
    CardName.TERRAFORMING_CONTRACT,
    CardName.VENUS_GOVERNOR,
    CardName.VENUS_SOILS,
    CardName.APHRODITE,
    // Prelude
    CardName.SPACE_HOTELS,
    CardName.POINT_LUNA,
    CardName.ALLIED_BANKS,
    CardName.AQUIFER_TURBINES,
    CardName.BIOFUELS,
    CardName.BIOLAB,
    CardName.BIOSPHERE_SUPPORT,
    CardName.BUSINESS_EMPIRE,
    CardName.ECOLOGY_EXPERTS,
    CardName.GALILEAN_MINING,
    CardName.IO_RESEARCH_OUTPOST,
    CardName.LOAN,
    CardName.METALS_COMPANY,
    CardName.NITROGEN_SHIPMENT,
    CardName.ORBITAL_CONSTRUCTION_YARD,
    CardName.POWER_GENERATION,
    CardName.SOCIETY_SUPPORT,
    CardName.SUPPLIER,
    // Colonies
    CardName.AIRLINERS,
    CardName.COMMUNITY_SERVICES,
    CardName.CORONA_EXTRACTOR,
    CardName.EARTH_ELEVATOR,
    CardName.ECOLOGY_RESEARCH,
    CardName.FLOATER_LEASING,
    CardName.GALILEAN_WAYSTATION,
    CardName.HEAVY_TAXATION,
    CardName.LUNAR_EXPORTS,
    CardName.LUNA_GOVERNOR,
    CardName.LUNAR_MINING,
    CardName.MINING_COLONY,
    CardName.MINORITY_REFUGE,
    CardName.PIONEER_SETTLEMENT,
    CardName.QUANTUM_COMMUNICATIONS,
    CardName.SOLAR_REFLECTORS,
    CardName.URBAN_DECOMPOSERS,
    CardName.POLYPHEMOS,
    CardName.ARKLIGHT,
    // Turmoil
    CardName.AERIAL_LENSES,
    // Promo
    CardName.ASTEROID_DEFLECTION_SYSTEM,
    CardName.DUSK_LASER_MINING,
    CardName.INTERPLANETARY_TRADE,
    CardName.ORBITAL_CLEANUP,
    CardName.POTATOES,
    CardName.SNOW_ALGAE,
    CardName.MONS_INSURANCE,
    // Ares
    CardName.MARKETING_EXPERTS,
    // Community
    CardName.AGRICOLA_INC,
    CardName.PLAYWRIGHTS,
    // CardName.BOTANICAL_HARVEST,
    // CardName.GEOTHERMAL_VENT,
    CardName.HYDROGEN_BOMBARDMENT,
    // CardName.LASER_FACTORY,
    // CardName.MICROALGAE,
    // CardName.NITRATE_REDUCERS,
    // CardName.SOLAR_BATTERIES,
    // CardName.TRADE_INFRASTRUCTURE,
    // Moon
    CardName.ALGAE_BIOREACTORS,
    CardName.ARCHIMEDES_HYDROPONICS_STATION,
    CardName.ARISTARCHUS_ROAD_NETWORK,
    CardName.COPERNICUS_SOLAR_ARRAYS,
    CardName.DARKSIDE_MINING_SYNDICATE,
    CardName.DEEP_LUNAR_MINING,
    CardName.GEODESIC_TENTS,
    CardName.HE3_FUSION_PLANT,
    CardName.HE3_LOBBYISTS,
    CardName.HABITAT_14,
    CardName.HELIOSTAT_MIRROR_ARRAY,
    CardName.LUNA_RESORT,
    CardName.LUNA_SENATE,
    CardName.LUNAR_SECURITY_STATIONS,
    CardName.LUNAR_TRADE_FLEET,
    CardName.MICROSINGULARITY_PLANT,
    CardName.MOMENTUM_VIRUM_HABITAT,
    CardName.OFF_WORLD_CITY_LIVING,
    CardName.ORBITAL_POWER_GRID,
    CardName.ROVER_DRIVERS_UNION,
    CardName.SINUS_IRIDIUM_ROAD_NETWORK,
    CardName.THE_WOMB,
    CardName.TYCHO_ROAD_NETWORK,
    CardName.UNDERMOON_DRUG_LORDS_NETWORK,
    CardName.CORE_MINE,
    CardName.FIRST_LUNAR_SETTLEMENT,
    CardName.LUNA_FIRST_INCORPORATED,
  ];
}
