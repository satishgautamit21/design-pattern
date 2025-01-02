// At first we will see wrong example of DIP which violates the DIP principle.
// Here we have a class which is responsible for sending email.
// So it clearly violates the DIP.

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
// Here we have an interface which is responsible for sending email.
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