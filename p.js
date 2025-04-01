function rollnumber(num,time,nextroll){
    setTimeout(
        () => {
        console.log("Roll.no.is", num);
        if(nextroll)nextroll();
    }, time)

}
rollnumber(121313,1000,()=>{
    rollnumber(12414,2000,()=>{
        rollnumber(151515,3000,()=>{
            rollnumber(171771,4000);
        });
    })

});