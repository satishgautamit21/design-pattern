// At first we will see wrong example of SRP which violates the SRP principle.
// Here we have a class which is responsible for user management.
// So it clearly violates the SRP. SRP say a class should be responsible for a single task only.
 
/*

class UserManager { 
    constructor(authService, db) { 
      this.authService = authService; 
      this.db = db; 
    } 
   
    authenticate(username, password) { 
      // Authentication logic using authService 
    } 
   
    validateUserData(data) { 
      // Data validation logic 
    } 
   
    createUserProfile(data) { 
      // Profile creation logic using db 
    } 
   
    getUserProfile(userId) { 
      // Profile retrieval logic using db 
    } 
  }

  */

 
/* 
    Correct example of SRP which follows the SRP principle.
    Here each class is responsible for a specific task and and don't depend on other classes.
*/

class AuthenticationService { 
    authenticate(username, password) { 
      // Authentication logic 
    } 
} 
   
class UserDataValidator { 
    validate(data) { 
      // Data validation logic 
    } 
} 
   
class UserDatabase { 
    createUserProfile(data) { 
      // Profile creation logic 
    } 
   
    getUserProfile(userId) { 
      // Profile retrieval logic 
    } 
} 