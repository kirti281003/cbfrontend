import "./SubElement.css";
const SubElement=({title,sub})=>{
    function viewsubfunc()
    {
        window.location.href=`/getSubmission/${sub._id}`
        
    }
return(
   
    <>
      
        <div class="flexcard1 flexcardGreen">
            <div class="flexcardNumber flexcardNumberGreen">{sub.postname}</div>
            <div class="flex flexcardTitle"></div>
                    <button className="viewsubbutton1" onClick={viewsubfunc}>View Submission</button>
                </div>
           
    </>
)
}
export default SubElement