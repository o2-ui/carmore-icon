import type { ComponentProps, ComponentType } from 'react';

import React from 'react';

import './global.css';
import Airport from './ui/Airport';
import Anchor from './ui/Anchor';
import ArrowDoubleDown from './ui/ArrowDoubleDown';
import ArrowDoubleUp from './ui/ArrowDoubleUp';
import ArrowDown from './ui/ArrowDown';
import ArrowDownKTX from './ui/ArrowDownKTX';
import ArrowLeft from './ui/ArrowLeft';
import ArrowRight from './ui/ArrowRight';
import ArrowUp from './ui/ArrowUp';
import ArrowUpKTX from './ui/ArrowUpKTX';
import BackBtn from './ui/BackBtn';
import Bus from './ui/Bus';
import Call from './ui/Call';
import Cancel from './ui/Cancel';
import Car from './ui/Car';
import Chat from './ui/Chat';
import Check from './ui/Check';
import Checklist from './ui/Checklist';
import Close from './ui/Close';
import Copy from './ui/Copy';
import CopyLink from './ui/CopyLink';
import CountryFlagAE from './ui/CountryFlagAE';
import CountryFlagAL from './ui/CountryFlagAL';
import CountryFlagAR from './ui/CountryFlagAR';
import CountryFlagAT from './ui/CountryFlagAT';
import CountryFlagAU from './ui/CountryFlagAU';
import CountryFlagBE from './ui/CountryFlagBE';
import CountryFlagBG from './ui/CountryFlagBG';
import CountryFlagCA from './ui/CountryFlagCA';
import CountryFlagCH from './ui/CountryFlagCH';
import CountryFlagCL from './ui/CountryFlagCL';
import CountryFlagCR from './ui/CountryFlagCR';
import CountryFlagCY from './ui/CountryFlagCY';
import CountryFlagCZ from './ui/CountryFlagCZ';
import CountryFlagDE from './ui/CountryFlagDE';
import CountryFlagDK from './ui/CountryFlagDK';
import CountryFlagDO from './ui/CountryFlagDO';
import CountryFlagEC from './ui/CountryFlagEC';
import CountryFlagEE from './ui/CountryFlagEE';
import CountryFlagEG from './ui/CountryFlagEG';
import CountryFlagES from './ui/CountryFlagES';
import CountryFlagFI from './ui/CountryFlagFI';
import CountryFlagFJ from './ui/CountryFlagFJ';
import CountryFlagFR from './ui/CountryFlagFR';
import CountryFlagGB from './ui/CountryFlagGB';
import CountryFlagGE from './ui/CountryFlagGE';
import CountryFlagGR from './ui/CountryFlagGR';
import CountryFlagHR from './ui/CountryFlagHR';
import CountryFlagHU from './ui/CountryFlagHU';
import CountryFlagIE from './ui/CountryFlagIE';
import CountryFlagIL from './ui/CountryFlagIL';
import CountryFlagIN from './ui/CountryFlagIN';
import CountryFlagIS from './ui/CountryFlagIS';
import CountryFlagIT from './ui/CountryFlagIT';
import CountryFlagJM from './ui/CountryFlagJM';
import CountryFlagJO from './ui/CountryFlagJO';
import CountryFlagJP from './ui/CountryFlagJP';
import CountryFlagKW from './ui/CountryFlagKW';
import CountryFlagLA from './ui/CountryFlagLA';
import CountryFlagLK from './ui/CountryFlagLK';
import CountryFlagLT from './ui/CountryFlagLT';
import CountryFlagLU from './ui/CountryFlagLU';
import CountryFlagLV from './ui/CountryFlagLV';
import CountryFlagMA from './ui/CountryFlagMA';
import CountryFlagME from './ui/CountryFlagME';
import CountryFlagMT from './ui/CountryFlagMT';
import CountryFlagMU from './ui/CountryFlagMU';
import CountryFlagMX from './ui/CountryFlagMX';
import CountryFlagMY from './ui/CountryFlagMY';
import CountryFlagNL from './ui/CountryFlagNL';
import CountryFlagNO from './ui/CountryFlagNO';
import CountryFlagNZ from './ui/CountryFlagNZ';
import CountryFlagPA from './ui/CountryFlagPA';
import CountryFlagPE from './ui/CountryFlagPE';
import CountryFlagPH from './ui/CountryFlagPH';
import CountryFlagPL from './ui/CountryFlagPL';
import CountryFlagPT from './ui/CountryFlagPT';
import CountryFlagPY from './ui/CountryFlagPY';
import CountryFlagQA from './ui/CountryFlagQA';
import CountryFlagRO from './ui/CountryFlagRO';
import CountryFlagRS from './ui/CountryFlagRS';
import CountryFlagSA from './ui/CountryFlagSA';
import CountryFlagSE from './ui/CountryFlagSE';
import CountryFlagSG from './ui/CountryFlagSG';
import CountryFlagSI from './ui/CountryFlagSI';
import CountryFlagSK from './ui/CountryFlagSK';
import CountryFlagTH from './ui/CountryFlagTH';
import CountryFlagTR from './ui/CountryFlagTR';
import CountryFlagTW from './ui/CountryFlagTW';
import CountryFlagUS from './ui/CountryFlagUS';
import CountryFlagVN from './ui/CountryFlagVN';
import CountryFlagZA from './ui/CountryFlagZA';
import CS from './ui/CS';
import DirectionUp from './ui/DirectionUp';
import Download from './ui/Download';
import Edit from './ui/Edit';
import ErrorInfo from './ui/ErrorInfo';
import EV from './ui/EV';
import FavHome from './ui/FavHome';
import Filter from './ui/Filter';
import Global from './ui/Global';
import Help from './ui/Help';
import HotelActivity from './ui/HotelActivity';
import HotelBusiness from './ui/HotelBusiness';
import HotelCreditCard from './ui/HotelCreditCard';
import HotelDining from './ui/HotelDining';
import HotelETC from './ui/HotelETC';
import HotelFacilities from './ui/HotelFacilities';
import HotelFitness from './ui/HotelFitness';
import HotelKids from './ui/HotelKids';
import HotelParking from './ui/HotelParking';
import HotelRoom from './ui/HotelRoom';
import HotelService from './ui/HotelService';
import HotelValet from './ui/HotelValet';
import HotelWifi from './ui/HotelWifi';
import InputDelete from './ui/InputDelete';
import Jeju from './ui/Jeju';
import Like from './ui/Like';
import List from './ui/List';
import ListDot from './ui/ListDot';
import ListInactive from './ui/ListInactive';
import LoadingSpinner from './ui/LoadingSpinner';
import MethodCreditCard from './ui/MethodCreditCard';
import Month from './ui/Month';
import MoreInfo from './ui/MoreInfo';
import NewCar from './ui/NewCar';
import Nowhere from './ui/Nowhere';
import Oneway from './ui/Oneway';
import OutLink from './ui/OutLink';
import PinMap from './ui/PinMap';
import Point from './ui/Point';
import Refresh from './ui/Refresh';
import RentalHouse from './ui/RentalHouse';
import Reply from './ui/Reply';
import RoundTrip from './ui/RoundTrip';
import Search from './ui/Search';
import Setting from './ui/Setting';
import Share from './ui/Share';
import StarSingle from './ui/StarSingle';
import Station from './ui/Station';
import Status from './ui/Status';
import StepperMinus from './ui/StepperMinus';
import StepperPlus from './ui/StepperPlus';
import Success from './ui/Success';
import SwitchArrow from './ui/SwitchArrow';
import ThumbUp from './ui/ThumbUp';
import Time from './ui/Time';
import Ulleongdo from './ui/Ulleongdo';
import User from './ui/User';
import Walk from './ui/Walk';
import Warning from './ui/Warning';
import WithCar from './ui/WithCar';

const ICON_MAP = {
  // 1.3.0
  checklist: Checklist,
  'direction-up': DirectionUp,
  'error-info': ErrorInfo,
  ev: EV,
  'fav-home': FavHome,
  help: Help,
  'method-credit-card': MethodCreditCard,
  'more-info': MoreInfo,
  'new-car': NewCar,
  point: Point,
  status: Status,
  success: Success,
  time: Time,
  warning: Warning,

  // 1.2.0
  airport: Airport,
  anchor: Anchor,
  bus: Bus,
  car: Car,
  'rental-house': RentalHouse,
  station: Station,
  walk: Walk,
  'with-car': WithCar,

  // 1.0.0 ~ 1.1.0
  'arrow-double-down': ArrowDoubleDown,
  'arrow-double-up': ArrowDoubleUp,
  'arrow-down': ArrowDown,
  'arrow-down-ktx': ArrowDownKTX,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'arrow-up-ktx': ArrowUpKTX,
  'back-btn': BackBtn,
  call: Call,
  cancel: Cancel,
  chat: Chat,
  check: Check,
  close: Close,
  copy: Copy,
  'copy-link': CopyLink,
  'country-flag-ae': CountryFlagAE,
  'country-flag-al': CountryFlagAL,
  'country-flag-ar': CountryFlagAR,
  'country-flag-at': CountryFlagAT,
  'country-flag-au': CountryFlagAU,
  'country-flag-be': CountryFlagBE,
  'country-flag-bg': CountryFlagBG,
  'country-flag-ca': CountryFlagCA,
  'country-flag-ch': CountryFlagCH,
  'country-flag-cl': CountryFlagCL,
  'country-flag-cr': CountryFlagCR,
  'country-flag-cy': CountryFlagCY,
  'country-flag-cz': CountryFlagCZ,
  'country-flag-de': CountryFlagDE,
  'country-flag-dk': CountryFlagDK,
  'country-flag-do': CountryFlagDO,
  'country-flag-ec': CountryFlagEC,
  'country-flag-ee': CountryFlagEE,
  'country-flag-eg': CountryFlagEG,
  'country-flag-es': CountryFlagES,
  'country-flag-fi': CountryFlagFI,
  'country-flag-fj': CountryFlagFJ,
  'country-flag-fr': CountryFlagFR,
  'country-flag-gb': CountryFlagGB,
  'country-flag-ge': CountryFlagGE,
  'country-flag-gr': CountryFlagGR,
  'country-flag-hr': CountryFlagHR,
  'country-flag-hu': CountryFlagHU,
  'country-flag-ie': CountryFlagIE,
  'country-flag-il': CountryFlagIL,
  'country-flag-in': CountryFlagIN,
  'country-flag-is': CountryFlagIS,
  'country-flag-it': CountryFlagIT,
  'country-flag-jm': CountryFlagJM,
  'country-flag-jo': CountryFlagJO,
  'country-flag-jp': CountryFlagJP,
  'country-flag-kw': CountryFlagKW,
  'country-flag-la': CountryFlagLA,
  'country-flag-lk': CountryFlagLK,
  'country-flag-lt': CountryFlagLT,
  'country-flag-lu': CountryFlagLU,
  'country-flag-lv': CountryFlagLV,
  'country-flag-ma': CountryFlagMA,
  'country-flag-me': CountryFlagME,
  'country-flag-mt': CountryFlagMT,
  'country-flag-mu': CountryFlagMU,
  'country-flag-mx': CountryFlagMX,
  'country-flag-my': CountryFlagMY,
  'country-flag-nl': CountryFlagNL,
  'country-flag-no': CountryFlagNO,
  'country-flag-nz': CountryFlagNZ,
  'country-flag-pa': CountryFlagPA,
  'country-flag-pe': CountryFlagPE,
  'country-flag-ph': CountryFlagPH,
  'country-flag-pl': CountryFlagPL,
  'country-flag-pt': CountryFlagPT,
  'country-flag-py': CountryFlagPY,
  'country-flag-qa': CountryFlagQA,
  'country-flag-ro': CountryFlagRO,
  'country-flag-rs': CountryFlagRS,
  'country-flag-sa': CountryFlagSA,
  'country-flag-se': CountryFlagSE,
  'country-flag-sg': CountryFlagSG,
  'country-flag-si': CountryFlagSI,
  'country-flag-sk': CountryFlagSK,
  'country-flag-th': CountryFlagTH,
  'country-flag-tr': CountryFlagTR,
  'country-flag-tw': CountryFlagTW,
  'country-flag-us': CountryFlagUS,
  'country-flag-vn': CountryFlagVN,
  'country-flag-za': CountryFlagZA,
  cs: CS,
  download: Download,
  edit: Edit,
  filter: Filter,
  global: Global,
  'hotel-activity': HotelActivity,
  'hotel-business': HotelBusiness,
  'hotel-credit-card': HotelCreditCard,
  'hotel-dining': HotelDining,
  'hotel-etc': HotelETC,
  'hotel-facilities': HotelFacilities,
  'hotel-fitness': HotelFitness,
  'hotel-kids': HotelKids,
  'hotel-parking': HotelParking,
  'hotel-room': HotelRoom,
  'hotel-service': HotelService,
  'hotel-valet': HotelValet,
  'hotel-wifi': HotelWifi,
  'input-delete': InputDelete,
  jeju: Jeju,
  like: Like,
  list: List,
  'list-dot': ListDot,
  'list-inactive': ListInactive,
  'loading-spinner': LoadingSpinner,
  month: Month,
  nowhere: Nowhere,
  'one-way': Oneway,
  'out-link': OutLink,
  'pin-map': PinMap,
  refresh: Refresh,
  reply: Reply,
  'round-trip': RoundTrip,
  search: Search,
  setting: Setting,
  share: Share,
  'star-single': StarSingle,
  'stepper-minus': StepperMinus,
  'stepper-plus': StepperPlus,
  'switch-arrow': SwitchArrow,
  'thumb-up': ThumbUp,
  ulleongdo: Ulleongdo,
  user: User,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, ComponentType<any>>;

type IconKey = keyof typeof ICON_MAP;
type IconProps<K extends IconKey> = ComponentProps<(typeof ICON_MAP)[K]>;
type Props<K extends IconKey> = IconProps<K> & {
  icon: K;
};

const CarmoreIcon = <K extends IconKey>(props: Props<K>) => {
  const { icon, ...rest } = props;
  const IconComponent = ICON_MAP[icon] as React.ComponentType<IconProps<K>>;
  return <IconComponent {...(rest as IconProps<K>)} />;
};

export default CarmoreIcon;
