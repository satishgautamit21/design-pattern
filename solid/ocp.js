/* 
    Incorrect example of OCP which violates the OCP principle.
    Here Customer class is responsible for getting discount based on customer type.
    Here if we want to add a new customer type then we have to change the code
    so it clearly violates the OCP.
*/

/*
type CustomerType = "Regular" | "Premium";



class Customer {

    getDiscount(customerType: CustomerType) {
        if (customerType === "Regular") return 10;
        else if (customerType === "Premium") return 20;
        else return 10;

    }

}

*/


/* 
    Correct example of OCP which follows the OCP principle.
    Here Customer interface is responsible for getting discount based on customer type.
    Here if we want to add a new customer type then we don't have to change the code
    so it follows the OCP.
*/

interface Customer {
    getDiscount(): number;
}

class RegularCustomer implements Customer {
    getDiscount() {
        return 10;
    }
}

class PremiumCustomer implements Customer {
    getDiscount() {
        return 20;
    }
}

class CustomerService {
    getDiscount(customer: Customer) {
        return customer.getDiscount();
    }
}

const customerService = new CustomerService();
const customer = new RegularCustomer();
console.log(customerService.getDiscount(customer));