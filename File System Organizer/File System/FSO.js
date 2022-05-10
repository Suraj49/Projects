 
 // We will be creating a File System Organizer//
 //Features of the Project -
 //If you have numerous Files in a folder and they are not Properly arranged
 //So you can use this tool to arrange them in specific directory according to their extension
 // like text files will go into text File Folder .exe files will go into application folder and so on
 // so at the end you will have a arranged set of files in specific folders

  
 
 let input = process.argv.slice(2)

 let command = input[0]

//  console.log(command)


 switch(command){
     case 'tree' :
         console.log('Tree Implemented')
         break;

     case 'organize' :
        // console.log('Organize Implemented')  
        organizeFn(input[1]) 
         break;
         
     case 'help' :
         //console.log('Help Implemented')
         helpFn()
         break;

     default:
         console.log('Please Enter A Valid Command [tree,organize,help]')    
 } 


 function helpFn(){
     console.log(`List Of all the commands->
                                1)Tree - node FOS.js tree <dirPath>
                                2)Organize - node FOS.js organize <dirPath>
                                3)Help - node FOS.js help`)
 }

 function treeFn(){

}

function organizeFn(dirPath){

    console.log(dirPath)
}

