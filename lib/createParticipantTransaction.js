
/** 
import { DEFAULT_ENDIAN } from "bytebuffer";


 * Create land Transaction
 *  @param {org.land.landsys.participant.createParticipant} participantData
 * @transaction
 * 
 * 
 * 1. Create the Participant Resource
 * 2. 1 Set the details
 * 3. Add the participant asset to the registry
 */

function    createparticipant(participantData) {
    // 1. Get the asset registry
    return getParticipantRegistry('org.land.landsys.participant.LANDSYSClient')
        .then(function(participantRegistry){
        
            // 2. Get resource factory
            var  factory = getFactory();
            var NS2='org.land.landsys.participant.';

            participantid=participantData.participantkey;

            if(participantRegistry.exists(participantid)){
                console.log("Operation Not Authorised");
          
         

             console.log("User Already exists");     
            }else{
          
                  // 3. Create the Resource instance
            
            var  newParticipant = factory.newResource(NS2,'LANDSYSClient',participantid);
   // 4. Create a new concept using the factory & set the data in it
         
            newParticipant.fname=participantData.fname;
            newParticipant.lname=participantData.lname;
            newParticipant.email=participantData.email;
 
            
               // 5. Add to registry
               return participantRegistry.add(newParticipant);
            }
   
        });
}


