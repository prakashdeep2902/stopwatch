// Global  variables
const time_el=document.querySelector('.watch .time');
const star_btn=document.getElementById('start');
const stop_btn=document.getElementById('stop');
const reset_btn=document.getElementById('reset');


var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;

//  introduce eventListner  
star_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);


function start()
{
   timer=true;
   stopwatch();

}
function stop()
{
    timer=false;
}

function reset (){
   timer=false;
   hr=0;
   min=0;
   sec=0;
   count=0;
   document.getElementById('hr').innerHTML=hr+"0:";
   document.getElementById('min').innerHTML=min+"0:";
   document.getElementById('sec').innerHTML=sec+"0:";
   document.getElementById('count').innerHTML=count+"0";
}
function stopwatch()
{
    if(timer==true)
    {
        count++;
        if(count==100)
        {
            sec=sec+1;
            count=0;
           
          
        }
        if(sec==60)
        {
            min=min+1;
            sec=0;
        }
        if(min==60)
        {
            hr=hr+1;
            min=0;
            sec=0;
        }
        var hrString=hr;
        var minString=min;
        var secString=sec;
        var countString=count;
        if(hr<10)
        {
            hrString='0'+hrString
        }
        if(min<10)
        {
            minString='0'+minString
        }
        if(sec<10)
        {
            secString='0'+secString
        }
        if(count<10)
        {
            countString='0'+countString
        }
     
   
       document.getElementById('hr').innerHTML=hrString+":";
       document.getElementById('min').innerHTML= minString+":";
       document.getElementById('sec').innerHTML=secString+":";
       document.getElementById('count').innerHTML=countString;
      
        setTimeout(() => {
            stopwatch();
        }, 10);
       
    }
   
}