export default function ProfileCard({name,age,occupation})
{
    return(
        <div key={name}>
            <h3>{name}'s Profile</h3>
            <p>Age:{age}</p>
            <p>occupation:{occupation}</p>
        </div>
    )
}