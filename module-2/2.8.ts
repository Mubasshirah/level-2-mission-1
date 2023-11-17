{
    // asynchronous behaviour of javascript ,callback,async await,promise
    // js synchronous behave kore
    // *js code jokhon browser e run kore tokhon sta akta machine language e convert hoa.tarpor browser sta bujhte pare.machine language e convert houar jnno browser er vitor akta mechanism thake.
    // browser er vitor duita jinis thake.
    //  1. bowser er runtime environment (document.getelementbyid ,window.setTimeOUt() egula ashe runtime env thk ) 2. js engine(chrome->v8)(v8 sobchey powerfull .ata js ke druto machine language conver korte pare)
    // engine er vitor call stack thake.call stack e jta last e ase seta first e execute hoa.
    // first e akta main function run hoa.erpor baki gulo run hoa.(like first console.log)
    // js main function ke first e call stacke call korbe.
    // erpor js jdi dekhe amn kono akta code jta execute korte time lagbe,tahole se onno sob kisu run kora bondho kore oi code age execute kore.even user browser er kothau click o korte  parbena.Ait hoilo js er blocking behaviour.
    // kisu builtin fn (setTimeOut()) use kore js er asynchronous behave korano jay.kothau jodi atkay jay otay bose na thk next er gulo execution kore fela.atai asychronous behaviour.
    // js jetay atakay setake web api ta transfer kore dibe. sekhane run ses houar por sei function ke call back queue(js er engine er akta part) e pathabe. 
    // erpor event loop jdi dekhe call stack e kisu nai tahole call back queue te jegula asbe seta akta akta kore execute korbe. 
    // evabei js single threaded language houar por o asynchrnous behave korte pare tar kisu assitant er jnno. 
    // promise: promise use hoa konoakta asynchronous operation er result ke handle korar   jnno.


    // promise
    // custom data make kore async await dia show kora and api thk data call kore async await dia show korano
    // async await manei promise return kore
    const createPromise=():Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data:string='something';
            // /string er jaygay boolean or object o kora jabe
            if(data){
                resolve(data);
            }
            else{
                reject('failed to load data')
            }
        })
    }
    const showData=async():Promise<String>=>{
        const data:string=await createPromise();
        console.log(data);
        return data
    }
    showData()

    // api call from json placeholder
    type todo={
        id:number,
        userId:number,
        title:string,
        completed:boolean
    }
      const getTodo=async():Promise<todo>=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data=await res.json();
        console.log(data);
        return data;
      }
      getTodo()
}