function Hello () {
    return new Promise ((resolve) =>{
        setTimeout (()=>{
            alert('سلام به همه ، به سایت آمازون خوش آمدید');
            resolve();
        } , 4000 );
    });
}
function youlikeit () {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            alert('امیدوارم از این سایتی که طراحی کردم خوشتون بیاد');
            resolve();
        } , 4000 );
    });
}
Hello()
    .then ( () => youlikeit () )
.catch();