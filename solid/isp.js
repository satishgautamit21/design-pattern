/* 
    Incorrect example of ISP which violates the ISP principle.
    ISP say we should not force a class to implement an interface that it doesn't use.
    So it clearly violates the ISP.
*/


interface Worker { 
    work(): void; 
    eat(): void; 
    sleep(): void; 
} 
  
    
  
class Developer implements Worker { 
    work() { 
      console.log("Writing code..."); 
    } 
  
    eat() { 
      console.log("Eating lunch..."); 
    } 
  
    sleep() { 
      console.log("Sleeping..."); 
    } 
} 
    
class Robot implements Worker { 
    work() { 
      console.log("Building products..."); 
    } 
  
    eat() { 
      throw new Error("Robots don't eat"); 
    } 
  
    sleep() { 
      throw new Error("Robots don't sleep"); 
    } 
}

