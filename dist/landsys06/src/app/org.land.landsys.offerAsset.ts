import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {LANDSYSClient} from './org.land.landsys.participant';
import {parcel} from './org.land.landsys.landparcel';
// export namespace org.land.landsys.offerAsset{
   export class offer extends Asset {
      offerID: string;
      offerstatus: OfferStatus;
      client: LANDSYSClient;
      landParcel: parcel;
   }
   export enum OfferStatus {
      ACCEPTED,
      REJECTED,
      PENDING,
   }
   export class makeOffer extends Transaction {
      offerID: string;
      parcelID: string;
   }
   export class rejectOffer extends Transaction {
      offerID: string;
   }
   export class makeOfferEvent extends Event {
      offerID: string;
      landParcel: parcel;
      buyer: LANDSYSClient;
   }
   export class rejectOfferEvent extends Event {
      offerID: string;
   }
// }
