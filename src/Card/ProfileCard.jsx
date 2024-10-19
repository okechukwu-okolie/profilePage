import BasicInfo from "../Component/BasicInfo";
import '../index.css'
import './ProfileCard.css'

const ProfileCard = ()=>{
    return(
        <div className="profileCards">

                <BasicInfo  image='./src/assets/man1.png'
                                    name='Mitchel Stonehead'
                                    age='32'
                                    location='Massachussette, USA'
                                    telephone='+23 123 4562 6765'/>

                <BasicInfo  image='./src/assets/man2.png'
                                    name='Yorisha Inokia'
                                    age='30'
                                    location='Tokyo, Japan'
                                    telephone='+45 126 6543 9809'/>

                <BasicInfo  image='./src/assets/female1.jpg'
                                        name='Pushsca Iscova'
                                        age='25'
                                        location='Moscow, Russia'
                                        telephone='+011 234 5463 2323'/>

                <BasicInfo  image='./src/assets/female2.jpg'
                                        name='Matilda Bretlin'
                                        age='29'
                                        location='Birminham, UK'
                                        telephone='+44 2345 1245 6667'/>

                <BasicInfo  image='./src/assets/male2.jpg'
                                        name='Jack Nickleson'
                                        age='31'
                                        location='Ontario,Canada'
                                        telephone='+45 890 7678 5455'/>

                <BasicInfo  image='./src/assets/female3.jpg'
                                        name='Ngozi Nwankwo'
                                        age='26'
                                        location='Anambra, Nigeria'
                                        telephone='+234 80 7267 6311'/>

                <BasicInfo  image='./src/assets/male1.jpg'
                                        name='Bonny Marley'
                                        age='35'
                                        location='Kingston, Jamaica'
                                        telephone='+34  566 2345 9087'/>

                <BasicInfo  image='./src/assets/female4.jpg'
                                        name='Banke Daramola'
                                        age='29'
                                        location='Osun, Nigeria'
                                        telephone='08072676311'/>
        </div>
    );
}
export default ProfileCard