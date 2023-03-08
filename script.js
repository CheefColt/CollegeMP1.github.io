
document.getElementById("done").onclick=function(){

    var days = document.getElementById("day-box").value;
    var monthInAccurate = document.getElementById("month-box").value;  
    var monthAccurate = monthInAccurate.toLowerCase();

    // monthInAccurate is the value of months in not in all 'low-caps' form
    // monthAccurate is just the value of months in 'all caps' form

    let sign;

        if(monthAccurate == 'january')
        {
            if(days<20)
            {
                sign = 'Capricorn';
            }
            else
            {
                sign = 'Aquarius'
            }
            
        }

        else if(monthAccurate == 'february')
        {
            if(days<20)
            {
                sign = 'Aquarius';
            }
            else
            {
                sign = 'Pisces'
            }

        }

        else if(monthAccurate == 'febuary')
        {
            if(days<19)
            {
                sign = 'Aquarius';
            }
            else
            {
                sign = 'Pisces'
            }

        }
        
        else if(monthAccurate == 'march')
        {
            if(days<21)
            {
                sign = 'Pisces';
            }
            else
            {
                sign = 'Aries'
            }

        } 
        
        else if(monthAccurate == 'april')
        {
            if(days<20)
            {
                sign = 'Aries';
            }
            else
            {
                sign = 'Taurus'
            }

        }
        
        else if(monthAccurate == 'may')
        {
            if(days<21)
            {
                sign = 'Taurus';
            }
            else
            {
                sign = 'Gemini'
            }

        } 
        
        else if(monthAccurate == 'june')
        {
            if(days<21)
            {
                sign = 'Gemeni';
            }
            else
            {
                sign = 'Cancer'
            }

        } 
        
        else if(monthAccurate == 'july')
        {
            if(days<23)
            {
                sign = 'Cancer';
            }
            else
            {
                sign = 'Leo'
            }

        } 
        
        else if(monthAccurate == 'august')
        {
            if(days<23)
            {
                sign = 'Leo';
            }
            else
            {
                sign = 'Virgo'
            }

        } 
        
        else if(monthAccurate == 'september')
        {
            if(days<23)
            {
                sign = 'Virgo';
            }
            else
            {
                sign = 'Libra'
            }

        }
        
        else if(monthAccurate == 'october')
        {
            if(days<23)
            {
                sign = 'Libra';
            }
            else
            {
                sign = 'Scorpio'
            }

        }
        
        else if(monthAccurate == 'november')
        {
            if(days<22)
            {
                sign = 'Scorpio';
            }
            else
            {
                sign = 'Sagittarius'
            }

        }

        else if(monthAccurate == 'december')
        {
            if(days<22)
            {
                sign = 'Sagittarius';
            }
            else
            {
                sign = 'Capricorn'
            }

        }
 

   document.getElementById("Output-text").innerHTML = "Your Sign is : " + sign + "✨"; 


}