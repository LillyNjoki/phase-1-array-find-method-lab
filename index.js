function superbowlWin(record){

    let winRecord = record.find((winRecord)=>{

        if (winRecord.result==='W'){
            return true;
        }
    })
        if (winRecord){
            return winRecord.year
        }
}


