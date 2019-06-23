
/** 
import { DEFAULT_ENDIAN } from "bytebuffer";


 * Create land Transaction
 *  @param {org.land.landsys.landparcel.createLand} parcelData
 * @transaction
 * 
 * 
 * 1. Create the landParcel asset
 * 2. 1 Set the deedNo
 * 3. Add the landParcel asset to the registry
 */

function    createLand(parcelData) {
    // 1. Get the asset registry
    return getAssetRegistry('org.land.landsys.landparcel.parcel')
        .then(function(parcelRegistry){
        
            // 2. Get resource factory
            var  factory = getFactory();
            var  NS =  'org.land.landsys.landparcel';
            var NS2='org.land.landsys.participant';

            participantid=parcelData.newOwnerPartcipantkey;
            let participantRegistry= getParticipantRegistry('org.land.landsys.participant.LANDSYSClient');
            if(participantRegistry.exists(participantid)){

            // 3. Create the Resource instance
            var  deedno = parcelData.deedno; 
            
            var  parcel = factory.newResource(NS,'parcel',deedno);

            var ownerlshp=factory.newRelationship(NS2,'LANDSYSClient',participantid);
            parcel.rlshp=ownerlshp;
 
            
               // 4. Add to registry
               return parcelRegistry.add(parcel);
            // 5. Create a new concept using the factory & set the data in it

            // 6. Emit the event parcel created
            }else{
                console.log("Operation Not Authorised");
            }
   
        });
}


