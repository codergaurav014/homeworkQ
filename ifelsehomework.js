/*
1. In a school there is below system:
    more than or equal to 90 --- grade A
    more than or equal to 75 and less than 90 --- grade B
    more than or equal to 50 and less than 75 --- grade C
    less than 50 ---- grade F.
    Rahul scores 53, Rohit scores 90.5, Kohli scores 49.5, saurabh scores 75 ... what are their grades.
 ** Rahul gets grade ... **
 ** Rohit gets .....
2. Google map:
  There are 3 modes of transport --- plane, bus, train.
  mumbai to delhi --- delhi akshardham
  A. from delhi airport you will have to take uber to mayur vihar then walk from mayur vihar to akshardham
  B. from delhi bus stand, take an auto rickshaw to go to seelampur metro station.
            from seelamput metro station take metro to akshardham station. from akshardham station walk to akshardham
  C. from delhi railway station, walk to the nearest metro station. Take metro to cannaught place station.
            from there take rickshaw to akshardham. Walk to akshardham
 */



            transport = ['plane', 'bus', 'train'];

            choice1 = 'Take autorickshaw to seelampur metro.'
            choice2 = 'Take metro to akshardham station.'
            choice3 = 'Walk to akshardham.'

            choice4 = 'take uber to mayur vihar.'
            choice5 = 'walk from mayur vihar to akshardham.'

            choice6 = 'walk to the nearest metro station.'
            choice7 = 'Take metro to cannaught place station.'
            choice8 = 'take rickshaw to akshardham.'
            choice9 = 'Walk to akshardham.'
            
            route = 'Take metro to cannaught place station.';
            
            option = 'plane';
            
            if (option == transport[2])
            {
                route = choice1 + choice2 + choice3;
            }

            // ifelse(option== transport[0])
            // {
            //     route = choice4 + choice5;
            // }
           
            else
            {
                route = 'Cannot go';
            }

            if (option== transport[0]) 
            {route = choice4 + choice5
                
            } else {route = 'can not go'
                
            }

            if (option == transport[2]) {
                route = choice6 + choice7 + choice8 + choice9
            } else {
                route = 'can not go'
            }
            

            
            
            console.log(route);


