const onClickActivity= async()=>{
const act= await getAllActivities();
act.map(a=>console.log(a.activityName))
}

<button onClick={onClickActivity}>Get All Activities</button>
<button onClick={addNewActivity}>add activity</button>
