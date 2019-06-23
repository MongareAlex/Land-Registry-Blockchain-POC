import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {LANDSYSClient} from './org.land.landsys.participant';
// export namespace org.land.landsys.landparcel{
   export class parcel extends Asset {
      deedno: string;
      owner: LANDSYSClient;
      bidstatus: Bid;
   }
   export enum Bid {
      OPEN,
      CLOSED,
   }
   export class openBid extends Transaction {
      deedno: string;
   }
   export class closeBid extends Transaction {
      deedno: string;
   }
   export class openBidEvent extends Event {
      deedno: string;
      bidstatus: Bid;
   }
   export class transferLand extends Transaction {
      deedno: string;
      newOwnerPartcipantkey: string;
   }
   export class createLand extends Transaction {
      deedno: string;
      newOwnerPartcipantkey: string;
   }
// }
