
/** 
import { DEFAULT_ENDIAN } from "bytebuffer";


 * Create land Transaction
 *  @param {org.land.landsys.landparcel.transferLand} parcelData
 * @transaction
 * 
 * 
 * 1. Retrieve a land parcel Asset
 * 2. 1 Set the deedNo
 * 3. Add the landParcel asset to the registry
 */

function    transferLand(parcelData) {
    // 1. Get the asset registry
    return getAssetRegistry('org.land.landsys.landparcel.parcel')
        .then(function(parcelRegistry){
            
            parcelId=parcelData.deedno;

            let participantRegistry= getParticipantRegistry('org.land.landsys.participant.LANDSYSClient');
            participantid=parcelData.newOwnerPartcipantkey;

            if(participantRegistry.exists(participantid)){

                return parcelRegistry.get(parcelId)
                .then(function(parcel) {
                    parcel.owner.participantkey=participantid;
                    return parcelRegistry.update(parcel);
                });

            }else{
                console.log("Operation Not Authorised");
            }
        });
    }



        /** 
            
            var  NS =  'org.land.landsys.landparcel.parcel';
            var NS2='org.land.landsys.participant';

            let participantRegistry= getParticipantRegistry('org.land.landsys.participant.LANDSYSClient');
            

            if(participantRegistry.exists(participantid)){

            var factory=getfactory();

            parcel.bidstatus=parcelData.bidstatus;

            var rlshp=factory.newRelationship(NS2,'LANDSYSClient',participantid);
            parcel.rlshp=rlshp;

               // 4. Add to registry
               return parcelRegistry.update(parcel);
            }else{
                console.log("participant does not exist");
            }
        });
        
}



 */