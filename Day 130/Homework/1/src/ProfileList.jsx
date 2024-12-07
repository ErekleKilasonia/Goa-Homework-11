import ProfileCard from "./ProfileCard";
export default function ProfileList(props){
    const arr = props.profiles;
    return (
        arr.map((i)=>(
            <ProfileCard name={i.name} age={i.age} occupation={i.occupation}/>
        ))
    );
}