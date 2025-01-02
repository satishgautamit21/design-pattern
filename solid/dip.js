// At first we will see wrong example of DIP which violates the DIP principle.
// DIP says a high-level module should not depend on a low-level module. both should depend on abstractions.
// So it clearly violates the DIP. Here it is tightly coupled.

/*
class EmailSender {
    sendEmail() {
        // Email sending logic
    }
}

class NotificationService {
    sendNotification() {
        const emailSender = new EmailSender();
        emailSender.sendEmail();
    }
}

*/

// Now we will see correct example of DIP which follows the DIP principle.
// Here in this example NotificationService is a high-level module which depends on EmailSender which is a low-level module.
// High-level module should not depend on low-level module. 
// So it follows the DIP.

interface EmailSender {
    sendEmail(): void;
}

class EmailSenderImpl implements EmailSender {
    sendEmail() {
        // Email sending logic
    }
}

class NotificationService {
    sendNotification() {
        const emailSender = new EmailSenderImpl();
        emailSender.sendEmail();
    }
}