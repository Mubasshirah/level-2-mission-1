{
    // generic type through interface
    interface Developer<T,X=null>{
        // optional param er khetre default value null dibo
        name:string,
        age:number,
        job:{
            title:string,
            computer:boolean
        },
        smartWatch: T,
        bike?:X

    };
    type SmartWatch={
        model:string,
        speedAlert:boolean
    }
    type Bike={
        model:string,
        year:number
    }
    // cleaner code er jnno <> er vitor object na likhe baire akta type banaye  sta <> er vitor likhte hbe
    const person1:Developer<SmartWatch, null>={
        name:'adi',
        age:30,
        job:{
            title:'senior',
            computer:true
        },
        smartWatch:{
            model:'er4',
            speedAlert:true
        }
    }
    const person2:Developer<{model:string,
        speedAlert:boolean,
        heartCheck:boolean
    },Bike>={
        name:'adi',
        age:30,
        job:{
            title:'senior',
            computer:true
        },
        smartWatch:{
            model:'er4',
            speedAlert:true,
            heartCheck:false 
        },
        bike:{
            model:'hhgh',
            year:1995
        }
    }
     
}