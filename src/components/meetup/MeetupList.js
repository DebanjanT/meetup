import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <div>
      {props.meetupdata.map((meetup) => (
        <MeetupItem
          key={meetup.title}
          image={meetup.image}
          title={meetup.title}
          description={meetup.decription}
          address={meetup.address}
        />
      ))}
    </div>
  );
}

export default MeetupList;
