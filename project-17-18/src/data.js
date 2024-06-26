import Alto from './assets/Alto.jfif';
import WagonR from './assets/WagonR.jfif';
import Swift from './assets/Swift.jfif';


export const PRODUCTS_INFO = [
    {
        productId: 1, 
        productName: "Alto", 
        productDescription: "The Alto is a 4 seater 3 cylinder car and has length of 3445 mm, width of 1515 mm and a wheelbase of 2360 mm.", 
        productImage: Alto, 
        productPrice: "100rs"
    }, 

    {
        productId: 2, 
        productName: "Swift", 
        productDescription: "The Swift is a 5 seater 3 cylinder car and has length of 3860 mm, width of 1735 mm and a wheelbase of 2450 mm. ", 
        productImage: Swift, 
        productPrice: "500rs"
    }, 

    {
        productId: 3, 
        productName: "WagonR", 
        productDescription: "The Maruti Wagon R has 2 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 998 cc and 1197 cc while the CNG engine is 998 cc ", 
        productImage: WagonR, 
        productPrice: "300rs"
    }
];

export const BrandNames = {
    Maruti: {
        title: "Maruti", 
        description: "ComponeMaruti Suzuki India Limited is the Indian subsidiary of Japanese automaker Suzuki Motor.", 
    }, 
    
    Hyundai: {
        title: "Hyundai", 
        description: "The Hyundai Motor Company, often referred to as Hyundai Motors, and commonly known as Hyundai, is a South Korean multinational automotive manufacturer headquartered in Seoul, South Korea, ", 
    }, 

    Tata: {
        title: "Tata", 
        description: "Tata Motors Limited is an Indian multinational automotive company, headquartered in Mumbai and part of the Tata Group. The company produces cars, trucks, vans, and buses. ", 
    }, 

    Mahindra: {
        title: "Mahindra", 
        description: "Mahindra & Mahindra is an Indian automobile manufacturing company headquartered in Mumbai, Maharashtra. ", 
    }, 
};

export const CUSTOMER_DATA = {
    Raj: {
        fullName: "Raj", 
        emailAddress: "Raj@gmail.com", 
        mobileNumber: "9836482763", 
    }, 

    Amit: {
        fullName: "Amit", 
        emailAddress: "Amit@gmail.com", 
        mobileNumber: "9263872635", 
    }, 

    Aman: {
        fullName: "Aman", 
        emailAddress: "Aman@gmail.com", 
        mobileNumber: "9256842956", 
    }, 

    Ankit: {
        fullName: "Ankit", 
        emailAddress: "Ankit@gmail.com", 
        mobileNumber: "9856743672", 
    }, 
};