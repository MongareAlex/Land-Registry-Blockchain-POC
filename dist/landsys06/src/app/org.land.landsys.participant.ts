import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.land.landsys.participant{
   export abstract class LANDSYSParticipant extends Participant {
      participantkey: string;
      fname: string;
      lname: string;
      email: string;
   }
   export class LANDSYSPersonnel extends LANDSYSParticipant {
      department: string;
   }
   export class LANDSYSClient extends LANDSYSParticipant {
   }
   export class createParticipant extends Transaction {
      participantkey: string;
      fname: string;
      lname: string;
      email: string;
   }
// }
