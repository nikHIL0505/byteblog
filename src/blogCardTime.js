import React from 'react';

function Time(props) {
   let fullTime = props.time.split("-");
   let  fulldate = fullTime.toString().substring(0,10);
    let year   = fulldate.substring(0,4);
    let   date = fulldate.substring(8,10)
     let month = fulldate.substring(5,7);
     switch (month){ 
         case '01': 
            month="Jan"
            break;
         case '02':
            month="Feb"
            break;
         case '03': 
            month="Mar"
            break;
         case '04':
            month="Apr"
            break;
         case '05': 
            month="May"
            break;
         case '06':
            month="Jun"
            break;
         case '07': 
            month="Jul"
            break;
         case '08':
            month="Aug"
            break;
         case '09': 
            month="Sep"
            break;
         case '10':
            month="Oct"
            break;
         case '11': 
            month="Nov"
            break;
         default :
            month="Dec"
         }
   return(
       <p style={{color:' rgb(126, 123, 123)'}}>{month + " " + date + "," + " " + year}</p>
   ) 
}
export default Time;