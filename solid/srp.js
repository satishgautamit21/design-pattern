/* 
    Incorrect example of SRP which violates the SRP principle.
    Here userManager is responsible for authentication, validation and creation of user profile.
    so it clearly violates the SRP.
*/
 
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